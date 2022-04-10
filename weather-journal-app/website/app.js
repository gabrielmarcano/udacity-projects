/* Global Variables */

// Personal API Key for OpenWeatherMap API
const apiKey = "f029632a333bf5bdf8b4795dd060bc0f&units=imperial";

// Generate Button
const button = document.getElementById("generate");

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+1 + "/" + d.getDate() + "/" + d.getFullYear();


/* Functions */

// GET Function. Asynchronously fetch the data from the app endpoint
const getData = async (url = "") => {
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

// Weather API action function
const callWeatherApi = async (zip, key) => {
    const response = await getData(
        `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${key}&units=imperial`
    );
    
    try {
        return response;
    } catch (error) {
        console.log("Error: ", error);
    }
}

// Update UI function
const updateUI = async () => {
    const request = await fetch('/data');
    try {
        const data = await request.json();

        document.getElementById("date").innerHTML = 'Date: ' + newDate;
        document.getElementById("temp").innerHTML = 'Temperature: ' + Math.round(data.at(-1).temperature) + ' degrees';
        document.getElementById("content").innerHTML = 'Feeling: ' + data.at(-1).content;

    } catch (error) {
        console.log("Error: ", error);
    }
}

// Perform action function
const generate = async () => {
    const zipCode = document.getElementById("zip").value;
    const feeling = document.getElementById("feelings").value;
    
    callWeatherApi(zipCode, apiKey)
        .then(function (data) {
            const allData = {
                zone: data.name,
                temperature: data.main.temp,
                content: feeling,
            };
    
            postData("/add", allData)
                .then(updateUI());
        })
}

// Add event listener to button
button.addEventListener("click", generate);
