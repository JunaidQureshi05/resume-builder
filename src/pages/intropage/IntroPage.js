import React from 'react';
import './IntroPage.css';
import { Link } from 'react-router-dom';
const IntroPage = () => {
  return (
    <div className="IntroPage">
      <form action="">
        <h1>Tell Me Somthing About Yourself !</h1>
        <p>With this info, recruiters will be able to find you.</p>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" />
        </div>
        <div className="short-group">
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input type="text" id="country" name="country" />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="number">Phone number</label>
          <input type="number" id="number" name="number" />
        </div>
        <Link to="/work-experience" className="btn next-btn">
          save & continue
        </Link>
      </form>
    </div>
  );
};

export default IntroPage;
