'use_strict';
const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const logins = sequelize.define('logins', {
        id: {
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        username: DataTypes.STRING, 
        password: DataTypes.STRING
    }, {
        timestamps: false
    });

    logins.associate = function(models) {
    };
    return logins;
}

