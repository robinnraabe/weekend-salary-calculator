let employeeObject = {};
let monthlyCost = 0;
let employeeDiv = document.querySelector("#employees");
let monthlyCostDiv = document.querySelector("#monthly-cost");

// Adds employee to the DOM and updates total monthly cost
function addEmployee(event) {
    event.preventDefault();
    // Stores employee info
    employeeObject.firstName = document.querySelector("#first-name-input").value;
    employeeObject.lastName = document.querySelector("#last-name-input").value;
    employeeObject.idNumber = document.querySelector("#ID-number-input").value;
    employeeObject.jobTitle = document.querySelector("#job-title-input").value;
    employeeObject.annualSalary = document.querySelector("#annual-salary-input").value;
    // Appends employees to DOM
    employeeDiv.innerHTML += `
    <tr id="table-row">
        <td> ${employeeObject.firstName} </td>
        <td> ${employeeObject.lastName} </td>
        <td> ${employeeObject.idNumber} </td>
        <td> ${employeeObject.jobTitle} </td>
        <td> $${employeeObject.annualSalary} </td>
        <td> <button onClick="removeEmployee(event)" class="button"> Remove employee </button> </td>
    <tr>`
    // Fixes formatting of numbers
    let salaryString = String(employeeObject.annualSalary);
    salaryString = salaryString.replace('$', '');
    salaryString = salaryString.replace('$', '');
    salaryString = salaryString.replace(',', '');
    // Updates total monthly cost
    monthlyCost += (Number(salaryString) / 12);
    // Clears input fields
    employeeObject = {};
    document.querySelector("#first-name-input").value = "";
    document.querySelector("#last-name-input").value = "";
    document.querySelector("#ID-number-input").value = "";
    document.querySelector("#job-title-input").value = "";
    document.querySelector("#annual-salary-input").value = "";
    checkCost(monthlyCost);
}

// Checks if monthly cost is over $20,000
function checkCost(total) {
        if (total > 20000) {
            monthlyCostDiv.style.backgroundColor = "pink";
        }
        else {
            monthlyCostDiv.style.backgroundColor = "palegoldenrod";
        }
        monthlyCostDiv.innerHTML = `Total Monthly Cost: $${total.toFixed(2)}`;
}

// Removes employee from the table and subtracts their salary from the total monthly cost
function removeEmployee(event) {
    // Fixes formatting of numbers
    let salaryString = String(event.target.parentElement.parentElement.children[4].innerHTML)   
    salaryString = salaryString.replace('$', '');
    salaryString = salaryString.replace('$', '');
    salaryString = salaryString.replace(',', '');
    salaryString = Number(salaryString) / 12;
    // Subtracts deleted employee's salary from the monthly cost
    monthlyCost -= salaryString;
    checkCost(monthlyCost);
    // Removes employee from the table
    event.target.parentElement.parentElement.remove();
}