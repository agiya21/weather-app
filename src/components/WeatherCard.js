import React from 'react'
import CityName from './WeatherCard/CityName'
import Pics from './WeatherCard/Pics'
import Temperature from './WeatherCard/Temperature'
import Conditions from './WeatherCard/Conditions'
import UpdateTime from './WeatherCard/UpdateTime'

class WeatherCard extends React.Component {
    constructor(props){
        super()
        this.state = {
            cityName : props.city
        }
    }
    render() {
        return (
            <div>
                <CityName name={this.state.cityName} />
                <Pics />
                <Temperature tempCelsius="25 Celsius"
                    tempFahrenheit="77 Fahrenheit" />
                <Conditions conds="Rainy" />
                <UpdateTime />
            </div>
        )
    }
}

export default WeatherCard