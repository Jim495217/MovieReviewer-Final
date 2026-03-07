import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ProtectedRoute from "./routes/ProtectedRoute";

import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import MoviePage from "./pages/MoviePage";
import FavoritesPage from "./pages/FavoritesPage";
import ReviewPage from "./pages/ReviewPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import NotFound from "./components/NotFound";

function App() {

return (
<>
<Navbar />

<Routes>

<Route path="/" element={<HomePage />} />

<Route path="/search" element={<SearchPage />} />

<Route path="/movie/:id" element={<MoviePage />} />

<Route
path="/favorites"
element={
<ProtectedRoute>
<FavoritesPage />
</ProtectedRoute>
}
/>

<Route path="/review/:id" element={<ReviewPage />} />

<Route path="/login" element={<LoginPage />} />

<Route path="/register" element={<RegisterPage />} />

<Route path="*" element={<NotFound />} />

</Routes>
</>
);

}

export default App;