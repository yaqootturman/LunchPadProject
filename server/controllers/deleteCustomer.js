const { deleteCustomer } = require('../database/queries/deleteCustomer')

exports.deleteCustomer = (req, res) => {

  console.log("req", req.params);

  const { id } = req.params


  deleteCustomer(id).then(data => console.log("the res", res.json(data.rows[0]))
  )
    .catch(error => console.log("errorrrrr", error))
}

