import React from 'react'

function Temperature(props) {
    return (
        <div>
            <h3>{props.tempCelsius}</h3>
            <h3>{props.tempFahrenheit}</h3>
        </div>
    )
}

export default Temperature