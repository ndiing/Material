import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
/**
 *
 */
class MdDatetimePickerComponent extends MdComponent {
    /**
     *
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
    };

    get startOfDay() {
        return new Date(this.value.getFullYear(), this.value.getMonth()).getDay();
    }

    get years() {
        let year = this.value.getFullYear();
        year = Math.floor(year / 10) * 10;
        return Array.from({ length: 10 }, (v, k) => {
            const date = new Date(year + k, 0);
            return {
                year: date.getFullYear(),
                label: this.yearFormat(date),
                selected: date.getFullYear() === this.value.getFullYear(),
                activated: date.getFullYear() === this.current.getFullYear(),
            };
        });
    }
    get months() {
        return Array.from({ length: 12 }, (v, k) => {
            const date = new Date(this.value.getFullYear(), k);
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                label: this.monthFormat(date),
                selected: date.getFullYear() === this.value.getFullYear() && date.getMonth() === this.value.getMonth(),
                activated: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth(),
            };
        });
    }
    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k);
            return {
                label: this.weekdayFormat(date),
            };
        });
    }
    get days() {
        return Array.from({ length: 6 }, (v, k) => {
            return Array.from({ length: 7 }, (v2, k2) => {
                const date = new Date(this.value.getFullYear(), this.value.getMonth(), k2 + 1 + 7 * k - this.startOfDay);
                return {
                    year: date.getFullYear(),
                    month: date.getMonth(),
                    day: date.getDate(),
                    label: this.dayFormat(date),
                    selected: date.getFullYear() === this.value.getFullYear() && date.getMonth() === this.value.getMonth() && date.getDate() === this.value.getDate(),
                    activated: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate(),
                };
            });
        });
    }
    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            const date = new Date(this.value.getFullYear(), this.value.getMonth(), this.value.getDate(), k);
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                hour: date.getHours(),
                label: this.hourFormat(date),
                selected: date.getFullYear() === this.value.getFullYear() && date.getMonth() === this.value.getMonth() && date.getDate() === this.value.getDate() && date.getHours() === this.value.getHours(),
                activated: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate() && date.getHours() === this.current.getHours(),
            };
        });
    }
    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const date = new Date(this.value.getFullYear(), this.value.getMonth(), this.value.getDate(), this.value.getHours(), k);
            return {
                year: date.getFullYear(),
                month: date.getMonth(),
                day: date.getDate(),
                hour: date.getHours(),
                minute: date.getMinutes(),
                label: this.minuteFormat(date),
                selected: date.getFullYear() === this.value.getFullYear() && date.getMonth() === this.value.getMonth() && date.getDate() === this.value.getDate() && date.getHours() === this.value.getHours() && date.getMinutes() === this.value.getMinutes(),
                activated: date.getFullYear() === this.current.getFullYear() && date.getMonth() === this.current.getMonth() && date.getDate() === this.current.getDate() && date.getHours() === this.current.getHours() && date.getMinutes() === this.current.getMinutes(),
            };
        });
    }

    /**
     *
     */
    constructor() {
        super();
        // this.icons=[
        //     {icon:'calendar_today'}
        // ]
        this.label = "label";
        this.actions = [{ icon: "keyboard_arrow_left" }, { icon: "keyboard_arrow_right" }];
        this.buttons = [{ component: "spacer" }, { label: "Cancel" }, { label: "Ok" }];

        this.current = new Date();
        this.value = new Date();

        this.yearFormat = new Intl.DateTimeFormat(undefined, { year: "numeric" }).format;
        this.monthFormat = new Intl.DateTimeFormat(undefined, { month: "long" }).format;
        this.weekdayFormat = new Intl.DateTimeFormat(undefined, { weekday: "narrow" }).format;
        this.dayFormat = new Intl.DateTimeFormat(undefined, { day: "numeric" }).format;
        this.hourFormat = new Intl.DateTimeFormat(undefined, { hour: "numeric", hour12: false }).format;
        this.minuteFormat = new Intl.DateTimeFormat(undefined, { minute: "numeric", hour12: false }).format;
    }

    /**
     * @private
     * @param {String} item
     */
    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                .data="${item}"
            >${item.icon}</md-icon>
        `
    }

    /**
     * @private
     * @param {String} item
     */
    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleDatetimePickerIconButtonClick}"
            ></md-icon-button>
        `
    }

    /**
     * @private
     * @param {String} item
     */
    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .disabled="${ifDefined(item.disabled)}"
                .selected="${ifDefined(item.selected)}"
                @click="${this.handleDatetimePickerButtonClick}"
            ></md-button>
        `
    }

    /**
     * @private
     * @param {String} item
     */
    renderSpacer(item) {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__spacer"></div>
        `
    }

    /**
     * @private
     * @param {String} item
     * @param {String} component
     */
    renderItem(item, component = "icon") {
        /* prettier-ignore */
        return choose(item.component||component,[
            ['icon',() => this.renderIcon(item)],
            ['icon-button',() => this.renderIconButton(item)],
            ['button',() => this.renderButton(item)],
            ['spacer',() => this.renderSpacer(item)],
        ],() => nothing)
    }

    renderDatetimePickerYears() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list">
                ${this.years.map(item=>html`
                    <div 
                        ?selected="${item.selected}" 
                        ?activated="${item.activated}" 
                        class="md-datetime-picker__list-item">${item.label}</div>
                `)}
            </div>
        `
    }

    renderDatetimePickerMonths() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__list">
                ${this.months.map(item=>html`
                    <div 
                        ?selected="${item.selected}" 
                        ?activated="${item.activated}" 
                        class="md-datetime-picker__list-item">${item.label}</div>
                `)}
            </div>
        `
    }

    renderDatetimePickerDays() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__table">
                <div class="md-datetime-picker__table-header">
                    <div class="md-datetime-picker__table-row">
                        ${this.weekdays.map(item=>html`
                            <div class="md-datetime-picker__table-cell">${item.label}</div>
                        `)}
                    </div>
                </div>
                <div class="md-datetime-picker__table-body">
                    ${this.days.map(row=>html`
                        <div class="md-datetime-picker__table-row">
                            ${row.map(item=>html`
                                <div 
                                    ?selected="${item.selected}" 
                                    ?activated="${item.activated}" 
                                    class="md-datetime-picker__table-cell">${item.label}</div>
                            `)}
                        </div>
                    `)}
                </div>
            </div>
        `
    }

    renderDatetimePickerHours() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__circle md-datetime-picker__circle--hours">
                ${this.hours.map(item=>html`
                    <div 
                        ?selected="${item.selected}" 
                        ?activated="${item.activated}" 
                        class="md-datetime-picker__circle-item">${item.label}</div>
                `)}
            </div>
        `
    }

    renderDatetimePickerMinutes() {
        /* prettier-ignore */
        return html`
            <div class="md-datetime-picker__circle md-datetime-picker__circle--minutes">
                ${this.minutes.map(item=>html`
                    <div 
                        ?selected="${item.selected}" 
                        ?activated="${item.activated}" 
                        class="md-datetime-picker__circle-item">${item.label}</div>
                `)}
            </div>
        `
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length||this.label||this.sublabel||this.actions?.length?html`
                <div class="md-datetime-picker__header">
                    ${this.icons?.length?html`
                        <div class="md-datetime-picker__icons">
                            ${this.icons.map(icon=>this.renderItem(icon,'icon'))}
                        </div>    
                    `:nothing}
                    ${this.label||this.sublabel?html`
                        <div class="md-datetime-picker__labels">
                            ${this.label?html`<div class="md-datetime-picker__label">${this.label}</div>`:nothing}
                            ${this.sublabel?html`<div class="md-datetime-picker__sublabel">${this.sublabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.actions?.length?html`
                        <div class="md-datetime-picker__actions">
                            ${this.actions.map(action=>this.renderItem(action,'icon-button'))}
                        </div>    
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-datetime-picker__wrapper">
                <div class="md-datetime-picker__body">
                    <div class="md-datetime-picker__items">
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerYears()}</div>
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerMonths()}</div>
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerDays()}</div>
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerHours()}</div>
                        <div class="md-datetime-picker__item">${this.renderDatetimePickerMinutes()}</div>
                    </div>
                </div>
                ${this.buttons?.length?html`
                    <div class="md-datetime-picker__footer">
                        ${this.buttons?.length?html`
                            <div class="md-datetime-picker__buttons">
                                ${this.buttons.map(button=>this.renderItem(button,'button'))}
                            </div>    
                        `:nothing}
                    </div>
                `:nothing}
            </div>
        `
    }
    async connectedCallback() {
        super.connectedCallback();
        this.datetimePickerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.datetimePickerScrim, this.nextElementSibling);
        this.handleDatetimePickerScrimClosed = this.handleDatetimePickerScrimClosed.bind(this);
        this.datetimePickerScrim.addEventListener("onScrimClosed", this.handleDatetimePickerScrimClosed);
        if (this.open) this.datetimePickerScrim.show();
        this.classList.add("md-datetime-picker");
        this.style.setProperty("--md-comp-datetime-picker-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-datetime-picker-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-datetime-picker-width", this.clientWidth + "px");
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.datetimePickerScrim.removeEventListener("onScrimClosed", this.handleDatetimePickerScrimClosed);
        this.datetimePickerScrim.remove();
        this.classList.remove("md-datetime-picker");
    }

    /**
     * @private
     * @param {Object} event
     */
    handleDatetimePickerIconButtonClick(event) {
        this.emit("onDatetimePickerIconButtonClick", { event });
    }

    /**
     * @private
     * @param {Object} event
     */
    handleDatetimePickerButtonClick(event) {
        this.emit("onDatetimePickerButtonClick", { event });
    }

    /**
     *
     */
    show() {
        this.style.removeProperty("--md-comp-datetime-picker-animation");
        this.datetimePickerScrim.show();
        this.open = true;
        this.emit("onDatetimePickerShown");
    }

    /**
     *
     */
    close() {
        this.style.removeProperty("--md-comp-datetime-picker-animation");
        this.open = false;
        this.datetimePickerScrim.close();
        this.emit("onDatetimePickerClosed");
    }

    /**
     *
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * @private
     * @param {Object} event
     */
    handleDatetimePickerScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onDatetimePickerScrimClosed", { event });
    }
}
customElements.define("md-datetime-picker", MdDatetimePickerComponent);
export { MdDatetimePickerComponent };
