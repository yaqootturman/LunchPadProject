const express = require('express')
const router = express.Router()
const { getAllCustomers } = require('./getAllCustomers')
const { postNewCustomer } = require('./postNewCustomer')
const { deleteCustomer } = require('./deleteCustomer')

console.log("again!!");

router.get('/api/customer', getAllCustomers)
router.post('/api/newCustomer', postNewCustomer)
router.delete('/api/deleteCustomer/:id', deleteCustomer)

module.exports = router

