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
            cityName : props.city,
            weatherDetails : {}
        }
    }

    componentDidMount() {
        const searchedCity = "https://api.openweathermap.org/data/2.5/weather?q="+this.state.cityName+"&appid=4b0079617e152107616d2b410450dc2b"

        fetch(searchedCity)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    weatherDetails: data
                })
            })
    }

    /**
     * 
     * @returns
     * { 
     * this.setState({
     *    weatherDetails: data
     * })
     * }
     */


    render() {
        console.log(this.state.weatherDetails.weather)

        return (
            <div>
                <CityName name={this.state.weatherDetails.name} />
                <Pics />
                <Temperature tempCelsius="22 Celsius"
                    tempFahrenheit="77 Fahrenheit" />
                <Conditions conds="blabla" />
                <UpdateTime />
            </div>
        )
    }
}

export default WeatherCard