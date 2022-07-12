// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

    // Create an empty return array
    const returnArray = [];

    // Point to the first value of each array
    let indexA = 0;
    let indexB = 0;
    // While there are still values in each array...
    //something exists in either arrA or arrB (both cannot be empty)
    while (indexA < arrA.length || indexB < arrB.length) {
        // Compare the first values of each array
        // Add the smaller value to the return array
        // Move the pointer to the next value in that array

        //if indexA has meet the length of arrA, then there's only items in arrB left (otherwise the while loop test expression will fail, and not enter inside since both arrays are empty.)
        if (indexA === arrA.length) {
            returnArray.push(arrB[indexB]);
            indexB++;
        }
        //same situation as if statement above but for arrB. (arrA must have items left.)
        else if (indexB === arrB.length) {
            returnArray.push(arrA[indexA]);
            indexA++;

        //otherwise, compare arrA element w/ arrB element, take whichever one is smaller and incremement their pointer.
        } else if (arrA[indexA] < arrB[indexB]) {
            returnArray.push(arrA[indexA]);
            indexA++;
        } else {
            returnArray.push(arrB[indexB]);
            indexB++;
        }
    }

    // Return the return array
    return returnArray;

}



console.log(merge([0,2], [1,3,4]))