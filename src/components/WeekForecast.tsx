import { format, parseISO } from "date-fns";
import shiftIcon from "../utils/shiftIcon";
import convertKelvinToCelsius from "../utils/convertKelvinToCelsius";
import { WeatherSingleDetail } from "../types";

interface WeekForecastProps {
  weekForecast: WeatherSingleDetail[];
}

const WeekForecast = ({
  weekForecast,
}: WeekForecastProps): React.ReactElement => {
  return (
    <section className="flex w-full flex-col gap-4 mt-10 bg-white bg-opacity-15 p-5 justify-center border-2 rounded-lg">
      <p className="text-5xl md:text-8xl text-center font-mono text-white">
        Week Forecast
      </p>
      <div className="flex max-[560px]:flex-row overflow-x-auto gap-x-10  text-2xl min-[895px]:text-5xl gap-y-16 font-mono max-[560px]:justify-between justify-evenly max-[560px]:flex-nowrap flex-wrap items-center max-[560px]:text-xl">
        {weekForecast
          .filter((d) => d)
          .map((d, i) => (
            <div
              key={i}
              className="flex flex-col  w-[30%] text-white justify-center items-center "
            >
              <div className="">
                <img
                  width={100}
                  height={100}
                  src={`https://openweathermap.org/img/wn/${shiftIcon(
                    d?.weather[0].icon ?? "",
                    d?.dt_txt ?? ""
                  )}@4x.png`}
                />
              </div>
              <p></p>

              <p className="text-center ">
                {format(parseISO(d?.dt_txt ?? ""), "dd")}{" "}
                {format(parseISO(d?.dt_txt ?? ""), "EEEE").slice(0, 3)}
              </p>
              <p></p>
              <p>{convertKelvinToCelsius(d?.main.temp ?? 0)}°</p>
              <div className="flex flex-col  ">
                <span className="text-center ">
                  {" "}
                  Feels like:{" "}
                  {convertKelvinToCelsius(d?.main.feels_like ?? 0 ?? 0)}°
                </span>
              </div>
              <span>{convertKelvinToCelsius(d.main.temp_max)}°↑</span>
              <span>{convertKelvinToCelsius(d.main.temp_min)}°↓</span>
            </div>
          ))}
      </div>
    </section>
  );
};

export default WeekForecast;
