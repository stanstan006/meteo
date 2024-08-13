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
       console.log(data)

        const temperature = Math.round(data.main.temp)

        const decription = data.weather[0].description

        const icon = data.weather[0].icon

        const details = [
            `Feel like: ${Math.round(data.main.temp)}`
            `Humidity: ${data.main.humidity}`
            `Wind speed: ${data.wind.speed} m/s`
        ]

     } catch (error) {
        
     }
} 