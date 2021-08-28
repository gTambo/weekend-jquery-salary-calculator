console.log('JS');

$(document).ready(readyNow);

let allSalaries = [];
let totalMonthlyCost = 0;
let maxMonthlyCost = 20000;

function readyNow() {
    console.log('Document Ready');
    $('#submit-button').on('click', addEmployeeInfo);


}

function calculateCost(salArr) {
    console.log('in calculateCost', allSalaries);
    let totalAnnualCost = 0;
    for(item of salArr) {
        totalAnnualCost += parseInt(item);
    }
    console.log(`totalAnnualCost: ${totalAnnualCost}`);
    totalMonthlyCost = (totalAnnualCost / 12).toFixed(2);
    $('#total-monthly-cost').html(`Total monthly cost: ${totalMonthlyCost}`);

    if (totalMonthlyCost > maxMonthlyCost) {
        $('#total-monthly-cost').addClass('over-budget');
    }
}

function addEmployeeInfo() {
    console.log(`in addEmployeeInfo`);
    let firstName = $('#first-name');
    let lastName = $('#last-name');
    let idNumb = $('#id-number');
    let title = $('#job-title');
    let baseSalary = $('#annual-salary');

    allSalaries.push(baseSalary.val());

    // console.log(firstName, lastName, idNumb, title, baseSalary);
    $('#employee-table-body').append(`
        <tr>
            <td>${firstName.val()}</td>
            <td>${lastName.val()}</td>
            <td>${idNumb.val()}</td>
            <td>${title.val()}</td>
            <td class="salary">${baseSalary.val()}</td>
        </tr>
            `);

    firstName.val('');
    lastName.val('');
    idNumb.val('');
    title.val('');
    baseSalary.val('');

    calculateCost(allSalaries);
}
