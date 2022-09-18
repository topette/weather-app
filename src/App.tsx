import { useState } from "react";
import { WeatherContainer } from "./components/WeatherContainer";

function App() {

  const [fetchedData, setFetchedData] = useState(null);
  const [error, setError] = useState("");

  return (
    <div className="flex flex-col justify-center h-screen w-screen items-center shadow-lg">
      <h1 className="font-bold text-slate-700 text-3xl mb-6">
        <WeatherContainer fetchedData={undefined} error={""} />
      </h1>
    </div>
  );
}

export default App;
