import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <div className="HomePage">
      <Link to="/intro" className="btn btn-primary">
        Create my resume
      </Link>
    </div>
  );
};

export default HomePage;
