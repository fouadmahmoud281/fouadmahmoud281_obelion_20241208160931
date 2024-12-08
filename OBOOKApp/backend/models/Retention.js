const { Sequelize, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize('OBOOK', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  logging: false,
});

class Retention extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      retentionPeriod: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        },
      },
    }, {
      sequelize,
      modelName: 'Retention',
      tableName: 'retention',
      timestamps: false,
    });
  }
}

Retention.init(sequelize);

module.exports = Retention;