function getMin (...args) {
    let min = args[0];
    args.forEach(element => {
        if(min >= element) {
            min = element;
        }
    });
    return min;
}
getMin(3, 0, -3);