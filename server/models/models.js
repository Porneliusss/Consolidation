const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, unique: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Consolidation = sequelize.define('consolidation', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    endPlace: { type: DataTypes.STRING, allowNull: true },
    status: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.DATE, allowNull: false },
})

const Order = sequelize.define('order', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    supply: { type: DataTypes.BOOLEAN, allowNull: true },
    price: { type: DataTypes.INTEGER, allowNull: false },
    quantity: { type: DataTypes.INTEGER, allowNull: false },
    endPlace: { type: DataTypes.STRING, allowNull: false },
    startDate: { type: DataTypes.DATE, allowNull: false },
})

const Product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    price: { type: DataTypes.INTEGER, allowNull: false },
    img: { type: DataTypes.STRING, allowNull: false },
})

const Advice = sequelize.define('advice', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    sureName: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    body: { type: DataTypes.STRING, allowNull: false },
})

const Provider = sequelize.define('provider', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
    rating: { type: DataTypes.INTEGER, allowNull: false },
});

const Category = sequelize.define('category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
});

const OrderConsolidation = sequelize.define('orderConsolidation', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    consolidationId: { type: DataTypes.INTEGER, allowNull: false },
    orderId: { type: DataTypes.INTEGER, allowNull: false }
});

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Advice);
Advice.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

Provider.hasOne(Product);
Product.belongsTo(Provider);

Product.hasMany(Order);
Order.belongsTo(Product);

Order.belongsToMany(Consolidation, { through: OrderConsolidation });
Consolidation.belongsToMany(Order, { through: OrderConsolidation });

module.exports = {
    User,
    Consolidation,
    Order,
    Product,
    Advice,
    Provider,
    Category,
    OrderConsolidation
};
