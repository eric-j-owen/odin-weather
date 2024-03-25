async function fetchWeather(inputZip) {
  const zip = inputZip;
  const res = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=a96b9673cecd4f1282b131742241903&q=${zip}`
  );
  const data = await res.json();
  return data;
}

document.querySelector("button").addEventListener("click", async (e) => {
  e.preventDefault();
  const data = await fetchWeather(document.querySelector("input").value);
  console.log(data)
  document.querySelector(".location").textContent = await `${data.location.name}, ${data.location.region}`;
  document.querySelector(".temp").textContent = await `${data.current.condition.text} at ${data.current.temp_f} degrees`
});
