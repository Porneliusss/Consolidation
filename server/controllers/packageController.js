const { Package, PackageCar, Waybill, Car } = require('../models/models');
const ApiError = require('../error/ApiError');

class PackageController {
    async create(req, res) {
        const { startPlace, endPlace, weight, length, width, userId } = req.body;
        const status = 0;
        const pack = await Package.create({ startPlace, endPlace, weight, length, width, status, userId });
        return res.json(pack);
    }

    async getInit(req, res) {
        const packages = await Package.findAll({
            where: { status: '0' }
        });
        return res.json(packages);
    }

    async connectToCar(req, res) {
        const { carId, packId } = req.body;
        const carPack = await PackageCar.create({ carId: carId, packageId: packId })

        const pack = await Package.findByPk(packId)
        pack.status = 1
        await pack.save()

        return res.json(carPack)
    }

    async getAll(req, res) {
        const packages = await Package.findAll();
        return res.json(packages);
    }

    async getByUserId(req, res) {
        const { id } = req.params;
        const packs = await Package.findAll({ where: { userId: id } });
        return res.json(packs);
    }

    async delete(req, res) {
        const { id } = req.params;
        await Package.destroy({ where: { id } });
        return res.json({ message: 'Посылка успешно удалена' });
    }


    async getAllConnectedCar(req, res) {
        const { id } = req.params;
        const packageCars = await PackageCar.findAll({
            where: { carId: id },
        });

        const packageIds = packageCars.map((item) => item.packageId);

        const packages = await Package.findAll({
            where: { id: packageIds },
        });

        const connectedPackageCars = await PackageCar.findAll({
            where: { packageId: packages.map((item) => item.id) },
        });

        return res.json({ packages, packageCars: connectedPackageCars });
    }

    async createWayBill(req, res) {
        const { date, status, packageCarId, number } = req.body
        const wayBill = await Waybill.create({ date, status, packageCarId, number })
        return res.json(wayBill);
    }

    async updStatus(req, res) {
        const { id } = req.params;
        const { status } = req.body;

        const pack = await Package.findByPk(id)

        pack.status = status
        await pack.save()

        return res.json({ message: 'Package upd successfully' });
    }
}

module.exports = new PackageController();