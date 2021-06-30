import { Route, Switch } from "react-router-dom";
import AboutPage from "./components/about/AboutPage";
import Breweries from "./components/breweries/Breweries";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Breweries fetchData={true}></Breweries>
        </Route>
        <Route path="/about" component={AboutPage} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default App;
