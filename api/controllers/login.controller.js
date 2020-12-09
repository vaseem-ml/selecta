const loginServices = require('../services/login.services');

module.exports = {
    validateLogin: async (req, res) => {
        const result = await loginServices.valLogin(req.body);
        res.json(result);
    },

}