function countingCharacters(stringToCount) {
    // The length property has been mentioned in
    // the Logging Letter Exercise in Lesson 4
    console.log (stringToCount + " has " +
                stringToCount.length + " characters.");
}

function countingCharacters2(stringToCount, characterToFind) {
    var characterCount = 0;
    for (var characterPosition = 0;
            characterPosition < stringToCount.length;
            characterPosition++) {
        if (stringToCount[characterPosition] == characterToFind) {
            characterCount++;
        }
    }
    console.log("String to search in: " + stringToCount);
    console.log("Character to find: " + characterToFind);
    console.log("Number of times the character appears: " + 
                    characterCount);
}

function countingCharacters3(str, search){
    var count = 0;
    // defines variable count equal to 0
    var numChars = search.length;
    // defines variable numChars equal to the length of the input "search"

    var lastIndex = str.length - numChars;
    // defines the variable lastIndex equal to the length of the input "str" minus the length of the input "search"
    for (var index = 0; index <= lastIndex; index++){
        // for the variable index, starting at 0, if "index" is LTE to the length of "str" minus the length of "search", add 1 to "index"
        var current = str.substring(index, index + numChars);
        // define the variable "current" equal to the characters in the input "str" between the variables index and (index + numChars)
        // e.g., "current" equals characters 0 and 0+2, 1 and 1+2, 2 and 2+2; but not including the actual end character itself
            if (current == search){
                // if "current" matches the input "search"
                count++;
                // add 1 to the count
            }
    }
    return count;
    // return the number of times "search" appeared in the string
}