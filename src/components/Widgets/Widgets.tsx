import MiniWidget from "../MiniWidget/MiniWidget";
import { useAppSelector } from "../../hooks";
import SvgSelector from "../SvgSelector/SvgSelector";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

const Widgets = () => {
  const weatherState = useAppSelector((state) => state.weather);

  if (weatherState.data !== null) {
    return (
      <div className="flex gap-5">
      
        <div className="flex flex-col gap-5">
          <CurrentWeather />
          <div className="grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)] gap-5 w-full">
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
            <MiniWidget
              title="Sunrise"
              text={`${weatherState.data.forecast.forecastday[0].astro.sunrise}`}
              icon={<SvgSelector svgKey="sunrise" />}
              loading={weatherState.loading}
            />
            <MiniWidget
              title="Sunset"
              text={`${weatherState.data.forecast.forecastday[0].astro.sunset}`}
              icon={<SvgSelector svgKey="sunset" />}
              loading={weatherState.loading}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Widgets;
