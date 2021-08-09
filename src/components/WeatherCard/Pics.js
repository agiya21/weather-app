import React from 'react'

function Pics(props) {
    const imageUrl = "http://openweathermap.org/img/wn/" + props.icon + "@2x.png"
    return (
        <div>
            <img src={imageUrl} alt="weather-icon" ></img>
        </div>

    )
}

export default Pics