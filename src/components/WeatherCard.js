import React from 'react'
import CityName from './WeatherCard/CityName'
import Pics from './WeatherCard/Pics'
import Temperature from './WeatherCard/Temperature'
import Conditions from './WeatherCard/Conditions'
import UpdateTime from './WeatherCard/UpdateTime'

function WeatherCard(props) {
    return(
        <div>
            <CityName name={props.city}/>
            <Pics />
            <Temperature temp="25 Celsius"/>
            <Conditions conds="Rainy"/>
            <UpdateTime />
        </div>
    )
}

export default WeatherCard