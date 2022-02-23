import React from 'react';
import './WorkExperience.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
const WorkExperience = () => {
  const [currentlyWorking, setCurrentlyWorking] = useState(false);
  return (
    <div className="WorkExperience">
      <form>
        <h1>Work Experience</h1>
        <p>Tell us about your past works!</p>
        <div className="form-group">
          <label htmlFor="job-title">Job Title</label>
          <input type="text" id="job-title" name="job-title" />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company</label>
          <input type="text" id="company" name="company" />
        </div>
        <div className="short-group">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" name="city" id="city" />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" name="country" id="country" />
          </div>
        </div>
        <div className="short-group">
          <div className="form-group">
            <label htmlFor="start-date">Start Date</label>
            <input type="date" name="start-date" id="start-date" />
          </div>
          {!currentlyWorking ? (
            <div className="form-group">
              <label htmlFor="end-date">End Date</label>
              <input type="date" name="end-date" id="end-date" />
            </div>
          ) : (
            ''
          )}
        </div>
        <button
          className="working-btn"
          onClick={(e) => {
            e.preventDefault();
            setCurrentlyWorking(!currentlyWorking);
          }}
        >
          Currently Working
        </button>
        <Link to="/skills" className="btn next-btn">
          save & continue
        </Link>
      </form>
    </div>
  );
};

export default WorkExperience;
