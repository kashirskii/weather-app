import { Dispatch, SetStateAction } from "react";
import { getCurrentWeatherResponse } from "../../../types";
import { extractDayOfWeek } from "../../helpers/extractDayOfWeek";

interface SwitcherOfDay {
  days:
    | getCurrentWeatherResponse["forecast"]["forecastday"][0]["date"][]
    | undefined;
  indexOfDay: number;
  setIndexOfDay: Dispatch<SetStateAction<number>>;
}

const SwitcherOfDay = ({ days, indexOfDay, setIndexOfDay }: SwitcherOfDay) => {
  return (
    <ul className="font-medium text-[#394454] text-lg flex gap-5 [&>li]:p-2 [&>li]:cursor-pointer mb-4 [&>li]:transition-all [&>li]:duration-200">
      {days!.map((day, index) => {
        return (
          <li
            onClick={() => setIndexOfDay(index)}
            className={
              indexOfDay === index
                ? "border-b-[3px] border-[#394454]"
                : "border-b-[3px] border-transparent"
            }
          >
            {index === 0
              ? "Today"
              : index === 1
              ? "Tomorrow"
              : extractDayOfWeek(day)}
          </li>
        );
      })}
    </ul>
  );
};

export default SwitcherOfDay;
