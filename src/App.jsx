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

  const propsObj = {
    drivers,
    setDrivers,
    inputValue,
    setInputValue,
    handleSubmit,
  }

  return (
    <>
      <BrowserRouter>
        <Header setDrivers={setDrivers} />
        <Switch>
          <Route exact path="/random-driver" component={Chooser} />
          <Route exact path="/random-driver/driver" render={() => <Driver {...propsObj} />} />
          <Route exact path="/random-driver/group" render={() => <RandomizeGroup {...propsObj} />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
