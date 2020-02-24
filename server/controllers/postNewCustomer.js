const { postNewCustomer } = require('../database/queries/postNewCustomer')

exports.postNewCustomer = (req, res) => {


  const { customerName, LastName, email, birthday, gender, city } = req.body

  postNewCustomer(customerName, LastName, email, birthday, gender, city).then(data => res.json(data.rows))
    .catch(error => console.log("errorrrrr", error))
}

