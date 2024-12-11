import React from "react";

const LottoTable = () => {

  const style = {
    border: "1px solid black", padding: "8px"
  }
  
  const data = [
    { rank: "1등", amount: "1,000,000,000원", criteria: "당첨번호 6개 숫자일치" },
    { rank: "2등", amount: "35,000,000원", criteria: "당첨번호 5개 숫자일치" },
    { rank: "3등", amount: "1,260,000원", criteria: "당첨번호 4개 숫자일치" },
    { rank: "4등", amount: "50,000원", criteria: "당첨번호 3개 숫자일치" },
    { rank: "5등", amount: "5,000원", criteria: "당첨번호 2개 숫자일치" },
  ];

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ width: "100%" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ backgroundColor: "beige" }}>
              <th style={style}>순위</th>
              <th style={style}>당첨금액</th>
              <th style={style}>당첨기준</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td style={style}>{row.rank}</td>
                <td style={style}>{row.amount}</td>
                <td style={style}>{row.criteria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LottoTable;
