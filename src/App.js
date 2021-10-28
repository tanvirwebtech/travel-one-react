import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Donation from "./Pages/Donation/Donation";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/donation">
            <Donation></Donation>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
