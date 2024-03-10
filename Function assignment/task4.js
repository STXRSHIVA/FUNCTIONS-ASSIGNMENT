function calculateTax(){
    const taxRates = {
        low : 0.1,
        medium : 0.2,
        high : 0.3,
    };
    
    return function (income){
        if( income <= 10000){
            return income*taxRates.low;
        }else if(income <= 50000){
            return income*taxRates.medium
        }else{
            return income*taxRates.high;
        }
    };

}

const taxCalculator = calculateTax();

console.log("Tax for $5000:",taxCalculator(5000));
console.log("Tax for $25000:",taxCalculator(25000));
console.log("Tax for $75000:",taxCalculator(75000));