import { WiSunset } from "react-icons/wi";
import { BiWind } from "react-icons/bi";
import { WiSunrise } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { MdOutlineVisibility } from "react-icons/md";
import { completeDayCycle, firstHit, weatherData } from "../assets/testData";
import { convertWindSpeed } from "../utils/convertWindSpeed";
import { metersToKilometers } from "../utils/metersToKilometers";
import WeatherDetail from "./WeatherDetail";
import { format, fromUnixTime, parseISO } from "date-fns";
import shiftIcon from "../utils/shiftIcon";
import { convertKelvinToCelsius } from "../utils/convertKelvinToCelsius";

const CurrentDayWeather = (): React.ReactElement => {
  const testData = weatherData;
  const testData1 = firstHit;
  const testData2 = completeDayCycle;

  return (
    <>
      <section className="w-[80%] m-auto mt-5 p-7 flex flex-col gap-y-28 border border-opacity-18 bg-blue-500 bg-opacity-15 rounded-lg border-solid border-white text-orange-50 shadow-lg backdrop-blur-3xl  border-opacity-18">
        <div className="flex p-5 justify-evenly gap-x-5 text-center">
          <WeatherDetail
            information="Visibility"
            icon={<MdOutlineVisibility />}
            value={metersToKilometers(testData1.visibility)}
          />
          <WeatherDetail
            information="Air Pressure"
            icon={<WiBarometer />}
            value={`${testData1.main.pressure} hPa`}
          />
          <WeatherDetail
            information="Humidity"
            icon={<WiHumidity />}
            value={`${testData1.main.humidity}%`}
          />
        </div>
        <div className="flex gap-10 sm:gap-16 overflow-x-auto w-full justify-between ">
          {testData2?.map((d, i) => (
            <div
              key={i}
              className="flex flex-col justify-between gap-2 items-center text-xs font-semibold "
            >
              <p className="whitespace-nowrap">
                {format(parseISO(d.dt_txt), "h:mm a")}
              </p>

              <div className="relative h-20 w-20">
                <img
                  width={100}
                  height={100}
                  alt="weather-icon"
                  className="absolute w-full h-full"
                  src={`https://openweathermap.org/img/wn/${shiftIcon(
                    d.weather[0].icon,
                    d.dt_txt
                  )}@4x.png`}
                />
              </div>
              <p>{convertKelvinToCelsius(d?.main.temp ?? 0)}°</p>
            </div>
          ))}
        </div>
        <div className="flex p-5 justify-evenly gap-x-5 text-center">
          <WeatherDetail
            information="Sunrise"
            icon={<WiSunrise />}
            value={format(
              fromUnixTime(testData?.city.sunrise ?? 1702949452),
              "H:mm"
            )}
          />
          <WeatherDetail
            information="Wind Speed"
            icon={<BiWind />}
            value={convertWindSpeed(firstHit.wind.speed)}
          />
          <WeatherDetail
            information="Sunset"
            icon={<WiSunset />}
            value={format(
              fromUnixTime(testData?.city.sunset ?? 1702517657),
              "H:mm"
            )}
          />
        </div>
      </section>
      <section></section>
    </>
  );
};

export default CurrentDayWeather;
