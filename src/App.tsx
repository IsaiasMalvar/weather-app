import { useContext } from "react";
import { WeatherContext } from "./contexts/WeatherC";
import NavBar from "./components/NavBar";
import CurrentTimeWeather from "./components/CurrentTimeWeather";
import CurrentDayWeather from "./components/CurrentDayWeather";
import WeekForecast from "./components/WeekForecast";
import Loader from "./components/Loader";

function App() {
  const {
    clearError,
    isLoading,
    weatherData,
    completeDayCycle,
    firstHit,
    weekForecast,
    place,
  } = useContext(WeatherContext);

  return (
    <>
      {!isLoading && weatherData && firstHit ? (
        <div
          className="min-h-screen bg-gradient-to-br from-[#4676d5]  to-[#19e1ec] p-10 relative"
          onClick={clearError}
        >
          <NavBar />
          <CurrentTimeWeather firstHit={firstHit} place={place} />
          <CurrentDayWeather
            completeDayCycle={completeDayCycle}
            weatherData={weatherData}
            weatherDetailInfo={firstHit}
          />
          <WeekForecast weekForecast={weekForecast} />
        </div>
      ) : isLoading ? (
        <div className=" bg-gradient-to-br from-[#4676d5]  to-[#19e1ec]  relative">
          <Loader />
        </div>
      ) : (
        <div className="bg-gradient-to-br from-[#4676d5]  to-[#19e1ec] min-h-screen flex items-center justify-center text-white">
          <p>Error: Unable to fetch weather data</p>
        </div>
      )}
    </>
  );
}
export default App;
