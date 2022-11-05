import React from "react";

const students = [
    {
        id: 1,
        name: "Minje", 
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Pitang",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                // key를 포맷팅 된 문자열로 사용할 수도 있고, index를 key로 사용할 수도 있음. 
                return <li key={`student-id-${student.id}`}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;