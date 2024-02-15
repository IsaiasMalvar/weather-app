import { firstHit } from "../assets/testData";
import { WeatherData, WeatherDetail } from "../types";
import { convertKelvinToCelsius } from "../utils/convertKelvinToCelsius";
import shiftIcon from "../utils/shiftIcon";

const CurrentTimeWeather = (): React.ReactElement => {
  const testData: WeatherDetail = firstHit;
  return (
    <section className="items-center md:w-[70%] justify-center  md:flex-row w-[50%] gap-y-5 bg-white flex-col font-mono text-orange-50 m-auto mt-10 flex p-5 md:justify-between bg-opacity-15 shadow-lg backdrop-blur-3xl border border-opacity-18 rounded-lg border-solid border-white">
      <span className="text-7xl">
        {convertKelvinToCelsius(testData.main.temp ?? 296.37)}°
      </span>
      <div className="flex justify-center items-center flex-col ">
        <span className="text-4xl">{testData.weather[0].description}</span>
        <div className="justify-center flex ">
          <img
            width={100}
            height={100}
            src={`https://openweathermap.org/img/wn/${shiftIcon(
              firstHit?.weather[0].icon ?? "",
              firstHit?.dt_txt ?? ""
            )}@4x.png`}
          />
        </div>
      </div>
      <div className="flex flex-col gap-y-5 justify-center text-center text-2xl">
        <span>
          Feels like: {convertKelvinToCelsius(firstHit.main.feels_like)}°
        </span>
        <span>{convertKelvinToCelsius(firstHit.main.temp_max)}°↑</span>
        <span>{convertKelvinToCelsius(firstHit.main.temp_min)}°↓</span>
      </div>
    </section>
  );
};

export default CurrentTimeWeather;