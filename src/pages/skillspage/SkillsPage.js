import React from 'react';
import './SkillsPage.css';
import { Link } from 'react-router-dom';
const SkillsPage = () => {
  return (
    <div className="SkillsPage">
      <form>
        <h1>Add Skills</h1>
        <p>Tell Us What You Are Good At !</p>
        <div className="form-group">
          <input type="text" />
          <i class="fa fa-trash-o"></i>
        </div>
        <div className="form-group">
          <input type="text" />
          <i class="fa fa-trash-o"></i>
        </div>
        <div className="form-group">
          <input type="text" />
          <i class="fa fa-trash-o"></i>
        </div>
        <div className="form-group">
          <input type="text" />
          <i class="fa fa-trash-o"></i>
        </div>
        <button className="btn add-btn"> + Add More</button>
        <Link to="/final" className="btn next-btn">
          save & continue
        </Link>
      </form>
    </div>
  );
};

export default SkillsPage;
