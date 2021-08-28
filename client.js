console.log('JS');

$(document).ready(readyNow);

function readyNow() {
    console.log('Document Ready');
    $('#submit-button').on('click', addEmployeeInfo);
}

function addEmployeeInfo() {
    console.log(`in addEmployeeInfo`);
}