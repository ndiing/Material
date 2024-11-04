import { html, nothing } from "lit";
import { PopperController } from "../popper/popper";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import {} from "../util/util";

class MdDatetimePickerComponent extends MdComponent {
    static properties = {
        leadingIconButton: { type: String },
        // label: { type: String },
        // subLabel: { type: String },
        trailingIconButtons: { type: Array },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        view: { state: true },
    };

    get hasLabel() {
        return this.label || this.subLabel;
    }

    get hasHeader() {
        return this.leadingIconButton || this.hasLabel || this.trailingIconButtons?.length;
    }

    get hasFooter() {
        return this.buttons?.length;
    }

    get hasContainer() {
        return this.inner?.length || this.hasFooter;
    }

    get years() {
        const yearStart = Math.round(this.current.getFullYear() / 10) * 10;
        return Array.from({ length: 10 }, (v, k) => {
            const date = new Date(yearStart + k, 0);
            const year = date.getFullYear();
            return {
                year,
                label: this.yearFormat(date),
                selected: year === this.selected.getFullYear(),
                activated: year === this.activated.getFullYear(),
            };
        });
    }

    get months() {
        return Array.from({ length: 12 }, (v, k) => {
            const date = new Date(this.current.getFullYear(), k);
            const year = date.getFullYear();
            const month = date.getMonth();
            return {
                year,
                month,
                label: this.monthFormat(date),
                selected: year === this.selected.getFullYear() && month === this.selected.getMonth(),
                activated: year === this.activated.getFullYear() && month === this.activated.getMonth(),
            };
        });
    }

    get weekdays() {
        return Array.from({ length: 7 }, (v, k) => {
            const date = new Date(0, 0, k);
            const day = date.getDate();
            return {
                day,
                label: this.weekdayFormat(date),
            };
        });
    }

    get days() {
        const dayStart = new Date(this.current.getFullYear(), this.current.getMonth()).getDay();
        return Array.from({ length: 6 }, (v, k) => {
            return Array.from({ length: 7 }, (v2, k2) => {
                const date = new Date(this.current.getFullYear(), this.current.getMonth(), k * 7 + k2 + 1 - dayStart);
                const year = date.getFullYear();
                const month = date.getMonth();
                const day = date.getDate();
                return {
                    year,
                    month,
                    day,
                    label: this.dayFormat(date),
                    selected: year === this.selected.getFullYear() && month === this.selected.getMonth() && day === this.selected.getDate(),
                    activated: year === this.activated.getFullYear() && month === this.activated.getMonth() && day === this.activated.getDate(),
                };
            });
        });
    }

    get hours() {
        return Array.from({ length: 24 }, (v, k) => {
            const date = new Date(this.current.getFullYear(), this.current.getMonth(), this.current.getDate(), k);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            return {
                year,
                month,
                day,
                hour,
                label: this.hourFormat(date),
                selected: year === this.selected.getFullYear() && month === this.selected.getMonth() && day === this.selected.getDate() && hour === this.selected.getHours(),
                activated: year === this.activated.getFullYear() && month === this.activated.getMonth() && day === this.activated.getDate() && hour === this.activated.getHours(),
            };
        });
    }

    get minutes() {
        return Array.from({ length: 60 }, (v, k) => {
            const date = new Date(this.current.getFullYear(), this.current.getMonth(), this.current.getDate(), this.current.getHours(), k);
            const year = date.getFullYear();
            const month = date.getMonth();
            const day = date.getDate();
            const hour = date.getHours();
            const minute = date.getMinutes();
            return {
                year,
                month,
                day,
                hour,
                minute,
                label: this.minuteFormat(date),
                selected: year === this.selected.getFullYear() && month === this.selected.getMonth() && day === this.selected.getDate() && hour === this.selected.getHours() && minute === this.selected.getMinutes(),
                activated: year === this.activated.getFullYear() && month === this.activated.getMonth() && day === this.activated.getDate() && hour === this.activated.getHours() && minute === this.activated.getMinutes(),
            };
        });
    }

    get label() {
        const map = {
            0: () => `${this.years[0].label} - ${this.years[this.years.length - 1].label}`,
            1: () => new Intl.DateTimeFormat("id", { year: "numeric" }).format(this.current),
            2: () => new Intl.DateTimeFormat("id", { month: "long", year: "numeric" }).format(this.current),
            3: () => new Intl.DateTimeFormat("id", { hour12: false, hour: "numeric", minute: "numeric" }).format(this.current),
            4: () => new Intl.DateTimeFormat("id", { hour12: false, hour: "numeric", minute: "numeric" }).format(this.current),
        };
        return map[this.view]();
    }

    // set label(value) {}

    constructor() {
        super();

        this.popper = new PopperController(this);

        this.trailingIconButtons = ["keyboard_arrow_left", "keyboard_arrow_right"];
        this.buttons = ["Cancel", "OK"];

        this.current = new Date();
        this.activated = new Date();
        this.selected = new Date();

        this.yearFormat = new Intl.DateTimeFormat("id", { year: "numeric" }).format;
        this.monthFormat = new Intl.DateTimeFormat("id", { month: "long" }).format;
        this.weekdayFormat = new Intl.DateTimeFormat("id", { weekday: "narrow" }).format;
        this.dayFormat = new Intl.DateTimeFormat("id", { day: "numeric" }).format;
        this.hourFormat = new Intl.DateTimeFormat("id", { hour: "numeric" }).format;
        this.minuteFormat = new Intl.DateTimeFormat("id", { minute: "numeric" }).format;

        this.view = 2;
    }

    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                class="md-datetime-picker__icon-button"
                .variant="${ifDefined(item?.variant)}"
                .icon="${ifDefined(item?.icon ?? item)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                .toggle="${ifDefined(item?.toggle)}"
                @click="${this.handleDatetimePickerIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderYear() {
        return html`
            <div class="md-datetime-picker__list md-datetime-picker__list--year">
                ${this.years.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            class="md-datetime-picker__list-item"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatetimePickerYearItemClick}"
                        >
                            <md-icon class="md-datetime-picker__list-icon">${item.selected ? "check" : nothing}</md-icon>
                            <div class="md-datetime-picker__list-label">${item.label}</div>
                        </div>
                    `,
                )}
            </div>
        `;
    }

    renderMonth() {
        return html`
            <div class="md-datetime-picker__list md-datetime-picker__list--month">
                ${this.months.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            class="md-datetime-picker__list-item"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatetimePickerMonthItemClick}"
                        >
                            <md-icon class="md-datetime-picker__list-icon">${item.selected ? "check" : nothing}</md-icon>
                            <div class="md-datetime-picker__list-label">${item.label}</div>
                        </div>
                    `,
                )}
            </div>
        `;
    }

    renderDay() {
        return html`
            <div class="md-datetime-picker__table">
                <div class="md-datetime-picker__table-header">
                    <div class="md-datetime-picker__table-row">
                        ${this.weekdays.map(
                            (item) => html`
                                <div class="md-datetime-picker__table-cell">
                                    <div class="md-datetime-picker__table-label">${item.label}</div>
                                </div>
                            `,
                        )}
                    </div>
                </div>
                <div class="md-datetime-picker__table-body">
                    ${this.days.map(
                        (row) => html`
                            <div class="md-datetime-picker__table-row">
                                ${row.map(
                                    (item) => html`
                                        <div
                                            .data="${item}"
                                            class="md-datetime-picker__table-cell"
                                            ?selected="${item.selected}"
                                            ?activated="${item.activated}"
                                            @click="${this.handleDatetimePickerDayItemClick}"
                                        >
                                            <div class="md-datetime-picker__table-label">${item.label}</div>
                                        </div>
                                    `,
                                )}
                            </div>
                        `,
                    )}
                </div>
            </div>
        `;
    }

    renderHour() {
        return html`
            <div class="md-datetime-picker__float md-datetime-picker__float--hour">
                ${this.hours.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            class="md-datetime-picker__float-item"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatetimePickerHourItemClick}"
                        >
                            <div class="md-datetime-picker__float-label">${item.label}</div>
                        </div>
                    `,
                )}
            </div>
        `;
    }

    renderMinute() {
        return html`
            <div class="md-datetime-picker__float md-datetime-picker__float--minute">
                ${this.minutes.map(
                    (item) => html`
                        <div
                            .data="${item}"
                            class="md-datetime-picker__float-item"
                            ?selected="${item.selected}"
                            ?activated="${item.activated}"
                            @click="${this.handleDatetimePickerMinuteItemClick}"
                        >
                            <div class="md-datetime-picker__float-label">${item.label}</div>
                        </div>
                    `,
                )}
            </div>
        `;
    }

    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                class="md-datetime-picker__button"
                .variant="${ifDefined(item?.variant)}"
                .label="${ifDefined(item?.label ?? item)}"
                .icon="${ifDefined(item?.icon)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                @click="${this.handleDatetimePickerButtonClick}"
            ></md-button>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader ? html`
                <div class="md-datetime-picker__header">
                    ${this.leadingIconButton ? this.renderIconButton(this.leadingIconButton) : nothing}
                    ${this.hasLabel ? html`
                        <div
                            class="md-datetime-picker__label"
                            @click="${this.handleDatetimePickerLabelClick}"
                        >
                            ${this.label ? html`<div class="md-datetime-picker__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-datetime-picker__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.trailingIconButtons?.length ? html`<div class="md-datetime-picker__icon-buttons">${this.trailingIconButtons?.map((item) => this.renderIconButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
            <div class="md-datetime-picker__container">
                <div class="md-datetime-picker__body">
                    <div class="md-datetime-picker__view">
                        <div class="md-datetime-picker__view-item">${this.renderYear()}</div>
                        <div class="md-datetime-picker__view-item">${this.renderMonth()}</div>
                        <div class="md-datetime-picker__view-item">${this.renderDay()}</div>
                        <div class="md-datetime-picker__view-item">${this.renderHour()}</div>
                        <div class="md-datetime-picker__view-item">${this.renderMinute()}</div>
                    </div>
                </div>
                ${this.hasFooter ? html`<div class="md-datetime-picker__footer">${this.buttons?.map((item) => this.renderButton(item))}</div>` : nothing}
            </div>    
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-datetime-picker");
        this.style.setProperty("--md-comp-datetime-picker-animation", "none");
        await this.updateComplete;

        const rect = this.getBoundingClientRect();
        this.style.setProperty(`--md-comp-datetime-picker-height`, rect.Height + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("view")) {
            this.style.setProperty("--md-datetime-picker-view", this.view);
        }
    }

    show(options = {}) {
        this.popper.setPosition({
            placements: ["bottom-start", "bottom-end", "top-start", "top-end"],
            ...options,
        });
        this.style.removeProperty("--md-comp-datetime-picker-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-datetime-picker-animation");
        this.open = false;
    }

    toggle(options = {}) {
        if (this.open) {
            this.close();
        } else {
            this.show(options);
        }
    }

    handleDatetimePickerLabelClick(event) {
        const map = [2, 0, 1, 4, 2];
        this.view = map[this.view];

        this.emit("onDatetimePickerLabelClick", { event });
    }

    handleDatetimePickerIconButtonClick(event) {
        const data = event.currentTarget.data;

        const map = {
            0: () => this.current.setFullYear(this.current.getFullYear() + (data === "keyboard_arrow_right" ? 10 : -10)),
            1: () => this.current.setFullYear(this.current.getFullYear() + (data === "keyboard_arrow_right" ? 1 : -1)),
            2: () => this.current.setMonth(this.current.getMonth() + (data === "keyboard_arrow_right" ? 1 : -1)),
            3: () => this.current.setHours(this.current.getHours() + (data === "keyboard_arrow_right" ? 1 : -1)),
            4: () => this.current.setMinutes(this.current.getMinutes() + (data === "keyboard_arrow_right" ? 1 : -1)),
        };
        map[this.view]();

        this.requestUpdate();
        this.emit("onDatetimePickerIconButtonClick", { event });
    }

    handleDatetimePickerYearItemClick(event) {
        const data = event.currentTarget.data;

        this.current.setFullYear(data.year);

        this.view = 1;
        this.emit("onDatetimePickerYearItemClick", { event });
    }

    handleDatetimePickerMonthItemClick(event) {
        const data = event.currentTarget.data;

        this.current.setMonth(data.month);

        this.view = 2;
        this.emit("onDatetimePickerMonthItemClick", { event });
    }

    handleDatetimePickerDayItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);

        this.current.setFullYear(data.year);
        this.current.setMonth(data.month);
        this.current.setDate(data.day);

        this.view = 3;
        this.emit("onDatetimePickerDayItemClick", { event });
    }

    handleDatetimePickerHourItemClick(event) {
        const data = event.currentTarget.data;

        this.current.setHours(data.hour);

        this.view = 4;
        this.emit("onDatetimePickerHourItemClick", { event });
    }

    handleDatetimePickerMinuteItemClick(event) {
        const data = event.currentTarget.data;

        this.selected.setFullYear(data.year);
        this.selected.setMonth(data.month);
        this.selected.setDate(data.day);
        this.selected.setHours(data.hour);
        this.selected.setMinutes(data.minute);

        this.current.setFullYear(data.year);
        this.current.setMonth(data.month);
        this.current.setDate(data.day);
        this.current.setHours(data.hour);
        this.current.setMinutes(data.minute);

        this.view = 2;
        this.emit("onDatetimePickerMinuteItemClick", { event });
    }

    handleDatetimePickerButtonClick(event) {
        const data = event.currentTarget.data;

        if (data === "Cancel") {
            this.selected.setFullYear(this.activated.getFullYear());
            this.selected.setMonth(this.activated.getMonth());
            this.selected.setDate(this.activated.getDate());
            this.selected.setHours(this.activated.getHours());
            this.selected.setMinutes(this.activated.getMinutes());

            this.current.setFullYear(this.activated.getFullYear());
            this.current.setMonth(this.activated.getMonth());
            this.current.setDate(this.activated.getDate());
            this.current.setHours(this.activated.getHours());
            this.current.setMinutes(this.activated.getMinutes());
        } else if (data === "OK") {
        }
        this.requestUpdate();
        this.emit("onDatetimePickerButtonClick", { event });
    }
}

customElements.define("md-datetime-picker", MdDatetimePickerComponent);

export { MdDatetimePickerComponent };
