if (!Date.prototype.getWeek) {
    Date.prototype.getWeek = function () {
        const jan4 = new Date(this.getFullYear(), 0, 4);
        const firstThursday = jan4.getTime() - (jan4.getDay() - 4) * 86400000;
        const weekNumber = Math.ceil(((this.getTime() - firstThursday) / 86400000 + 1) / 7);
        return weekNumber;
    };
}

if (!Date.prototype.setWeek) {
    Date.prototype.setWeek = function (year, week) {
        const jan4 = new Date(Date.UTC(year, 0, 4));
        const firstThursday = jan4.getTime() - (jan4.getUTCDay() - 4) * 86400000;
        const date = new Date(firstThursday + (week - 1) * 7 * 86400000);
        this.setTime(date.getTime());
        return this;
    };
}
