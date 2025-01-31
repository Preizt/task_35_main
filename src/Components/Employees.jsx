import React from 'react'          //rfce : react functional component export



function Employees() {


    const employees = [
    { name: "Ammu", age: 25, designation: "Developer" },
    { name: "Rahul", age: 28, designation: "Software Engineer" },
    { name: "Sneha", age: 26, designation: "UI/UX Designer" },
    { name: "Vikram", age: 30, designation: "Software Engineer" },
    { name: "Priya", age: 24, designation: "Frontend Developer" },
    { name: "Arjun", age: 27, designation: "Software Engineer" },
    { name: "Neha", age: 29, designation: "QA Engineer" },
    { name: "Rohan", age: 32, designation: "Tech Lead" },
    { name: "Meera", age: 23, designation: "Intern" },
    { name: "Suresh", age: 35, designation: "HR Manager" },
    { name: "Divya", age: 26, designation: "Full Stack Developer" },
    { name: "Kiran", age: 31, designation: "Database Administrator" },
    { name: "Ananya", age: 27, designation: "Cloud Engineer" },
    { name: "Varun", age: 33, designation: "DevOps Engineer" },
    { name: "Pooja", age: 22, designation: "Data Analyst"}
];


 let software =  employees.filter(emp => emp.designation === "Software Engineer").map((a)=>a.name);
 console.log(software);
 


  return (
    <div style={{margin:"50px"}}>
       <h1>Employees whose designation is Software Engineer = {software}</h1>
    </div>


  )
}

export default Employees