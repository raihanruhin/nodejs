
const path = require('path')

const express = require('express')
const app = express()

// const hbs = require('hbs')
// const partialPath = path.join(__dirname, '../templates/partials')
// hbs.registerPartials(partialPath)
locationToGeocode = require('./utils/locationToGeocode')
geocodeToWeather = require('./utils/geocodeToWeather')

app.get('', (req, res) => {
    res.send('Hello express')
})

// app.get('/weather', (req, res) => {
//     //res.send('Your weather')
//     res.send({
//         forecast: 'It is snowing', 
//         location: 'Philadelphia'
//         })
// })

app.get('/weather', (req, res) => {
    // All query string key/value pairs are on req.query
    //res.send('You provided ' + req.query.address + ' as the address.')
    locationToGeocode(req.query.address, (error, data) => {
        //console.log('debug')
        if (error) {
            //console.log('Error!')
            //return console.log(error)
            res.send('Some error occured getting lat-long')
            return
        }
        console.log(data)
        geocodeToWeather(data.latitude.toFixed(4), data.longitude.toFixed(4), (error, forecastData) => {

            if (error) {
                //return console.log(error)
                res.send('Some error occured getting weather data')
                return
            }
            //console.log(data.location)
            //console.log(forecastData)
            //dataLocation = JSON.stringify(data.location)+"\n"
            forecastData = "\n\n" + forecastData
            console.log(forecastData)
            ret = data.location + forecastData
            res.send(ret)
        })
    })
})

app.get('/hbs', (req, res) => {
    res.render('index', {
        title: 'My title',
        name: 'Andrew Mead'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Error!',
        errorMessage: 'Page not found.'
    })
})


app.set('view engine', 'hbs')

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})