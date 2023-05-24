const {pass}= require(`../pass/pass`)
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('missions', 'postgres', pass, {
  host: 'localhost',
  port: 5433,
  dialect: 'postgres',
});

// Define the Task model
class Task extends Model { }
let task = Task.init({
  title: DataTypes.STRING,
  content:DataTypes.STRING,
  isDone:DataTypes.BOOLEAN,
  urgency: DataTypes.INTEGER
 
}, { sequelize, modelName: 'missions' });



// Sync the model with the database
Task.sync();


module.exports ={
  Task
  
} 
