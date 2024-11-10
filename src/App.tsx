import HourlyForecast from "./components/HourlyForecast/HourlyForecast";
import SearchForm from "./components/SearchForm/SearchForm";
import Widgets from "./components/Widgets/Widgets";

const App = () => {
  return (
    <main>
      <div className="flex flex-col items-center gap-5 p-5 mx-auto w-fit xl:flex-row xl:items-start">
        <div className="flex flex-col gap-5">
          <SearchForm />
          <Widgets />
        </div>
        <HourlyForecast />
      </div>
    </main>
  );
};

export default App;
