import React from 'react';
import Seojun from './Seojun';
import SortedRank from './SortedRank';
import Sum from './Sum';

const questionNum = [
  {
    key: 2,
    content: "1등부터 5등까지 당첨된 사람의 이름을 순서대로 나열하세요.",
    tag: <SortedRank />
  },
  {
    key: 3,
    content: "당첨자 2명의 금액을 합했더니 1,310,000원이 되었습니다. 당첨자 2명은 누구인가요?",
    tag: <Sum />
  }
];

const LottoQuestion = ({seojunNum}) => {
  return (
    <div>
      <div>
        <p>1.서준 씨의 복권번호와 당첨번호를 비교했을 때, 5개의 숫자가 일치하여 2등에 당첨되었습니다.<br/>일치하는 숫자를 적어보세요.</p>
        <Seojun seojunNum={seojunNum}/>
      </div>
      {questionNum.map(({ key, content, tag }) => (
        <div key={key}>
          <div style={{ display: 'flex', height: "20px"}}>
            <p>{key}.</p>
            <p>{content}</p>
          </div>
          <div style={{margin: "15px"}}>{tag}</div>
        </div>
      ))}
    </div>
  );
};

export default LottoQuestion;
