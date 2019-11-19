locationToGeocode = require('./utils/locationToGeocode')
geocodeToWeather = require('./utils/geocodeToWeather')

locationToGeocode('Philadelphia', (error, data) => {    
    //console.log('debug')
    if (error) {
        console.log('Error!')
        return console.log(error)
    }
    console.log(data)
    geocodeToWeather(data.latitude.toFixed(4), data.longitude.toFixed(4), (error, forecastData) => {
        
        if (error) {
            return console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})