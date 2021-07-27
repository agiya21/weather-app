import React from 'react'
import CityName from './WeatherCard/CityName'
import Pics from './WeatherCard/Pics'
import Temperature from './WeatherCard/Temperature'
import Conditions from './WeatherCard/Conditions'

function WeatherCard() {
    return(
        <div>
            <p>====</p>
            <CityName />
            <Pics />
            <Temperature />
            <Conditions />
            <p>====</p>
        </div>
    )
}

export default WeatherCard