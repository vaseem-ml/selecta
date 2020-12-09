
const loginDbServices = require('../dbServices/login.db.services');
const ResponseData = require('../helper/responseData');
const { isEmpty } = require('lodash');
const bcrypt = require("bcryptjs");
const {
    generatePasswordHash,
    generateToken,
  } = require("../helper/helper");

module.exports = {

    valLogin: async (userData) => {
        try {
            const condition = { username: userData.username };
            const loginData = await loginDbServices.findSingle(condition);
            const hashPass = await generatePasswordHash(userData.password);
            console.log('has password ', hashPass);
            if(!isEmpty(loginData)) {
                const isValidatePassword = await bcrypt.compare(userData.password, loginData.password);
                if(isValidatePassword) {
                    const tokenData = { id: loginData.id, username: loginData.username };
                    const token = await generateToken(tokenData);
                    return new ResponseData({
                        status: 200,
                        result: { loginData: loginData, token },
                        msg: "Succesfully logged in"
                    })
                } else {
                    return new ResponseData({
                        status: 402,
                        result: { loginData: null },
                        msg: "Credential is not Correct"
                    })
                }
            } else {
                return new ResponseData({
                    status: 404,
                    result: { loginData: null },
                    msg: "Credential is not Correct"
                })
            }
        } catch (e) {
            console.log(e);
        }
    }

}