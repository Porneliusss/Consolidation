const { Car } = require('../models/models');
const ApiError = require('../error/ApiError');
const { Op } = require('sequelize');

class CarController {
    async create(req, res) {
        const { startPlace, endPlace, trunkVolume } = req.body;
        const status = 0;
        const car = await Car.create({ startPlace, endPlace, status, trunkVolume });
        return res.json(car);
    }

    async getAll(req, res) {
        const cars = await Car.findAll();
        return res.json(cars);
    }

    async getByNonZeroStatus(req, res) {
        const cars = await Car.findAll({ where: { status: { [Op.not]: '0' } } });
        return res.json(cars);
    }

    async delete(req, res) {
        const { id } = req.params;
        await Car.destroy({ where: { id } });
        return res.json({ message: 'Машина успешно удалена' });
    }
}

module.exports = new CarController();