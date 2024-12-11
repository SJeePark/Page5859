import React, { useState } from 'react';

const SortedRank = () => {
  const rank = ["시우", "서준", "서연", "가은", "지아"];
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [isCorrect, setIsCorrect] = useState(false); 

  const checkRank = () => {
    const userRank = input.split(' ');
    const correct = rank.every((name, index) => name === userRank[index]); 
    setIsCorrect(correct); 
    setResult(correct ? '정답입니다!' : '다시 시도해보세요!');
  };

  return (
    <div>
      <input
        placeholder="띄어쓰기로 이름 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button style={{ marginLeft: "10px" }} onClick={checkRank}>
        정답 확인
      </button>
      {result && (
        <p
          style={{
            color: isCorrect ? 'green' : 'red', 
            fontStyle: "italic",
          }}
        >
          {result}
        </p>
      )}
    </div>
  );
};

export default SortedRank;
