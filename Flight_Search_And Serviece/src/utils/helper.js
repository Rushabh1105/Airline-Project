function compareTime(dateTime1, dateTime2) {
    let d1 = new Date(dateTime1);
    let d2 = new Date(dateTime2);

    return d1.getTime() > d2.getTime();
}

module.exports = {
    compareTime,

}