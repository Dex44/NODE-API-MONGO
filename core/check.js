const users = require('../models/users');

class Check{
    validateUser(id,password){
        return new Promise((resolve,reject)=>{
            users.find({
                where :{
                    id : id,
                    password:password
                }
            }).then((data)=>{
                console.log('data : ', data);
                resolve(data)
            }).catch((err)=>{
                reject(err)
            });
        });
    }
}

module.exports = {
    CheckClass: Check,
};