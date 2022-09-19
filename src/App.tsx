import { FormEvent, useEffect, useState } from "react";
import { getWeatherByCoords, getWeatherBySearch } from "./api/FetchWeather";
import { SearchBox } from "./components/SearchBox";
import { WeatherContainer } from "./components/WeatherContainer";

function App() {
  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  // Conexion al API 
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchedData(data);

      } catch (err) {
        setError("Check your Internet Connection");
      }
    });
  }, []);

  // Buscador
  const handleSearch = async (e: FormEvent<HTMLFormElement>, CITY: string) => {
    e.preventDefault();
    setError("");
    try {
      const data = await getWeatherBySearch(CITY);

      if (data === "404") {
        setError("Can't find the city");
      } else if (data === "400") {
        setError("Type the city");
      } else {
        setFetchedData(data);
        console.log(data)
      }

    } catch (err) {
      setError('Check your Internet conection')
    }
  };

  return (
    <>
    <div className="flex flex-col justify-center h-screen items-center shadow-lg">
    <SearchBox handleSearch={handleSearch} />
      <h1 className="font-bold text-slate-700 text-3xl mb-2">
        <WeatherContainer fetchedData={fetchedData} error={error} />
      </h1>
    </div>
    </>
  );
}

export default App;
