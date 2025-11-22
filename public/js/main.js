const address = document.getElementById("address");
const container = document.getElementById("forecast");
const form = document.querySelector("form");

console.log("first");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchWeatherData();
});

let userLocation = "";
address.addEventListener("change", (e) => {
  userLocation = e.target.value;
  console.log("entered location", userLocation);
});

async function fetchWeatherData() {
  try {
    const url = `https://api.weatherstack.com/current?access_key=46dbe9a8654349bdd078883667aa303a&query=${encodeURIComponent(
      userLocation
    )}`;

    const resp = await fetch(url, {
      method: "GET",
    });

    const jsonData = await resp.json();
    container.innerText =
      "The temperature of " +
      jsonData.location.name +
      " is " +
      jsonData.current.temperature +
      " celcius";
  } catch (e) {
    container.innerText = e;
  }
}
