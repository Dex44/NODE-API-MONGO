// models
const users = require('../models/users');

class Update { 
    updateUser(params, body){
        // console.log(body);
        return new Promise((resolve, reject) => {
            users.updateOne(
                { 
                    name: body.name,
                    password: body.password,
                    state:body.state,
                    mobileno: body.mobileno
                }, 
                {
                where: {
                  id: params
                }
              }).then((data)=>{
                resolve(data)
            }).catch((err)=>{
                // console.error(err);
                reject(err)
            });
        });
    }
}

module.exports = {
    UpdateClass: Update,
};