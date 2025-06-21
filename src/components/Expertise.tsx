import React from "react";
import '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';

import { faMagnifyingGlass,faPuzzlePiece } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "HTML5",
    "Tailwind CSS",
    "React Native",
    "Vite",
    "Git",
    "MySQL",
    "MongoDB",
    "Postman",
    "Figma",
    "NodeJs",
];

const labelsSecond = [
    "Python",
    "Power Bi",
    "DAX",
    "SQL",
    "ETL",
    "RLS",
    "Pandas",
];

const labelsThird = [
    "C++",
    "C",
    "CodeForces",
    "UVA Online Judge",
    "VJudge",
    "LeetCode",
    "AtCoder",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built a diverse array of web applications from scratch using modern technologies such as React and Mongo. I have a strong proficiency in the SDLC process and frontend + backend development.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMagnifyingGlass}size="3x"/>
                    <h3>Data Analytic</h3>
                    <p>Once the data is collected,I use SQL, Python (Pandas), and Power BI to clean, analyze, and visualize data. With DAX, ETL pipelines, and ROS integration, I help turn raw data into clear, actionable insights.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                   <FontAwesomeIcon icon={faPuzzlePiece} size="3x" />
                    <h3>Competitive Programming</h3>
                    <p>Solved 200+ problems using C++ on platforms like Codeforces and VJudge, sharpening problem-solving and algorithmic skills.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;