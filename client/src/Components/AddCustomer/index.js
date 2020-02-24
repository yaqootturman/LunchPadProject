import React, { Component } from "react"
import DatePicker from 'react-date-picker';

import axios from "axios"


class AddCustomer extends Component {

  state = {
    customerName: "",
    LastName: "",
    email: "",
    birthday: "",
    city: "",
    gender: ""
  }

  updateInput = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleOptionChange = event => {
    const { value } = event.target
    this.setState({ gender: value })
  }
  AddCustomer = () => {
    const { customerName, LastName, email, birthday, city, gender } = this.state

    axios.post('/api/newCustomer', {
      customerName,
      LastName,
      email,
      birthday,
      gender,
      city
    })
      .then(res => {
        console.log("let us see the res ", res);

      })
  }

  render() {
    const { customerName, LastName, email, birthday, city, gender } = this.state
    return (
      <>
        <h3>fill the information to add new customer</h3>
        <form onSubmit={this.AddCustomer}>
          <label>
            <input className="info"
              onChange={this.updateInput}
              value={customerName}
              type="text"
              placeholder="first name"
              name="customerName">
            </input>
          </label>
          <label>
            <input className="info"
              onChange={this.updateInput}
              value={LastName}
              type="text"
              placeholder="last name"
              name="LastName">
            </input>
          </label>
          <label>
            <input className="info"
              onChange={this.updateInput}
              value={email}
              type="text"
              placeholder="email"
              name="email">
            </input>
          </label>
          <label>
            <DatePicker
              format='yyyy-MM-dd'
              value={birthday}
              onChange={date => this.setState({ birthday: date })}
            />
          </label>
          <label>
            <input type="radio" value="Female" checked={gender === 'Female'} onChange={this.handleOptionChange} />
            Female
          </label>

          <label>
            <input type="radio" value="Male" checked={gender === 'Male'} onChange={this.handleOptionChange} />
            MAle
          </label>
          <label>
            <input className="info"
              onChange={this.updateInput}
              value={city}
              type="text"
              placeholder="city"
              name="city">
            </input>
          </label>
          <input type="submit" value="Add" className="submitInfo" />
        </form>
      </>
    )
  }
}
export default AddCustomer
