import { useContext } from "react";
import { WeatherContext } from "./contexts/WeatherC";
import NavBar from "./components/NavBar";
import CurrentTimeWeather from "./components/CurrentTimeWeather";
import CurrentDayWeather from "./components/CurrentDayWeather";
import WeekForecast from "./components/WeekForecast";
import Loader from "./components/Loader";

const App = (): React.ReactElement => {
  const {
    clearError,
    isLoading,
    weatherData,
    completeDayCycle,
    firstHit,
    weekForecast,
    place,
  } = useContext(WeatherContext);

  console.log(isLoading);

  return (
    <>
      {!isLoading && weatherData && firstHit ? (
        <div
          className="min-h-screen bg-gradient-to-br from-[#4676d5]  to-[#19e1ec] p-10 relative"
          onClick={clearError}
        >
          <NavBar />
          <CurrentTimeWeather
            firstHit={firstHit}
            place={place === "Tenerife" ? place + ", " + "Spain" : place}
          />
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
          <p>
            Unfortunately, weather information for {place} is not available at
            this moment.
          </p>
        </div>
      )}
    </>
  );
};
export default App;
