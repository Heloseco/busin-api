const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    SECRET_KEY: process.env.SECRET_KEY,

    USERNAME_DEV: process.env.USERNAME_DEV,
    PASSWORD_DEV: process.env.PASSWORD_DEV,
    DATABASE_DEV: process.env.DATABASE_DEV,
    HOST_DEV: process.env.HOST_DEV,
    DIALECT_DEV: process.env.DIALECT_DEV,

    USERNAME_TEST: process.env.USERNAME_TEST,
    PASSWORD_TEST: process.env.PASSWORD_TEST,
    DATABASE_TEST: process.env.DATABASE_TEST,
    HOST_TEST: process.env.HOST_TEST,
    DIALECT_TEST: process.env.DIALECT_TEST,

    USERNAME_PROD: process.env.USERNAME_PROD,
    PASSWORD_PROD: process.env.PASSWORD_PROD,
    DATABASE_PROD: process.env.DATABASE_PROD,
    HOST_PROD: process.env.HOST_PROD,
    DIALECT_PROD: process.env.DIALECT_PROD,
}