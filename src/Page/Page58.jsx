import React from 'react';
import Question from '../Component/Question';
import '../Page/Page5859.css';
import Table from '../Page58/Table';

const Page58 = () => {
  return (
    <div className='page'>
      <div className="content">
        <Question 
          induce={'층별 시설 기억해두기'}
          explanation={
            <>
              앞서 기억해둔 <span className='redHighlight'>복지관의 층별 시설</span>입니다. 
              각 시설의 이름과 설명의 빈칸을 채워보세요.
            </>
          }
        />
        <Table />
      </div>
    </div>
  );
};

export default Page58;