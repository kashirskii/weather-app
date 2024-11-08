import { useAppSelector } from "../../hooks";

const CurrentWeather = () => {
  const weatherState = useAppSelector((state) => state.weather);

  if (weatherState.loading) {
    return (
      <section className="p-[25px] bg-white rounded-xl w-[700px] h-[220px] skeleton"/>
    );
  }

  if (weatherState.data !== null) {
    return (
      <section className="p-[25px] bg-white rounded-xl w-[700px] h-fit">
        <h3 className="text-[#394454] font-medium mb-1">Current weather</h3>
        <div className="mb-4 text-lg font-medium">
          {weatherState.data.location.localtime?.split(" ")[1]}
        </div>
        <div className="flex items-center gap-8 mb-1">
          <img
            src={weatherState.data.current.condition.icon}
            alt="weather icon"
          />
          <div className="text-xl font-bold">
            {Math.round(weatherState.data.current.temp_c)} &deg;С
          </div>
          <div className="text-[#394454] font-medium">
            <div>{weatherState.data.current.condition.text}</div>
            <div>
              Feels Like {Math.round(weatherState.data?.current.feelslike_c)} &deg;С
            </div>
          </div>
        </div>
        <div className="text-lg font-medium">
          {weatherState.data.location.country},{" "}
          {weatherState.data.location.name}
        </div>
      </section>
    );
  }
};

export default CurrentWeather;
