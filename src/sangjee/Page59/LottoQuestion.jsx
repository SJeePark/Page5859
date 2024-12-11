import React from 'react';
import SortedRank from './SortedRank';


const LottoQuestion = () => {
  return (
    <div>
      <div>
        <>
        1. 서준 씨의 복권번호와 당첨번호를 비교했을 때, 
        5개의 숫자가 일치하여 2등에<br/>당첨되었습니다.일치하는 숫자를 적어보세요.</>
      </div>
        <div>
            2. 1등부터 5등까지 당첨된 사람의 이름을 순서대로 나열하세요.
        </div>
        <SortedRank/>
    <div>
        3. 당첨자 2명의 금액을 합했더니 1,310,000원이 되었습니다. 당첨자 2명은 누구인가요?
    </div>
    </div>
  )
}

export default LottoQuestion;
