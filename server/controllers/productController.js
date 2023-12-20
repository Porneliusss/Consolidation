const { Product, Provider, Category } = require('../models/models');
const ApiError = require('../error/ApiError');
const uuid = require('uuid')
const path = require('path');

class ProductController {
    async create(req, res, next) {
        const { name, price, categoryId, providerId } = req.body;
        const { img } = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))

        const product = await Product.create({ name, price, img: fileName, categoryId, providerId });

        return res.json(product);
    }

    async getAll(req, res, next) {
        try {
            const products = await Product.findAll({
                include: [
                    { model: Provider, as: 'provider' },
                    { model: Category, as: 'category' }
                ]
            });

            return res.json(products);
        } catch (error) {
            return next(ApiError.internalServerError(error.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const { id } = req.params;

            const product = await Product.findOne({
                where: { id },
                include: [
                    { model: Provider, as: 'provider' },
                    { model: Category, as: 'category' }
                ]
            });

            if (!product) {
                throw ApiError.notFound(`Product with id ${id} not found`);
            }

            return res.json(product);
        } catch (error) {
            return next(error);
        }
    }
}

module.exports = new ProductController();