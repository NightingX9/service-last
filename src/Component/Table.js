import React, { useEffect, useState } from "react";
import axios from "axios"; // หรือ import fetch ตามที่คุณต้องการ

function TableStatus() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    // ทำการเรียก API เพื่อดึงข้อมูลโต๊ะ
    axios.get("/api/tables").then((response) => {
      setTables(response.data);
    });
  }, []);

  return (
    <div className="table-status">
      <h2>สถานะโต๊ะ</h2>
      <ul>
        {tables.map((table) => (
          <li key={table.id}>
            {table.name} - {table.isoccupied ? "ไม่ว่าง" : "ว่าง"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableStatus;
