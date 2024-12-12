import React from "react";
import "./Table.css";

const floorInfo = [
  ["층", "시설", "설명"],
  ["5층", "(1)", "악기연주, 노래 교실, 공연 관람 등 노후의 건전한 여가 문화를 위한 __(6)__ 프로그램이 진행됩니다."],
  ["4층", "(2)", "그림 그리기, 서예, 공예 등 노후의 건전한 여가 문화를 위한 __(7)__ 프로그램이 진행됩니다."],
  ["3층", "(3)", "탁구, 요가, 게이트볼, 스포츠댄스 등 노후의 건강한 신체유지를 위한 __(8)__ 프로그램이 진행됩니다."],
  ["2층", "(4)", "요리, 제과제빵, 바리스타(커피제조) 등 일상생활 참여 증진을 위한 __(9)__ 프로그램이 진행됩니다."],
  ["1층", "(5)", "건강상담, 응급처치, 물리치료 처방 등 의사의 __(10)__ 를 받을 수 있습니다. 또한 운동 치료, 전기 자극 치료 등 __(11)__ 서비스를 이용할 수 있습니다."],
];

const Cell = ({ content, columnIndex }) => {
  const columnClass = `column-${columnIndex + 1}`;
  return <div className={`cell ${columnClass}`}>{content}</div>;
};

const Row = ({ rowData }) => {
  return (
    <div className="row">
      {rowData.map((content, index) => (
        <Cell key={index} content={content} columnIndex={index} />
      ))}
    </div>
  );
};

const Table = () => {
  return (
    <div>
      <div className="grid">
        {floorInfo.map((rowData, rowIndex) => (
          <Row key={rowIndex} rowData={rowData} />
        ))}
      </div>
    </div>
  );
};

export default Table;
