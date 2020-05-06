import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Error from "./pages/error";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import SingleRoom from "./pages/singleRoom";
import Navbar from "./components/navbar";

function App() {
    return (
        <>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/rooms" component={Rooms} />
                <Route exact path="/rooms/:slug" component={SingleRoom} />
                <Route component={Error} />
            </Switch>
        </>
    );
}

export default App;
