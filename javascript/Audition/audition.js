function calculate() {
    var startNum = document.getElementById("startNum").value;
    var endNum = document.getElementById("endNum").value;
    
    if (startNum == "" || isNaN(startNum) || Number(startNum) <= 0) {
        alert("Starting Number must be a positive number.");
        return false;
    }

    startNum = parseInt(startNum);

    if (endNum == "" || isNaN(endNum) || Number(endNum) <= startNum) {
        alert("Ending Number must be a positive integer greater than Starting Number.");
        return false;
    }

    endNum = parseInt(endNum);

    var sumBetween = 0;
    for (var i = startNum; i <= endNum; i++) {
        sumBetween += i;
    }

    var count = endNum - startNum + 1;

    document.getElementById("results").innerHTML = "There are " + count + " numbers between "
        + startNum + " and " + endNum + " inclusive. The sum of them is " + sumBetween + ".";
}
    
