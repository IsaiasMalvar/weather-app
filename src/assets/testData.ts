import { WeatherData } from "../types";

const weatherData: WeatherData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1708009200,
      main: {
        temp: 302.38,
        feels_like: 303.95,
        temp_min: 302.38,
        temp_max: 307.53,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 56,
        temp_kf: -5.15,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 3.52,
        deg: 116,
        gust: 4.71,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-15 15:00:00",
    },
    {
      dt: 1708020000,
      main: {
        temp: 308.06,
        feels_like: 310.2,
        temp_min: 308.06,
        temp_max: 312.18,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1005,
        humidity: 40,
        temp_kf: -4.12,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 3.11,
        deg: 132,
        gust: 3.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-15 18:00:00",
    },
    {
      dt: 1708030800,
      main: {
        temp: 312.25,
        feels_like: 314.19,
        temp_min: 312.25,
        temp_max: 312.25,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1003,
        humidity: 29,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 3.31,
        deg: 303,
        gust: 3.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-15 21:00:00",
    },
    {
      dt: 1708041600,
      main: {
        temp: 303.35,
        feels_like: 306.58,
        temp_min: 303.35,
        temp_max: 303.35,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 5.6,
        deg: 341,
        gust: 9.19,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-16 00:00:00",
    },
    {
      dt: 1708052400,
      main: {
        temp: 300.84,
        feels_like: 303.96,
        temp_min: 300.84,
        temp_max: 300.84,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.38,
        deg: 325,
        gust: 7.29,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-16 03:00:00",
    },
    {
      dt: 1708063200,
      main: {
        temp: 299.86,
        feels_like: 302.26,
        temp_min: 299.86,
        temp_max: 299.86,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 0.82,
        deg: 281,
        gust: 0.96,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-16 06:00:00",
    },
    {
      dt: 1708074000,
      main: {
        temp: 300.26,
        feels_like: 302.37,
        temp_min: 300.26,
        temp_max: 300.26,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 52,
      },
      wind: {
        speed: 3.52,
        deg: 168,
        gust: 9.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-16 09:00:00",
    },
    {
      dt: 1708084800,
      main: {
        temp: 299.94,
        feels_like: 302.03,
        temp_min: 299.94,
        temp_max: 299.94,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 2.04,
        deg: 163,
        gust: 5.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-16 12:00:00",
    },
    {
      dt: 1708095600,
      main: {
        temp: 306.95,
        feels_like: 310.47,
        temp_min: 306.95,
        temp_max: 306.95,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 48,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 3.59,
        deg: 133,
        gust: 4.37,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-16 15:00:00",
    },
    {
      dt: 1708106400,
      main: {
        temp: 312.12,
        feels_like: 315.13,
        temp_min: 312.12,
        temp_max: 312.12,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 3.16,
        deg: 144,
        gust: 4.24,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-16 18:00:00",
    },
    {
      dt: 1708117200,
      main: {
        temp: 313.16,
        feels_like: 315.44,
        temp_min: 313.16,
        temp_max: 313.16,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 1001,
        humidity: 28,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.2,
        deg: 158,
        gust: 3.34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-16 21:00:00",
    },
    {
      dt: 1708128000,
      main: {
        temp: 304.84,
        feels_like: 308.16,
        temp_min: 304.84,
        temp_max: 304.84,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1003,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 4.71,
        deg: 304,
        gust: 8.36,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-17 00:00:00",
    },
    {
      dt: 1708138800,
      main: {
        temp: 302.47,
        feels_like: 305.25,
        temp_min: 302.47,
        temp_max: 302.47,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1005,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 2.63,
        deg: 316,
        gust: 6.52,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-17 03:00:00",
    },
    {
      dt: 1708149600,
      main: {
        temp: 301.19,
        feels_like: 303.63,
        temp_min: 301.19,
        temp_max: 301.19,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1004,
        humidity: 68,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 1.39,
        deg: 230,
        gust: 1.53,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-17 06:00:00",
    },
    {
      dt: 1708160400,
      main: {
        temp: 300.72,
        feels_like: 302.9,
        temp_min: 300.72,
        temp_max: 300.72,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1004,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 1.78,
        deg: 177,
        gust: 3.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-17 09:00:00",
    },
    {
      dt: 1708171200,
      main: {
        temp: 300.98,
        feels_like: 303.74,
        temp_min: 300.98,
        temp_max: 300.98,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 2.08,
        deg: 160,
        gust: 3.54,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-17 12:00:00",
    },
    {
      dt: 1708182000,
      main: {
        temp: 307.53,
        feels_like: 312.04,
        temp_min: 307.53,
        temp_max: 307.53,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 2.65,
        deg: 176,
        gust: 2.78,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-17 15:00:00",
    },
    {
      dt: 1708192800,
      main: {
        temp: 311.98,
        feels_like: 316.14,
        temp_min: 311.98,
        temp_max: 311.98,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 35,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 81,
      },
      wind: {
        speed: 1.41,
        deg: 189,
        gust: 2.82,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-17 18:00:00",
    },
    {
      dt: 1708203600,
      main: {
        temp: 307.38,
        feels_like: 312.05,
        temp_min: 307.38,
        temp_max: 307.38,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1002,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 4.56,
        deg: 265,
        gust: 4.81,
      },
      visibility: 10000,
      pop: 0.37,
      rain: {
        "3h": 0.11,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-17 21:00:00",
    },
    {
      dt: 1708214400,
      main: {
        temp: 303.46,
        feels_like: 307.95,
        temp_min: 303.46,
        temp_max: 303.46,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 5.16,
        deg: 291,
        gust: 7.33,
      },
      visibility: 10000,
      pop: 0.23,
      rain: {
        "3h": 0.16,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-18 00:00:00",
    },
    {
      dt: 1708225200,
      main: {
        temp: 300.59,
        feels_like: 304.01,
        temp_min: 300.59,
        temp_max: 300.59,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1007,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 42,
      },
      wind: {
        speed: 3.07,
        deg: 301,
        gust: 5.55,
      },
      visibility: 10000,
      pop: 0.15,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-18 03:00:00",
    },
    {
      dt: 1708236000,
      main: {
        temp: 299.66,
        feels_like: 299.66,
        temp_min: 299.66,
        temp_max: 299.66,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 33,
      },
      wind: {
        speed: 1.52,
        deg: 266,
        gust: 2.85,
      },
      visibility: 10000,
      pop: 0.37,
      rain: {
        "3h": 0.63,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-18 06:00:00",
    },
    {
      dt: 1708246800,
      main: {
        temp: 299.33,
        feels_like: 299.33,
        temp_min: 299.33,
        temp_max: 299.33,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 87,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.34,
        deg: 222,
        gust: 1.89,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-18 09:00:00",
    },
    {
      dt: 1708257600,
      main: {
        temp: 299.9,
        feels_like: 302.67,
        temp_min: 299.9,
        temp_max: 299.9,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 1.38,
        deg: 197,
        gust: 2.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-18 12:00:00",
    },
    {
      dt: 1708268400,
      main: {
        temp: 306.49,
        feels_like: 311.41,
        temp_min: 306.49,
        temp_max: 306.49,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 2.05,
        deg: 178,
        gust: 2.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-18 15:00:00",
    },
    {
      dt: 1708279200,
      main: {
        temp: 311.16,
        feels_like: 315.7,
        temp_min: 311.16,
        temp_max: 311.16,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 1006,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 2.01,
        deg: 218,
        gust: 2.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-18 18:00:00",
    },
    {
      dt: 1708290000,
      main: {
        temp: 307.12,
        feels_like: 311.82,
        temp_min: 307.12,
        temp_max: 307.12,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1004,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 4.89,
        deg: 287,
        gust: 5.32,
      },
      visibility: 10000,
      pop: 0.06,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-18 21:00:00",
    },
    {
      dt: 1708300800,
      main: {
        temp: 302.64,
        feels_like: 306.77,
        temp_min: 302.64,
        temp_max: 302.64,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 5.06,
        deg: 298,
        gust: 7.91,
      },
      visibility: 10000,
      pop: 0.37,
      rain: {
        "3h": 0.33,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-19 00:00:00",
    },
    {
      dt: 1708311600,
      main: {
        temp: 300.07,
        feels_like: 303.27,
        temp_min: 300.07,
        temp_max: 300.07,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 2.64,
        deg: 327,
        gust: 6.08,
      },
      visibility: 10000,
      pop: 0.23,
      rain: {
        "3h": 0.55,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-19 03:00:00",
    },
    {
      dt: 1708322400,
      main: {
        temp: 299.43,
        feels_like: 299.43,
        temp_min: 299.43,
        temp_max: 299.43,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 89,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 45,
      },
      wind: {
        speed: 2.01,
        deg: 305,
        gust: 3.94,
      },
      visibility: 10000,
      pop: 0.29,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-19 06:00:00",
    },
    {
      dt: 1708333200,
      main: {
        temp: 299.86,
        feels_like: 302.65,
        temp_min: 299.86,
        temp_max: 299.86,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 0.89,
        deg: 297,
        gust: 1.81,
      },
      visibility: 10000,
      pop: 0.37,
      rain: {
        "3h": 0.17,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-19 09:00:00",
    },
    {
      dt: 1708344000,
      main: {
        temp: 300.19,
        feels_like: 303.17,
        temp_min: 300.19,
        temp_max: 300.19,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 0.96,
        deg: 172,
        gust: 1.39,
      },
      visibility: 10000,
      pop: 0.27,
      rain: {
        "3h": 0.16,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-19 12:00:00",
    },
    {
      dt: 1708354800,
      main: {
        temp: 305.95,
        feels_like: 310.83,
        temp_min: 305.95,
        temp_max: 305.95,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1011,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 1.71,
        deg: 174,
        gust: 1.39,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-19 15:00:00",
    },
    {
      dt: 1708365600,
      main: {
        temp: 310.58,
        feels_like: 314.88,
        temp_min: 310.58,
        temp_max: 310.58,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1007,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 1.13,
        deg: 193,
        gust: 2.05,
      },
      visibility: 10000,
      pop: 0.3,
      rain: {
        "3h": 0.16,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-19 18:00:00",
    },
    {
      dt: 1708376400,
      main: {
        temp: 305.08,
        feels_like: 309.77,
        temp_min: 305.08,
        temp_max: 305.08,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.8,
        deg: 281,
        gust: 7.4,
      },
      visibility: 10000,
      pop: 0.25,
      rain: {
        "3h": 0.15,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-19 21:00:00",
    },
    {
      dt: 1708387200,
      main: {
        temp: 302.72,
        feels_like: 307.16,
        temp_min: 302.72,
        temp_max: 302.72,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 3.71,
        deg: 294,
        gust: 7.2,
      },
      visibility: 10000,
      pop: 0.29,
      rain: {
        "3h": 0.2,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-20 00:00:00",
    },
    {
      dt: 1708398000,
      main: {
        temp: 300.58,
        feels_like: 303.75,
        temp_min: 300.58,
        temp_max: 300.58,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 3.05,
        deg: 316,
        gust: 6.33,
      },
      visibility: 10000,
      pop: 0.22,
      rain: {
        "3h": 0.21,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-20 03:00:00",
    },
    {
      dt: 1708408800,
      main: {
        temp: 299.41,
        feels_like: 299.41,
        temp_min: 299.41,
        temp_max: 299.41,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1009,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 20,
      },
      wind: {
        speed: 1.83,
        deg: 287,
        gust: 2.97,
      },
      visibility: 10000,
      pop: 0.25,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-20 06:00:00",
    },
    {
      dt: 1708419600,
      main: {
        temp: 299.36,
        feels_like: 299.36,
        temp_min: 299.36,
        temp_max: 299.36,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1008,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 53,
      },
      wind: {
        speed: 1.05,
        deg: 194,
        gust: 1.55,
      },
      visibility: 10000,
      pop: 0.1,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-02-20 09:00:00",
    },
    {
      dt: 1708430400,
      main: {
        temp: 299.69,
        feels_like: 299.69,
        temp_min: 299.69,
        temp_max: 299.69,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 1010,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 64,
      },
      wind: {
        speed: 2.36,
        deg: 146,
        gust: 4.75,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-02-20 12:00:00",
    },
  ],
  city: {
    id: 3792392,
    name: "Tenerife",
    coord: {
      lat: 9.9003,
      lon: -74.859,
    },
    country: "CO",
    population: 48606,
    timezone: -18000,
    sunrise: 1707995960,
    sunset: 1708038485,
  },
};

const firstHit = weatherData.list[0];
