import { getCurrentWeatherRequest, getCurrentWeatherResponse } from "../../types";
import instance from "./instance";

const getCurrentWeather = async ({ q, days, lang }: getCurrentWeatherRequest) => {
  return instance
    .get<getCurrentWeatherResponse>("/forecast.json", {
      params: {
        q,
        lang,
        days,
      },
    })
    .then((response) => response);
};

export { getCurrentWeather };