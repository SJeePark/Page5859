import React, { useEffect, useState } from "react";
import Participants from "./Participants";

const LottoNum = () => {
  const [winningNumbers, setWinningNumbers] = useState([]);

  useEffect(() => {
    const generateWinningNumbers = () => {
      const numbers = [];
      while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 50) + 1;
        if (!numbers.includes(num)) {
          numbers.push(num);
        }
      }
      return numbers.sort((a, b) => a - b);
    };

    setWinningNumbers(generateWinningNumbers());
  }, []);

  const tableCellStyle = {
    border: "1px solid black",
    padding: "10px",
    textAlign: "center",
  };

  return (
    <div>
      <table style={{ borderCollapse: "collapse", marginTop: "20px", width: "100%" }}>
        <thead>
          <tr>
            <th
              colSpan="6"
              style={{
                border: "1px solid black",
                padding: "8px",
                textAlign: "center",
                backgroundColor: "beige",
              }}
            >
              당첨번호
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {winningNumbers.map((num) => (
              <td key={num} style={tableCellStyle}>
                {num}
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      {/* 당첨 번호가 준비된 상태에서만 참가자 테이블 렌더링 */}
      {winningNumbers.length > 0 && <Participants winningNumbers={winningNumbers} />}
    </div>
  );
};

export default LottoNum;
