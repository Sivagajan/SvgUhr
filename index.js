const textElement = document.getElementById("text")
const stundenElement = document.getElementById("stundenZeigerId")
const minutenElement = document.getElementById("minutenZeigerId")
const sekundenElement = document.getElementById("sekundenZeigerId")

let showDate = true

const animateClock = () => {
    let datum 
    
    const date = new Date()
    const day = date.getDate()
    const dayname = date.getDay()
    const ampm = date.getHours() >= 12 ? 'PM': 'AM'
    const hour = date.getHours()+ date.getMinutes() / 60
    const minute = date.getMinutes() + date.getSeconds() / 60
    const seconds = date.getSeconds() + date.getMilliseconds() / 1000
    
    console.log(dayname)

    switch(dayname){
        case(1): datum = "Mo"
            break
        case(2): datum = "Di"
            break
        case(3): datum = "Mi"
            break
        case(4): datum = "Do"
            break
        case(5): datum = "Fr"
            break
        case (6): datum = "Sa"
            break
        case(0): datum = "So"
    }

    const daydate = `${datum} ${day}`

    textElement.textContent = showDate ? daydate : ampm

    stundenElement.setAttribute("transform", `rotate(${(360/12)*(hour)})`)
    //console.log(`rotate(${(360 /12)* (hour)})`)
    
    minutenElement.setAttribute("transform", `rotate(${(360/60)*(minute)})`)
    //console.log(`rotate(${(360/60)*(minute)})`)
    
    sekundenElement.setAttribute("transform", `rotate(${(360/60)*(seconds)})`)
    //console.log(`rotate(${(360/60)*(seconds)})`)

    requestAnimationFrame(animateClock)
}

requestAnimationFrame(animateClock)

textElement.addEventListener("click", () => {
    showDate = !showDate
})