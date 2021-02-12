const users = require('../models/users');

class Search { 
    searchUser(id){
        //console.log(id);
        // console.log(body);
        return new Promise((resolve, reject) => {
            users.find({
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
    SearchClass: Search,
};


// const User = require('../models').User;
// class Find{
//     findAll(){
//         return new Promise((resolve,reject)=>{
//             User.findAll().then((data)=>{
//                 console.log('data : ', data);
//                 resolve(data)
//             }).catch((err)=>{
//                 reject(err)
//             });
//         });
//     }
// }

// module.exports = {
//     FindClass: Find,
// };