function stringifyDate(date) {
    return date.toISOString().split("T")[0];
}

function parseDate(dateString) {
    return new Date(dateString);
}

function stringifyDatetimeLocal(date) {
    const isoString = date.toISOString();
    return isoString.slice(0, 16);
}

function parseDatetimeLocal(datetimeString) {
    return new Date(datetimeString);
}

function stringifyMonth(date) {
    const [year, month] = date.toISOString().split("T")[0].split("-");
    return `${year}-${month}`;
}

function parseMonth(monthString) {
    const [year, month] = monthString.split("-").map(Number);
    return new Date(year, month - 1);
}

function stringifyTime(date) {
    return date.toTimeString().slice(0, 5);
}

function parseTime(timeString) {
    const [hours, minutes] = timeString.split(":").map(Number);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0, 0);
    return date;
}

function stringifyWeek(date) {
    const year = date.getUTCFullYear();
    const startOfYear = new Date(Date.UTC(year, 0, 1));
    const day = startOfYear.getUTCDay() || 7;
    const firstThursday = startOfYear.getTime() + ((4 - day) % 7) * 86400000;
    const weekNumber = Math.ceil(((date.getTime() - firstThursday) / 86400000 + 1) / 7);
    return `${year}-W${String(weekNumber).padStart(2, "0")}`;
}

function parseWeek(weekString) {
    const [year, week] = weekString.split("-W").map(Number);
    const jan4 = new Date(Date.UTC(year, 0, 4));
    const firstThursday = jan4.getTime() - (jan4.getUTCDay() - 4) * 86400000;
    const date = new Date(firstThursday + (week - 1) * 7 * 86400000);
    return date;
}

function calcPercentage(min, max, value) {
    return ((value - min) / (max - min)) * 100;
}

function calcDecimal(min, max, value) {
    return (value - min) / (max - min);
}

class BreakpointObserver {
    constructor(callback) {
        this.callback = callback;
        this.handleChange = this.handleChange.bind(this);
    }

    items = [
        { name: "compact", media: window.matchMedia("(max-width: 599px)") },
        { name: "medium", media: window.matchMedia("(min-width: 600px) and (max-width: 839px)") },
        { name: "expanded", media: window.matchMedia("(min-width: 840px)") },
    ];

    handleChange() {
        this.item.media.removeEventListener("change", this.handleChange);
        this.observe(this.items);
    }

    observe(items = this.items) {
        if (this.disconnected) {
            return;
        }

        if (!this.items) {
            this.items = items;
        }
        this.item = items.find((item) => item.media.matches);
        this.callback?.(this.item);
        this.item.media.addEventListener("change", this.handleChange);
    }

    disconnect() {
        this.disconnected = true;

        if (this.item) {
            this.item.media.removeEventListener("change", this.handleChange);
            this.item = null;
        }
    }
}

function closestScrollable(tooltip) {
    let container = tooltip.parentElement;

    while (container) {
        const style = window.getComputedStyle(container);

        if (style.overflow === "hidden" || style.overflowX === "hidden" || style.overflowY === "hidden" || style.overflow === "auto" || style.overflowX === "auto" || style.overflowY === "auto" || style.overflow === "scroll" || style.overflowX === "scroll" || style.overflowY === "scroll") {
            return container;
        }
        container = container.parentElement;
    }
    return document.body;
}

function scrollInto(element, { block = "start", inline = "start", behavior = "smooth" }) {
    const container = closestScrollable(element);
    const rect = element.getBoundingClientRect();
    let top, left;

    switch (block) {
        case "center":
            top = rect.top + container.scrollTop - container.clientHeight / 2 + rect.height / 2;
            break;
        case "end":
            top = rect.bottom + container.scrollTop - container.clientHeight;
            break;
        case "nearest":
            top = Math.abs(rect.top) < Math.abs(rect.bottom - container.clientHeight) ? container.scrollTop + rect.top : container.scrollTop + rect.bottom - container.clientHeight;
            break;
        default:
            top = container.scrollTop + rect.top;
            break;
    }

    switch (inline) {
        case "center":
            left = rect.left + container.scrollLeft - container.clientWidth / 2 + rect.width / 2;
            break;
        case "end":
            left = rect.right + container.scrollLeft - container.clientWidth;
            break;
        case "nearest":
            left = Math.abs(rect.left) < Math.abs(rect.right - container.clientWidth) ? container.scrollLeft + rect.left : container.scrollLeft + rect.right - container.clientWidth;
            break;
        default:
            left = container.scrollLeft + rect.left;
            break;
    }

    container.scrollTo({ top, left, behavior });
}

function isNumber(value) {
    return typeof value === "number" && !isNaN(value) && isFinite(value);
}

function getNestedValue(obj, path) {
    const value = path.split(".").reduce((o, key) => (o ? o[key] : undefined), obj);
    return Array.isArray(value) ? value : [value];
}

export { isNumber, getNestedValue, closestScrollable, scrollInto, BreakpointObserver, calcPercentage, calcDecimal, stringifyDate, parseDate, stringifyDatetimeLocal, parseDatetimeLocal, stringifyMonth, parseMonth, stringifyTime, parseTime, stringifyWeek, parseWeek };
