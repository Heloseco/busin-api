'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Seat.init({
    SeatAmount: DataTypes.INTEGER,
    SeatTotal: DataTypes.STRING,
    Availble: DataTypes.STRING,
    Booked: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};