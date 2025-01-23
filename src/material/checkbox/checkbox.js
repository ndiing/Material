import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";

/**
 * @fires onCheckboxNativeInput
 */
class MdCheckboxComponent extends MdComponent {
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
            container: ".md-checkbox__track",
            trigger: ".md-checkbox__native",
            unbounded: true,
            radius: 40,
        });
    }

    /**@private*/
    render() {
        /* prettier-ignore */
        return html`
            <input 
                type="checkbox" 
                .name="${ifDefined(this.name)}"
                .value="${ifDefined(this.value)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                .checked="${ifDefined(this.checked)}"
                class="md-checkbox__native"
                @input="${this.handleCheckboxNativeInput}"
            >
            <div class="md-checkbox__track">
                <div class="md-checkbox__thumb"></div>
            </div>
        `
    }

    /**@private*/
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-checkbox");
    }

    /**@private*/
    handleCheckboxNativeInput(event) {
        const native = event.currentTarget;
        this.indeterminate = native.indeterminate;
        this.checked = native.checked;
        this.emit("onCheckboxNativeInput", { event });
    }
}

customElements.define("md-checkbox", MdCheckboxComponent);

export { MdCheckboxComponent };
