let mini =1
let maxi = 7
let num1;
let num2;
console.log(num1, num2)
function Throw1(){
    num1 = Math.round(Math.random()*(maxi-mini))
    number1.textContent = num1
}

function Throw2(){
    num2 = Math.round(Math.random()*(maxi-mini))
    number2.textContent = num2
}

function Winner(){
    // winner.textContent = `Winner is : ${Math.max(num1,num2)}`
    
    if (num1 > num2){
        winner.textContent = `Winner is : Person 1`
    }
    else if (num2 > num1){
        winner.textContent = `Winner is : Person 2`
    }else{
        winner.textContent = `It's a tie`
    }
}

