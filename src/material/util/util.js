// from string formatted `2025-01-31` to date object
function parseDate(string) {
    return new Date(string); // '2025-01-31' -> Date object
}
// from string formatted `2025-01-31T09:49` to date object
function parseDatetimeLocal(string) {
    return new Date(string); // '2025-01-31T09:49' -> Date object
}
// from string formatted `2025-01` to date object
function parseMonth(string) {
    return new Date(string + "-01"); // '2025-01' -> '2025-01-01' -> Date object
}
// from string formatted `09:50` to date object
function parseTime(string) {
    const [hours, minutes] = string.split(":");
    const date = new Date();
    date.setHours(hours, minutes, 0, 0); // Set only time, date will be today's date
    return date;
}
// from string formatted `2025-W05` to date object
function parseWeek(string) {
    const [year, week] = string.split("-W");
    const d = new Date(year, 0, 1); // First day of the year
    const days = (week - 1) * 7; // Calculate days from the first week
    d.setDate(d.getDate() + days);
    return d;
}
// from date object to string formatted `2025-01-31`
function stringifyDate(date) {
    return date.toISOString().split("T")[0]; // Format Date object to 'YYYY-MM-DD'
}
// from date object to string formatted `2025-01-31T20:30`
function stringifyDatetimeLocal(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`; // Format to 'YYYY-MM-DDTHH:mm'
}
// from date object to string formatted `2025-01`
function stringifyMonth(date) {
    return date.toISOString().slice(0, 7); // Format Date object to 'YYYY-MM'
}
// from date object to string formatted `09:50`
function stringifyTime(date) {
    return date.toTimeString().slice(0, 5); // Format Date object to 'HH:MM'
}
// from date object to string formatted `2025-W05`
function stringifyWeek(date) {
    const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - firstDayOfYear) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + 1) / 7);
    return `${date.getFullYear()}-W${String(weekNumber).padStart(2, "0")}`;
}
export { parseDate, parseDatetimeLocal, parseMonth, parseTime, parseWeek, stringifyDate, stringifyDatetimeLocal, stringifyMonth, stringifyTime, stringifyWeek };
// // test
// console.log(parseDate('1990-10-17'))
// console.log(parseDatetimeLocal('1990-10-17T20:30'))
// console.log(parseMonth('1990-10'))
// console.log(parseTime('20:30'))
// console.log(parseWeek('1990-W42'))
// const date=new Date(1990,9,17,20,30)
// console.log(stringifyDate(date))
// console.log(stringifyDatetimeLocal(date))
// console.log(stringifyMonth(date))
// console.log(stringifyTime(date))
// console.log(stringifyWeek(date))
