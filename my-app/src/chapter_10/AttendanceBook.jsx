import React from "react";

const students = [
  {
    id: 1,
    name: "수리",
  },
  {
    id: 2,
    name: "레오",
  },
  {
    id: 3,
    name: "후추",
  },
  {
    id: 4,
    name: "보리",
  },
  {
    id: 5,
    name: "탱이",
  },
];

export default function AttendanceBook(props) {
  return (
    <ul>
      {students.map((el) => {
        return <li key={el.id}>{el.name}</li>;
      })}
    </ul>
  );
}
