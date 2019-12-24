let a = +prompt('input a side'),
    b = +prompt('input b side'),
    c = +prompt('input c side');

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('input values should be ONLY numbers ');
} else if (a <= 0 || b <= 0 || c <= 0) {
    console.log('A triangle must have 3 sides with a positive definite length ');
} else if (a - c - b >= 0 || b - a - c >= 0 || c - a - b >= 0) {
    console.log('Triangle doesn’t exist');
} else {
    if (a === b && b === c) {
        console.log('Equilateral triangle’');
    } else if (a === b || a === c || b === c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Scalene triangle');
    }
}