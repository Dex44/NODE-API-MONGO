const users = require('../models/users');

class Delete { 
    deleteUser(id){
        // console.log(body);
        return new Promise((resolve, reject) => {
            users.delete({
                where: {
                  id: id
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
    DeleteClass: Delete,
};