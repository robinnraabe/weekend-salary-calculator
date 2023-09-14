let employeeArray = [];
let employeeObject = {};
let monthlyCost = 0;
let employeeDiv = document.querySelector("#employees");

function addEmployee(event) {
    event.preventDefault();
    // Stores employee info
    employeeObject.firstName = document.querySelector("#first-name-input").value;
    employeeObject.lastName = document.querySelector("#last-name-input").value;
    employeeObject.idNumber = document.querySelector("#ID-number-input").value;
    employeeObject.jobTitle = document.querySelector("#job-title-input").value;
    employeeObject.annualSalary = document.querySelector("#annual-salary-input").value;
    employeeArray.push(employeeObject);
    // Appends employees to DOM
    employeeDiv.innerHTML += `
    <tr>
        <td> ${employeeObject.firstName} </td>
        <td> ${employeeObject.lastName} </td>
        <td> ${employeeObject.idNumber} </td>
        <td> ${employeeObject.jobTitle} </td>
        <td> ${employeeObject.annualSalary} </td>
    <tr>`
    // Updates total monthly cost
    monthlyCost += employeeObject.annualSalary / 12;
    employeeObject = {};
    // Clears input fields
    document.querySelector("#first-name-input").value = "";
    document.querySelector("#last-name-input").value = "";
    document.querySelector("#ID-number-input").value = "";
    document.querySelector("#job-title-input").value = "";
    document.querySelector("#annual-salary-input").value = "";
    console.log(monthlyCost);
    // Boolean - will be updated and fixed during styling
    if (monthlyCost > 20000) {
        monthlyCost.style.backgroundColor = "pink";
    }
}

function deleteEmployee(event) {
    
}