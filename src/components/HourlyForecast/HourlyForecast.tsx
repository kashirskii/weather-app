import { useState } from "react";
import { useAppSelector } from "../../hooks";
import HourForecast from "./HourForecast";
import SvgSelector from "../SvgSelector/SvgSelector";
import SwitcherOfDay from "./SwitcherOfDay";

const HourlyForecast = () => {
  const weatherState = useAppSelector((state) => state.weather);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [indexOfDay, setIndexOfDay] = useState(0);
  
  const hourlyData = weatherState.data?.forecast.forecastday[indexOfDay].hour;
  const days = weatherState.data?.forecast.forecastday.map((day) => day.date)

  if (weatherState.loading) {
    return (
      <section className="bg-white rounded-xl w-[660px] h-[730px] p-[25px] skeleton" />
    );
  }

  if (hourlyData !== undefined) {
    return (
      <section className="bg-white rounded-xl w-fit h-fit p-[25px] relative">
        <SwitcherOfDay days={days} indexOfDay={indexOfDay} setIndexOfDay={setIndexOfDay}/>
        <button
          className="absolute bottom-3 z-10 left-1/2 translate-x-[-50%] hover:scale-150 transition-all duration-300"
          onClick={() => setScrollIndex(scrollIndex + 1)}
        >
          <SvgSelector svgKey="down-arrow" />
        </button>
        <div className="relative overflow-hidden">
          <ul
            className={"h-[600px] duration-500 transition-all w-fit"}
            style={{ transform: `translateY(${(scrollIndex % 4) * -100}%)` }}
          >
            {hourlyData.map((hourData) => {
              return <HourForecast key={hourData.time} data={hourData} />;
            })}
          </ul>
        </div>
      </section>
    );
  }
};

export default HourlyForecast;
