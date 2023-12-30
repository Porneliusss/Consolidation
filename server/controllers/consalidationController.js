const { Consolidation, Order, OrderConsolidation, Waybill, PackageCar, Car, Package } = require('../models/models')
const ApiError = require('../error/ApiError');
const { Sequelize } = require('../db');

class ConsolidationController {
    async create(req, res) {
        const { endPlace, status, startDate } = req.body;

        const orders = await Order.findAll({
            where: {
                endPlace,
                supply: null
            },
        });


        if (orders.length > 0) {
            const consolidation = await Consolidation.create({ endPlace, status, startDate });

            for (const order of orders) {
                order.supply = true;
                await order.save();

                await OrderConsolidation.create({
                    consolidationId: consolidation.id,
                    orderId: order.id
                });
            }

            return res.json(consolidation);
        }

        return res.json({ message: 'order lenght 0' });
    }


    async getAll(req, res) {
        const consolidations = await Consolidation.findAll({
            include: Order,
        });

        return res.json(consolidations);
    }

    async getAddresses(req, res) {
        const addresses = await Order.findAll({
            attributes: ['endPlace'],
            group: ['endPlace']
        });

        return res.json(addresses);
    }

    async delete(req, res) {
        const { id } = req.params;
        const consolidation = await Consolidation.findByPk(id);

        if (!consolidation) {
            throw ApiError.notFound(`Consolidation with id ${id} not found`);
        }

        await OrderConsolidation.destroy({
            where: { consolidationId: id },
        });

        await consolidation.destroy();

        return res.json({ message: 'Consolidation deleted successfully' });
    }

    async updStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;

        const consolidation = await Consolidation.findByPk(id)

        consolidation.status = status
        await consolidation.save()

        return res.json({ message: 'Consolidation upd successfully' });
    }

    async getStatusByOrderId(req, res) {
        const { id } = req.params;

        const orderConsolid = await OrderConsolidation.findOne({
            where: { orderId: id }
        })

        const consolidation = await Consolidation.findOne({
            where: { id: orderConsolid.consolidationId }
        })

        return res.json(consolidation);
    }

    async getAllBillsPackCar(req, res) {
        const wayBill = await Waybill.findAll({
            include: [{model: PackageCar}]
        })


        const cars = await Car.findAll({
            where: { id: wayBill.map((item) => item.packageCar.carId) },
        });

        const packs = await Package.findAll({
            where: { id: wayBill.map((item) => item.packageCar.packageId) },
        });

        return res.json({wayBill, cars, packs})
    }

}


module.exports = new ConsolidationController()