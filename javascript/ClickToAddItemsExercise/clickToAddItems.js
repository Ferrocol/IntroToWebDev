function clearErrors() {
// defines a function called "clearErrors" that takes no input
    for (var loopCounter = 0;
    // for the variable "loopCounter", starting at 0,
        loopCounter < document.forms["numberFun"].elements.length;
        // we are using the document.forms collection to loop through our form components
        // since our form has a name, we are using the form's name as our index in the brackets
        // if loopCounter is less than the length of the form numberFun,
        loopCounter++) {
        // then add 1 to loopCounter
            if (document.forms["numberFun"].elements[loopCounter]
                .parentElement.className.indexOf("has-error") != -1) {
            // if the current element of the form "numberFun" has the className "has-error"
            // the indexOf() function indicates the position of where the text appears,
            // and if the text is not found, indexOf() returns the value of -1
                    document.forms["numberFun"].elements[loopCounter]
                        .parentElement.className = "form-group";
                    // the parent element's CSS class is reset to simply "form-group"
                }
        }
}

function resetForm() {
// defines a function called "resetForm" that takes no input
    clearErrors();
    // calls the function clearErrors()
    document.forms["numberFun"]["num1"].value = "";
    // sets num1 in the form numberFun to an empty string
    document.forms["numberFun"]["num2"].value = "";
    // sets num2 in the form numberFun to an empty string
    document.getElementsById("results").style.display = "none";
    // tells the element with the Id "results" not to display (in this case, the table of results)
    document.getElementsById("submitButton").innerText = "Submit";
    // tells the element with the Id "submitButton" to show the text "Submit" (in case it already says "Recalculate")
    document.forms["numberFun"]["num1"].focus();
    // the cursor is supposed to return to the num1 textbox, but so far this doesn't appear to work
}

function validateItems() {
// defines a function called "validateItems" that takes no input
    clearErrors();
    // calls the function clearErrors()
    var num1 = document.forms["numberFun"]["num1"].value;
    // defines the variable num1 equal to the value in the num1 form field
    var num2 = document.forms["numberFun"]["num2"].value;
    // defines the variable num2 equal to the value in the num2 form field
    if (num1 == "" || isNaN(num1)) {
    // if num1 is blank or is not a number
        alert("Num1 must be filled in with a number.");
        // display an alert with this string of text
        document.forms["numberFun"]["num1"]
            .parentElement.className = "form-group has-error";
        // assign the bootstrap class "has-error" to the form-group
        document.forms["numberFun"]["num1"].focus();
        // supposed to move the cursor to the num1 textbox
        return false;
        // return "false" to prevent form submission
    }
    if (num2 == "" || isNaN(num2)) {
        alert("Num2 must be filled in with a number.");
        document.forms["numberFun"]["num2"]
            .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num2"].focus();
        return false;
    }
    document.getElementById("results").style.display = "block";
    // sets the element with the Id "results" (in this case our results table) to the display type "block" (as opposed to "inline")
    document.getElementById("submitButton").innerText = "Recalculate";
    // sets our submit button to say "Recalculate" between the tags instead of "Submit"
    document.getElementById("addResult").innerText = Number(num1) + Number(num2);
    // sets out "addResult" cell/span to perform this calculation between the <span> tags
    document.getElementById("subtractResult").innerText = num1 - num2;
    document.getElementById("multiplyResult").innerText = num1 * num2;
    document.getElementById("divideResult").innerText = num1 / num2;
    // We are returning false so that the form doesn't submit
    // and so that we can see the results
    return false;
}