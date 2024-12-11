import React, { useState } from 'react';

const Seojun = ({ seojunNum }) => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isCorrect, setIsCorrect] = useState(false); 

  const checkAnswer = () => {
    const userNumbers = input.split(' ').map(Number);
    const sortedUserNumbers = userNumbers.sort((a, b) => a - b); 
    const sortedSeojunNumbers = [...seojunNum].sort((a, b) => a - b); 

 
    const correct = 
      sortedUserNumbers.length === sortedSeojunNumbers.length &&
      sortedUserNumbers.every((num, index) => num === sortedSeojunNumbers[index]);

    setIsCorrect(correct); 
    setResult(correct ? '정답입니다!' : '다시 시도해보세요!');
  };

  return (
    <div style={{marginLeft:"15px", marginBottom:"15px"}}>
      <input
        placeholder="숫자를 띄어쓰기로 구별하여 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ marginLeft: '10px' }} onClick={checkAnswer}>
        정답 확인
      </button>
      {result && <p style={{ color: isCorrect ? 'green' : 'red', fontStyle:"italic" }}>{result}</p>}
    </div>
  );
};

export default Seojun;
