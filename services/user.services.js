const userModel = require('../model/user.model');
const jwt = require('jsonwebtoken');

class UserService{
    static async registerUser(email,password){
        try {
            const creatUser = new userModel({email,password});
            return await creatUser.save();
        } catch (error) {
            throw error;
        }
    };

    static async checkUser(email){
        try {
            return await userModel.findOne({email});
        } catch (error) {
            throw error;
        }
    };

    static async generateJWT(tokenData, secretkey, jwt_expire){
        return jwt.sign(tokenData,secretkey,{expiresIn:jwt_expire})
    };

}

module.exports = UserService;