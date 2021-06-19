import Breweries from "./components/breweries/Breweries";

const App = () => {
  return (
    <>
      <Breweries fetchData={true}></Breweries>
    </>
  );
};

export default App;
