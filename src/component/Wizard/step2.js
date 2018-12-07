// Modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import axios from 'axios'
// Imports 
import { updateImgLink } from './../../ducks/reducer'

class WizardS2 extends Component {
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let { updateImgLink } = this.props
        return (
            <div className='dashboard'>
                <h1>House Image URL: </h1>
                <input onChange={(e)=>updateImgLink(e.target.value)} />
                <br/>
                <img src={this.props.imglink} alt='Stock'/>
                <br/>
                <Link to='/wizard/step1'>
                    <button>Previous Step</button>
                </Link>
                <Link to='/wizard/step3'>
                    <button>Next Step</button>
                </Link>
            </div>
        )
    }
}
function mapPropsToState(state) {
    return {...state}
}
export default connect(mapPropsToState, {updateImgLink})(WizardS2)