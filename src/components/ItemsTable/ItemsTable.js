import React from "react";
import "./ItemsTable.css";

export default function ItemsTable() {
  const data = [
    { sno: 1, dateTime: "11:12 PM , 5/31/2024", title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", fileType: "PDF" },
    { sno: 2, dateTime: "10:00 AM , 5/30/2024", title: "Sed do eiusmod tempor incididunt ut labore et aliqua", fileType: "DOCX" },
    { sno: 3, dateTime: "09:45 AM , 5/29/2024", title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco", fileType: "TXT" },
    { sno: 4, dateTime: "08:30 AM , 5/28/2024", title: "Duis aute irure dolor in reprehenderit in voluptate velit", fileType: "PDF" },
    // Add more data as needed
  ];

  return (
    <div className="itemstable-container">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-1">S No.</div>
          <div className="col col-2">Time & Date</div>
          <div className="col col-3">Title</div>
          <div className="col col-4">File Type</div>
        </li>
        {data.map((item, index) => (
          <li className="table-row" key={index}>
            <div className="col col-1" data-label="S No.">{item.sno}</div>
            <div className="col col-2" data-label="Time & Date">{item.dateTime}</div>
            <div className="col col-3" data-label="Title">{item.title}</div>
            <div className="col col-4" data-label="File Type">{item.fileType}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
