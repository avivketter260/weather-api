import React, { Component } from 'react'
import axios from 'axios';
//
//99a34a9402345dfb3a5748311667c2d0
class Weather extends Component {
    constructor(props) {
        super(props)

        this.state = {
            inputData: this.props.inputData,
            allWeatherData: []
        }
    }

     componentDidMount() {
this.setState({
    inputData: this.props.inputData,
})

    }

   async componentWillReceiveProps(nextProps) {
        this.setState({
            inputData: nextProps.inputData
        })

        const data = nextProps.inputData
        console.log(data[0].city);
        console.log(data[0].country);
        const api = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${data[0].city},${data[0].country}&appid=99a34a9402345dfb3a5748311667c2d0&units=metric`)
        console.log(api);
        const result = []
        result.push(api.data)
        this.setState({
            allWeatherData: result
        })

    }
    render() {
        const { allWeatherData } = this.state
        console.log(allWeatherData);
        return (

            <div>
                {
                    allWeatherData.map((res, id) => {
                        console.log(res.name)
                        return (
                            <div className="output" key={id}>
                                <div className='location'><span className="title">Location:</span> <span>{res.name}, {res.sys.country}</span></div>
                                <div className='location'><span className="title">Temperature:</span><span>{res.main.temp}</span></div>
                                <div className='location fix'><span className="title">Humidity:</span> <span>{res.main.humidity}</span></div>
                                <div className='location'><span className="title">Condition :</span> <span>{res.weather[0].main}</span></div>
                            </div>
                        )
                    })
                }
            </div>

        )
    }
}
export default Weather