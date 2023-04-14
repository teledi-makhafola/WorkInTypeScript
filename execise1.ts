function oddOrEven(value:number):string{
    if (value%2==0){
        return "number is even";
    }else if(value%2==1) {
        return "number is odd";
    }else{
        return "invalid value or type";
    }
}

console.log(oddOrEven(5));

function fizzBuzz(num: number): string{
    if (num % 3 == 0){
        return "Fizz!!";
    }else if(num % 5 == 0){
        return "Buzz!!";
    }
    else if (num%3 == 0 && num%5 == 0)
    {
        return "FizzBuzz!!"
    }else{
        return "Normal Number"
    }
}

console.log(fizzBuzz(5))


function poundsToKg(pounds:number): number{
    return pounds * 0.45359237;
}
console.log(poundsToKg(100));

function inchesToCentimeters(inches:number): number{
    return inches * 2.54;
}
console.log(inchesToCentimeters(5))

function fahrenheitToCelsius(fahrenheit:number):number{
    return fahrenheit - 32 * 5/9;
}
console.log(fahrenheitToCelsius(670));

function feetToMeters(feet:number):number{
    return feet / 3.281;
}
console.log(feetToMeters(20));
