import React from 'react';

export default ({ cn }: { cn: string }) => {
  return (
    <div className={cn}> 
      <a href="https://" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="https://" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-github"></i>
      </a>
      <a href="hhttps://" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-instagram"></i>
      </a>
    </div>
  );
};
