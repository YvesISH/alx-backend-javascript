export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const studentA: Student = {
  firstName: "Yves",
  lastName: "Ish",
  age: 15,
  location: "Kigali, Rwanda", 
};
const studentB: Student = {
  firstName: "Ivan",
  lastName: "Inn",
  age: 18,
  location: "Musanze, Rwanda",
};

const studentsList: Array<Student> = [
  studentA,
  studentB,
];
const stylsheet = `
   html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

/** Displays info about students in a table */

export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const tableBody = document.createElement('tbody');
}
