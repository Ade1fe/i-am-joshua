import React from 'react';
import {Link} from 'react-router-dom';
import './base.scss';
import { arrow, navLine, picFour } from '~/assets';

export default function Base({menu}: any) {
    return (
        <div className="base_container">
            <div className="hero">
                <div className="intro_box">
                    <h1>
                    Greetings, I'm <br/>  Joshua.
                    </h1>
                    <div className="profile_pic">
                        <img className="w-48 h-48 rounded-full " src={picFour} alt="my-avatar"/>
                    </div>
                </div>

                <div className="description">
                    <p>

<span>
  I'm a <span style={{textDecoration: 'underline', color: '#ddd'}}>Tech Enthusiast</span>. I'm dedicated to innovating technology and shaping the future of work.
</span>
       </p>
                </div>

                <div className="go_button_container">
                    <Link to="/resume">
                        <button className="explore">Explore ➜</button>
                    </Link>
                </div>
            </div>

            <nav>
        <ul>
          <li className={menu[0]}>
            <small>
              00
              <Link to="/resume">
                <img src={navLine} alt="menu bullet"/> RESUME
              </Link>
            </small>
          </li>

          <li className={menu[1]}>
            <small>
              01
              <Link to="/projects">
                <img src={navLine} alt="menu bullet"/> WORKS
              </Link>
            </small>
          </li>

          <li className={menu[2]}>
            <small>
              02
              <Link to="/blog">
                <img src={navLine} alt="menu bullet"/> BLOG
              </Link>
            </small>
          </li>
        </ul>
      </nav>

            <div className="footer">
                <img className="w-16 h-16 rounded-full" src={picFour} alt=""/>
                <div className="social">

                <a href="https://" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i> Twitter <img src={arrow} alt="pointer"/>
                    </a>

                    
                    <a href="https://" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i> Github
                        <img src={arrow} alt="pointer"/>
                    </a>

                    
                    <a href="https://" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i> LinkedIn <img src={arrow} alt="pointer"/>
                    </a>
                </div>
            </div>
        </div>
    );
}
