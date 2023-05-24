const {pass}= require(`../pass/pass`)
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('missions', 'postgres', pass, {
    host: 'localhost',
    port: 5433,
    dialect: 'postgres',
  });
  
class User extends Model { }
  let user = User.init({
    username: DataTypes.STRING,
    password:DataTypes.STRING
    }, { sequelize, modelName: 'user' });  

    User.sync();
    
module.exports ={
    User
    
  } 
  