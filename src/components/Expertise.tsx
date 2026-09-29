import React from "react";
import "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBrain,
  faServer,
  faPuzzlePiece,
} from "@fortawesome/free-solid-svg-icons";

import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "Python",
  "Scikit-learn",
  "Pandas",
  "NumPy",
  "XGBoost",
  "Jupyter",
];

const labelsSecond = [
  "FastAPI",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Postman",
  "Git",
  "GitHub",
];

const labelsThird = [
  "C++",
  "C",
  "Data Structures",
  "Algorithms",
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
          {/* Machine Learning & AI */}
          <div className="skill">
            <FontAwesomeIcon icon={faBrain} size="3x" />

            <h3>Machine Learning & AI</h3>

            <p>
              I develop practical machine learning solutions covering data
              preparation, model development, evaluation, and predictive
              modeling.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>

              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* ML Engineering & Deployment */}
          <div className="skill">
            <FontAwesomeIcon icon={faServer} size="3x" />

            <h3>ML Engineering & Deployment</h3>

            <p>
              I turn trained ML models into usable applications by building
              inference APIs, integrating them with web interfaces, and
              deploying complete ML workflows.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>

              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          {/* Programming & Algorithms */}
          <div className="skill">
            <FontAwesomeIcon icon={faPuzzlePiece} size="3x" />

            <h3>Programming & Algorithms</h3>

            <p>
              Strong programming foundations in C and C++ with experience
              solving algorithmic problems and developing efficient solutions.
            </p>

            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>

              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
