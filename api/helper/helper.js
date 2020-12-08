const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const saltRound = 10;
const tokenSecret = '1234';

module.exports = {
    generatePasswordHash: async ( password = '' ) => {
        return await bcrypt.hash(password, +saltRound);
    },

    generateToken: async ( data ) => {
        return await jwt.sign(data, tokenSecret);
    }
}