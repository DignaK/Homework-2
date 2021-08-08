// TASK-5. Write a JavaScript program that accept three integers and display the larger

function getMax(a,b,c){
    if(a>b && a>c){
        return a;
    }else if(b>c){
        return b;
    }else{
        return c;
    }
}
const result = getMax(2,1,3);
alert("The largest number is: " + result);


// ? how do I define that only integers (not other types of numbers) might be accepted
