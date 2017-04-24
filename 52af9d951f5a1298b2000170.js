var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday'];

function findOutChristmasWeekday(date) {
    console.log(date);
    var inputDate;
    if (date instanceof Date) {
        inputDate = date;
    } else {
        inputDate = date.split(' ');
        if (inputDate[0].length === 4) {
            inputDate = new Date(inputDate[0], inputDate[1] - 1, inputDate[2]);
        } else if (isNaN(parseInt(inputDate[1], 10))) {
            inputDate = new Date(inputDate[1] + ' ' + inputDate[0] + ', ' + inputDate[2]);
        } else {
            if (inputDate[0] > 11) {
                inputDate = new Date(inputDate[2], inputDate[0] - 1, inputDate[1]);
            } else {
                inputDate = new Date(inputDate[2], inputDate[1] - 1, inputDate[0]);
            }
        }
    }
    console.log(inputDate);

    return days[inputDate.getDay()];
}