import React, { useState } from "react";
import "./Table.css";

const Cell = ({ content, columnIndex, isCorrect }) => {
  const columnClass = `column-${columnIndex + 1}`;
  const correctClass = isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : "";
  return (
    <div className={`cell ${columnClass} ${correctClass}`}>{content}</div>
  );
};

const Row = ({ rowData, isInputRow, onInputChange, inputValues, answers }) => {
  return (
    <div className="row">
      {rowData.map((content, index) => {
        if (isInputRow && (index === 1 || index === 3)) {
          const isCorrect = answers ? answers[rowData[0]]?.[index] : null;
          return (
            <input
              key={index}
              type="text"
              maxLength="10"
              className={`input-cell column-${index + 1} ${isCorrect === true ? "correct" : isCorrect === false ? "incorrect" : ""}`}
              value={inputValues[rowData[0]]?.[index] || ""}
              onChange={(e) => onInputChange(rowData[0], index, e.target.value)}
            />
          );
        } else {
          return (
            <Cell
              key={index}
              content={content}
              columnIndex={index}
            />
          );
        }
      })}
    </div>
  );
};

// Grid 컴포넌트
const Table = () => {
  const correctAnswers = {
    "5층": ["음악실", "음악"],
    "4층": ["미술실", "미술"],
    "3층": ["체육실", "체육"],
    "2층": ["요리실", "요리"],
    "1층": ["진료실과 물리치료실", "진료와 물리 치료"],
  };

  const [inputValues, setInputValues] = useState({});
  const [results, setResults] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (row, columnIndex, value) => {
    const updatedValues = {
      ...inputValues,
      [row]: {
        ...inputValues[row],
        [columnIndex]: value,
      },
    };
    setInputValues(updatedValues);
  };

  const checkAnswers = () => {
    const updatedResults = {};
    let allCorrect = true;
    const incorrectFacilities = [];
    const incorrectPrograms = [];

    for (let floor in correctAnswers) {
      updatedResults[floor] = {};
      correctAnswers[floor].forEach((answer, index) => {
        const userAnswer = (inputValues[floor]?.[index + 1]?.trim() || "");
        const correctAnswer = answer.trim();
        const isCorrect = userAnswer === correctAnswer;

        updatedResults[floor][index + 1] = isCorrect;

        if (!isCorrect) {
          allCorrect = false;
          if (index === 0) {
            incorrectFacilities.push(floor);
          } else if (index === 1) {
            incorrectPrograms.push(floor);
          }
        }
      });
    }

    setResults(updatedResults);

    if (allCorrect) {
      setErrorMessage("정답입니다! 🎉");
    } else {
      const facilityMessage = incorrectFacilities.length
        ? `시설: ${incorrectFacilities.join(", ")}`
        : "";
      const programMessage = incorrectPrograms.length
        ? `프로그램명: ${incorrectPrograms.join(", ")}`
        : "";
      setErrorMessage(`틀린 부분 ${facilityMessage} ${programMessage}`);
    }
  };

  const revealAnswers = () => {
    const updatedValues = {};
    for (let floor in correctAnswers) {
      updatedValues[floor] = {
        1: correctAnswers[floor][0],
        3: correctAnswers[floor][1],
      };
    }
    setInputValues(updatedValues);
    setResults(
      Object.fromEntries(Object.keys(correctAnswers).map((key) => [key, { 1: true, 3: true }]))
    );
  };

  const gridData = [
    ["층", "시설", "설명", "프로그램명"],
    ["5층", "음악실", "악기연주, 노래 교실, 공연 관람 등 노후의 건전한 여가 문화를 위한 _____ 프로그램이 진행됩니다.", ""],
    ["4층", "미술실", "그림 그리기, 서예, 공예 등 노후의 건전한 여가 문화를 위한 _____프로그램이 진행됩니다.", ""],
    ["3층", "체육실", "탁구, 요가, 게이트볼, 스포츠댄스 등 노후의 건강한 신체유지를 위한 _____프로그램이 진행됩니다.", ""],
    ["2층", "요리실", "요리, 제과제빵, 바리스타(커피제조) 등 일상생활 참여 증진을 위한 _____프로그램이 진행됩니다.", ""],
    ["1층", "진료실과 물리치료실", "건강상담, 응급처치, 물리치료 처방 등 의사의 _____를 받을 수 있습니다. 또한 운동치료, 전기 자극 치료 등 ________ 서비스를 이용할 수 있습니다.", ""],
  ];

  return (
    <div className="grid">
      {gridData.map((rowData) => (
        <Row
          key={rowData[0]}
          rowData={rowData}
          isInputRow={gridData.indexOf(rowData) > 0}
          onInputChange={handleInputChange}
          inputValues={inputValues}
          answers={results}
        />
      ))}

      <div className="actions">
        <button onClick={checkAnswers}>정답 확인</button>
        <button onClick={revealAnswers}>정답 보기</button>
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default Table;
