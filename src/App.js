import React, { useState } from "react";
const api = {
  /* key:your api key*/
  /* base:api */
}



function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});




  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {

          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let months = ["January", "Febuary", "March", "April", "May",
      "June", "July", "Augest", "September", "Octomber", "December"];
    let days = ["Sunday", "Monday", "tuesday", "Wednesday", "thurseday", "Friday", "Saturday"];



    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let Year = d.getFullYear();




    return `${day} ${date} ${month} ${Year}`

  }

  return (


    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 16) ? 'app warm' : 'app') : 'app'}>




      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Enter City Name"
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="location-box">
              <div className="location">{weather.name},{weather.sys.country}</div>

              <div className="date">{dateBuilder(new Date())}</div>


            </div>



            <div className="weather-box">
              <div className="temp">
                {Math.round(weather.main.temp)}°C


              </div>
              <div className="weather">{weather.weather[0].main}</div>
              <div className="wind">wind speed  {weather.wind.speed}(m/s)</div>
              <div className="feeels">pressure  {weather.main.pressure}pa</div>
              <div className="humi">Humidity  {weather.main.humidity}%</div>




            </div>
          </div>


        ) : (' ')}
      </main>

    </div>


  );

}



export default App;
