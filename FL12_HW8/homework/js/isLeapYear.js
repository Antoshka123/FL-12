function isLeapYear(arg) {
    let date = new Date(arg).getFullYear();
    if (isNaN(date)) {
        return 'Invalid Date';
    } else if (date % 4 === 0 && date % 100 !==0 || date % 400 === 0) {
        return `${date} is a leap year`;
    } else {
        return `${date} is not a leap year`;
    }
}

isLeapYear('2020-01-01 00:00:00'); 
isLeapYear('2021-01-15 13:00:00');  