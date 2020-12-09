const { logins } = require('../models');

module.exports = {
    create: async (data) => {
        return await logins.create(data);
    },
    findAll: async (conditions = {}) => {
        
        return await logins.findAll({where:conditions});
    },
    findSingle: async (condition)  => {
        return await logins.findOne({where : condition});
      
     },
     update:async(value,condition) =>{
        return await logins.update(value, {where: condition});

     },
    
     delete: async (condition) => {
        return await logins.destroy({ where: condition });
    },
     

}

