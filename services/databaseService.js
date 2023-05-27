const connection = require('../db/connection');

module.exports = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users', (error, results) => {
        if (error) reject(error);
        resolve(results);
      });
    });
  },

  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
        if (error) reject(error);
        resolve(results[0]);
      });
    });
  },

  getUserByUsername: (username) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM users WHERE username = ?', [username], (error, results) => {
        if (error) reject(error);
        resolve(results[0]);
      });
    });
  },

  createUser: (user) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO users SET ?', user, (error, results) => {
        if (error) reject(error);
        resolve(results.insertId);
      });
    });
  },

  updateUser: (id, user) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, results) => {
        if (error) reject(error);
        resolve(results.affectedRows);
      });
    });
  },

  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
        if (error) reject(error);
        resolve(results.affectedRows);
      });
    });
  },
};
