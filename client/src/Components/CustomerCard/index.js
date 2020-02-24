
import React, { Component } from 'react'
import './style.css'
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
      <div className="list">
        <h5>List of customers</h5>
        <button type="button" class="btn btn-primary" onClick={this.deleteCustomer}>Delete</button>
        {
          customersList.map(customer => (
            <div className="card">
              <div class="card-body">
                <div>
                  <button className="btn btn-secondary " onClick={() => window.print()}>PRINT</button>
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
                <div className="card-title">
                  <span className=" material-icons">
                    &#xe87c;
                  </span>
                  <span>
                    {customer.first_name}{customer.last_name}
                  </span>
                </div>
                <div className="card-title">
                  <span className="material-icons">
                    &#xe0be;
                  </span>
                  <span>
                    {customer.email}
                  </span>
                </div>
                <div className="card-title">
                  <span className="material-icons">
                    &#xf1fd;
                  </span>
                  <span>
                    {customer.birthday}
                  </span>
                </div>
                <div className="card-title">
                  <span className="material-icons">
                    &#xf224;
                  </span>
                  <span>
                    {customer.gender}
                  </span>
                </div>
                <div className="card-title">
                  <span className="material-icons">
                    &#xe7f1;
                  </span>
                  <span>
                    {customer.city}
                  </span>
                </div>
              </div>
            </div>

          ))
        }

      </div>

    )
  }

}
export default CustomerCard
