/******************************************************
 * Author: Sadhon chondro.
 * Project Name: simple weather map.
 * Project Description: You can find weather condition for any location and city.
 ******************************************************/

// Search button activities
const searchBtn=document.getElementById("searchBtn");
searchBtn.addEventListener("click",function(){
    const inputCityName=document.getElementById("inputCityName").value;
    getWeatherData(inputCityName);
})

// This function fetch for weather api 
function getWeatherData(city){
    const apiKey="fd657be4909e76cf2d01ee14540e66d4";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => response.json())
    .then(data =>updateWeatherHistory(data))
    .catch(error =>alert("Wrong Country or City name. Please check your spelling"));
}

getWeatherData("Dhaka");

// This function update about for weather condition
function updateWeatherHistory(data){
  document.getElementById("showLocation").innerHTML=data.name;
  document.getElementById("temperature").innerHTML=data.main.temp;
  document.getElementById("weatherCondition").innerHTML=data.weather[0].main;

  const icon=document.getElementById('icon');
  icon.setAttribute('src', `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
}
// Thank you.

