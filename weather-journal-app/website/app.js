// Personal API Key for OpenWeatherMap API
const apiKey = "f029632a333bf5bdf8b4795dd060bc0f&units=imperial";

/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + "." + d.getDate() + "." + d.getFullYear();

// Asynchronously fetch the data from the app endpoint
async function getData(url = "") {
    const response = await fetch(url);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}

// POST Function
const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        console.log(newData);
        return newData;
    } catch (error) {
        console.log("Error: ", error);
    }
};

// Update UI function
async function updateUI() {
    console.log("UI Updated");
}

// Weather API action function
async function callWeatherApi(city, key) {
    const geo = await getData(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${key}&units=imperial`
    );

    try {
        const lat = await geo[0].lat;
        const lon = await geo[0].lon;

        const data = await getData(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}`
        );

        return data;

    } catch (error) {
        console.log("Error: ", error);
    }
}

// Perform action function
async function generate() {
    const cityName = document.getElementById("city").value;
    const feeling = document.getElementById("feelings").value;

    callWeatherApi(cityName, apiKey)
        .then(function (data) {
            const allData = {
                city: data.name,
                temperature: data.main.temp,
                weather: data.weather[0].description,
                response: feeling
            };

            postData("/add", allData);
        })
        .then(updateUI());
}


// Add event listener to button
const button = document.getElementById('generate');
button.addEventListener('click', generate);
