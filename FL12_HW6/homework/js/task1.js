let a = +prompt('input a = '),
    b = +prompt('input b = '),
    c = +prompt('input c = '),
    discriminant,
    x1,
    x2;
const FOUR = 4,
    TWO = 2;
if (!isNaN(a) && a !== 0 && !isNaN(b) && !isNaN(c)) {
    discriminant = b * b - FOUR * a * c;
    if (discriminant > 0) {
        x1 = Math.round((-b - Math.sqrt(discriminant)) / (TWO * a));
        x2 = Math.round((-b + Math.sqrt(discriminant)) / (TWO * a));
        console.log(`x1 = ${x1} and x2 = ${x2};`);
    } else if (discriminant === 0) {
        x1 = Math.round(-b / TWO * a);
        x2 = x1;
        console.log(`x=${x1};`);
    } else {
        console.log('no solution');
    }
} else {
    console.log('Invalid input data');
}