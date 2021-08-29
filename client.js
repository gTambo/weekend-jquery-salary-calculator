console.log('JS');

$(document).ready(readyNow);

let allSalaries = [];
let totalMonthlyCost = 0;
let maxMonthlyCost = 20000;
let employeeTableNumber = 0;
// let tableReference = []; // No longer needed


function readyNow() {
    console.log('Document Ready');
    $('#submit-button').on('click', addEmployeeInfo);
    $('#employee-table-body').on('click', '.delete-button', deleteEmployee);
}

function calculateCost(salArr) {
    // console.log('in calculateCost', allSalaries);
    let totalAnnualCost = 0;
    for(item of salArr) {
        totalAnnualCost += parseInt(item);
    }
    console.log(`totalAnnualCost: ${totalAnnualCost}`);
    totalMonthlyCost = (totalAnnualCost / 12).toFixed(2);
    $('#total-monthly-cost').html(`Total monthly cost: ${totalMonthlyCost}`);

    if (totalMonthlyCost > maxMonthlyCost) {
        $('#total-monthly-cost').addClass('over-budget');
    } else if (totalMonthlyCost <= maxMonthlyCost) {
        $('#total-monthly-cost').removeClass('over-budget');
    }

}

function updateCost(index) {
    let indexToDelete = index - 1;
    console.log('removing ', allSalaries[indexToDelete], 'from salaries');
    allSalaries.splice(indexToDelete, 1, '0'); // remember to replace the removed value with '0', in case of deleting in random order
    calculateCost(allSalaries);
}

function deleteEmployee() {
    let employeeRow = $(this).parent().parent();
    console.log($(this).parent().parent());
    console.log($(this).attr('class'));
    // let salaryToRemove =$('#employee-table-body').find("td.salary").text();
    // console.log('found salary: ', salaryToRemove); // this returns a string of all salaries found, smashed together
    let deleteButtonClass = employeeRow.attr('class');
    console.log('delete button class: ', deleteButtonClass);
    // updateCost(salaryToRemove)
    updateCost(deleteButtonClass);
    // let salaryToRemove = employeeRow.filter($('.salary')).text();
    // console.log(salaryToRemove);
    employeeRow.remove();
}

function addEmployeeInfo() {
    console.log(`in addEmployeeInfo`);
    let firstName = $('#first-name');
    let lastName = $('#last-name');
    let idNumb = $('#id-number');
    let title = $('#job-title');
    let baseSalary = $('#annual-salary');
    // let employee = {};

    allSalaries.push(baseSalary.val());
    employeeTableNumber++;
    // console.log(employeeTableNumber);
    // employee.reference = employeeTableNumber; // No longer needed
    // employee.salary = baseSalary.val();
    // tableReference.push(employee);
    if (!firstName.val() || !lastName.val() || !idNumb.val() || !title.val() || !baseSalary.val()) {
        alert('Please Fill out all fields');
        return;
    }
    console.log(firstName.val(), lastName.val(), idNumb.val(), title.val(), baseSalary.val());
    $('#employee-table-body').append(`
        <tr class="${employeeTableNumber}">
            <td>${firstName.val()}</td>
            <td>${lastName.val()}</td>
            <td>${idNumb.val()}</td>
            <td>${title.val()}</td>
            <td class="salary">${baseSalary.val()}</td>
            <td><button class="${employeeTableNumber} delete-button">Delete</button></td>
        </tr>
        `);

    firstName.val('');
    lastName.val('');
    idNumb.val('');
    title.val('');
    baseSalary.val('');

    calculateCost(allSalaries);
}
