import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Login />} />
          <Route
            path="/forgot-password"
            element={<h1>Esqueci minha senha</h1>}
          />
          <Route path="/register" element={<h1>Cadastre-se</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
