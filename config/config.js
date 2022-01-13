const config = require("./index");

module.exports = {
  development: {
    username: config.USERNAME_DEV,
    password: config.PASSWORD_DEV,
    database: config.DATABASE_DEV,
    host: config.HOST_DEV,
    dialect: config.DIALECT_DEV,
  },
  test: {
    username: config.USERNAME_TEST,
    password: config.PASSWORD_TEST,
    database: config.DATABASE_TEST,
    host: config.HOST_TEST,
    dialect: config.DIALECT_TEST,
  },
  production: {
    username: config.USERNAME_PROD,
    password: config.PASSWORD_PROD,
    database: config.DATABASE_PROD,
    host: config.HOST_PROD,
    dialect: config.DIALECT_PROD,
  },
};
