console.log('js');
$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    // on the click of the subButton, we run the submitInfo function
    $('#btn-add').on('click', submitInfo);

}



function submitInfo(){
    console.log('in submitInfo:'); // 
// created object variable to store the value of each input box into
// so that we can grab the object full of all values instead of
// typing out more code throughout this script
// ALSO, can pass employeeObject to other functions using dot notations 

    let employee = {
    firstName: $('#firstInput').val(),
    lastName: $('#lastInput').val(),
    idNum: $('#idInput').val(),
    title: $('#titleInput').val(),
    salary: $('#salaryInput').val()
    };
// console logging object variable to display input field values when clicking button

    console.log(employee);
// add append function here. 
// We call it as soon as this current function gets called
    append(employee);
// call emptyInput function to set input field back to empty string
    emptyInput(); 
}
// console log testing to ensure  -- return to me
console.log('Testing submitInfo funct');

function append(employee){
    $('#table-content').append(`<th class="trow" id="fName">${employee.firstName}</th>`);
    $('#table-content').append(`<th class="trow" id="fName">${employee.lastName}</th>`);
    $('#table-content').append(`<th class="trow" id="fName">${employee.idNum}</th>`);
    $('#table-content').append(`<th class="trow" id="fName">${employee.title}</th>`);
    $('#table-content').append(`<th class="trow" id="fName">${employee.salary}</th>`);


}


// This function's goal is to set the values of the input fields back to empty strings
function emptyInput(){
    $('#firstInput').val(''),
    $('#lastInput').val('')
    $('#idInput').val('')
    $('#titleInput').val('')
    $('#salaryInput').val('')
}























// 













////////////////////////////////////////////////////////////////////////////////////
/* YER RECAP NOTES:
- Created index.html, style.css, client.js, and jquery.js files.
- Appropriately sourced in the files to html file
- created a header with h1 tag named Salary Calculator
- created h3 tag outside of header named Add Employee
- created div to contain all input elements together 
- created 5 input elements with different ids 
- created second div to contain button element alone
- created third div, created class element named container to embody
- entire 



*/
////////////////////////////////////////////////////////////////////////////////////









