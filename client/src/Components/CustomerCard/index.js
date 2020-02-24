
import React, { Component } from 'react'

const CustomerCard = (props) => {

  const { customersList } = props;

  return (
    <>
      <h5>List of customers</h5>

      {customersList.map(customer => (
        <div className="card">
          <div class="card-body">
            <h5 className="card-title">First name: {customer.first_name}</h5>
            <p className="card-text"> Last name: {customer.last_name}</p>
            <p className="card-text"> email: {customer.email}</p>
            <p className="card-text"> birthday: {customer.birthday}</p>
            <p className="card-text"> gender: {customer.gender}</p>
            <p className="card-text"> city: {customer.city}</p>
          </div>
        </div>

      ))}

    </>

  )

}
export default CustomerCard
