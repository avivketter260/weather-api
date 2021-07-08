import React, { Component } from 'react'
import Weather from './Weather'
class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: [],
        }

        this.handelSubmit = this.handelSubmit.bind(this)
    }

    handelSubmit(e) {
        e.preventDefault()
        let result = []
        result.push({
            city: e.target.city.value,
            country: e.target.country.value
        })
        this.setState({
            input: result
        })
    }


    render() {
        return (

            <div className="main">
                <h1>Weather Finder</h1>
                <h3>Find out temperature, conditions and more...</h3>
                <form className="form-container" onSubmit={this.handelSubmit}>
                    <input type="text" name="city" placeholder="City..." />
                    <input type="text" name="country" placeholder="Country..." />
                    <button>Get Weather</button>
                {this.state.input.length>0? <Weather inputData={this.state.input} />: null}
                </form>
            </div>

        )
    }
}
export default Form