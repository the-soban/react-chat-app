import React, { useContext } from "react";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./styles.scss";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

function App() {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
