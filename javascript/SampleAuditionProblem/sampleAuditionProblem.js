function validate() {
// defines a function called "validate" that takes no arguments
    var startNum = document.forms["giveMeNumbers"]["startNum"].value;
    // defines a variable called "startNum" that is the value of Id "startNum" within the form "giveMeNumbers"
    var endNum = document.forms["giveMeNumbers"]["endNum"].value;
    var step = document.forms["giveMeNumbers"]["step"].value;
    //console.log("startNum is " + Number(startNum));
    //console.log("endNum is " + Number(endNum));
    //console.log("step is " + Number(step));
    if (startNum == "" || isNaN(startNum)) {
    // if startNum is equal to a blank string OR is not a number,
        alert("Starting Number must be filled in with a number.");
        // display an alert
        document.forms["giveMeNumbers"]["startNum"]
            .parentElement.className = "form-group has-error";
        // assign to the parentElement with the Id startNum within the form giveMeNumbers: .form-group and .has-error
        document.forms["giveMeNumbers"]["startNum"].focus();
        // supposed to move the cursor back to this form field
        return false;
        // return false, so the form does not submit
    }
    if (endNum == "" || isNaN(endNum)) {
        alert("Ending Number must be filled in with a number.");
        document.forms["giveMeNumbers"]["endNum"]
            .parentElement.className = "form-group has-error";
        document.forms["giveMeNumbers"]["endNum"].focus();
        return false;
    }
    //console.log(Number(endNum) <= Number(startNum));
    if (Number(endNum) <= Number(startNum)) {
    // if the NUMBER endNum is LTE the NUMBER startNum (we don't want these to be treated as strings or anything else but NUMBERS)
        alert ("Ending Number must be greater than Starting Number.");
        // display an alert
        document.forms["giveMeNumbers"]["startNum"]
            .parentElement.className = "form-group has-error";
        document.forms["giveMeNumbers"]["endNum"]
            .parentElement.className = "form-group has-error";
        // assign to the parentElement with these Ids within the form giveMeNumbers: .form-group and .has-error
        return false;
    }
    if (step <= 0) {
    // if step is LTE 0,
        alert("Step must be a positive number.");
        // display an alert
        document.forms["giveMeNumbers"]["step"]
            .parentElement.className = "form-group has-error";
        document.forms["giveMeNumbers"]["step"].focus();
        return false;
    }    
    //console.log("are we there yet?")
    var evenNum = [];
    // define a variable called evenNum as an empty array
    for (i = Number(startNum); i <= Number(endNum); i += Number(step)) {
    // for i, starting at the NUMBER startNum, if i is LTE the NUMBER endNum, then add the NUMBER step to i
        //console.log("i is " + i);
        if ((i % 2) == 0) {
        // if the current i has a remainder of 0 when divided by two (i.e., is even)
            evenNum.push(i);
            // then push i onto the array defined as "evenNum"
        }
        //console.log("The even numbers are " + evenNum);
    }
document.getElementById("results").style.display = "block";
// display the Id "results" using the style "block"; this will show our results table, which previously did not show
document.getElementById("resultStatement").innerHTML = "Here are the even numbers between "
// display the string within the <span> "resultStatement"; it is concatenated with the previously defined variables
    + startNum + " and " + endNum + " by " + step + "'s: " + evenNum;
    return false;
}