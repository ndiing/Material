import { html } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { calcDecimal, calcPercentage } from "../util/util";

class MdSliderComponent extends MdComponent {
    static properties = {
        name: { type: String },
        min: { type: Number },
        max: { type: Number },
        value: {
            converter: {
                fromAttribute: (value) => {
                    return [].concat(JSON.parse(value));
                },
                toAttribute: (value) => {
                    return JSON.stringify(value);
                },
            },
        },
        defaultValue: { type: Array },
        step: { type: Number },
    };

    constructor() {
        super();
        this.min = 0;
        this.max = 100;
        this.step = 1;
        this.value = [this.max < this.min ? this.min : this.min + (this.max - this.min) / 2];
        this.format = (value) => value;
    }

    renderSlider(value, index) {
        let stopIndicators = 3;

        if (this.step !== 1) {
            stopIndicators = this.max / this.step + 1;
        }

        /* prettier-ignore */
        return html`
            <div class="md-slider__container md-slider__container${index + 1}">
                <input
                    type="range"
                    class="md-slider__native"
                    .name="${ifDefined(this.name)}"
                    .min="${ifDefined(this.min)}"
                    .max="${ifDefined(this.max)}"
                    .value="${ifDefined(value)}"
                    .defaultValue="${ifDefined(this.defaultValue?.[index])}"
                    .step="${ifDefined(this.step)}"
                    @input="${this.handleSliderInput}"
                    @reset="${this.handleSliderReset}"
                />
                <div class="md-slider__track">
                    <div class="md-slider__handle"></div>
                </div>
                <div class="md-slider__stop-indicators">
                    ${Array.from({ length: stopIndicators },(v, k) => html`
                        <div
                            class="md-slider__stop-indicator"
                            ?selected="${value >= this.step * k}"
                        ></div>
                    `,)}
                </div>
                <div class="md-slider__value">${this.format(value)}</div>
            </div>
        `;
    }

    render() {
        return this.value?.map((value, index) => this.renderSlider(value, index));
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-slider");
        await this.updateComplete;
        this.defaultValue = JSON.parse(JSON.stringify(this.value));
        this.classList.toggle("md-slider--centered", this.min < 0);
        this.classList.toggle("md-slider--discrete", this.step > 1);
        this.classList.toggle("md-slider--range-selection", this.value.length === 2);
        this.updateValue();
    }

    updateValue() {
        const sliderNatives = this.querySelectorAll(".md-slider__native");

        if (sliderNatives[1]) {
            sliderNatives[0].value = Math.min(sliderNatives[0].value, this.value[1]);
            sliderNatives[1].value = Math.max(sliderNatives[1].value, this.value[0]);
        }
        sliderNatives.forEach((element, index) => {
            this.value[index] = Number(element.value);
            this.updateStyle(index);
        });
        this.requestUpdate();
    }

    updateStyle(index) {
        const percentage = calcPercentage(this.min, this.max, this.value[index]);
        const decimal = calcDecimal(this.min, this.max, this.value[index]);
        this.style.setProperty(`--md-comp-slider-percentage-value${index + 1}`, percentage + "%");
        this.style.setProperty(`--md-comp-slider-decimal-value${index + 1}`, decimal);
    }

    handleSliderInput(event) {
        this.updateValue();
        this.emit("onSliderInput", { event });
    }

    handleSliderReset(event) {
        const sliderNatives = this.querySelectorAll(".md-slider__native");
        sliderNatives.forEach((element, index) => {
            element.value = this.defaultValue[index];
            this.value[index] = element.value;
            this.updateStyle(index);
        });
        this.requestUpdate();
        this.emit("onSliderReset", { event });
    }
}

customElements.define("md-slider", MdSliderComponent);

export { MdSliderComponent };
