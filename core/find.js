// const User = require('../config/components/mongo').User;
const users = require('../models/users');

class Find{
    findAll(){
        return new Promise((resolve,reject)=>{
            users.find().then((data)=>{
                console.log('data : ', data);
                resolve(data)
            }).catch((err)=>{
                reject(err)
            });
        });
    }
}

module.exports = {
    FindClass: Find,
};