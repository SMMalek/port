import React from "react"


function MainContents() {
    const date = new Date()
    const hours = date.getHours()
    let timeOfday

    if (hours < 12) {
        timeOfday = "morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfday = "afternoon"
    } else {
        timeOfday = "night"
    }

    const styles = {
        color: "#FF8C00",
        backgroundColor: "#2728ff",
        fontSize: "20px"}
    
    return (<h1 style={styles}>Good {timeOfday} yala!</h1>
    )
}

export default MainContents