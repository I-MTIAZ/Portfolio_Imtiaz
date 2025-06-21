import React from "react";
import '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faLink,faClapperboard } from '@fortawesome/free-solid-svg-icons';
import mock01 from '../assets/images/mock01.jpg';
import mock02 from '../assets/images/mock02.jpg';
import mock03 from '../assets/images/mock03.jpg';
import mock04 from '../assets/images/mock04.jpg';
import mock05 from '../assets/images/mock05.jpg';
import mock06 from '../assets/images/mock06.jpg';
import mock07 from '../assets/images/mock07.jpg';
import mock08 from '../assets/images/mock08.jpg';
import mock09 from '../assets/images/mock09.jpg';
import mock10 from '../assets/images/mock10.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
               <img src={mock10} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Responsive Pernstack Landing Page</h2>
                <div className="showTypes">
                    <a href="https://github.com/I-MTIAZ/Responsive-Pernstack-Landing-Page">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    {/* <a href="">  <FontAwesomeIcon icon={faLink} size="2x"/></a>*/}
                    <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_vitejs-tailwindcss-daisyui-activity-7341098629841002496-xrvr?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a> 
                </div>
                <p>Developed a responsive single-page website using Vite, Tailwind CSS, and DaisyUI for a clean and modern UI design.</p>
            </div>
            <div className="project">
                <img src={mock03} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Search Wev</h2>
                <div className="showTypes">
                    <a href="https://github.com/I-MTIAZ/Search-Wev">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    {/* <a href="">  <FontAwesomeIcon icon={faLink} size="2x"/></a>*/}
                    <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_vite-searchweb-tailwind-activity-7339524522003320832-s-rZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a> 
                </div>
                <p>Developed a search-based website using Vite, Tailwind CSS, and JavaScript for fast and efficient user interaction.</p>
            </div>
            <div className="project">
                <img src={mock06} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Farm Game</h2>
                <div className="showTypes">
                    {/*<a href="https://github.com/I-MTIAZ/Search-Wev">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                     <a href="">  <FontAwesomeIcon icon={faLink} size="2x"/></a>*/}
                    <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_game-reactjs-html-activity-7340513520666537984-5jAs?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a> 
                </div>
                <p>Built a React-based farm simulation game where players sell crops, buy crops from the farm, sell them at the market, explore with an in-game mini-map, and serve dynamically generated customers.</p>
            </div>
            <div className="project">
                <img src={mock07} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Gaming Zone WebPage</h2>
                <div className="showTypes">
                    <a href="https://github.com/I-MTIAZ/InvertPlayzonec">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    {/* <a href="">  <FontAwesomeIcon icon={faLink} size="2x"/></a>*/}
                    <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_html-taiwlind-daisyui-activity-7338928073049853954-Mnhn?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a> 
                </div>
                <p>This is an online educational platform that provides high-quality, data science-focused learning resources in the Japanese language. I created the entire platform from scratch using Ruby on Rails.</p>
            </div>
            <div className="project">
                <img src={mock04} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Budget-Tracker WebPage</h2>
                <div className="showTypes">
                    <a href="https://github.com/I-MTIAZ/Budget-Tracker-App-Js-Tailwind-">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    <a href="https://i-mtiaz.github.io/Budget-Tracker-App-Js-Tailwind-/">  <FontAwesomeIcon icon={faLink} size="2x"/></a>
                     <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_vite-tailwind-budgettracking-activity-7340181336738959360-Bfwk?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a>
                </div>
                <p>Developed a budget tracker web using Vite and Tailwind CSS with features to track and manage expense history.</p>
            </div>
            <div className="project">
                <img src={mock05} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Horror Game</h2>
                <div className="showTypes">
                    <a href="https://github.com/I-MTIAZ/GAMES-CHARLIE-CHARLIE-ARE-YOU-HERE--">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    {/* <a href="">  <FontAwesomeIcon icon={faLink} size="2x"/></a>*/}
                    <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_game-html-css-activity-7339728339919675393-rGNW?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a> 
                </div>
                <p>Created a “Charlie Charlie” inspired horror game using HTML, CSS, and JavaScript.</p>
            </div>
            <div className="project">
                <img src={mock08} className="zoom" alt="thumbnail" width="100%"/>
               <h2>MultiPage Manager Button</h2>
                <div className="showTypes">
                    <a href="https://github.com/I-MTIAZ/Frontend-MultiPage-Manager">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    <a href="https://i-mtiaz.github.io/Frontend-MultiPage-Manager/">  <FontAwesomeIcon icon={faLink} size="2x"/></a>
                     <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_tailwind-vite-frontend-activity-7334938018048331777-mHif?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a>
                </div>
                <p>Built a multi-page web manager using Vite and Tailwind CSS for fast, responsive UI development.</p>
            </div>
            <div className="project">
                <img src={mock09} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Online-Shopping</h2>
                <div className="showTypes">
                    <a href="https://github.com/I-MTIAZ/Online-Shopping">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                     <a href="https://i-mtiaz.github.io/Online-Shopping/">  <FontAwesomeIcon icon={faLink} size="2x"/></a>
                    <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_html-css-bootstrap-activity-7336395128904830976-JzOE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a>
                </div>
                <p>Developed a single-page online shopping site using HTML, CSS, Bootstrap, and JavaScript.</p>
            </div>
            <div className="project">
                <img src={mock02} className="zoom" alt="thumbnail" width="100%"/>
               <h2>DroneScape Media (Business Portfoio)</h2>
                <div className="showTypes">
                    <a href="https://github.com/I-MTIAZ/BusinessPortfoio">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                     {/* <a href="https://i-mtiaz.github.io/Online-Shopping/">  <FontAwesomeIcon icon={faLink} size="2x"/></a>*/}
                   <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_html-customcss-tailwind-activity-7337856077499117572-tKM7?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a> 
                </div>
                <p>Designed and developed a business portfolio using custom CSS, HTML, JavaScript, Swiper.js, and Tailwind CSS.</p>
            </div>
            <div className="project">
                <img src={mock01} className="zoom" alt="thumbnail" width="100%"/>
               <h2>Personal Protfolio</h2>
                <div className="showTypes">
                    <a href="https://github.com/I-MTIAZ/Protfolio-html-css-bootstrap">  <FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    {/*  <a href="">  <FontAwesomeIcon icon={faLink} size="2x"/></a> */}
                    <a href="https://www.linkedin.com/posts/imtiaz-hossain-755a18218_html-css-bootstrap-activity-7335662800955998208-Yuyb?utm_source=share&utm_medium=member_desktop&rcm=ACoAADb3wzEBh3yUkOegbU-UO8znglj0MyciMes">  <FontAwesomeIcon icon={faClapperboard} size="2x"/></a>
                </div>
                <p>Created a personal portfolio using Bootstrap with HTML, CSS, and JavaScript.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;