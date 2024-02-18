import React from "react";
import TempCard from "./TempCard";
import { IoLocation } from "react-icons/io5";
import { FaCalendarDays } from "react-icons/fa6";
import { TbTemperatureCelsius, TbTemperatureFahrenheit } from "react-icons/tb";
import { WiCloudyWindy, WiHumidity } from "react-icons/wi";
import { IoMdSpeedometer } from "react-icons/io";

interface TemperatureProps {
  weather: WeatherData;
}

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
    // lat: number;
    // lon: number;
    // tz_id: string;
    // localtime_epoch: number;
    // localtime: string;
  };
  current: {
    // last_updated_epoch: number;
    // last_updated: string;
    temp_c: number;
    temp_f: number;
    is_day: number;
    // condition: {
    //   text: string;
    //   icon: string;
    //   code: number;
    // };
    wind_mph: number;
    wind_kph: number;
    // wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    pressure_in: number;
    // precip_mm: number;
    // precip_in: number;
    humidity: number;
    // cloud: number;
    feelslike_c: number;
    feelslike_f: number;
    // vis_km: number;
    // vis_miles: number;
    // uv: number;
    // gust_mph: number;
    // gust_kph: number;
  };
}

const Temperature: React.FC<TemperatureProps> = (props) => {
  const { weather } = props;
  const Day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const weatherData = [
    {
      // location
      head: `${weather.location.name}, ${weather.location.region}`,
      logo: <IoLocation />,
      tail: weather.location.country,
    },
    {
      // day
      head: Day[weather.current.is_day],
      logo: <FaCalendarDays />,
      tail: "22/01/2003",
    },
    {
      // tempC feelslike
      head: `${weather.current.temp_c}°C`,
      logo: <TbTemperatureCelsius />,
      tail: `Feels like ${weather.current.feelslike_c}°C`,
    },
    {
      // tempF feelslike
      head: `${weather.current.temp_f}°F`,
      logo: <TbTemperatureFahrenheit />,
      tail: `Feels like ${weather.current.feelslike_f}°F`,
    },
    {
      // wind speed
      head: "Wind",
      logo: <WiCloudyWindy />,
      tail: `${weather.current.wind_kph}kph / ${weather.current.wind_mph}mph ${weather.current.wind_dir}`,
    },
    {
      // pressure
      head: "Pressure",
      logo: <IoMdSpeedometer />,
      tail: `${weather.current.pressure_in}in / ${weather.current.pressure_mb}mb`,
    },
    {
      // humidity
      head: "Humidity",
      logo: <WiHumidity />,
      tail: `${weather.current.humidity}g/kg`,
    },
  ];

  return (
    <div className="mx-7 flex flex-wrap justify-evenly">
      {weatherData.map((data, key) => (
        <TempCard key={key} head={data.head} logo={data.logo} tail={data.tail} />
      ))}
    </div>
  );
};

export default Temperature;
