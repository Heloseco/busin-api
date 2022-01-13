const model = require("../models/index");
const passport = require('passport');
const config = require('../config/index')

const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.SECRET_KEY;
//opts.issuer = 'accounts.examplesoft.com';
//opts.audience = 'yoursite.net';
passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
    try {
        
        const member = await model.Member.findOne({
            where: {
                id: jwt_payload.id,
            },
        });

        if (!member) {
            return done(new Error('ไม่พบผู้ใช้ในระบบ'), null);
        }

        return done(null, member);

    } catch (error) {
        done(error);
    }
}));

module.exports.isLogin = passport.authenticate('jwt', { session: false });