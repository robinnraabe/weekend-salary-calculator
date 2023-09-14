let employeeArray = [];
let employeeObject = {};
let monthlyCost = 0;
let employeeDiv = document.querySelector("#employees");

function addEmployee(event) {
    // Stores employee info
    employeeObject.firstName = document.querySelector("#first-name-input").value;
    employeeObject.lastName = document.querySelector("#last-name-input").value;
    employeeObject.idNumber = document.querySelector("#ID-number-input").value;
    employeeObject.jobTitle = document.querySelector("#job-title-input").value;
    employeeObject.annualSalary = document.querySelector("#annual-salary-input").value;
    employeeArray.push(employeeObject);
    // Updates total monthly cost
    monthlyCost += employeeObject.annualSalary / 12;
    employeeObject = {};
    // Clears input fields
    document.querySelector("#first-name-input").value = "";
    document.querySelector("#last-name-input").value = "";
    document.querySelector("#ID-number-input").value = "";
    document.querySelector("#job-title-input").value = "";
    document.querySelector("#annual-salary-input").value = "";
    // Appends employees to DOM
    for (let employee of employeeArray) {
        employeeDiv.innerHTML += `
        <tr>
            <td> ${employee.firstName} </td>
            <td> ${employee.lastName} </td>
            <td> ${employee.idNumber} </td>
            <td> ${employee.jobTitle} </td>
            <td> ${employee.annualSalary} </td>
        <tr>`
    }
}