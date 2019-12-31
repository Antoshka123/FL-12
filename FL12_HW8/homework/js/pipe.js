function pipe (x, ...functions) {
    let result=x;
    functions.forEach(element => {
        result = element(result);
    });
    return result;
}

function addTwo(x) {
    return x + 2;
}

pipe(10, addTwo, addTwo); 