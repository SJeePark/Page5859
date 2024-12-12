import React from 'react';
import Question from '../Component/Question';
import InputSection from './InputSection';
import Table from './Table';


const page = {
  display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
}

const content = {
  display: "flex",
  flexDirection: "column",
}

const Page58 = () => {
  return (
    <div className='page' style={page}>
      <div className="content" style={content}>
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
        <InputSection/>
        
        <div className='container'
        style={{display: "flex", flexDirection: "row", textDecoration: "underline", textDecorationThickness:"1px" }}>
          <p>☑</p>
          <p style={{color:"red"}}>복지관의 층별 시설</p>
          <p>을 기억해주세요</p>
        </div>
      </div>
    </div>
  );
};

export default Page58;