var searchBtn = document.getElementById(`search-button`);
var searchHistory = document.querySelector(`.search-history`)
// current weather display
var todayDateH2 = document.getElementById(`today-date`);
var todayImg = document.querySelector(`#today-icon`)
var todayStatusP = document.getElementById(`today-status`);
var todayTempP = document.getElementById(`today-temp`);
var todayWindP = document.getElementById(`today-wind`);
var todayHumidityP = document.getElementById(`today-humidity`);
// 5 day forecast display
// day 1
var forecastContainer = document.querySelector(`.future-card-container`)
var forecast1Date = document.getElementById("day-1-date");
var forecast1Img = document.querySelector(`#day-1-icon`)
var forecast1Status = document.getElementById("day-1-status");
var forecast1Temp = document.getElementById("day-1-temp");
var forecast1Wind = document.getElementById("day-1-wind");
var forecast1Humidity = document.getElementById("day-1-humidity");
// day 2
var forecast2Date = document.getElementById("day-2-date");
var forecast2Img = document.querySelector(`#day-2-icon`)
var forecast2Status = document.getElementById("day-2-status");
var forecast2Temp = document.getElementById("day-2-temp");
var forecast2Wind = document.getElementById("day-2-wind");
var forecast2Humidity = document.getElementById("day-2-humidity");
// day 3
var forecast3Date = document.getElementById("day-3-date");
var forecast3Img = document.querySelector(`#day-3-icon`)
var forecast3Status = document.getElementById("day-3-status");
var forecast3Temp = document.getElementById("day-3-temp");
var forecast3Wind = document.getElementById("day-3-wind");;
var forecast3Humidity = document.getElementById("day-3-humidity");
// day 4
var forecast4Date = document.getElementById("day-4-date");
var forecast4Img = document.querySelector(`#day-4-icon`)
var forecast4Status = document.getElementById("day-4-status");
var forecast4Temp = document.getElementById("day-4-temp");
var forecast4Wind = document.getElementById("day-4-wind");;
var forecast4Humidity = document.getElementById("day-4-humidity");
// day 5
var forecast5Date = document.getElementById("day-5-date");
var forecast5Img = document.querySelector(`#day-5-icon`)
var forecast5Status = document.getElementById("day-5-status");
var forecast5Temp = document.getElementById("day-5-temp");
var forecast5Wind = document.getElementById("day-5-wind");;
var forecast5Humidity = document.getElementById("day-5-humidity");

// adds search history buttons to page on page load
saveButtons();
// on search button click, fetch weather data of form inputs 
searchBtn.addEventListener(`click`, function (event) {
    event.preventDefault();
    var cityInput = document.querySelector(`#city`).value;
    var stateInput = document.querySelector(`#state`).value;
    saveStorage();

    // current weather
    fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${stateInput}&units=imperial&appid=2d366e18c86a41181932b01ab1dc31b7`)
        .then (function(response){
             return response.json();
        })
        .then (function (data) {
            todayDateH2.textContent = "Today";
            todayImg.setAttribute(`src`,`./assets/icons/${data.weather[0].icon}.png`)
            todayStatusP.textContent = data.weather[0].main;
            todayTempP.textContent = "Temperature: " + data.main.temp + "";
            todayWindP.textContent = "Wind: " + data.wind.speed;
            todayHumidityP.textContent = "Humidity: " + data.main.humidity;
        })
    fetch (`https://api.openweathermap.org/data/2.5/forecast?q=${cityInput},${stateInput}&units=imperial&appid=2d366e18c86a41181932b01ab1dc31b7`)    
        .then (function(response){
             return response.json();
        })
        .then (function (data) {
            for (let i = 0; i < 40; i++) {
                forecastContainer.setAttribute(`class`,`future-card-container`)
                if (i === 0) {
                    forecast1Date.textContent = data.list[i].dt_txt
                    forecast1Img.setAttribute(`src`,`./assets/icons/${data.list[i].weather[0].icon}.png`)
                    forecast1Status.textContent = data.list[i].weather[0].main
                    forecast1Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast1Wind.textContent =  "Wind: " + data.list[i].wind.speed
                    forecast1Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } else if (i === 8) {
                    forecast2Date.textContent = data.list[i].dt_txt
                    forecast2Img.setAttribute(`src`,`./assets/icons/${data.list[i].weather[0].icon}.png`)
                    forecast2Status.textContent = data.list[i].weather[0].main
                    forecast2Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast2Wind.textContent = "Wind: " + data.list[i].wind.speed
                    forecast2Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } else if (i === 16) {
                    forecast3Date.textContent = data.list[i].dt_txt
                    forecast3Img.setAttribute(`src`,`./assets/icons/${data.list[i].weather[0].icon}.png`)
                    forecast3Status.textContent = data.list[i].weather[0].main
                    forecast3Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast3Wind.textContent = "Wind: " + data.list[i].wind.speed
                    forecast3Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } else if (i === 24) {
                    forecast4Date.textContent = data.list[i].dt_txt
                    forecast4Img.setAttribute(`src`,`./assets/icons/${data.list[i].weather[0].icon}.png`)
                    forecast4Status.textContent = data.list[i].weather[0].main
                    forecast4Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast4Wind.textContent = "Wind: " + data.list[i].wind.speed
                    forecast4Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } else if (i === 32) {
                    forecast5Date.textContent = data.list[i].dt_txt
                    forecast5Img.setAttribute(`src`,`./assets/icons/${data.list[i].weather[0].icon}.png`)
                    forecast5Status.textContent = data.list[i].weather[0].main
                    forecast5Temp.textContent = "Temperature: " + data.list[i].main.temp
                    forecast5Wind.textContent = "Wind: " + data.list[i].wind.speed
                    forecast5Humidity.textContent = "Humidity: " + data.list[i].main.humidity
                } 
            }
        })
});

// save form inputs to local storage and  store on page
function saveStorage () {
    var history = JSON.parse(localStorage.getItem(`history`))|| [];
    var cityInput = document.querySelector(`#city`).value;
    var stateInput = document.querySelector(`#state`).value;
    var userInput = {city: cityInput, state: stateInput}

    var historyBtn = document.createElement(`button`)
    historyBtn.setAttribute(`id`,`history-button`)
    historyBtn.textContent = `${cityInput}, ${stateInput}`
    searchHistory.append(historyBtn)

    history.push(userInput)
    localStorage.setItem(`history`, JSON.stringify(history))
    history = JSON.parse(localStorage.getItem(`history`));
}

// saves search history buttons on page
function saveButtons () {
    var history = JSON.parse(localStorage.getItem(`history`))|| [];
    for (let i=0;i<history.length;i++) {
        var historyBtn = document.createElement(`button`)
    historyBtn.setAttribute(`id`,`history-button`)
    historyBtn.textContent = `${history[i].city}, ${history[i].state}`
    searchHistory.append(historyBtn)
    } 
}

// if click past search will autofill form with that input
document.addEventListener(`click`,function(event) {
    var clicked = event.target;
    var history = JSON.parse(localStorage.getItem(`history`));
    if (clicked.id === `history-button`) {
        for (let i=0;i<history.length;i++) {
            if (clicked.textContent.includes(`${history[i].city}`)) {
                console.log(`clicked on ${history[i].city}`)
                document.querySelector(`#city`).value = history[i].city
                document.querySelector(`#state`).value = history[i].state
                searchBtn.click()
            }
        }
    }
})