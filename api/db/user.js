
const hashbcrypt = require('bcrypt');
const Sequelize = require('sequelize');
const sequelize = require('./sequalize');
const saltRounds = 10;

let login = (username, password) => {
    User = sequelize.define('wrestler', {
        username: Sequelize.STRING,
        password: Sequelize.STRING
    });
    User.findOne({
        where: {
            username: username
        }
    }).then(function (user) {
        if (!user) {
            console.log(username + " is not exits");
        } else {
            console.log(username + " exits");
            console.log(password);
            var passwordHash = hashbcrypt.hashSync(user.password, saltRounds);
            console.log(passwordHash);
            hashbcrypt.compare(password, passwordHash, (err, isValid) => {
                if (err) {
                    console.log(err)
                    return err
                }
                if (!isValid) {
                    console.log("login fail")
                    return false
                }
                console.log("login successfull")
                return user
                
              })
        }
    });
}


let loadData = () => {
    User = sequelize.define('wrestler', {
      username: Sequelize.STRING,
      password: Sequelize.STRING
    });
  
    User.findAll().then(User => {
      console.log("All users:", JSON.stringify(User, null, 4));
    });
  };
  
  let deleteNull = () => {
    User = sequelize.define('wrestler', {
      username: Sequelize.STRING,
      password: Sequelize.STRING
    });
    // Delete everyone named "Jane"
    User.destroy({
      where: {
        id: 37
      }
    }).then(() => {
      console.log("Done");
    });
  };

module.exports = {
    login,
    loadData,
    deleteNull
};