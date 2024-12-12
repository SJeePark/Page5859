import React from 'react';
import flowerpot from '../img/flowerpot.png';
import './Question.css';

const Question = ({ induce, explanation }) => {
  return (
    <div>
    <div className="question-container">
        <img src={flowerpot} className="image" />
        <div className="induce">{induce}</div>
    </div>
    <div className='explanation'>
    {explanation}
    </div>
  </div>
  );
};

export default Question;
