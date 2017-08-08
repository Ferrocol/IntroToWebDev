function sumOfRange(numbers) {
// defines a function called "sumOfRange", whose parameter becomes defined as "numbers"
    var sum = 0;
    // define the variable "sum" equal to 0
    for (i = 0; i < numbers.length; i++) {
    // for the variable i, starting at 0, if i is less than the length of the argument, add 1
        sum += numbers[i];
        // thus the variable sum will be equal to the current sum + the current position in the argument
    }
    return sum;
    // return the final sum
}