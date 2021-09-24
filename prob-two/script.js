/*
Write a JavaScript program to compute the sum of an array of integers.
Steps:
1. Create a function that takes in an array of integers.
2. Create a base case that tells the function when to stop calling itself
3. Once the last integer is added to the sum, the function will cease to call itself.
4. Create a condition that adds up all integers.
5. Return the total sum once all integers are added up.

*/

function findSum (arr) {
    if (arr.length === 0){
        return 0;
    }
    else {
        return arr.pop() + findSum(arr);
}
}

findSum([1, 2, 3, 4, 5]);

/*Using the array.pop() method which removes the last element of the array
and then returns that element that was removed. Pop() changes the length
of the array. We then add the last element to the second to last element
of array and then keep doing this until the length of the array reaches
zero, which is our base case and will stop the function from calling itself
or recursing. 

example array = [1, 2, 3, 4, 5];
return arr.pop() + findSum(arr);
5 + findSum([1, 2, 3, 4]);
5 + 4 + findSum([1, 2, 3]);
5 + 4 + 3 + findSum([1, 2]);
5 + 4 + 3 + 2 + findSum([1]);
5 + 4 + 3 + 2 + 1 + findSum([]); //array is now empty!
5 + 4 + 3 + 2 + 1 + 0 = 15 //recursion stops due to array length === 0 and thus returns 0
*/
