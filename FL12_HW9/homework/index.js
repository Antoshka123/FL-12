function convert() {
    let res = [];
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            res.push(+arguments[i]);
        } else {
            res.push(arguments[i].toString());
        }
    }
    return res;
}


function executeforEach(arr, funct) {
    for (let i = 0; i < arr.length; i++) {
        funct(arr[i]);
    }
}


function mapArray(arr, funct) {
    let res = [];
    executeforEach(arr, function (el) {
        res.push(funct(+el));
    });
    return res;
}


function filterArray(arr, funct) {
    let res = [];
    executeforEach(arr, function (el) {
        funct(el) && res.push(el);

    });
    return res;
}


function flipOver(str) {
    let respStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        respStr = respStr + str[i];
    }
    return respStr;
}


function makeListFromRange(arr) {
    let res = [];
    for (let i = arr[0]; i <= arr[1]; i++) {
        res.push(i);
    }
    return res;
}


function getArrayOfKeys(arr, param) {
    let res = [];
    executeforEach(arr, el => res.push(el[param]));
    return res;
}


function substitute(arr) {
    return mapArray(arr, function (el) {
        return el < 30 ? '*' : el;
    });
}


function getPastDay(date, days) {
    let oneDay = 86400000;
    let dateInMilSec = date.valueOf();
    let changedDate = new Date(dateInMilSec - oneDay * days);
    changedDate = changedDate.getDate();
    return changedDate;
}


function formatDate(date) {
    function addZero(num) {
        `${num}`.length < 2 ? num = '0' + num : num;
        return num;
    }
    let h = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${h}:${m}`;
}