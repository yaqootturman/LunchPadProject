
import React, { Component } from 'react'
import HomePage from '../HomePage'
import axios from 'axios';

class CustomerCard extends Component {

  state = {
    deletedCustomer: []
  }

  toggleCheckbox = (event) => {

    const { value } = event.target

    const { deletedCustomer } = this.state

    this.setState({
      deletedCustomer: [...deletedCustomer, value],
    });

  }
  deleteCustomer = () => {
    const { deletedCustomer } = this.state
    const { customersList } = this.props

    deletedCustomer.map(id => {

      axios.delete(`api/deleteCustomer/${id}`
      ).then(() => {
        window.location.reload(false);

      })
    })

  }


  render() {

    const { customersList } = this.props;

    return (
      <>
        <h5>List of customers</h5>
        <button type="button" class="btn btn-primary" onClick={this.deleteCustomer}>Delete</button>
        {
          customersList.map(customer => (
            <div className="card">
              <div class="card-body">
                <div>
                  <button onClick={() => window.print()}>PRINT</button>
                </div>
                <label className="checkboxLabel">
                  <input
                    className="checkboxInfo"
                    type="checkbox"
                    name="delete"
                    onChange={this.toggleCheckbox}
                    value={customer.customer_id}
                  />
                  Delete
                </label>
                <h5 className="card-title">First name: {customer.first_name}</h5>
                <p className="card-text"> Last name: {customer.last_name}</p>
                <p className="card-text"> email: {customer.email}</p>
                <p className="card-text"> birthday: {customer.birthday}</p>
                <p className="card-text"> gender: {customer.gender}</p>
                <p className="card-text"> city: {customer.city}</p>
              </div>
            </div>

          ))
        }

      </>

    )
  }

}
export default CustomerCard
