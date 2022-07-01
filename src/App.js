import { Route, Routes } from "react-router-dom";
import "./App.css";
import Favorite from "./Components/Favorite";
import MovieDetails from "./Components/MovieDetails";
import Movies from "./Components/Movies";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <h1 style={{textAlign : "center"}}>Movie List</h1>
      <Navbar />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
}

export default App;
