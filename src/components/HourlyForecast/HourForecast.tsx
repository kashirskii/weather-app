import { memo } from "react";
import { getCurrentWeatherResponse } from "../../../types";

const HourForecast = memo(
  ({
    data,
  }: {
    data: getCurrentWeatherResponse["forecast"]["forecastday"][number]["hour"][number];
  }) => {
    return (
      <li className="grid grid-cols-[70px_170px_100px_150px] items-center gap-8 p-3 h-[100px] w-fit">
        <img src={data.condition.icon} alt="weather icon" />
        <div className="flex flex-col gap-1 text-lg font-medium">
          <div className="text-[#394454]">{data.time.split(" ")[1]}</div>
          <div>{data.condition.text}</div>
        </div>
        <div className="text-3xl font-bold">
          {Math.round(data.temp_c)}{" "}
          <sup className="text-[#394454] text-base">&deg;С</sup>
        </div>
        <div className="text-[#394454]">
          <div>Wind: {Math.round(data.wind_mph)} mph</div>
          <div>Humidity: {data.humidity}%</div>
        </div>
      </li>
    );
  }
);

export default HourForecast;
