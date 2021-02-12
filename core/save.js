const users = require('../models/users');
class Save
{
    saveUser(body)
    {
        console.log('######### req #########', body);
        return new Promise((resolve, reject) => {
            users.insertMany({
                name: body.name,
                password: body.password,
                state:body.state,
                mobileno: body.mobileno,
            }).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                console.error(err);
                reject(err);
            });
        });
    }
}

module.exports = {
    SaveClass: Save,
};