function makeNumber (string) {
    let num ='';
    for (let i = 0; i<string.length; i++) {
        if(!isNaN(+string[i])) {
            num = num + string[i];
        }
    }
    return num;
}
makeNumber('a9a9a9w7w7w7');