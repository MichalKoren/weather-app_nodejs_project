const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url= 'https://api.darksky.net/forecast/52bf89cacbdf16d6aa890419f54cbaa0/' + longitude + ',' + latitude + '?units=si&lang=pl'
    request({ url, json:true},(error, {body}) =>{
        if(error){
            callback('Unable to connect to weather service',undefined)
        } else if (body.error) {
            callback('Unable to find location. Write correct location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degress out. This high today is ' + body.daily.data[0].temperatureHigh + ' with a low of ' + body.daily.data[0].temperatureLow + '. There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}
module.exports=forecast