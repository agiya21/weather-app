import React from 'react'

function Conditions(props) {
    return (
        <div>
            <h2>{props.conds}</h2>
            <p>{props.desc}</p>
        </div>
    )
}

export default Conditions