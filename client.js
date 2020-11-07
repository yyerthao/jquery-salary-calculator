console.log('js');
$(document).ready(readyNow);

function readyNow(){
    console.log('jq');
    // on the click of the subButton, we run the submitInfo function
    $('#btn-add').on('click', submitInfo);

}



function submitInfo(){
    console.log('in submitInfo: '); // 
// created variable to store the value of each input box into
// so that we can grab the object full of all values instead of
// typing out more code throughout this script

    let employeeObject = {
    firstInput: $('#firstInput').val(),
    lastInput: $('#lastInput').val(),
    idInput: $('#idInput').val(),
    titleInput: $('#titleInput').val(),
    salaryInput: $('#salaryInput').val()
    };
    console.log(employeeObject);
}
// Console log to ensure variables are working
// 

console.log('Testing submitInfo funct');
// Can pass employeeObject to other functions using dot notations 
// 










// 












// The application should have an input form that collects _
// employee first name, last name, ID number, job title, annual salary_.

////////////////////////////////////////////////////////////////////////////////////

// A 'Submit' button should collect the form information, store the information 
// to calculate monthly costs, append information to the DOM and clear the input 
// fields.

// Using the stored information, calculate monthly costs and append this 
// to the to DOM. 


// If the total monthly cost exceeds $20,000, add a red background 
// A 'Submit' button should collect the form information, store the information to 
// calculate monthly costs, append information to the DOM and clear the input fields. 
// Using the stored information, calculate monthly costs and append this to the to DOM. 
// If the total monthly cost exceeds $20,000, add a red background color to the total 
// monthly cost.color to the total monthly cost.

////////////////////////////////////////////////////////////////////////////////////









