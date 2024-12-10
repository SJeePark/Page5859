import React from 'react';
import flowerpot from '../img/flowerpot.png'; // 이미지 파일 import
import './Question.css'; // CSS 파일 import

const Question = ({ induce, explanation }) => {
  return (
    <div>
    <div className="question-container">
      <div className="description">
        <img src={flowerpot} alt="flowerpot" className="image" />
        <div className="induce">{induce}</div>
      </div>
    </div>
    <div className='explanation'>
    {explanation}
    </div>
  </div>
  );
};

export default Question;
