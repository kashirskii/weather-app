import { fecthDataWeather } from "../../features/weather/weatherSlice";
import { debounce } from "../../helpers/debounce";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AppDispatch } from "../../store";

const SearchForm = () => {
  const dispatch = useAppDispatch<AppDispatch>();
  const error = useAppSelector((state) => state.weather.error);

  const debounceHandler = debounce(
    (event: React.ChangeEvent<HTMLInputElement>) =>
      dispatch(
        fecthDataWeather({ q: `${event.target.value}`, days: 3, lang: "en" })
      ),
    400
  );

  return (
    <div className="p-[25px] bg-white rounded-xl w-full flex items-center">
      <form className="">
        <input
          className="border-[2px] rounded-xl py-2 px-4 border-[#8b919c] focus:outline-none font-medium"
          placeholder="Enter city name ..."
          onChange={(event) => debounceHandler(event)}
        />
      </form>
      {error ? (
        <div className="ml-5 font-medium text-[#f52233]">{error}</div>
      ) : null}
    </div>
  );
};

export default SearchForm;
