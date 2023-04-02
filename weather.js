const temp = document.querySelector(".temp");
const place = document.querySelector(".place");

const saveCoords = (coordsObj) => {
	localStorage.setItem("coords", JSON.stringify(coordsObj));
 }

const onGeoOk = (position) => {
  const latitude = position.coords.latitude;  
  const longitude = position.coords.longitude; 

  // 위도, 경도
  const coordsObj = {
     latitude,
     longitude
   }
  
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
};


const onGeoErr = () => {
  alert('I Cannot Find You.')
};

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoErr)


const API_KEY = "ba32ec26756472fb576e8c4a5ab38332";

const getWeather = (lat, lng) => {
  const weatherApi = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  fetch(weatherApi).then((res) => {
  	return res.json();
   }).then((data) => {
    const nowTemp = data.main.temp;
    const nowPlace = data.name;
    
    temp.innerText = `${nowTemp}°C`;
    place.innerText = nowPlace;
  })
}