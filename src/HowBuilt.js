import React from 'react'

export default function HowBuilt() {
    return (
        <div style={{color: "lightblue", backgroundColor: "darkgreen", width: "100%", fontSize: "20px", fontFamily: "Arial"}}>
            In order to build the application, I had to modify the existing files in the react app to remove the defualt stuff that was there. Then I added my own components (one for each section of the webpage) and put them into the App.js file, which has all the items that will be rendered onto the page. I then edited each individual component to hold the text that I wanted displayed in each element.
        </div>
    )
}