// Modules
import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// Imports 
import { resetState } from './../../ducks/reducer'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'




class Wizard extends Component {
    render() {
        return (

            <div>
                <Route component={Step1} path='/wizard/step1' />
                <Route component={Step2} path='/wizard/step2' />
                <Route component={Step3} path='/wizard/step3' />
                <Link to='/'>
                    <button onClick={this.props.resetState}>Cancel</button>
                </Link>
            </div>

        )
    }
}

export default connect(null, {resetState})(Wizard)