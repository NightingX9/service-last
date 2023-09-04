import React from "react";
import Table from "./Table";

const tablesData = [
  { id: 1, name: "Table 1", isAvailable: true },
  { id: 2, name: "Table 2", isAvailable: false },
  { id: 3, name: "Table 3", isAvailable: true },
  // Add more table data as needed
];

function TableList() {
  return (
    <div className="table-list">
      <h2>Table List</h2>
      {tablesData.map((table) => (
        <Table
          key={table.id}
          name={table.name}
          isAvailable={table.isAvailable}
        />
      ))}
    </div>
  );
}

export default TableList;
