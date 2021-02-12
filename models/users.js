// 'use strict';
// const {Model, DataTypes} = require('sequelize');
// const { sequelize } = require('.');
// module.exports=(sequelize,DataTypes) => {

// class User extends Model{}
//     User.init({
//         // Model attributes are defined here
//         id: {
//             type: DataTypes.INTEGER,
//             autoIncrement: true,
//             primaryKey:true
//         },
//         name: {
//         type: DataTypes.STRING
//         },
//         password: {
//         type: DataTypes.STRING      // allowNull defaults to true
//         },
//         state: {
//         type: DataTypes.STRING      // allowNull defaults to true
//         },
//         mobileno: {
//         type: DataTypes.INTEGER   // allowNull defaults to true
//         }
//     }, {
//         // Other model options go here
//         sequelize, // We need to pass the connection instance
//         modelName: 'User' // We need to choose the model name
//     });
//     return User;
// };

const mongoose = require('mongoose');

// defining schema
const Users = new mongoose.Schema({
	name : {type : String},
    password : {type : String},
    state: {type: String},
    mobileno : {type : Number},
});

// creating modal
const users = mongoose.model('users', Users,'users');

module.exports = users;


