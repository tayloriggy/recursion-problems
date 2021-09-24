/*
Write a JavaScript function to calculate the factorial of a number

Steps:
1. Create a function.
2. Pass in a number as a parameter.
3. Create a base case that will tell the function when to stop calling itself.
4. Call the function and tell it what to do when it calls itself.
*/

function findFactorial (num) {
    if (num === 0) {
        return 1;
    // this is the base case
    }
    else {
        return num * findFactorial(num - 1);
    // this tells the function what to do when it calls itself
    }
    
    /*
    findFactorial(5) returns 5 * findFactorial(4)
    findFactorial(4) returns 5 * 4 * findFactorial(3)
    findFactorial(3) returns 5 * 4 * 3 * findFactorial(2)
    findFactorial(2) returns 5 * 4 * 3 * 2 * findFactorial(1)
    findFactorial(1) returns 5 * 4 * 3 * 2 * 1 * findFactorial(0)
    findFactorial(0) returns 5 * 4 * 3 * 2 * 1 * 1
    */

}

findFactorial(6);
