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
            isLoading : false,
            cityName : props.city,
            weatherDetails : [],
            weatherReport : [],
            weatherMain : []
        }
    }

    componentDidMount() {
        const searchedCity = "https://api.openweathermap.org/data/2.5/weather?q="+this.state.cityName+"&units=metric&appid=4b0079617e152107616d2b410450dc2b"
        this.setState({isLoading : true})
        fetch(searchedCity)
            .then(response => response.json())
            .then(data => {
                //console.log(data)
                this.setState({
                    weatherDetails: data,
                    weatherReport : data.weather[0], // Getting Weather conditions
                    weatherMain : data.main // Getting temperature, humidity, etc.
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
        return (
            <div>
                <CityName name={this.state.weatherDetails.name} />
                <Pics icon={this.state.weatherReport.icon}/>
                <Temperature tempCelsius={this.state.weatherMain.temp} />
                <Conditions conds={this.state.weatherReport.main} desc={this.state.weatherReport.description}/>
                <UpdateTime />
            </div>
        )
    }
}

export default WeatherCard