import { lazy } from "solid-js";
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

const Service = lazy(() => import("./component/services"));
const Home = lazy(() => import("./component/home"));

import "tailwindcss/tailwind.css";

import "./index.css";
import Navbar from "./component/root/nav";


const App = props => (
  <>
  <Navbar/>
    <h1>My Site with lots of pages</h1>
    {props.children}
  </>
);

render(() => (
  <Router root={App}>
    <Route path="/services" component={Service} />
    <Route path="/" component={Home} />
    
  </Router>
),document.getElementById("root"));

