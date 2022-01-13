'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Bus.init({
    SeatSetId: DataTypes.INTEGER,
    BusName: DataTypes.STRING,
    BusInfo: DataTypes.TEXT,
    ScheduleId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Bus',
  });
  return Bus;
};