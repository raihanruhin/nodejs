const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/a08060b0cf4550195f11c4a85a35cd19/'+lat+','+long//37.8267,-122.4233'
    console.log(url)
    request({ url: url, json: true }, (error, response) => {
        // Parse the response body from JSON string into JavaScript object
        //const data = JSON.parse(response.body)
        // Will print the current temperature to the console
        //console.log(data.currently.temperature)

        //console.log(response.body.currently.temperature)

        request({ url: url, json: true }, (error, response) => {
            if (error) {
                callback('Unable to connect to location services!', undefined)
            } else if (response.body.length === 0) {
                callback('Unable to find location. Try another search.',
                    undefined)
            } else {
                //console.log(response.body)
                callback(undefined, response.body.daily.data[0].summary + ' It is currently ' +
                    response.body.currently.temperature + ' degrees out. There is a ' +
                    response.body.currently.precipProbability + '% chance of rain.')
            }
        })
    })
}

module.exports = forecast