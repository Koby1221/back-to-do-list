const { findAll,addTask,editTask,deleteTaskById,sortTask } = require(`../models/list_model`)

const findAllTask =  () => {
  return findAll();
};
const sort_Task =  () => {
  return sortTask();
};
const add_new_Task =  (Task) => {
  return addTask(Task.title,Task.content,Task.isDone,Task.urgency);
};
const edit_Task =  (id,Task) => {
  return editTask(id,Task.title,Task.content,Task.isDone,Task.urgency);
};
const delete_Task_ById =  (id) => {
  return deleteTaskById(id);
};

module.exports = {
  findAllTask,
  add_new_Task,
  edit_Task,
  delete_Task_ById,
  sort_Task
};


