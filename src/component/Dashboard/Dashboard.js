// Modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
// Imports 
import House from './../House/House'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            house: []
        }
        this.showHouses = this.showHouses.bind(this)
    }

    componentDidMount() {
        this.showHouses()
    }

    deleteHouse(id) {
        axios.delete(`/api/houses/${id}`)
        // this.showHouses()
    }
    showHouses() {
        axios.get('/api/houses').then(resp => {
            this.setState({
                house: resp.data
            })
        })
    }

    render() {

        let mappedHouses = this.state.house.map(house => {
            return (
                <House
                    key={house.id}
                    property_name={house.property_name}
                    address={house.address}
                    city={house.city}
                    state={house.state}
                    zipcode={house.zipcode}
                    monthly_rent={house.monthly_rent}
                    desired_rent={house.desired_rent}
                    imglink={house.imglink}
                    id={house.id}
                    deleteHouseFn={this.deleteHouse}
                />
            )
        })
        return (
            <div className='dashboardback'>
                <div className='dashboard'>
                    <div className='dashboardHeader'>
                        Dashboard
                <Link to='/wizard/step1'>
                            <button className='dash-Button'>Add New Property</button>
                        </Link>
                    </div>
                    <h1 className='listings'>Home Listings:</h1>

                    {mappedHouses}
                </div>
            </div>
        )
    }
}