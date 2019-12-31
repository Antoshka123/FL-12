function makeNumber (string) {
    let num ='';
    for (let i = 0; i<string.length; i++) {
        if(!isNaN(+string[i])) {
            num = num + string[i];
        }
    }
    return num;
}

function countNumbers (string) {
    let nums = makeNumber(string);
    let numsObj ={};
    for (let i = 0; i<nums.length; i++) {
        if(!(nums[i] in numsObj)) {
            numsObj[nums[i]] = 1;
        } else if ((nums[i] in numsObj)){
            numsObj[nums[i]] = ++numsObj[nums[i]];
        }
    }
    return numsObj;
}
countNumbers('a9a9a9w7w7w7ionjm7hjb0jhnhj9hbnjh0');