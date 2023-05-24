const {User}= require(`../db/postgeesqlUser`)

async function addUser(username, password) {
      const newUser = await User.create({ username, password});
      return newUser;
  }

// Query to check username and password
const checkCredentials = async (username, password) => {
  const user = await User.findOne({
      where: {
        username: username,
        password: password,
      },});
  if (user) {
      return true;
    } else {
      return false;
    }
   };

  
  module.exports = {
    addUser,
    checkCredentials
   
  };
  
  

