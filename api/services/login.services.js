
const loginDbServices = require('../dbServices/login.db.services');
const ResponseData = require('../helper/responseData');

module.exports = {

    valLogin: async (commentData) => {
        try {
            var ifExist = await loginDbServices.findSingle( commentData );
            var message = '';
            if( ifExist ){
                message = 'Successfully LoggedIn';
            }else{
                message = null;
            }
            return new ResponseData({
                status: 200,
                result: {user_id: ifExist.user_id, user_name: ifExist.user_name},
                msg: message
            });
        } catch (e) {
            console.log(e);
        }
    }

}