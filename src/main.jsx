import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

import { AuthProvider } from "./context/AuthContext";
import { MovieProvider } from "./context/MovieContext";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>

<BrowserRouter>

<AuthProvider>
<MovieProvider>
<App />
</MovieProvider>
</AuthProvider>

</BrowserRouter>

</React.StrictMode>
);