'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('./../config/index')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    Username: DataTypes.STRING,
    Password: DataTypes.STRING,
    Role: DataTypes.STRING,
    Phone: DataTypes.STRING,
    Email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });

  // เข้ารหัส Password
  User.encryptPassword = async function (password) {
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);
    return hashPassword;
  }

  // เช็ค Password
  User.prototype.checkPassword = async (password, hashPassword) => {
    const isValid = await bcrypt.compare(password, hashPassword);
    return isValid;
  };

  // สร้าง Token
  User.prototype.createToken = async (UserId, username,role) => {
    const token = await jwt.sign(
      {
        UserId: UserId,
        username: username,
        role:role,
      },
      config.SECRET_KEY,
      { expiresIn: '1h' }
    );

    return token;
  };
  return User;
};