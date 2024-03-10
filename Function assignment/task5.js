function factorial(n){
    if(n === 0 || n === 1){
        return 1;
    }
    return n*factorial(n-1);
}

const num1 = 5;
const num2 = 0;
const num3 = 7;

console.log(`Factorail of ${num1}:`,factorial(num1));
console.log(`Factorail of ${num2}:`,factorial(num2));
console.log(`Factorail of ${num3}:`,factorial(num3));