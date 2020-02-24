import React, { Component } from 'react'
import CustomerCard from '../CustomerCard'
import axios from 'axios'
import wallpaper from '../../images/h1.jpg'
import ClipLoader from "react-spinners/ClipLoader"
import { Link } from 'react-router-dom'
import './style.css'

class HomePage extends Component {

  state = {
    customersList: [],
    loading: true
  }

  componentDidMount() {

    axios.get('/api/customer').then(({ data }) => {

      this.setState({ customersList: data, loading: false })

    })
      .catch(error => {
        console.log("something error", error.response);
      })
  }
  render() {
    const { loading, customersList } = this.state;

    console.log("this", this);

    return (
      <div className="home-page">
        <div className="greeting">
          <h1 className="greeting__hello">Hello</h1>
        </div>

        {
          !loading ? <CustomerCard customersList={customersList} /> :
            (<div className="loading-spinner">
              <ClipLoader
                className="loading-spinner__home"
                sizeUnit={"px"}
                size={80}
                color={"#123abc"}
              />
            </div>)
        }
        <button type="button" class="btn btn-primary" onClick={() => { this.props.history.push('/newCustomer') }}>+</button>



      </div>
    )

  }

}

export default HomePage