let num1 = prompt('Start number of Nmota: ');
let num2 = prompt('End number of numota: ');

parseInt(num1);
parseInt(num2);

for (let num1 = 1; num1 <= num2; num1++){
    console.log('Namota: ',num1);
        for ( let i = 1; i <= 10; i++){
            if (num1 === 50 || num1 === 40 || num1 === 30 || i === 50 || i === 40 || i === 30 || i*num1 === 50 || i*num1 === 40 || i*num1 === 30){
                console.log(' ');
            }else{
                console.log(num1 + " X " + i + " = " + i*num1);
            }
            
        }
}