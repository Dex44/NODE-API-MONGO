const find = require('../../core/find');
const save = require('../../core/save');
const check = require('../../core/check');
const update = require('../../core/update');
const deluser = require('../../core/delete');
const searchuser = require('../../core/search');

const {findAll} =new find.FindClass();
const {saveUser} = new save.SaveClass();
const {validateUser} = new check.CheckClass();
const {updateUser} = new update.UpdateClass();
const {deleteUser} = new deluser.DeleteClass();
const {searchUser} = new searchuser.SearchClass();

const findUser = async()=>{
    const result = await findAll();
    return result;
}

const searchUsers = async(id)=>{
    const result = await searchUser(id);
    return result;
}

const saveUsers = async(body)=>{
    
    const result = await saveUser(body);
    return result;
}

const updateUsers = async(params, body)=>{
    const result = await updateUser(params, body);
    return result
}

const deleteUsers = async(id)=>{
    const result = await deleteUser(id);
    return result;
}


const validateUsers  = async(id,password) =>{
    const result = await validateUser(id,password);
    return result;
}


module.exports =  {findUser, saveUsers,validateUsers,updateUsers,deleteUsers,searchUsers};