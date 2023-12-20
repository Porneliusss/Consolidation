const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Advice, Order, Provider, Product } = require('../models/models')
const { model } = require('../db')

const generateJwt = (id, email, role) => {
    return jwt.sign(
        { id, email, role },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    )
}

class UserController {
    async registration(req, res, next) {
        const { email, password, role } = req.body
        if (!email || !password) {
            return next(ApiError.badRequest('Некорректный email или password'))
        }
        const candidate = await User.findOne({ where: { email } })
        if (candidate) {
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({ email, role, password: hashPassword })
        const token = generateJwt(user.id, user.email, user.role)

        return res.json({ token })
    }
    async login(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if (!comparePassword) {
            return next(ApiError.internal('Указан неверный парль'))
        }
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({ token })
    }
    async ceck(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({ token })
    }

    async createOrder(req, res, next) {
        const { name, price, quantity, endPlace, startDate, userId, productId } = req.body
        const order = await Order.create({ name, price, quantity, endPlace, startDate, userId, productId })
        return res.json(order)
    }

    async delOrder(req, res, next) {
        const { id } = req.params
        await Order.destroy({ where: { id } })
        return res.json({ message: 'Order успешно удалена' })
    }

    async createAdvice(req, res, next) {
        const { name, sureName, email, body, userId } = req.body
        const advice = await Advice.create({ name, sureName, email, body, userId })
        return res.json(advice)
    }

    async getAdviceByUserId(req, res, next) {
        const { userId } = req.params
        const advice = await Advice.findAll({ where: { userId } })
        return res.json(advice)
    }

    async delAdviceById(req, res, next) {
        const { id } = req.params
        await Advice.destroy({ where: { id } })
        return res.json({ message: "noice" })
    }

    async getAllAdvice(req, res, next) {
        const advice = await Advice.findAll()
        return res.json(advice)
    }

    async getUserDataById(req, res) {
        const { id } = req.params
        const userData = await User.findOne({
            where: { id },
            include: [
                {
                    model: Order, as: 'orders', include: [
                        {
                            model: Product, as: 'product', include: [
                                { model: Provider, as: 'provider' }
                            ]
                        }
                    ]
                },
            ]
        });

        return res.json(userData);
    };
}

module.exports = new UserController()