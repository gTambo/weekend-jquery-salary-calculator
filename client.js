console.log('JS');

$(document).ready(readyNow);

function readyNow() {
    console.log('Document Ready');
    $('#submit-button').on('click', addEmployeeInfo);
}

function addEmployeeInfo() {
    console.log(`in addEmployeeInfo`);
    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let idNumb = $('#id-number').val();
    let title = $('#job-title').val();
    let baseSalary = $('#annual-salary').val();
    // console.log(firstName, lastName, idNumb, title, baseSalary);
    $('#employee-table-body').append(`
        <tr>
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${idNumb}</td>
            <td>${title}</td>
            <td>${baseSalary}</td>
        </tr>
            `)
}