const hashbcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define('wrestler', {
        username: Sequelize.STRING,
        password: Sequelize.STRING
    });
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    User.hook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(saltRounds), null);
    });
    return User;
};