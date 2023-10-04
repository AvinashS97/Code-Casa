let celciusInput = document.querySelector('#celcius > input')
let fahrenhietInput = document.querySelector('#fahrenheit > input')
let kelvinInput = document.querySelector('#kelvin > input')

let btn = document.querySelector('.button button')
 
function roundNumber(number){
    return Math.round(number*100)/100
}

//  Celcius to fahrenhiet & Kelvin
celciusInput.addEventListener('input', function(){
    let cTemp = parseFloat(celciusInput.value)
    let fTemp = (cTemp*(9/5))+32
    let kTemp = cTemp + 273.15
  
    fahrenhietInput.value = roundNumber(fTemp)
    kelvinInput.value = roundNumber(kTemp)
})

// fahrenhiet to celcius & Kelvin
fahrenhietInput.addEventListener('input', function(){
    let fTemp = parseFloat(fahrenhietInput.value)
    let cTemp = (fTemp - 32) * (5/9)
    let kTemp = (fTemp - 32) * (5/9) + 273.15

    celciusInput.value = roundNumber(cTemp)
    kelvinInput.value = roundNumber(kTemp)
})

// Kelvin to Fahrenhiet and Celcius
kelvinInput.addEventListener('input', function(){
    let kTemp = parseFloat(kelvinInput.value)
    let cTemp = kTemp - 273.15
    let fTemp = (kTemp -273.15) * (9/5) + 32
  
    celciusInput.value = roundNumber(cTemp)
    fahrenhietInput.value = roundNumber(fTemp)
})

btn.addEventListener('click', ()=> {
    celciusInput.value = ""
    fahrenhietInput.value = ""
    kelvinInput.value = "" 
})