import SearchForm from "./components/SearchForm/SearchForm";
import Widgets from "./components/Widgets/Widgets";

const App = () => {
  return (
    <div className="flex gap-5 mt-5">
      <main className="flex flex-col gap-4 mt-24 ml-24">
        <SearchForm />
        <Widgets />
      </main>
    </div>
  );
};

export default App;
