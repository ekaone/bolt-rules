type WeatherProps = {
  temperature: number;
  weather: string;
  location: string;
};

export const Weather = ({ temperature, weather, location }: WeatherProps) => {
  return (
    <div className="p-4 bg-white dark:bg-zinc-800 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-2">
        Current Weather for {location}
      </h2>
      <p className="text-gray-600 dark:text-gray-300">Condition: {weather}</p>
      <p className="text-gray-600 dark:text-gray-300">
        Temperature: {temperature}°F
      </p>
    </div>
  );
};
