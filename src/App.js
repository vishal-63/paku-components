import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/index.jsx";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home}></Route>
      </Switch>
    </Router>
  );
}

export default App;
