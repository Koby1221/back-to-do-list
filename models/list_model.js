const {Task }= require(`../db/postgeesql`)


function findAll() {
  try {
  const tasks = Task.findAll();
  return tasks;
  } catch (error) {
    console.error('Error retrieving tasks:', error);
  }
}
function sortTask() {
  try {
  const tasks =  Task.findAll({order: [['urgency', 'DESC']],})
  return tasks;
  } catch (error) {
    console.error('Error retrieving tasks:', error);
  }
}
async function addTask(title, content, isDone,urgency) {
  try {
    const newTask = await Task.create({ title,content,isDone,urgency});
    return newTask;
  } catch (error) {
    console.error('Error adding task:', error);
  }
}
async function editTask(id, title,content,isDone, urgency) {
  try {
    const task = await Task.findByPk(id);
    if (task) {
      task.title = title;
      task.content = content;
      task.urgency = urgency;
      task.isDone = isDone;
      await task.save();
      return task;
    }
    throw new Error('Task not found');
  } catch (error) {
    console.error('Error editing task:', error);
  }
}
async function deleteTaskById(id) {
  console.log(id);
  try {
    const task = await Task.findByPk(id);
    if (task) {
      await task.destroy();
      return true; // Deletion successful
    }
    throw new Error('Task not found');
  } catch (error) {
    console.error('Error deleting task:', error);
    return false; // Deletion failed
  }
}
module.exports = {
  findAll,
  addTask,
  editTask,
  deleteTaskById,
  sortTask
};




