function validate() {
    var startNum = document.forms["giveMeNumbers"]["startNum"].value;
    var endNum = document.forms["giveMeNumbers"]["endNum"].value;
    var step = document.forms["giveMeNumbers"]["step"].value;
    console.log("startNum is " + Number(startNum));
    console.log("endNum is " + Number(endNum));
    console.log("step is " + Number(step));
    if (startNum == "" || isNaN(startNum)) {
        alert("Starting Number must be filled in with a number.");
        document.forms["giveMeNumbers"]["startNum"]
            .parentElement.className = "form-group has-error";
        document.forms["giveMeNumbers"]["startNum"].focus();
        return false;
    }
    if (endNum == "" || isNaN(endNum)) {
        alert("Ending Number must be filled in with a number.");
        document.forms["giveMeNumbers"]["endNum"]
            .parentElement.className = "form-group has-error";
        document.forms["giveMeNumbers"]["endNum"].focus();
        return false;
    }
    console.log(Number(endNum) <= Number(startNum));
    if (Number(endNum) <= Number(startNum)) {
        alert ("Ending Number must be greater than Starting Number.");
        document.forms["giveMeNumbers"]["startNum"]
            .parentElement.className = "form-group has-error";
        document.forms["giveMeNumbers"]["endNum"]
            .parentElement.className = "form-group has-error";
        return false;
    }
    if (step <= 0) {
        alert("Step must be a positive number.");
        document.forms["giveMeNumbers"]["step"]
            .parentElement.className = "form-group has-error";
        document.forms["giveMeNumbers"]["step"].focus();
        return false;
    }    
    console.log("are we there yet?")
    var evenNum = [];
    for (i = Number(startNum); i <= Number(endNum); i += Number(step)) {
        console.log("i is " + i);
        if ((i % 2) == 0) {
            evenNum.push(i);
        }
        console.log("The even numbers are " + evenNum);
    }
document.getElementById("results").style.display = "block";
document.getElementById("resultStatement").innerHTML = "Here are the even numbers between "
    + startNum + " and " + endNum + " by " + step + "'s: " + evenNum;
    return false;
}