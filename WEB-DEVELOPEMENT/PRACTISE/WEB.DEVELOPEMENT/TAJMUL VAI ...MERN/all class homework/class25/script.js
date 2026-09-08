let number = prompt("enter namota number: ");

console.log(`${number}-er namota:`);


for (let i = 1; i <= 10; i++) {
    let result = number * i;
    console.log(`${number} x ${i} = ${result}`);
}



console.log(`${number}-er namota (while loop):`);

let x = 1;

while (x <= 10) {
    console.log(`${number} x ${x} = ${number * x}`);
    x++;
}




console.log(`${number}-er namota (do...while loop):`);

let y = 1; 

do {
    console.log(`${number} x ${y} = ${number * y}`);
    y++;
} while (y <= 10);