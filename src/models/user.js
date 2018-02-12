import bcrypt from "bcryptjs";

export default (sequelize, DataTypes) => {
  let User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isAlphanumeric: {
          args: true,
          msg: "The username can only contain letters and numbers"
        },
        len: {
          args: [3, 25],
          msg: "The username needs to be between 3 and 25 characters long"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: "Invalid email"
        }
      }
    },
    password: DataTypes.STRING
  });

  User.beforeCreate(function(user) {
    return cryptPassword(user.password)
      .then(success => {
        user.password = success;
      })
      .catch(err => {
        if (err) console.log(err);
      });
  });

  function cryptPassword(password) {
    return new Promise(function(resolve, reject) {
      bcrypt.genSalt(10, function(err, salt) {
        if (err) return reject(err);
        bcrypt.hash(password, salt, function(err, hash) {
          if (err) return reject(err);
          return resolve(hash);
        });
      });
    });
  }

  return User;
};
