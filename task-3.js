// TASK-3. Write a JavaScript function to convert an amount to small coins.
// Note: Coins are 1,2,5,10,20,50

function getCoins(amount){
    if(amount >= 50){
        do{
            alert("50 cents");
            amount = amount - 50;
        } while(amount >= 50);
    };
    if(amount >= 20){
        do{
            alert("20 cents");
            amount = amount - 20;
        } while(amount >= 20);
    };
    if(amount >= 10){
        do{
            alert("10 cents");
            amount = amount - 10;
        } while(amount >= 10);
    };
    if(amount >= 5){
        do{
            alert("5 cents");
            amount = amount - 5;
        } while(amount >= 5);
    };
    if(amount >= 2){
        do{
            alert("2 cents");
            amount = amount - 2;
        } while(amount >= 2);
    };
    if(amount >= 1){
        do{
        alert("1 cent");
        amount = amount - 1;
    } while(amount >= 1);
    }
}
getCoins(34);