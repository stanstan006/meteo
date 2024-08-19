const apicle = "3bdf0df3fd8000d9c4017e72960e1f88"

const wathEl = document.getElementById("weather-data")

const ville = document.getElementById("city-input")

const formEl = document.querySelector('form')


formEl.addEventListener("submit",(event) => {
    event.preventDefault()
    const valVille = ville.value;
    getWeather(valVille)
})

async function getWeather(valVille) {
     try {
        const reponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${valVille}&appid=${apicle}&units=metric`)
        if (!reponse.ok){
            throw new Error("Failed to get weather")
        }

        const data = await reponse.json()

        const temperature = Math.round(data.main.temp)

        const description = data.weather[0].description

        const icon = data.weather[0].icon

        const details = [
            `Feel like: ${Math.round(data.main.temp)}`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ]
        wathEl.querySelector(".icon").innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="">`;
        wathEl.querySelector(".temperature").textContent = `${temperature}°C`;
        wathEl.querySelector(".description").textContent = description;
        wathEl.querySelector(".details").innerHTML = details.map((details)=>`<div>${details}</div>`).join("");
     } catch (error) {
        wathEl.querySelector(".icon").innerHTML = "";
        wathEl.querySelector(".temperature").textContent = "";
        wathEl.querySelector(".description").textContent = "Une erreur s'est produite. Veuillez réessayer plus tard, s'il vous plaît.";
        wathEl.querySelector(".details").innerHTML = "";
     }
} 