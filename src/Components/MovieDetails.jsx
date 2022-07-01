import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { data } from "./data.js";
import heart from "./heart.png";
import redHeart from "./redHeart.png";

const myCard = {
  width: "300px",
  border: "1px solid #cecece",
  textAlign: "center",
  marginLeft: "40%",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  marginTop:"20px"
};

const MovieDetails = () => {
  const [add, setAdd] = useState(false);
  const { movieId } = useParams();

  return (
    <div style={myCard}>
      {data
        .filter((item) => item.id === +movieId)
        .map((movie) => {
          return (
            <div>
              {movie.is_fav ? (
                <img
                  style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  src={redHeart}
                  alt="heart"
                  onClick={() => {
                    return (
                      (movie.is_fav = false),
                      setAdd(() => !add),
                      alert("Removed from Favorites")
                    );
                  }}
                />
              ) : (
                <img
                  style={{ width: "50px", height: "50px", cursor: "pointer" }}
                  src={heart}
                  alt="heart"
                  onClick={() => {
                    return (
                      (movie.is_fav = true),
                      setAdd(() => !add),
                      alert("Added to Favorites")
                    );
                  }}
                />
              )}

              <img
                style={{
                  width: "200px",
                  height: "200px",
                  marginBottom: "10px",
                }}
                src={movie.avator}
                alt="img"
              />
              <h3>{`Movie name : ${movie.movie_name}`}</h3>
              <h3>{`Genre : ${movie.movie_genre}`}</h3>
              <h3>{`Release date : ${movie.release_date}`}</h3>
              <h3>{`Actor : ${movie.actor_firstname} ${movie.actor_lastname}`}</h3>
            </div>
          );
        })}
    </div>
  );
};

export default MovieDetails;
