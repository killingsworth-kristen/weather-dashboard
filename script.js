var searchBtn = document.getElementById(`search-button`);
var todayDateH2 = document.getElementById(`today-date`);
var todayStatusP = document.getElementById(`today-status`);
var todayTempP = document.getElementById(`today-temp`);
var todayWindP = document.getElementById(`today-wind`);
var todayHumidityP = document.getElementById(`today-humidity`);
var forecastContainer = document.querySelector(`.future-card-container`)
var forecast1Date = document.getElementById("day-1-date");
var forecast1Status = document.getElementById("day-1-status");
var forecast1Temp = document.getElementById("day-1-temp");
var forecast1Wind = document.getElementById("day-1-wind");
var forecast1Humidity = document.getElementById("day-1-humidity");
var forecast2Date = document.getElementById("day-2-date");
var forecast2Status = document.getElementById("day-2-status");
var forecast2Temp = document.getElementById("day-2-temp");
var forecast2Wind = document.getElementById("day-2-wind");
var forecast2Humidity = document.getElementById("day-2-humidity");
var forecast3Date = document.getElementById("day-3-date");
var forecast3Status = document.getElementById("day-3-status");
var forecast3Temp = document.getElementById("day-3-temp");
var forecast3Wind = document.getElementById("day-3-wind");;
var forecast3Humidity = document.getElementById("day-3-humidity");
var forecast4Date = document.getElementById("day-4-date");
var forecast4Status = document.getElementById("day-4-status");
var forecast4Temp = document.getElementById("day-4-temp");
var forecast4Wind = document.getElementById("day-4-wind");;
var forecast4Humidity = document.getElementById("day-4-humidity");
var forecast5Date = document.getElementById("day-5-date");
var forecast5Status = document.getElementById("day-5-status");
var forecast5Temp = document.getElementById("day-5-temp");
var forecast5Wind = document.getElementById("day-5-wind");;
var forecast5Humidity = document.getElementById("day-5-humidity");




searchBtn.addEventListener(`click`, function (event) {
    event.preventDefault();
    var cityInput = document.querySelector(`#city`).value;
    var stateInput = document.querySelector(`#state`).value;
   

    // current weather
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${stateInput}&units=imperial&appid=2d366e18c86a41181932b01ab1dc31b7`)
        .then (function(response){
             return response.json();
        })
        .then (function (data) {
            console.log(data);
            console.log(data.weather[0].main);
            todayDateH2.textContent = "Today";
            todayStatusP.textContent = data.weather[0].main;
            console.log(data.main.temp);
            todayTempP.textContent = "Temperature: " + data.main.temp + " ";
            console.log(data.wind.speed);
            todayWindP.textContent = "Wind: " + data.wind.speed;
            console.log(data.main.humidity);
            todayHumidityP.textContent = "Humidity: " + data.main.humidity;
        })
    fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput},${stateInput}&units=imperial&appid=2d366e18c86a41181932b01ab1dc31b7`)    
        .then (function(response){
             return response.json();
        })
        .then (function (data) {
            console.log(data)
            for (let i = 0; i < 40; i++) {
                console.log(data.list[i])
                forecastContainer.setAttribute(`class`,`future-card-container`)
                if (i === 0) {
                    forecast1Date.textContent = data.list[i].dt_txt
                    forecast1Status.textContent = data.list[i].weather[0].main
                    forecast1Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast1Wind.textContent =  "Wind: " + data.list[i].wind.speed
                    forecast1Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } else if (i === 8) {
                    forecast2Date.textContent = data.list[i].dt_txt
                    forecast2Status.textContent = data.list[i].weather[0].main
                    forecast2Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast2Wind.textContent = "Wind: " + data.list[i].wind.speed
                    forecast2Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } else if (i === 16) {
                    forecast3Date.textContent = data.list[i].dt_txt
                    forecast3Status.textContent = data.list[i].weather[0].main
                    forecast3Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast3Wind.textContent = "Wind: " + data.list[i].wind.speed
                    forecast3Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } else if (i === 24) {
                    forecast4Date.textContent = data.list[i].dt_txt
                    forecast4Status.textContent = data.list[i].weather[0].main
                    forecast4Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast4Wind.textContent = "Wind: " + data.list[i].wind.speed
                    forecast4Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } else if (i === 32) {
                    forecast5Date.textContent = data.list[i].dt_txt
                    forecast5Status.textContent = data.list[i].weather[0].main
                    forecast5Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast5Wind.textContent = "Wind: " + data.list[i].wind.speed
                    forecast5Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } 
            }
        })
});

