import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import BeatLoader from "react-spinners/BeatLoader";
const Home = React.lazy(() => import("./Pages/index.jsx"));
const About = React.lazy(() => import("./Pages/About.jsx"));
const Contact = React.lazy(() => import("./Pages/Contact.jsx"));
const Blogs = React.lazy(() => import("./Pages/Blogs.jsx"));
const Blog1 = React.lazy(() => import("./Pages/Blog1.jsx"));
const Blog2 = React.lazy(() => import("./Pages/Blog2.jsx"));
const Blog3 = React.lazy(() => import("./Pages/Blog3.jsx"));

const loadingScreen = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
  backgroundColor: "#fff",
  transition: "all 0.4s ease-out",
};
function App() {
  return (
    <Router>
      <Suspense
        fallback={
          <BeatLoader color={"#00194f"} size={20} css={loadingScreen} />
        }
      >
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/blog-1" exact component={Blog1} />
          <Route path="/blog-2" exact component={Blog2} />
          <Route path="/blog-3" exact component={Blog3} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
