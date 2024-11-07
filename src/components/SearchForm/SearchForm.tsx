import { fecthDataWeather } from "../../features/weather/weatherSlice";
import { debounce } from "../../helpers/debounce";
import { useAppDispatch } from "../../hooks";
import { AppDispatch } from "../../store";

const SearchForm = () => {
  const dispatch = useAppDispatch<AppDispatch>();
  const debounceHandler = debounce((event: React.ChangeEvent<HTMLInputElement>) => dispatch(fecthDataWeather({q: `${event.target.value}`, days: 3, lang: 'ru'})), 400)
  return (
    <form>
      <input
        className="w-1/4 border-[2px] rounded-xl mb-4 py-2 px-4 border-[#ababcb] focus:outline-none font-medium"
        placeholder="Enter city name ..."
        onChange={(event) => debounceHandler(event)}
      />
    </form>
  );
};

export default SearchForm;
