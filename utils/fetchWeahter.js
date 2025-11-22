const request = require("request");

async function fetchWeather(address) {
  const url = `https://api.weatherstack.com/current?access_key=46dbe9a8654349bdd078883667aa303a&query=${encodeURIComponent(
    address
  )}`;

  const weahterData = {
    error: null,
    data: null,
  };

  return new Promise((res, rej) => {
    request({ url, json: true }, (error, response) => {
      if (error) rej({ error, data: null });
      else res({ errro: null, data: response.body });
    });
  });
}

module.exports = fetchWeather;
