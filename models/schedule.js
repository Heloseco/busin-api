'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Schedule.init({
    TourName: DataTypes.STRING,
    Day: DataTypes.STRING,
    Month: DataTypes.STRING,
    Year: DataTypes.STRING,
    TravelTo: DataTypes.STRING,
    BackAt: DataTypes.STRING,
    BusId:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};