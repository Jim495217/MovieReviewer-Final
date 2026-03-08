import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { MovieProvider } from "./context/MovieContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <MovieProvider>
        <App />
      </MovieProvider>
    </AuthProvider>
  </BrowserRouter>
);