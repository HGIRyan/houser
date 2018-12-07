// Modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
// Imports 
import { updateMonthlyRent, updateDesiredRent } from './../../ducks/reducer'

class WizardS3 extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    addHouse(property_name, address, city, state, zipcode, monthly_rent, desired_rent, imglink) {
        console.log('this')
        console.log(property_name, address, city, state, zipcode, monthly_rent, desired_rent, imglink)
        axios.post('/api/newhouses', { property_name, address, city, state, zipcode, monthly_rent, desired_rent, imglink })
        console.log('next')
    }
    render() {
        const { property_name, address, city, state, zipcode, monthly_rent, desired_rent, imglink } = this.props
        let { updateMonthlyRent, updateDesiredRent } = this.props
        return (
            <div className='dashboard'>
                <h1>Monthly Mortgage Amount: </h1>
                <input value={this.props.monthly_rent} onChange={(e) => updateMonthlyRent(e.target.value)} />
                <h1>Monthly Mortgage Amount: </h1>
                <input value={this.props.desired_rent} onChange={(e) => updateDesiredRent(e.target.value)} />
                <Link to='/wizard/step2'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/'>
                    <button onClick={() => { this.addHouse(property_name, address, city, state, zipcode, monthly_rent, desired_rent, imglink) }}>Add House</button>
                </Link>
            </div>
        )
    }
}
function mapPropsToState(state) {
    return {...state}
}
export default connect(mapPropsToState, { updateMonthlyRent, updateDesiredRent })(WizardS3)