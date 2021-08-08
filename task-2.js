// TASK-2. Write a JavaScript function that accepts a number as a parameter 
// and check the number is prime or not. 
// Note : A prime number (or a prime) is a natural number greater than 1 
// that has no positive divisors other than 1 and itself.
// Hint : Remember that we used % to check if number can divide without a remainder. 
// You will probably need to use a for..loop.


function checkNumber(number){
    if(typeof number == "number"){
        for(let i=2; number >= i; i++){
            if(number % i === 0 && number != 2){
                alert("This number is not prime");
                break;
            }else{
                alert("This number is prime");
                break;
            }
        }
    }
}
checkNumber(4);
