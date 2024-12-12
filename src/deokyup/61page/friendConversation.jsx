import React, { useState } from "react";
import "./FriendConversation.css";

function FriendConversation() {
  const correctAnswers = {
    question1: {
      성주: "1층",
      상구: "2층",
      양심: "3층",
      정선: "4층",
    },
    question2: ["성주", "양심"],
  };

  const [userAnswers, setUserAnswers] = useState({
    question1: { 성주: "", 상구: "", 양심: "", 정선: "" },
    question2: ["", ""],
  });

  const [result, setResult] = useState(null);

  const handleChange = (question, key, value) => {
    setUserAnswers((prev) => {
      if (question === "question1") {
        return {
          ...prev,
          question1: {
            ...prev.question1,
            [key]: value,
          },
        };
      } else if (question === "question2") {
        const newQuestion2 = [...prev.question2];
        newQuestion2[key] = value;
        return {
          ...prev,
          question2: newQuestion2,
        };
      }
      return prev;
    });
  };

  const handleCheckAnswers = () => {
    const question1Correct =
      JSON.stringify(userAnswers.question1) === JSON.stringify(correctAnswers.question1);
    const question2Correct =
      userAnswers.question2
        .map((name) => name.trim())
        .sort()
        .join(",") === correctAnswers.question2.sort().join(",");

    setResult({
      question1: question1Correct ? "정답" : "오답",
      question2: question2Correct ? "정답" : "오답",
    });
  };

  return (
    <div className="conversation-page">
    
      <div className="title-container">
  <img src="/images/titel2.jpg" className="title-icon"  />
  <span className="title-text">층별 시설 기억하기</span>
</div>

     
      <div className="instructions">
        <p>
          네 친구들이 복지관 앞 정자에서 대화를 나누고 있습니다. 앞서 기억 해 둔{" "}
          <strong style={{ color: "red" }}>층별 시설</strong>을 생각하며 아래의 대화를 소리 내어 읽고, 문제를 풀어보세요(1~2).
        </p>
      </div>

  
      <div className="conversation-box">
        <div className="conversation-row">
          <strong>성주:</strong>
          <span>
            어휴 날이 너무 덥다. 온몸에 힘도 없고 입맛도 없는 게 아무래도 더위를 먹은 것 같아. 내일
            사물놀이 공연을 제대로 보려면, 오늘은 의사 선생님께 진료를 보고 집에 가서 푹 쉬어야겠어.
          </span>
        </div>
        <div className="conversation-row">
          <strong>상구:</strong>
          <span>
            그래 성주야. 우리같이 나이든 사람들은 건강을 제일 조심해야 해. 그나저나 다들 댄스 스포츠
            수업 들어봤니? 나는 이번 주 내내 듣는데. 너무 재밌더라. 음악에 맞춰 춤추다 보면 시간 가는
            줄 모르겠더라고.
          </span>
        </div>
        <div className="conversation-row">
          <strong>양심:</strong>
          <span>
            나도 저번에 들어봤는데, 난 몸이 잘 안 움직여서 좀 힘들었어. 그러고 보면 우리 복지관에 참
            재밌는 프로그램이 많은 것 같아. 난 오늘이랑 내일 사물놀이 공연을 관람할 거야.
          </span>
        </div>
        <div className="conversation-row">
          <strong>정선:</strong>
          <span>
            우리 복지관에 사물놀이 공연도 오는구나. 멋지겠는 걸? 나도 다음번에 신청해야겠다. 나는 이번
            주 내내 있을 붓글씨 수업 때 필요한 붓이랑 화선지를 사왔어. 글씨를 쓰다 보면 마음이
            차분해지는 것 같아.
          </span>
        </div>
      </div>

    
      <div className="questions">
        <p>
          <strong>1.</strong> 네 친구들은 오늘 각각 몇 층으로 이동할 예정인가요?
        </p>
        <div className="answer-grid">
          {["성주", "상구", "양심", "정선"].map((name) => (
            <div key={name}>
              {name}:{" "}
              <input
                type="text"
                value={userAnswers.question1[name]}
                onChange={(e) => handleChange("question1", name, e.target.value)}
              />
            </div>
          ))}
        </div>
        <p>
          <strong>2.</strong> 내일 같은 층에서 만나게 될 친구 두 명은 누구인가요?
        </p>
        <div className="answer-line-container">
          <input
            type="text"
            className="answer-input"
            placeholder="친구 1"
            value={userAnswers.question2[0]}
            onChange={(e) => handleChange("question2", 0, e.target.value)}
          />
          <span className="answer-separator">,</span>
          <input
            type="text"
            className="answer-input"
            placeholder="친구 2"
            value={userAnswers.question2[1]}
            onChange={(e) => handleChange("question2", 1, e.target.value)}
          />
        </div>
        <button onClick={handleCheckAnswers} style={{ marginTop: "10px" }}>
          정답 확인
        </button>

        {result && (
          <div className="results">
            <h4>결과:</h4>
            <p>1번 문제: {result.question1}</p>
            <p>2번 문제: {result.question2}</p>
          </div>
        )}
      </div>

      
      <div className="footer">
        <img src="/images/check.jpg" alt="체크 아이콘" className="footer-icon" />
        <span>
          복지관의 <strong className="red-text">층별 시설</strong>을 기억해 주세요.
        </span>
      </div>

     
      <div className="page-number">61</div>
    </div>
  );
}

export default FriendConversation;
