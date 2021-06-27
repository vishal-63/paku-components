import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/index.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Blogs from "./Pages/Blogs";
import Blog1 from "./Pages/Blog1";
import Blog2 from "./Pages/Blog2";
import Blog3 from "./Pages/Blog3";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/blogs" exact component={Blogs} />
        <Route path="/blog-1" exact component={Blog1} />
        <Route path="/blog-2" exact component={Blog2} />
        <Route path="/blog-3" exact component={Blog3} />
      </Switch>
    </Router>
  );
}

export default App;
