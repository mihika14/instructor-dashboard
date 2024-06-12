import React from "react";
import "./Notes.css";
import Navbar from "../Navbar/Navbar";

const notesData = [
  {
    id: 1,
    heading: "Note 1",
    content:
      "Lorem ipsum dolor sit consectetur adipisicing elit. Modi laboriosam at voluptas minus culpa deserunt delectus sapiente inventore pariatur.",
  },
  {
    id: 2,
    heading: "Note 2",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
  },
  {
    id: 3,
    heading: "Note 3",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.",
  },
  {
    id: 4,
    heading: "Note 4",
    content:
      "Nemo enim ipsam sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
  {
    id: 5,
    heading: "Note 5",
    content:
      "Neque, qui dolorem adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
  },
  {
    id: 6,
    heading: "Note 6",
    content:
      "Ut enim ad minima veniam, ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
  },
  // {
  //   id: 7,
  //   heading: "Card 7",
  //   content:
  //     "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.",
  // },
  // {
  //   id: 8,
  //   heading: "Card 8",
  //   content:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
  // },
];

export default function Notes() {
  return (
    <>
      <Navbar />
      <div className="notes-container">
        {notesData.map((note) => (
          <div key={note.id} className="notes-card">
            <div className="notes-content">
              <p className="notes-heading">{note.heading}</p>
              <p className="notes-para">{note.content}</p>
              <box-icon
                type="solid"
                name="download"
                style={{ color: "#0B2027" }}
              ></box-icon>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
