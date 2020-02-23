import React, { Component } from 'react'
import CustomerCard from '../CustomerCard'
import axios from 'axios'
import wallpaper from '../../images/h1.jpg'
import './style.css'

class HomePage extends Component {

  state = {

  }
  componentDidMount() {

    axios.get(`/api/customer`).then(({ data }) => {
      this.setState({ customersList: data, loading: false })
    })
      .catch(error => {

        console.log("something error");

        // this.setState({ serverError: "server error" })
      })
  }
  render() {

    return (
      <div className="home-page">

        <img className="wallpaper" src=""></img>

        <CustomerCard />
      </div>
    )

  }

}

export default HomePage