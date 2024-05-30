import React from "react";

import Project from "../Project";
import Groov from "../../assets/Groov.png";
import Logo from "../../assets/Logo.png";
import movieHub from "../../assets/movieHub.png";
import personalBlog from "../../assets/personalBlog.png";
import Soccer from "../../assets/Soccer.png";
import Weather from "../../assets/Weather.png";

const styles = {
  h1: {
    fontSize: "40px",
    margin: "20px",
    color: "rgb(66, 4, 126)",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
  },
};

export default function Portfolio() {
  const projects = [
    {
      name: "Groove",
      gitHub: "https://github.com/GaviDev8/music-idea",
      img: Groov,
      technologies:
        "HTML, CSS, Javascript, PostgreSQL Dependencies: green-code/music-track-data, bcrypt,connect-session-sequelize, dotenv, express, express-handlebars express-session, pg, sequelize, uuid",
      summary:
        "Groov is a sophisticated content management system meticulously crafted for streamlined music tracking. Designed with an intuitive interface, it empowers you to effortlessly manage your playlist",
    },
    {
      name: "Logo Maker",
      gitHub: "https://github.com/Moe1362/SVG-Logo-Maker",
      img: Logo,
      technologies: "Sequalize ODM",
      summary:
        "This application is a Node.js command-line app that takes the users input to generate a logo and save it as a .svg file. The application prompts the user to seleect a color and shaepe, then prompts them to input the text for desired logo, and finally ave the generated SVG to a .svg file. This in turn will keep the user from having to pay a graphic designer to create a simple logo for their projects",
    },
    {
      name: "Movie Hub",
      gitHub: "https://github.com/Moe1362/movie-guide",
      img: movieHub,
      technologies:
        "JavaScript, third-party APIs, Bulma (a CSS framework), CSS, and HTML",
      summary: "An application to find a movie bases on your mood.",
    },
    {
      name: "Personal Blog",
      gitHub: "https://github.com/Moe1362/personal-blog",
      img: personalBlog,
      technologies: "JavaScript, CSS, and HTML",
      summary: "simple application to test your JavaScript knowledge.",
    },
    {
      name: "Soccer App",
      gitHub: "https://github.com/Moe1362/soccer-info",
      img: Soccer,
      technologies:
        "HTML CSS JavaScript api-football-v1 API geocode-address-to-location API",
      summary:
        "This project is a Soccer Information application that provides current clubs in 5 main europe contries league information and information about their Venue based on the user's search. It utilizes the api-football-v1 and geocode-address-to-location API to retrieve team's info and their venue location on the map based on the teams.",
    },
    {
      name: "Openweather Api Dashboard",
      gitHub: "https://github.com/Moe1362/weather",
      img: Weather,
      technologies: "JavaScript, third-party APIs, CSS, and HTML",
      summary: "A simple weather application developed.",
    },
  ];

  return (
    <div className="container">
      <h1 className="text-center" style={styles.h1}>
        Portfolio
      </h1>
      <div className="row justify-content-center">
        {projects.map((project, index) => (
          <div className="col-lg-4 col-md-6 col-sm-8 col-8" key={index}>
            <Project
              title={project.name}
              githubLink={project.gitHub}
              image={project.img}
              technologies={project.technologies}
              summary={project.summary}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
