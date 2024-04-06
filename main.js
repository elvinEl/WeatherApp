const url = "https://api.openweathermap.org/data/2.5";
const key = "dd5edeecb24557696ce1c558e83c101e";
const nameInput = document.querySelector("#cityName");

const getQuery = (e) => {
  const cityName = nameInput.value;
  if (e.charCode === 13) {
    e.preventDefault();
    apiRequest(cityName);
  }
};

const apiRequest = async (cityName) => {
  const query = `${url}/weather?q=${cityName}&appid=${key}&lang=az`;
  const response = await axios.get(query);

  const weather = response.data;
  const city = weather.name;
  const weatherData = weather && weather.weather[0].description;
  const tempData = weather && weather.main.temp;
  const tempTag = document.querySelector("#temp");
  tempTag.textContent = tempData;
  const weatherTag = document.querySelector("#weatherDescription");
  weatherTag.textContent = weatherData;
  const cityTag = document.querySelector("#city");
  cityTag.textContent = city;
};

nameInput.addEventListener("keypress", getQuery);
