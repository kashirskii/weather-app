import MiniWidget from "../MiniWidget/MiniWidget";
import { useAppSelector } from "../../hooks";
import SvgSelector from "../SvgSelector/SvgSelector";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

const Widgets = () => {
  const weatherState = useAppSelector((state) => state.weather);

  if (weatherState.data !== null) {
    return (
      <>
        <CurrentWeather />
        <div className="flex gap-5 w-[700px]">
          <MiniWidget
            title="Wind"
            text={`${weatherState.data.current.wind_mph} mph`}
            icon={<SvgSelector svgKey={"wind"} />}
            loading={weatherState.loading}
          />
          <MiniWidget
            title="Humidity"
            text={`${weatherState.data.current.humidity} %`}
            icon={<SvgSelector svgKey="humidity" />}
            loading={weatherState.loading}
          />
        </div>
        <HourlyForecast />
      </>
    );
  }
};

export default Widgets;
