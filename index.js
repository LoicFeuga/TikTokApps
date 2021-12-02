var request = require('request');

request
  .get('https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=8e8cfbea7433359a19db74967518a188')
  .on('response', function (response) {
    console.log(response.data) // 200
    response.on('data', function (data) {
      const dataParsed = JSON.parse(data);
      console.log((dataParsed.main.temp - 32) / 1.8)
    })
  });
