
import React, { Component } from 'react'

const CustomerCard = (props) => {

  const { customersList } = props;

  return (
    <>
      <h5>List of customers</h5>
      <div className="card">
        <div class="card-body">
          <h5 className="card-title">First name: {customersList[0].first_name}</h5>
          <p className="card-text"> Last name: {customersList[0].last_name}</p>
          <p className="card-text"> email: {customersList[0].email}</p>
          <p className="card-text"> birthday: {customersList[0].birthday}</p>
          <p className="card-text"> gender: {customersList[0].gender}</p>
          <p className="card-text"> city: {customersList[0].city}</p>
        </div>
      </div>
    </>

  )

}
export default CustomerCard
