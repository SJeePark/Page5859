import React from "react";
import Question from "../Component/Question";
import LottoNum from "./LottoNum";
import LottoQuestion from "./LottoQuestion";
import LottoTable from "./LottoTable";

const page = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "80vh",
}

const content = {
  display: "flex",
  flexDirection: "column",
}

const Page59 = () => {
  return (
    <div className='page' style={page}>
      <div className="content" style={content}>
        <Question 
          induce={'복권 번호 당첨'}
          explanation={
            <>
              기쁨마을에서 5명의 복권 당첨자가 나왔습니다.당첨번호와 순위,<br/>
              당첨자를 확인하고 문제를 풀어보세요(1~3)
            </>
          }
        />
        <LottoTable/>
        <LottoNum/>
        <LottoQuestion/>
      </div>
    </div>
  ); 
};

export default Page59;