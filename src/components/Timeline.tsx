import React from "react";
import "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Experience, Education & Professional Development</h1>

        <VerticalTimeline animate={true}>
          {/* Master's Degree */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="Currently pursuing"
            iconStyle={{
              background: "#5000ca",
              color: "rgb(39, 40, 34)",
            }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">
              Master's in Computing by Research
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Universiti Sains Islam Malaysia (USIM)
            </h4>

            <p>
              Currently pursuing a research-focused Master's degree with
              interests in Machine Learning, Artificial Intelligence, and
              data-driven systems.
            </p>
          </VerticalTimelineElement>

          {/* Fyntra Tech */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date=""
            iconStyle={{
              background: "#5000ca",
              color: "rgb(39, 40, 34)",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Junior Software Developer
            </h3>

            <h4 className="vertical-timeline-element-subtitle">Fyntra Tech</h4>

            <p>
              Contributed to software development and application projects,
              working on implementation, problem-solving, and development
              workflows.
            </p>
          </VerticalTimelineElement>

          {/* DataCamp */}
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="In Progress"
            iconStyle={{
              background: "#5000ca",
              color: "rgb(39, 40, 34)",
            }}
            icon={<FontAwesomeIcon icon={faGraduationCap} />}
          >
            <h3 className="vertical-timeline-element-title">DataCamp</h3>

            <h4 className="vertical-timeline-element-subtitle">
              Machine Learning & Data Science
            </h4>

            <p>
              Practical learning in Python, data science, machine learning, and
              related technical skills.
            </p>
          </VerticalTimelineElement>

          {/* Cybersecurity Workshop */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="February 10th and 11th, 2025"
            iconStyle={{
              background: "#5000ca",
              color: "rgb(39, 40, 34)",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Cyber-security and Linux: A Hands-on Workshop
            </h3>

            <p>
              Organized by: IEEE Computer Society IIUC Student Branch Chapter.
            </p>
          </VerticalTimelineElement>

          {/* ICISET 2024 */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="26th – 27th October, 2024"
            iconStyle={{
              background: "#5000ca",
              color: "rgb(39, 40, 34)",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Technical Events on ICISET 2024 Conference
            </h3>

            <p>Organized by: Faculty of Science & Engineering, IIUC.</p>
          </VerticalTimelineElement>

          {/* Mobile App Internship */}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "white",
              color: "rgb(39, 40, 34)",
            }}
            contentArrowStyle={{
              borderRight: "7px solid white",
            }}
            date="January – March 2023"
            iconStyle={{
              background: "#5000ca",
              color: "rgb(39, 40, 34)",
            }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">
              Intern in Mobile App Development
            </h3>

            <h4 className="vertical-timeline-element-subtitle">
              Invert Imo Tech
            </h4>

            <p>
              3-month internship focused on mobile application development and
              software engineering.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
