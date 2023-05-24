const { addUser,checkCredentials } = require(`../models/user_model`)

const add_new_User =  (User) => {
  return addUser(User.username,User.password)};
    
    
const check_user =  (User) => {
    return checkCredentials(User.username,User.password);};

  module.exports = {
    add_new_User,
    check_user
  };
  