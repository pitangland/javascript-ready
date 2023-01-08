const API_KEY = "86c9b859e02faaa5680f26a34785d6cc";
const city = document.querySelector("#weather span:first-child");
const weather = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}도`;
    });
}

function onGeoError() {
  alert("위치를 허용해주시거나! 지역을 찾을 수 없습니다!");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
