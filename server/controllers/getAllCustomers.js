const { getAllCustomers } = require('../database/queries/getAllCustomers')

exports.getAllCustomers = (req, res) => {

  getAllCustomers().then(data => res.json(data.rows))
    .catch(error => console.log("errorrrrr", error))
}