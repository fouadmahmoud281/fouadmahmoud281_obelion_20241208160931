const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('OBOOK', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class OrderBook extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      field1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      field2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
      field3: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
      },
    }, {
      sequelize,
      modelName: 'OrderBook',
      timestamps: false,
    });
  }
}

OrderBook.init(sequelize);

module.exports = OrderBook;