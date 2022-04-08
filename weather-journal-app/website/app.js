// Personal API Key for OpenWeatherMap API
const apiKey = 'secret&units=imperial';

/* Global Variables */

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


// Asynchronously fetch the data from the app endpoint
async function getData(url='', key='') {
    const response = await fetch(url+key);
    try {
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Error: ", error);
    }
}