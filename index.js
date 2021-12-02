var request = require('request');
var key = ""
request
  .get('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=' + key)
  .on('response', function (response) {
    console.log(response.data) // 200
    response.on('data', function (data) {
      const dataParsed = JSON.parse(data);
      console.log((dataParsed.main.temp - 32) / 1.8)
    })
  });
