let employeeArray = [];
let employeeObject = {};

function addEmployee(event) {
    // Stores employee info
    employeeObject.firstName = document.querySelector("#first-name-input").value;
    employeeObject.lastName = document.querySelector("#last-name-input").value;
    employeeObject.idNumber = document.querySelector("#ID-number-input").value;
    employeeObject.jobTitle = document.querySelector("#job-title-input").value;
    employeeObject.annualSalary = document.querySelector("#annual-salary-input").value;
    employeeArray.push(employeeObject);
    employeeObject = {};
    // Clears input fields
    document.querySelector("#first-name-input").value = "";
    document.querySelector("#last-name-input").value = "";
    document.querySelector("#ID-number-input").value = "";
    document.querySelector("#job-title-input").value = "";
    document.querySelector("#annual-salary-input").value = "";
}