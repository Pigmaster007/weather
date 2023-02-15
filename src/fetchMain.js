const searchBtn = document.getElementById("searchBtn");
const inpCityName = document.getElementById("inpCityName");

searchBtn.addEventListener('click', event =>{
  
  if (inpCityName.textContent === ' ') {
    fetch('http://api.weatherapi.com/v1/current.json?key=0f6802a3453c419baf1210622222112&q=Toronto&aqi=yes', {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => {return response.json()}) 
    .then(json =>  {
        weatherIn.innerHTML = json.location.name
        document.getElementById("temperature").innerHTML = json.current.temp_c + '&deg;C'
        document.getElementById('temperatureF').innerHTML =  json.current.temp_f + '&deg;F'    
        //document.getElementById("logo").innerHTML = '<img src="' + json.current.condition.icon + '">'
    })
    .catch(err => console.log(err));
    inpCityName.innerHTML = '';
  } else {
    fetch('http://api.weatherapi.com/v1/current.json?key=0f6802a3453c419baf1210622222112&q=' + inpCityName.value +'&aqi=yes', {
      method: "GET",
      headers: {"Content-type": "application/json;charset=UTF-8"}
    })
    .then(response => {return response.json()}) 
    .then(json =>  {
        weatherIn.innerHTML = json.location.name
        document.getElementById("temperature").innerHTML = json.current.temp_c + '&deg;C'
        document.getElementById('temperatureF').innerHTML =  json.current.temp_f + '&deg;F'    
        //document.getElementById("logo").innerHTML = '<img src="' + json.current.condition.icon + '">'
    })
    .catch(err => console.log(err));
    inpCityName.innerHTML = '';
  }
})