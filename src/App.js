import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Draw from "./components/Draw";
import { RequireToken } from "./Auth";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigation />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route
                path="profile"
                element={
                  /*  <RequireToken> */
                  <Profile />
                  /*   </RequireToken>*/
                }
              >
                <Route path="Draw" element={<Draw />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
