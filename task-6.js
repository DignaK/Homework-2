// TASK-6. Write a JavaScript conditional statement to find the sign of product of three numbers. 
// Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

const valueA = 3;
const valueB = -7;
const valueC = 2;
if( (valueA > 0 && valueB > 0 && valueC > 0) ||
    (valueA < 0 && valueB < 0 && valueC > 0) ||
    (valueA > 0 && valueB < 0 && valueC < 0) ||
    (valueA < 0 && valueB > 0 && valueC < 0)){
        alert("The sign is +");
}else if(
    (valueA < 0 && valueB < 0 && valueC < 0) ||
    (valueA < 0 && valueB > 0 && valueC > 0) ||
    (valueA > 0 && valueB < 0 && valueC > 0) ||
    (valueA > 0 && valueB > 0 && valueC < 0)){
        alert("The sign is -");
}else{
    alert("The result of multiplying by 0 = 0");
}