// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Login from "./components/Login";
import MainApp from "./MainApp";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/app" element={<MainApp />} />
                    <Route path="*" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
