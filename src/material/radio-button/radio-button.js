import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";

/**
 * @fires onRadioButtonNativeInput
 */
class MdRadioButtonComponent extends MdComponent {
    /**
     * @property {String} name
     * @property {String} value
     * @property {Boolean} indeterminate
     * @property {Boolean} checked
     */
    static properties = {
        name: { type: String },
        value: { type: String },
        indeterminate: { type: Boolean },
        checked: { type: Boolean },
    };

    /**
     *
     */
    constructor() {
        super();
        this.ripple = new RippleController(this, {
            container: ".md-radio-button__track",
            trigger: ".md-radio-button__native",
            unbounded: true,
            radius: 40,
        });
    }

    /**@private*/
    render() {
        /* prettier-ignore */
        return html`
            <input 
                type="radio" 
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                class="md-radio-button__native"
                @input="${this.handleRadioButtonNativeInput}"
            >
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `
    }

    /**@private*/
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-radio-button");
    }

    /**@private*/
    handleRadioButtonNativeInput(event) {
        const native = event.currentTarget;
        this.indeterminate = native.indeterminate;
        this.checked = native.checked;
        this.emit("onRadioButtonNativeInput", { event });
    }
}

customElements.define("md-radio-button", MdRadioButtonComponent);

export { MdRadioButtonComponent };
