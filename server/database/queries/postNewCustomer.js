const dbConnection = require('./../db_connection')

exports.postNewCustomer = (customerName, LastName, email, birthday, gender, city) => {

  return dbConnection
    .query(
      'insert into customer (first_name,last_name,email,Birthday,Gender,City) values ($1,$2,$3,$4,$5,$6)',
      [customerName, LastName, email, birthday, gender, city]
    )

}

