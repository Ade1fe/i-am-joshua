import { resume } from '~/data/resume';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Helmet from '../Common/SEO/helmet';
import './resume.scss';
import { ResumeProp } from 'interface';
import { Helmet } from '..';



export default function Resume(props: ResumeProp) {
  useEffect(() => {
    props.activeMenu(0);
  }, []);

  const [showBox, setShowBox] = useState(false);

  
  useEffect(() => {
    setShowBox(true);
  }, []);

  return (
    <div className={`box resume ${showBox ? 'visible' : ''}`}>
      <Helmet
        title="Adisa Taiwo Joshua | Resume"
        name="Adisa Taiwo Joshua Resume"
        content="Adisa Taiwo Joshua - Software Engineer Resume"
      />
      <div className="resume_container">
        <div className="top_row">
          <h2>{resume.name}</h2>
          <div className="buttons">
            <a href="/Adisa_Taiwo_Resume.pdf" download target="_blank" rel="noopener noreferrer">
              <small>
                <i className="fas fa-download"></i> <span>Download </span>
              </small>
            </a>
          </div>
        </div>

        <p className="subheading">{resume.title}</p>

        <div className="summary">
          <p>{resume.intro}</p>
        </div>

        <div className="divider">
          <p>Skills</p>
          <span></span>
        </div>

        <div className="skills">
          {resume.skills.map((skill, idx) => (
            <p key={`skill-${idx}`} className="">
              <span className="pr-2 text-white">{skill.title}: </span> {skill.body.join(', ')}
            </p>
          ))}
        </div>

        <div className="divider">
          <p>Experience</p>
          <span></span>
        </div>

        <div className="exp_container">
          {resume.workExperiences.map((experience, idx) => (
            <section className="experience" key={idx}>
              <p className="title">
                <a href={experience.companyUrl} target="_blank">{experience.company}</a> - {experience.role}
                <span>
                  <br /> {experience.startDate} - {experience.endDate ? experience.endDate : 'PRESENT'}
                </span>
              </p>
              <article className="description">
                {experience.jobDescription && <p>{experience.jobDescription}</p>}
                {experience.achievements.map((achievement, idx) => (
                  <p key={`achievement-${idx}`}>
                    <span>➜</span>
                    {achievement}
                  </p>
                ))}
              </article>
            </section>
          ))}
        </div>

        <div className="divider">
          <p>Education</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            {resume.educations.map((education, idx) => (
              <p key={`education-${idx}`} className="title">
                {education.title}
                <br />
                <span>
                  {education.startDate} - {education.endDate}
                </span>
                <br />
                <span style={{ fontSize: 13 }}>{`➜ Relevant coursework: ${education.relevant.join(', ')}`}</span>
              </p>
            ))}
          </section>
        </div>

        <div className="divider">
          <p>Languages</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            {resume.languages.map((language) => (
              <p className="title">
                {language.name} -<span>{language.level}</span>
              </p>
            ))}
          </section>
        </div>

        <div className="divider">
          <p>Hobbies</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p>{resume.hobbies.join(', ')}</p>
            </article>
          </section>
        </div>

        <div className="divider">
          <p>Projects</p>
          <span></span>
        </div>

        <div className="exp_container">
          <section className="experience">
            <article className="description">
              <p>
              Explore some highlighted projects <span> </span>
                <span className="underline">
                  <Link to="/projects"> here</Link>
                </span>
              </p>
            </article>
          </section>
        </div>
      </div>

      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b>Home
          </button>
        </Link>
        <Link to="/projects">
          <button>Projects ➜</button>
        </Link>
      </div>
    </div>
  );
}
