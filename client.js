// console.log('js'); no longer need this, js is working fine, commenting out to clean console
$(document).ready(readyNow);

// set a budget variable of 0, so we can add to this variable with  all salary input values
const budget = 20000;
// created a global array to store employee salary property in so we can loop through
const totalSalary = [];

// this function will run as soon as DOM is fully loaded
// buttons and table onevent handlers are ready and available for user interaction
// once buttons are clicked, all associated functions in pair with onevent handlers,
// will execute appropriately 
function readyNow() {
    console.log('------------------- inside readyNow -------------------');
    // on the click of the subButton, we run the submitInfo function
    $('#btn-add').on('click', submitInfo);
    // on the click into the table body created on the DOM, we're asking
    // jquery to find anything with the class dButton, then run the 
    // function deleteEntry 
    $('#table-contents').on('click', '.dButton', deleteEntry)
    // grab span id monthly cost and store into a variable
    // append our budget variable to el so we can display to dom the input salaries

}


// This function grabs input values and stores into an object, logs it ont
// console, appends its onto table, and empties input fields again
function submitInfo(event) {
    // this method will stop page from page refresh as per lecture on Friday from Mary
    event.preventDefault()
    console.log(' ------------------- in submitInfo: -------------------');
    // created object variable to store the value of each input box into
    // so that we can grab the object full of all values instead of
    // typing out more code throughout this script
    // ALSO, can pass employeeObject to other functions using dot notations 

    let employee = {
        firstName: $('#firstInput').val(),
        lastName: $('#lastInput').val(),
        idNum: $('#idInput').val(),
        title: $('#titleInput').val(),
        // used Math.round to round to nearest integer
        // used Number to ensure salary input returns a number
        salary: Math.round($('#salaryInput').val())
    };
    // push our employee salary property into totalSalary array so we can
    totalSalary.push(employee.salary);
    // console logging object variable to display input field values when clicking button
    console.log(employee);
    // add append function here. 
    // We call it as soon as this current function gets called
    append(employee);
    // call emptyInput function to set input field back to empty string
    emptyInput();
}

// This function appends employee onto table
function append(employee) {
    console.log('------------------- inside append -------------------');
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
    monthly();
}

// This function sets the values of the input fields back to empty strings
function emptyInput() {
    console.log('------------------- inside emptyInput -------------------');
    $('#firstInput').val('');
    $('#lastInput').val('');
    $('#idInput').val('');
    $('#titleInput').val('');
    $('#salaryInput').val('');
}

// This function deletes the correct tr when delete button is clicked
function deleteEntry() {
    // this function is designed to delete the closest tr element and remove it
    console.log('in deleteEnry');
    $(this.closest('tr')).remove();
    monthly();
}

// 
function monthly() {
    console.log('------------------- in monthly -------------------');
    let sum = 0;
    let el = $('#totalMonth');
    el.empty();
    for (let i = 0; i < totalSalary.length; i++) {
        sum += totalSalary[i];

    }
    let sumMonthly = Math.round(sum / 12);
    $('#totalMonth').append(`Total Monthly: $ <span id="monthlyCost">${sumMonthly}</span>`);
    if (sumMonthly > 20000) {
        console.log('conditional is working');
        $('#totalMonth').addClass('red');
    } else {
        $('#totalMonth').removeClass('red');
    }
}





// .addClass(‘class’) - https://api.jquery.com/addclass/
// Adds the specified class(es) to each element in the set of matched elements.

// .removeClass(‘class’) - https://api.jquery.com/removeclass/
//  Remove a single class, multiple classes, or all classes from each 
// element in the set of matched elements.

// $(#selector).removeClass(‘class’)


////////////////////////////////////////////////////////////////////////////////////
/* YER RECAP NOTES:
- Created index.html, style.css, client.js, and jquery.js files.
- Appropriately sourced in the files to html file
- created a header with h1 tag named Salary Calculator
- created h3 tag outside of header named Add Employee
- created div to contain all input elements together 
- created 5 input elements with different ids, with a button tag

- table tag created
    - thead tag created, means table head
        - h3 tag created to give table a name
        - tr tag created, means table row, which spans horizontally
            -th tag created, means table head, created 6 spaces
        - closed tr tag
    - closed thead tag
    - created tbody, means table body, gave it an id to access the space on the DOM
    - initially created the skeleton of td tags on it in order to 





    element.closest() 
    https://www.youtube.com/watch?v=Eb5lyRn7lgk&ab_channel=dcode as courtesy of John

    This method helps us grab the closest element to perform an action on.
    In this assignment, I used it to grab the closest tr element in order to 
    delete the correct employee and information off the table.

THE FOLLOWING CODE FROM https://api.jquery.com/closest/ helped a lot
// <ul id="one" class="level-1">
//   <li class="item-i">I</li>
//   <li id="ii" class="item-ii">II
//     <ul class="level-2">
//       <li class="item-a">A</li>
//       <li class="item-b">B
//         <ul class="level-3">
//           <li class="item-1">1</li>
//           <li class="item-2">2</li>
//           <li class="item-3">3</li>
//         </ul>
//       </li>
//       <li class="item-c">C</li>
//     </ul>
//   </li>
//   <li class="item-iii">III</li>
// </ul>
// Suppose we perform a search for <ul> elements starting at item A:

// $( "li.item-a" ).closest( "ul" ).css( "background-color", "red" );
// This will change the color of the level-2 <ul>, since it is the first 
// encountered when traveling up the DOM tree.



 */
////////////////////////////////////////////////////////////////////////////////////