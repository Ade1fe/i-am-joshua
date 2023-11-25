import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../Common/SEO/helmet';
import { BlogProps } from 'interface';
// import { BlogProps } from '../../../interface';


const Blog: React.FC<BlogProps> = (props) => {
  useEffect(() => {
    props.activeMenu(2);
  }, [props]);

  const [showBox, setShowBox] = useState(false);

  useEffect(() => {
    setShowBox(true);
  }, []);

  return (
    <div className={`box project min-h-screen flex flex-col justify-center items-center ${showBox ? 'visible' : ''}`}>
      <Helmet title="Coming Soon" name={''} content={''} /> 
      <div className="coming-soon-container text-center">
        <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>
        <p className="text-lg text-gray-400">Stay tuned for our latest blog content!</p>
      </div>
      <div className="go_button_container">
        <Link to="/">
          <button>
            <b>➜ </b>Home
          </button>
        </Link>
        <Link to="/projects">
          <button>Works ➜</button>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
