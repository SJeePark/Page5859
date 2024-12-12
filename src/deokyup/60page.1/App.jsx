import React, { useState } from 'react';
import './App.css';

function App() {
  const [userAnswers, setUserAnswers] = useState(["", "", ""]);
  const [results, setResults] = useState([]);
  const correctAnswers = [
    "기부금 모금 캠페인 참여하기",
    "소방관 복지 지원 프로그램 알아보기",
    "친환경 소방 장비 개발 후원하기"
  ];

  
  const handleChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const handleCheckAnswers = () => {
    const newResults = userAnswers.map((answer, index) => {
      return answer === correctAnswers[index] ? "정답" : "오답";
    });
    setResults(newResults);
  };

  return (
    <div className="page">
      
      <img src="/images/title1.jpg" alt="제목 아이콘" className="header-icon" />

      <div className="instructions">
        <p>다음 만화 속 여자가 복권에 당첨되었다고 가정했을 때,</p>
        <p>말풍선 (①)에 들어갈 말을 자유롭게 3가지 적어보세요(1~3).</p>
      </div>

      
      <div className="comic-container">
        <div className="comic-panel">
          <img src="/images/panel1.jpg" alt="만화 패널 1" />
        </div>
        <div className="comic-panel">
          <img src="/images/panel2.jpg" alt="만화 패널 2" />
        </div>
        <div className="comic-panel">
          <img src="/images/panel3.jpg" alt="만화 패널 3" />
        </div>
        <div className="comic-panel">
          <img src="/images/panel4.jpg" alt="만화 패널 4" />
        </div>
      </div>

      
      <div className="content">
        <p className="example">
          <strong>
            <span className="example-label">예시)</span>
          </strong>{" "}
          요즘 뉴스 보니까 소방관들 장갑이 많이 낡고, 근무 환경도 많이
          열악하다고 해요. 불철주야 고생하는 소방관들을 위해 기부하는 건 어때요?
        </p>

        
        <div className="answers">
          {userAnswers.map((answer, index) => (
            <p key={index}>
              {index + 1}.{" "}
              <input
                style={{ width: "470px" }}
                value={userAnswers[index]}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </p>
          ))}
        </div>
        <button onClick={handleCheckAnswers} style={{ marginTop: "10px" }}>
          정답 확인
        </button>
        {results.length > 0 && (
          <div className="results">
            <h4>결과:</h4>
            <ul>
              {results.map((result, index) => (
                <li key={index}>
                  {index + 1}. {result}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      
      <div className="page-number">60</div>
    </div>
  );
}

export default App;
