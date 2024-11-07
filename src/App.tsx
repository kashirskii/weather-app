import HeadWidget from "./components/HeadWidget/HeadWidget";
import SearchForm from "./components/SearchForm/SearchForm";

const App = () => {
  return (
    <main className="mt-48 ml-48">
      <div className="w-[1024px]">
        <SearchForm />
        <HeadWidget/>
      </div>
    </main>
  );
};

export default App;
