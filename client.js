console.log('js');
$(document).ready(readyNow);

function readyNow() {
    console.log('jq');
    // on the click of the subButton, we run the submitInfo function
    $('#btn-add').on('click', submitInfo);
    $('#table-contents').on('click', '.dButton', deleteEntry)
}



function submitInfo(event) {
    // this method will stop page from page refresh as per lecture on Friday from Mary
    event.preventDefault()
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

function append(employee) {
    // append employee properties of input values' to table td
    $('#table-contents').append(`
            <tr>
                <td class="fName">${employee.firstName}</td>
                <td class="lName">${employee.lastName}</td>
                <td class="iName">${employee.idNum}</td>
                <td class="tName">${employee.title}</td>
                <td class="sName">${employee.salary}</td>
                <th><button class="dButton">Delete</button></th>
            </tr>`);
}

// This function's goal is to set the values of the input fields back to empty strings
function emptyInput() {
    $('#firstInput').val('');
    $('#lastInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
}

function deleteEntry() {
    console.log('in deleteEnry');


}






















// Using the stored information, calculate monthly costs and append this to the to DOM. 
// If the total monthly cost exceeds $20,000, add a red background color to the total 
// monthly cost.

// Create a delete button that removes an employee from the DOM. For Base mode, it does 
// **not** need to remove that Employee's salary from the reported total.











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
entire table elements 
- created table tags, thead (table head), h3 tag for table name Employee, 
- created tr tag - which is an element that holds the th (in table headers)
- created th tags inside the in-head headers : First Name, Last Name... etc
- closed tr tag
- closed thead tag - this closes the element on table for in table header 
- created table body tag to hold following:
    - tr












    

 */
////////////////////////////////////////////////////////////////////////////////////