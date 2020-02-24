const express = require('express')
const router = express.Router()
const { getAllCustomers } = require('./getAllCustomers')


router.get('/api/customer', getAllCustomers)


module.exports = router