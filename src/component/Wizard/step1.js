// Modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import axios from 'axios'
// Imports 
import {updatePropertyName, updateAddress, updateCity, updateState, updateZipCode} from './../../ducks/reducer'


class WizardS1 extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let {updatePropertyName, updateAddress, updateCity, updateState, updateZipCode } = this.props
        return (
            <div className='dashboard'>
                <h1>Property Name</h1>
                <input value={this.props.property_name} onChange={(e)=>updatePropertyName(e.target.value)}></input>
                <h1>Address</h1>
                <input value={this.props.address} onChange={(e)=>updateAddress(e.target.value)} />
                <h1>City</h1>
                <input value={this.props.city} onChange={(e)=>updateCity(e.target.value)} />
                <h1>State</h1>
                <input value={this.props.state} onChange={(e)=>updateState(e.target.value)} />
                <h1>ZipCode</h1>
                <input value={this.props.zipcode} onChange={(e)=>updateZipCode(e.target.value)} />
                <Link to='/wizard/step2'>
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}
function mapPropsToState(state) {
    return {...state}
}
export default connect(mapPropsToState, {updatePropertyName, updateAddress, updateCity, updateState, updateZipCode})(WizardS1)