import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Notfound from "./pages/Notfound";
import Knowledges from "./pages/Knowledges";
import Portfolio from "./pages/Portfolio";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/knowledges" component={Knowledges} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
          <Route component={Notfound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
