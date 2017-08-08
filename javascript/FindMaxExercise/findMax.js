function findMax(numbers) {
// defines the function "findMax" whose input is defined as the variable "numbers"
    var max = numbers[0];
    // defines the variable max equal to the first array index
    for (i = 0; i < numbers.length; i++) {
    // for the variable i, starting at 0, if i is less than the length of the array, add 1 to i
        if (numbers[i] > max) {
        // if the current index value of the array is greater than our current max
            max = numbers[i];
            // set the new max equal to the current array index
        }
    }
    return max;
    // return the final max
}