import { useEffect, useState } from "react";
import { getWeatherByCoords } from "./api/FetchWeather";
import { WeatherContainer } from "./components/WeatherContainer";

function App() {

  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {

    navigator.geolocation.getCurrentPosition(async (position) => {
      const LAT = position.coords.latitude;
      const LON = position.coords.longitude;

      try {
        const data = await getWeatherByCoords(LAT, LON);
        setFetchedData(data);
        console.log(data)
      } catch (err) {        
        setError("Revisa tu conexion a internet");
      }
    })
  }, [])

  return (
    <div className="flex flex-col justify-center h-screen w-screen items-center shadow-lg">
      <h1 className="font-bold text-slate-700 text-3xl mb-6">
        <WeatherContainer fetchedData={undefined} error={error} />
      </h1>
    </div>
  );
}

export default App;
