const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b53cabe5e5d7a3d5129a84f88c931f9c&query=' + latitude + ',' + longitude + '&units=f'

    request({url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " + body.current.temperature +". It feels like " + body.current.feelslike + ". The humidity is " 
            + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast



// const url = 'http://api.weatherstack.com/current?access_key=b53cabe5e5d7a3d5129a84f88c931f9c&query=37.8267,-122.4233&units=f'

// request({ url: url, json: true }, (error, response) => {

//     if (error) {
//         console.log('Unable to connect to weather service')
//     } else if (response.body.error) {
//         console.log("Unable to find location")
//     } else {
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently " + response.body.current.temperature +". It feels like " + response.body.current.feelslike)
//     }

// })