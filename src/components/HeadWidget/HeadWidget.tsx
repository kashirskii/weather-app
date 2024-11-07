import { useAppSelector } from "../../hooks";
import HeadWidgetSkeleton from "./HeadWidgetSkeleton";
import { extractDayOfWeek } from "../../helpers/extractDayOfWeek";

const HeadWidget = () => {
  const weatherState = useAppSelector((state) => state.weather);
  
  return (
    <>
      {weatherState.loading ? (
        <HeadWidgetSkeleton />
      ) : weatherState.data !== null ? (
        <section className="h-[360px] w-full relative text-white ">
          <img
            src="../e4c3328076534fbd5702e165e58948c4.jpg"
            className="absolute object-cover w-full h-full rounded-xl -z-10"
          />
          <div className="flex items-end justify-between h-full p-5">
            <div className="flex flex-col items-start">
              <div className="font-bold text-9xl">
                {weatherState.data.current.temp_c}&deg;
              </div>
              <div className="text-xl font-medium">
                {weatherState.data.location.name},{" "}
                {weatherState.data.location.country}
              </div>
            </div>
            <div className="flex flex-col items-end text-xl font-medium">
              <div>{weatherState.data.location.localtime.split(" ")[1]}</div>
              <div>{extractDayOfWeek(weatherState.data.forecast.forecastday[0].date)}</div>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default HeadWidget;
