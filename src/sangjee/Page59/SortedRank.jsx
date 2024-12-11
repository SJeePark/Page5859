import React, { useState } from 'react';

const SortedRank = () => {
  const rank = ["시우", "서준", "서연", "가은", "지아"];
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');


  const handleCheckRank = () => {
    const userRank = input.trim().split(' ');
    const isCorrect = rank.every((name, index) => name === userRank[index]);
    setResult(isCorrect ? '정답입니다!' : '순서가 일치하지 않습니다.');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="띄어쓰기로 이름 입력"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleCheckRank}>정답 확인하기</button>
      {result && <p>{result}</p>}
    </div>
  );
};

export default SortedRank;
