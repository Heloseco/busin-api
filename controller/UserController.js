const model = require('./../models/index');
const jwt = require('jsonwebtoken')

exports.AddUser = async (req, res, next) => {
    const{username, password, role, phone, email}= req.body;

    try {
        const User = await model.User.findOne({
            where: {Username: username}
        })

        if(!User)
            {
                const encryptPassword = await model.User.encryptPassword(password);

                let user = await model.User.create({
                    Username: username,
                    Password: encryptPassword,
                    Role: role,
                    Phone: phone,
                    Email: email
                });
                res.status(200).json({User:User, done: true})
            }
            else{
                res.status(200).json({message:`This ${username} have already existed`})
            }
    } catch (error) {
        next(error);
    }
}

exports.Login = async(req, res,next) =>{
    const{username,password}= req.body;

    try{
        const User = await model.User.findOne({
            where:{Username: username}
        });

        if(!User){
            const error = new Error('This username does not exist');
            error.statusCode = 404;
            throw error;
        }

        const Valid = await User.checkPassword(password,User.Password);
        if(!Valid){
            const error = new Error('Incorrect Passwords');
            errorCode = 401;
            throw error;
        }

        const token = await User.createToken(User.id,User.Username,User.Role);
        const expire_in = jwt.decode(token);

        return res.status(200).json({
            access_token : token,
            expire_in : expire_in.exp,
            token_type : "Bearer"
        })

    } catch(error){
        next(error);
    }
}

exports.ChangePassword = async (req, res, next) => {
    const id = req.params.id;
    const{Password,NewPassword} = req.body;

    try {
        const User = await model.User.findOne({ 
            where:{id:id}
        });
        
        const Valid= await User.checkPassword(Password, User.Password)
        if(!Valid){
            const error = new Error('Password Incorrect');
            error.status = 401;
            throw error
        }
        else {
            const isPasswrod = await model.User.encryptPassword(NewPassword);
            await model.User.update({
                Password:isPasswrod
            },
            {
                where:{id:id}
            })
        };
        res.status(200).json({done:true, message : "Success"})
    } catch (error) {
        next(error);
    }
}

exports.GetUser = async (req, res, next) => {
    try{
        const UserList = await model.User.findAll();
        res.status(200).json({
            found:true,
            data:UserList
        })
    }catch (error) {
        next(error);
    }
}

exports.GetUserById = async (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    try{
        await model.User.findOne({
            where:{id:id}
        }).then(function(userId){
        if(!userId){
            res.status(404).json({done:false, message:"user not found"})
        }else{
            res.status(200).json({done:true,user:userId})
        }   
        })
    }catch (error) {
        next(error);
    }
}

exports.ChangeProfile = async (req, res, next) => {
    const id = req.params.id;
    const{OldPassword,Phone,Email} = req.body;
    try{
        let User=  await model.User.findOne({
            where:{id:id}
        })
        const Valid= await User.checkPassword(OldPassword, User.Password)
        if(!Valid){
            const error = new Error('Password Incorrect');
            error.status = 401;
            throw error
        } else{
            await model.User.update({
                Phone:Phone,
                Email:Email
            });
            res.status(200).json({done:true, message : "Success"})
    }}catch (error) {
        next (error);
    }
}