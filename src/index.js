import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Laptop from "./Component/laptop";
import Handphone from "./Component/handphone";
import Kasir from "./Component/kasir";
import Header from "./Master/header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const Routing = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/handphone" component={Handphone} />
          {/* <Route path="/laptop" component={Laptop} /> */}
          <Route path="/kasir" component={Kasir} />
        </Switch>
      </div>
    </Router>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
