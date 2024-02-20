import { format, parseISO } from "date-fns";
import { WeatherData, WeatherSingleDetail } from "../types";
import { convertKelvinToCelsius } from "../utils/convertKelvinToCelsius";
import shiftIcon from "../utils/shiftIcon";

interface CurrentTimeWeatherProps {
  place: string;
  firstHit: WeatherSingleDetail;
}

const CurrentTimeWeather = ({
  firstHit,
  place,
}: CurrentTimeWeatherProps): React.ReactElement => {
  return (
    <>
      <div className="m-auto text-center font-mono text-white">
        <h2 className="text-6xl mt-3 ">{place.toUpperCase()}</h2>
        <h2 className="flex gap-1 text-5xl  items-end mt-4 text-center justify-center">
          <p>{format(parseISO(firstHit?.dt_txt ?? ""), "EEEE")}</p>
          <p className="text-3xl">
            ({format(parseISO(firstHit?.dt_txt ?? ""), "dd.MM.yyyy")})
          </p>
        </h2>
      </div>
      <section className="items-center mt-[6rem] md:w-[80%] justify-center w-[90%]    md:flex-row  gap-y-5 bg-white flex-col  text-orange-50 m-auto  flex p-5 md:justify-between bg-opacity-15 shadow-lg backdrop-blur-3xl border border-opacity-18 rounded-lg border-solid border-white font-mono">
        <span className="text-7xl text-center ">
          {convertKelvinToCelsius(firstHit.main.temp ?? 296.37)}°
        </span>
        <div className="flex justify-center items-center flex-col text-center leading-6">
          <span className="text-3xl min-[895px]:text-4xl text-center uppercase">
            {firstHit.weather[0].description}
          </span>
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
        <div className="flex flex-col gap-y-1 justify-center text-center text-3xl min-[895px]:text-4xl">
          <span>
            Feels like: {convertKelvinToCelsius(firstHit.main.feels_like)}°
          </span>
          <span>{convertKelvinToCelsius(firstHit.main.temp_max)}°↑</span>
          <span>{convertKelvinToCelsius(firstHit.main.temp_min)}°↓</span>
        </div>
      </section>
    </>
  );
};

export default CurrentTimeWeather;
