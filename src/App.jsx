import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Chooser from "./components/chooser";
import Driver from "./components/driver";
import RandomizeGroup from "./components/randomizeGroup";

import "./styles.css";

function App() {
  const [drivers, setDrivers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.search(",") !== -1) {
        setDrivers([...drivers, ...inputValue.split(",")]);
    } else {
        setDrivers([...drivers, inputValue]);
    }

    setInputValue("");
  };

  const formProps = {
    inputValue,
    setInputValue,
    handleSubmit,
  }

  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Chooser} />
          <Route exact path="/driver" render={() => <Driver drivers={drivers} {...formProps} />} />
          <Route exact path="/group" render={() => <RandomizeGroup drivers={drivers} {...formProps} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
