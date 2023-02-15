const url = 'http://api.weatherapi.com/v1/current.json?key=0f6802a3453c419baf1210622222112&q=Toronto&aqi=yes';
const inCityName = document.getElementById("inpCityName");
const searchBtn = document.getElementById("searchBtn");
const weatherIn = document.getElementById("weatherIn");
const logo = document.getElementById("logo");
const returnValue = document.getElementById("returnValue");


function replaceCity(){
  fetch(
  'http://api.weatherapi.com/v1/current.json?key=0f6802a3453c419baf1210622222112&q='+document.getElementById("inpCityName").value+'&aqi=yes'
  , {
  method: "GET",
  headers: {"Content-type": "application/json;charset=UTF-8"}
})
.then(response => {return response.json()}) 
.then(json =>  {
    console.log(json)
    weatherIn.innerHTML = json.location.name
    document.getElementById("temperature").innerHTML = json.current.temp_c + '&deg;C'
    document.getElementById('temperatureF').innerHTML =  json.current.temp_f + '&deg;F'    
    //document.getElementById("logo").innerHTML = '<img src="' + json.current.condition.icon + '">'
})
.catch(err => console.log(err));
  
}