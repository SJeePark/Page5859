import React, { useEffect, useState } from "react";

const Participants = ({ winningNumbers }) => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    
    const shuffleArray = (array) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    const generateUniqueNumber = (existingNumbers) => {
      let num;
      do {
        num = Math.floor(Math.random() * 50) + 1;
      } while (existingNumbers.includes(num));
      return num;
    };

    const generateParticipantNumbers = (winningNumbers) => {
      const shuffleArray = (array) => {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      };
    
      const generateUniqueNumber = (existingNumbers) => {
        let num;
        do {
          num = Math.floor(Math.random() * 50) + 1;
        } while (existingNumbers.includes(num));
        return num;
      };
    
      const createNumbers = (matchCount) => {
        // 당첨 번호 중 matchCount만큼 선택
        const matchedNumbers = shuffleArray(winningNumbers).slice(0, matchCount);
        // 나머지 번호 생성
        const unmatchedNumbers = Array.from({ length: 6 - matchCount }, () =>
          generateUniqueNumber([...winningNumbers, ...matchedNumbers])
        );
        // 모두 합친 후 섞기
        return shuffleArray([...matchedNumbers, ...unmatchedNumbers]);
      };
    
      return [
        {
          id: 1,
          name: "가은",
          numbers: createNumbers(3), 
        },
        {
          id: 2,
          name: "시우",
          numbers: createNumbers(6), 
        },
        {
          id: 3,
          name: "서연",
          numbers: createNumbers(4), 
        },
        {
          id: 4,
          name: "서준",
          numbers: createNumbers(5), 
        },
        {
          id: 5,
          name: "지아",
          numbers: createNumbers(2), 
        },
      ];
    };
    
    setParticipants(generateParticipantNumbers(winningNumbers));
  }, [winningNumbers]);

  return (
    <div>
      <table style={{ borderCollapse: "collapse", margin: "20px auto", width: "100%" }}>
        <thead>
          <tr  style={{backgroundColor:"beige"}}>
            <th style={{ border: "1px solid black", padding: "8px" }}>이름</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>복권번호</th>
          </tr>
        </thead>
        <tbody style={{ textAlign: "center" }}>
          {participants.map((participant) => (
            <tr key={participant.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{participant.name}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {participant.numbers.join(", ")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Participants;
