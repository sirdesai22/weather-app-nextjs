"use client";
// import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import Navbar from "@/components/Navbar";
import Temperature from "@/components/Temperature";
import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [weather, setWeather] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("Kolkata");
  // const [weather, setWeather] = useState({})
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setLoading(true);
      try {
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;
        // console.log(apiKey);
        const response = await axios.get(
          "http://api.weatherapi.com/v1/current.json?",
          {
            params: {
              key: apiKey,
              q: location,
            },
          }
        );
        setWeather(response.data);
        setLoading(false);
        // console.log(response.data);
      } catch (error) {
        // setError(error);
        console.log(error);
      }
    };

    fetchWeatherData();
  }, [location]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };
  const changeLocation = () => {
    setLocation(search);
  };

  return (
    // http://api.weatherapi.com/v1/current.json?key=e52b2ffb387c4b179a8115411241502&q=Belgaum
    <div className="flex flex-col bg-gradient-to-b from-slate-600 to-gray-800 min-h-screen">
      <Navbar />
      {/* <GridBackgroundDemo/> */}
      <div className="text-center">
        <div className="w-full flex justify-center items-center mt-5 h-[50px] px-5">
          <input
            onChange={handleChange}
            type="text"
            name="inputLocation"
            id="inputLocation"
            placeholder="Search location..."
            className="w-[80%] p-3 rounded-l-lg h-full"
          />
          <button
            onClick={changeLocation}
            className="text-white px-3 rounded-r-lg h-full bg-blue-500 text-4xl flex justify-center items-center"
          >
            <FaSearch />
          </button>
        </div>
        {isLoading ? (
          <div className="text-4xl font-bold text-white mt-20">
            Loading...
          </div>
        ) : (
          weather && <Temperature weather={weather} />
        )}
      </div>
    </div>
  );
}
