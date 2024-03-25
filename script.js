// a96b9673cecd4f1282b131742241903
// http://api.weatherapi.com/v1

//enter location
//return weather data for location

async function fetchWeather(inputZip) {
  const zip = inputZip;
  const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=a96b9673cecd4f1282b131742241903&q=${zip}`)
  const data = await res.json();
  return data;
}

fetchWeather(30542);
