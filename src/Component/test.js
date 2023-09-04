import React from "react";
import TableList from "./Tablelist"; // ระบุตำแหน่งของ Component TableList

const tablesData = [
  { id: 1, name: "โต๊ะ 1", isOccupied: true },
  { id: 2, name: "โต๊ะ 2", isOccupied: false },
  { id: 3, name: "โต๊ะ 3", isOccupied: false },
  // เพิ่มข้อมูลโต๊ะเพิ่มเติมตามต้องการ
];

function App() {
  return (
    <div className="app">
      <TableList tables={tablesData} />
    </div>
  );
}

export default App;
