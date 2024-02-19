import { useContext } from "react";
import { WeatherContext } from "./contexts/WeatherC";
import NavBar from "./components/NavBar";
import CurrentTimeWeather from "./components/CurrentTimeWeather";
import CurrentDayWeather from "./components/CurrentDayWeather";

function App() {
  const apiUrl = import.meta.env.VITE_API_ID;
  const { clearError, isLoading } = useContext(WeatherContext);
  console.log(isLoading);

  return (
    <>
      {!isLoading ? (
        <div
          className="min-h-screen bg-gradient-to-br from-[#4676d5]  to-[#19e1ec] p-10 relative"
          onClick={clearError}
        >
          <NavBar />
          <CurrentTimeWeather />
          <CurrentDayWeather />
        </div>
      ) : (
        <div>LOADING</div>
      )}
    </>
  );
}

export default App;
