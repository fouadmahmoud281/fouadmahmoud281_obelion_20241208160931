const { Model, DataTypes, Sequelize } = require('sequelize');

const sequelize = new Sequelize('OBOOK', 'root', 'root', {
  host: 'db',
  port: 3306,
  dialect: 'mysql'
});

class File extends Model {
  static init(sequelize) {
    super.init({
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      senderCode: {
        type: DataTypes.STRING,
        allowNull: false
      },
      fileName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          is: /^[\w-]+\.txt$/
        }
      }
    }, {
      sequelize,
      modelName: 'file',
      timestamps: false,
      tableName: 'file'
    });
  }
}

File.init(sequelize);

module.exports = File;