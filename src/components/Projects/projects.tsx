import { projects } from '~/data/projects';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../Common/SEO/helmet';
import './projects.scss';
import { picFive, picOne, picSix, picThree, picTwo } from '~/assets';
import { ProjectsProps } from 'interface';

const projectImages = [picOne, picTwo,picThree,picSix,picFive]

export default function Projects(props: ProjectsProps) {
  useEffect(() => {
    props.activeMenu(1);
  }, []);

  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    setShowBox(true);
  }, []);

  return (
    <div className={`box project ${showBox ? 'visible' : ''}`}>
      <Helmet title="Adisa Taiwo Joshua | Projects" name="Selected Projects" content="Selected Adisa Taiwo Joshua's Projects" />{' '}
      <div className="projects_container">
        <div className="top_row">
          <h2>Prominent Works</h2>
        </div>

        <div className="project_container">
          {projects.map((project, idx) => (
            <section className="project" key={idx}>
             <img src={projectImages[idx]} alt="Project Image" className='w-full h-auto max-h-60 object-cover' />
              <p className="title">
                {project.name}
                <span>{project.technologies.map((t) => t.toLowerCase()).join(', ')}</span>
              </p>
              <article className="description">
                <p key={`desc-${idx}`}>
                  <span>➜</span>
                  {project.description}
                </p>
              </article>
              {project.links.map((link, idx) => (
                <span>
                  <a
                    className="project_link"
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >{`${link.name}`}</a>{' '}
                  <i className="fa fa-external-link-alt fa-xs"></i>
                  {idx !== project.links.length - 1 && <span>{`, `}</span>}
                </span>
              ))}
            </section>
          ))}
        </div>
      </div>
      <div className="go_button_container">
        <Link to="/resume">
          <button>
            <b>➜ </b>Resume
          </button>
        </Link>
      </div>
    </div>
  );
}
