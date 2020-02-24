const dbConnection = require('./../db_connection')

exports.deleteCustomer = (id) => {

  return dbConnection
    .query(
      'delete from customer where customer_id = $1', [id]
    )

}

