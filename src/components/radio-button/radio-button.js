import { html } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";
import { createRef, ref } from "lit/directives/ref.js";

class MdRadioButtonComponent extends MdComponent {
    static properties = {
        name: { type: String },
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        value: { type: String },
        defaultValue: { type: String },
        indeterminate: { type: Boolean },
    };

    radioButtonNative = createRef();

    constructor() {
        super();
        new RippleController(this, {
            container: ".md-radio-button__track",
            trigger: ".md-radio-button__native",
            unbounded: true,
            radius: 40,
            centered: true,
        });
    }

    render() {
        /* prettier-ignore */
        return html`
            <input
                ${ref(this.radioButtonNative)}
                type="radio"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                class="md-radio-button__native"
                @input="${this.handleRadioButtonInput}"
                @reset="${this.handleRadioButtonReset}"
            />
            <div class="md-radio-button__track">
                <div class="md-radio-button__thumb"></div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-radio-button");
        this.defaultChecked = this.checked;
        this.defaultValue = this.value || "on";
        this.defaultIndeterminate = this.indeterminate;
    }

    handleRadioButtonInput(event) {
        this.checked = this.radioButtonNative.value.checked;
        this.value = this.radioButtonNative.value.value;
        this.indeterminate = this.radioButtonNative.value.indeterminate;
        this.emit("onRadioButtonInput", { event });
    }

    handleRadioButtonReset(event) {
        this.radioButtonNative.value.checked = this.defaultChecked;
        this.radioButtonNative.value.value = this.defaultValue;
        this.radioButtonNative.value.indeterminate = this.defaultIndeterminate;
        this.checked = this.defaultChecked;
        this.value = this.defaultValue;
        this.indeterminate = this.defaultIndeterminate;
        this.emit("onRadioButtonReset", { event });
    }
}

customElements.define("md-radio-button", MdRadioButtonComponent);

export { MdRadioButtonComponent };
