

const apiKey = "18ef0bcdc1f0246d1e7e7a07616ca95c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	let data = await response.json();

	if(response.status == 404){
		document.querySelector(".error").style.visibility = "visible";
		document.querySelector(".weather").style.visibility = "hidden";
		
	}
	else{

		let cityName = searchBox.value;

		document.querySelector(".city").innerHTML = cityName;
		document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
		document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
		document.querySelector(".wind").innerHTML = data.wind.speed + " м/с";

		if(data.weather[0].main == "Clouds"){
			weatherIcon.src = "./img/clouds.png";
		}
		else if(data.weather[0].main == "Clear"){
			weatherIcon.src = "./img/clear.png";
		}
		else if(data.weather[0].main == "Rain"){
			weatherIcon.src = "./img/rain.png";
		}
		else if(data.weather[0].main == "Drizzle"){
			weatherIcon.src = "./img/drizzle.png";
		}
		else if(data.weather[0].main == "Mist"){
			weatherIcon.src = "./img/mist.png";
		}
		else if(data.weather[0].main == "Snow"){
			weatherIcon.src = "./img/snow.png";
		}

		document.querySelector(".weather").style.visibility = "visible";
		document.querySelector(".error").style.visibility = "hidden";

		searchBox.value = "";
		
	}
}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
});
searchBox.addEventListener("keypress", function(e){

	if(e.which == 13){
		checkWeather(searchBox.value);
	}
});
