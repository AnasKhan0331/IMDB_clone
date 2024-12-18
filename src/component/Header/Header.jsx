import React from "react";
import { Link } from "react-router-dom";
import imdbLogo from "../../assets/icons8-imdb-48.png";

const Header = () => {
  const navLinks = [
    { path: "/", imgUrl: imdbLogo },
    { path: "/movies/popular", name: "Popular" },
    { path: "/movies/top_rated", name: "Top Rated" },
    { path: "/movies/upcoming", name: "Upcoming" },
  ];

  return (
    <div className="header" style={{ padding: "20px 0px" }}>
      <div
        className="headerLeft"
        style={{ display: "flex", alignItems: "center" }}
      >
        {navLinks.map(({ name, imgUrl, path }, index) => (
          <React.Fragment key={index}>
            {imgUrl && (
              <Link to="/">
                <img
                  src={imgUrl}
                  alt="IMDB Logo"
                  style={{
                    marginLeft: "30px",
                    marginRight: "30px",
                    width: "50px",
                    height: "45px",
                  }}
                />
              </Link>
            )}
            {name && (
              <Link
                style={{
                  marginRight: "30px",
                  textDecoration: "none",
                  color: "#fff",
                  fontSize: "1.2rem",
                }}
                to={path}
              >
                {name}
              </Link>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Header;
