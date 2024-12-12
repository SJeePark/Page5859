import React, { useState } from "react";

const correctAnswers = {
  "1": "음악실",
  "2": "미술실",
  "3": "체육실",
  "4": "요리실",
  "5": "진료실과 물리치료실",
  "6": "음악실",
  "7": "미술실",
  "8": "체육실",
  "9": "요리실",
  "10": "진료실과 물리치료실",
  "11": "음악실",
};

const InputSection = () => {
  const [inputValues, setInputValues] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const inputChange = (key, value) => {
    setInputValues({
      ...inputValues,
      [key]: value,
    });
  };

  const checkAnswers = () => {
    let allCorrect = true;

    for (let key in correctAnswers) {
      if (inputValues[key]?.trim() !== correctAnswers[key]) {
        allCorrect = false;
        break;
      }
    }

    setIsCorrect(allCorrect);
    setErrorMessage(allCorrect ? "정답입니다!" : "다시 시도해보세요!");
  };

  return (
    <div className="input-section" style={{ marginLeft: "15px" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
        {Object.keys(correctAnswers).map((key) => (
          <div key={key} className="input-row">
            <label htmlFor={`input-${key}`} className="input-label">
              {key}번:
            </label>
            <input
              id={`input-${key}`}
              value={inputValues[key] || ""}
              onChange={(e) => inputChange(key, e.target.value)}
              style={{ marginLeft: "10px" }}
            />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
        <button onClick={checkAnswers} style={{ marginRight: "10px" }}>
          정답 확인하기
        </button>
        {errorMessage && (
          <p
            style={{
              color: isCorrect ? "green" : "red",
              fontStyle: "italic",
              marginBottom: "6px"
            }}
          >
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default InputSection;
