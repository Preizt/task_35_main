import React from 'react'

function Myteam() {

   const emp = [
        { name: "Ammu", age: 25, designation: "Developer", salary: 60000 },
        { name: "Rahul", age: 28, designation: "Software Engineer", salary: 80000 },
        { name: "Sneha", age: 26, designation: "UI/UX Designer", salary: 70000 },
        { name: "Vikram", age: 30, designation: "Software Engineer", salary: 85000 },
        { name: "Priya", age: 24, designation: "Frontend Developer", salary: 65000 },
        { name: "Arjun", age: 27, designation: "Software Engineer", salary: 82000 },
        { name: "Neha", age: 29, designation: "QA Engineer", salary: 75000 },
        { name: "Rohan", age: 32, designation: "Tech Lead", salary: 100000 },
        { name: "Meera", age: 23, designation: "Intern", salary: 30000 },
        { name: "Suresh", age: 35, designation: "HR Manager", salary: 90000 },
        { name: "Divya", age: 26, designation: "Full Stack Developer", salary: 95000 },
        { name: "Kiran", age: 31, designation: "Database Administrator", salary: 88000 },
        { name: "Ananya", age: 27, designation: "Cloud Engineer", salary: 92000 },
        { name: "Varun", age: 33, designation: "DevOps Engineer", salary: 98000 },
        { name: "Pooja", age: 22, designation: "Data Analyst", salary: 72000 }
    ];
    
    //1. Find the sum of salary 
    //2. Display the name of Employee who is getting highest salary

    let sumSalary = emp.reduce((a,b)=>a+b.salary,0)
    console.log(sumSalary);

    let highestSalary = emp.reduce((a,b)=>a.salary>b.salary?a:b).name
    
  console.log(highestSalary);
  
  return (
    <div style={{margin:"50px"}}>

        <h1>Highest Salary = {highestSalary}</h1>

    </div>
  )
}

export default Myteam