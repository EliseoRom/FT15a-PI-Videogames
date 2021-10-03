import React from "react";
import { Link} from "react-router-dom";

import s from "./About.module.css";
import Navbar from "../NavBar/NavBar";

function AboutApp(props) {
  
  return (
    <div className={s.body4}>
      <Navbar />
      <div className={s.containerdetail}>
        <div>
          <img clasName={s.image} src="https://www.algoritmomag.com/wp-content/uploads/2020/09/henry.jpeg"width="500" height="130" alt="" />
          <div>
            <div>
              <p>About me:</p>
              <p>Hello my name is Eliseo,
                  I made this application in soyHenry's bootcamp🚀 as an evaluation instance.This is my first project as a full 
                  Stack Developer</p>
            </div>
            <div>
              <p>About the application:</p>
              <p>The application is connected to a games API that allows me to view multiple games, see their details and interact with the user
              Implement pagination, details, search, sorting, filtering and creation of new games in the database.
              <br/>
              Technologies used: #JavaScript, #React, #Redux, #Express, #Sequalize, #postgresql #CSS
              </p>
            </div>
            <div>
              <p>Contact me:</p>
              <div>
          <Link to="https://www.linkedin.com/in/eliseo-joaquin-romero-developer/">
            <button >Linkedin</button>
          </Link>
        </div>
        <div>
          <Link to="https://github.com/EliseoRom">
            <button >Github</button>
          </Link>
        </div>
              <p>📫 Email: romeroeliseojoaquin@gmail.com</p>
            </div>
            <div></div>
          </div>
        </div>{" "}
        <div>
          <p>Application inspired by this game
              <br/>
              Need for speed underground
          </p>
          <img
            src="https://64.media.tumblr.com/57872e6cb2af10d9e65fa8793b25777b/8c6951f32bfc0710-2e/s500x750/64b31f5cb8f98aadf24b9a10a4fa10ecb7620072.gifv"
            width="550"
            height="250"
            alt=""/>
        </div>
        <div>
          <Link to="/videogames">
            <button className={s.buttonback}>Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
}



export default AboutApp;
