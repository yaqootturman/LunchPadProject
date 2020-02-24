const express = require('express')
const router = express.Router()
const { getAllCustomers } = require('./getAllCustomers')
const { postNewCustomer } = require('./postNewCustomer')

console.log("again!!");

router.get('/api/customer', getAllCustomers)
router.post('/api/newCustomer', postNewCustomer)

module.exports = router

