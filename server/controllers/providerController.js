const { Provider } = require('../models/models')
const ApiError = require('../error/ApiError')

class ProviderController {
    async create(req, res) {
        const { name } = req.body
        const provider = await Provider.create({ name, rating: 0})
        return res.json(provider)
    }

    async getAll(req, res) {
        const providers = await Provider.findAll()
        return res.json(providers)
    }

    async delete(req, res) {
        const { id } = req.params
        await Provider.destroy({ where: { id } })
        return res.json({ message: 'Поставщик успешно удален' })
    }
}

module.exports = new ProviderController()