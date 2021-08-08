// TASK-4. Write a JavaScript program to get the integers in range (x, y)
// Example : range(2, 9)
// Expected Output : [3, 4, 5, 6, 7, 8]

function showIntegers(x, y){
    for(i = x + 1; i < y; i++){
        alert(i);
    }
}
showIntegers(2,9);