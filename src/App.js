import "./App.scss";
import { Router, Link } from "@reach/router";
import mainpage from "./components/mainpage";
import Mad from "./images/Mad.png";
import maxineavatar2 from "./images/maxineavatar2.png";
import shopicon from "./images/shopicon.png";
import mediaimage from "./images/mediaimage.png";
import facebook from "./images/facebook.png";
import github from "./images/github.png";
import instagram from "./images/instagram.png";
import linkedin from "./images/linkedin.png";
import espressomachine from "./images/espressomachine.png";
import jiujitsu from "./images/jiujitsu.png";
import programming from "./images/programming.png";
import pet from "./images/pet.png";

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={Mad}
              alt="madmax"
              alt=""
              width="65"
              height="55"
              margin-right="20"
              class="d-inline-block align-text-top"
            />
          </a>
          <h4>Maxine Causevic</h4>
        </div>
      </nav>

      <h1 className="text-center text-dark m-5">
        Full-stack Software Engineer
      </h1>
      <h4 className="text-center text-dark">
        I love building and coding a wide [ ] of things!
      </h4>
      <br />
      <img src={maxineavatar2} alt="avatar" width="250" height="250" />

      <div className="mx-auto ml-6 col-8">
        <h1 className="text-center text-dark m-5"> Hi there, my name is Maxine Causevic.</h1>
        <h5 className="text-center text-dark text-break m-5">I have been a personal trainer and massage therapist for over 14 years, receiving my bachelor's and master's degree in Kinesiology from the University of Illinois at Chicago. Somewhere along the road, I found my passion for coffee and decided to open a coffee shop in 2015, it has since closed but my thirst for learning and building things has persevered. So fast forward to February 2021, I decided to enroll in a coding bootcamp named Coding Dojo and have been learning and building code ever since!  In my free time I train brazilian jiu-jitsu. </h5></div>

      <div className="interests mx-auto col-8 gap-5">
        <div className="coffee"><img src={espressomachine} alt="espressomachine" width="100" height="100" /></div>
        <div className="jiujitsu"><img src={jiujitsu} alt="jiujitsu" width="100" height="100" /></div>
        <div className="programming"><img src={programming} alt="programming" width="100" height="100" /></div>

      </div>


      <div className="container">

        <div className="shopping">
          <p>
            Here is my Python project I completed as the front-end developer.
          </p>
          <a
            href="https://python-projectmax.herokuapp.com"
            className="btn btn-secondary btn-lg mb-1"
            role="button"
          >
            Shopping List
          </a>
          <br />
          <img
            src={shopicon}
            alt="shoppingbag"
            alt=""
            width="60"
            height="65"
            margin-right="20"
          // class="d-inline-block align-text-top"
          />
        </div>
        <div className="media">
          <p>
            Here is my React project I completed as the front-end developer.
          </p>
          <a
            href="http://3.15.194.117/"
            className="btn btn-secondary btn-lg"
            role="button"
          >
            Highly Recommend
          </a>
          <img
            src={mediaimage}
            alt="media"
            alt=""
            width="70"
            height="75"
            margin-right="20"
            class="d-inline-block align-text-top"
          />
        </div>
        <div className="doglover">
          <p>
            Here is my Java project I completed as the front-end developer.
          </p>
          <a
            href="https://github.com/maxcausevic/dogLoverProject"
            className="btn btn-secondary btn-lg mb-1"
            role="button"
          >
            Dogstagram
          </a>
          <br></br>
          <img
            src={pet}
            alt="media"
            alt=""
            width="60"
            height="65"
            margin-right="20"
            class="d-inline-block align-text-top"
          />
        </div>
      </div>
      <div className="nav mx-auto gap-3 m-5">
        <div className="facebook">
          <a href="https://www.facebook.com/profile.php?id=100070913066877">
            <img
              src={facebook}
              alt="facebook"
              alt=""
              width="40"
              height="40"
              margin-right="20"
            //class="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div className="instagram">
          <a href="https://www.instagram.com/margeauxhapaslav/">
            <img
              src={instagram}
              alt="instagram"
              alt=""
              width="40"
              height="40"
              margin="20"
            //class="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div className="linkedin">
          <a href="https://www.linkedin.com/in/maxine-causevic-b804158/">
            <img
              src={linkedin}
              alt="linkedin"
              alt=""
              width="40"
              height="40"
              margin="20"
            //class="d-inline-block align-text-top"
            />
          </a>
        </div>
        <div className="github">
          <a href="https://github.com/maxcausevic">
            <img
              src={github}
              alt="github"
              alt=""
              width="40"
              height="40"
              margin="20"
            //class="d-inline-block align-text-top"
            />
          </a>
        </div>
      </div>

      <Router>
        <mainpage path="/"></mainpage>
      </Router>
    </div>
  );
}

export default App;
