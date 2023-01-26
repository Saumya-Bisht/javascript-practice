const SearchInput = document.getElementById("SearchInput")
const dynamicHeading = document.getElementById("dynamicHeading")
const skyCondition = document.getElementById("skyCondition")
const windSpeed = document.getElementById("windSpeed")
const temerature = document.getElementById("temerature")

async function func() {
    var show = document.getElementById("cardContainer");  
    show.style.display = "block";  
            
    const location = SearchInput.value;
    if(location==""){
        alert("Please enter a city's name!")
        show.style.display = "none";

    }
    const streamResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d8ab14f7e93c56cbe84562d28e8202bd&units=metric`);
    console.log(streamResponse);
    const data = await streamResponse.json()
    console.log(data);
    dynamicHeading.innerText = `Weather of ${location}`
    skyCondition.innerText = `Sky condition: ${data.weather[0].description}`
    temerature.innerText = `Temperature: ${data.main.temp}`
    windSpeed.innerText = `Windspeed: ${data.wind.speed}`
  
}