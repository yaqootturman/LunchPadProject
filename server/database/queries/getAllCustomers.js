const dbConnection = require('./../db_connection')

exports.getAllCustomers = () => {

  return dbConnection
    .query('SELECT * FROM customer')

}

