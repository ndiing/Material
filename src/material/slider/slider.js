import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";

/**
 *
 */
class MdSliderComponent extends MdComponent {
    static properties = {
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        variant: { type: String },
        value: {
            type: String,
            converter: {
                fromAttribute: (value, type) => {
                    return [].concat(JSON.parse(value));
                },
                toAttribute: (value, type) => {
                    return JSON.stringify(value);
                },
            },
        },
    };
    /* prettier-ignore */
    variants=[
        'centered',
        'continuous',
        'discrete',
        'range-selection',
    ]
    constructor() {
        super();
        this.min = 0;
        this.max = 100;
        this.step = 1;
    }
    get indicators() {
        if (this.variant === "centered") return 3;
        else if (this.variant === "continuous") return 1;
        else if (this.variant === "discrete") return (this.max / this.step) + 1;
        else if (this.variant === "range-selection") return 2;
    }
    renderSliderWrapper(value,index) {
        /* prettier-ignore */
        return html`
            <div class="md-slider__wrapper">
                <input 
                    type="range" 
                    class="md-slider__native"
                    .data="${{index}}"
                    .min="${ifDefined(this.min)}"
                    .max="${ifDefined(this.max)}"
                    .step="${ifDefined(this.step)}"
                    .value="${ifDefined(value)}"
                    @input="${this.handleSliderNativeInput}"
                >
                <div class="md-slider__indicators">
                    ${Array.from({length:this.indicators},(v,k) => html`
                        <div class="${classMap({
                            'md-slider__indicator':true,
                            'md-slider__indicator--activated':value>=(this.step*k),
                        })}"></div>
                    `)}
                </div>
                <output class="md-slider__value">${value}</output>
            </div>
        `
    }
    render() {
        /* prettier-ignore */
        return this.value.map((value,index)=>this.renderSliderWrapper(value,index))
    }
    /**@private*/
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-slider");
        if (this.value === undefined) {
            this.value = [this.max < this.min ? this.min : this.min + (this.max - this.min) / 2];
        }
        if (this.value[0] < 0) this.variant=("centered");
        else if (this.step > 1) this.variant=("discrete");
        else if (this.value.length > 1) this.variant=("range-selection");
        else this.variant=("continuous");
        this.updateValue();
    }
     /**@private*/
     updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-slider--${variant}`, variant === this.variant);
            });
        }
    }
    handleSliderNativeInput(event){
        const native=event.currentTarget
        const data=native.data
        this.value[data.index]=Number(native.value)
        native.value=this.value[data.index]

        this.updateValue();

        this.requestUpdate()

        this.emit('onSliderNativeInput',{event})
    }
    updateValue() {
        this.value.forEach((value, index) => {
            this.style.setProperty(`--md-comp-slider-value${index}`, this.percentage(value));
        });
    }

    percentage(value,min=this.min,max=this.max,){
        return ((value - min) / (max - min)) 
    }
}

customElements.define("md-slider", MdSliderComponent);

export { MdSliderComponent };
