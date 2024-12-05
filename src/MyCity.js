import React from 'react'
import toronto from './toronto.jpg'

export default function MyCity() {
    return (
        <div style={{color: "#606060", backgroundColor: "beige", width: "100%", fontSize: "20px", fontFamily: "Arial"}}>
            Here is a picture of the city where I attend school (Toronto, Ontario): <br/>
            <img src={toronto} alt="Toronto, Ontario" style={{width: "100%"}} />

        </div>
    )
}