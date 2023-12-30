const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    email: { type: DataTypes.STRING, unique: true },
    password: { type: DataTypes.STRING, unique: false },
    role: { type: DataTypes.STRING, defaultValue: "USER" },
})

const Package = sequelize.define('package', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    startPlace: { type: DataTypes.STRING, allowNull: true },
    endPlace: { type: DataTypes.STRING, allowNull: true },
    weight: { type: DataTypes.DECIMAL, allowNull: false },
    length: { type: DataTypes.DECIMAL, allowNull: false },
    width: { type: DataTypes.DECIMAL, allowNull: false },
    status: { type: DataTypes.INTEGER, allowNull: false },
    // 0 - init
    // 1 - закреплена машина
    // 2 - в процессе
    // 3 - доставлена
})

const Car = sequelize.define('car', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    startPlace: { type: DataTypes.STRING, allowNull: true },
    number: { type: DataTypes.INTEGER, allowNull: true },
    endPlace: { type: DataTypes.STRING, allowNull: true },
    trunkVolume: { type: DataTypes.DECIMAL, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: true },
})

const PackageCar = sequelize.define('packageCar', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    carId: { type: DataTypes.INTEGER, allowNull: false },
    packageId: { type: DataTypes.INTEGER, allowNull: false }
})

const Waybill = sequelize.define('waybill', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    date: { type: DataTypes.DATE, allowNull: false },
    status: { type: DataTypes.STRING, allowNull: true },
    number: { type: DataTypes.INTEGER, allowNull: true },
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

User.hasMany(Package);
Package.belongsTo(User);

Category.hasMany(Product);
Product.belongsTo(Category);

Provider.hasOne(Product);
Product.belongsTo(Provider);

Product.hasMany(Order);
Order.belongsTo(Product);

PackageCar.hasMany(Waybill);
Waybill.belongsTo(PackageCar);


Order.belongsToMany(Consolidation, { through: OrderConsolidation });
Consolidation.belongsToMany(Order, { through: OrderConsolidation });

Car.belongsToMany(Package, { through: PackageCar, as: 'cars' });
Package.belongsToMany(Car, { through: PackageCar, as: 'packages' });

module.exports = {
    User,
    Car,
    PackageCar,
    Waybill,
    Package,
    Consolidation,
    Order,
    Product,
    Advice,
    Provider,
    Category,
    OrderConsolidation
};
