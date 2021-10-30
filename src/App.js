import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Blog from "./Pages/Blog/Blog";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./Shared/Header/Header";
import AuthProvider from "./Context/AuthProvider";
import AllPackages from "./Pages/AllPackages/AllPackages";
import PackageDetails from "./Pages/PakageDetails/PackageDetails";
import PrivateRoute from "./Shared/PrivateRoute/PrivateRoute";
import MyBookings from "./Pages/MyBooking/MyBookings";
import AllBookings from "./Pages/AllBookings/AllBookings";
import AddTourPackage from "./Pages/AddTourPackage/AddTourPackage";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/blog">
                            <Blog></Blog>
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>

                        <PrivateRoute path="/package-details/:id">
                            <PackageDetails />
                        </PrivateRoute>
                        <PrivateRoute path="/my-bookings">
                            <MyBookings />
                        </PrivateRoute>
                        <PrivateRoute path="/all-bookings">
                            <AllBookings />
                        </PrivateRoute>
                        <PrivateRoute path="/add-package">
                            <AddTourPackage />
                        </PrivateRoute>
                        <Route path="/all-packages">
                            <AllPackages />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
