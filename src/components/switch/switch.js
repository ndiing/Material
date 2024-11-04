import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";
import { createRef, ref } from "lit/directives/ref.js";

class MdSwitchComponent extends MdComponent {
    static properties = {
        icons: { type: Array },
        name: { type: String },
        checked: { type: Boolean },
        defaultChecked: { type: Boolean },
        value: { type: String },
        defaultValue: { type: String },
        indeterminate: { type: Boolean },
    };

    switchNative = createRef();

    constructor() {
        super();
        new RippleController(this, {
            container: ".md-switch__thumb",
            trigger: ".md-switch__native",
            unbounded: true,
            radius: 40,
            centered: true,
        });
    }

    render() {
        /* prettier-ignore */
        return html`
            <input
                ${ref(this.switchNative)}
                type="checkbox"
                .name="${ifDefined(this.name)}"
                .checked="${ifDefined(this.checked)}"
                .defaultChecked="${ifDefined(this.defaultChecked)}"
                .value="${ifDefined(this.value)}"
                .defaultValue="${ifDefined(this.defaultValue)}"
                .indeterminate="${ifDefined(this.indeterminate)}"
                class="md-switch__native"
                @input="${this.handleSwitchInput}"
                @reset="${this.handleSwitchReset}"
            />
            <div class="md-switch__track">
                <div class="md-switch__thumb">${this.icons?.length ? html`<md-icon class="md-switch__icon">${this.icons[~~this.checked]}</md-icon>` : nothing}</div>
            </div>
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-switch");
        this.defaultChecked = this.checked;
        this.defaultValue = this.value || "on";
        this.defaultIndeterminate = this.indeterminate;
    }

    handleSwitchInput(event) {
        this.checked = this.switchNative.value.checked;
        this.value = this.switchNative.value.value;
        this.indeterminate = this.switchNative.value.indeterminate;
        this.emit("onSwitchInput", { event });
    }

    handleSwitchReset(event) {
        this.switchNative.value.checked = this.defaultChecked;
        this.switchNative.value.value = this.defaultValue;
        this.switchNative.value.indeterminate = this.defaultIndeterminate;
        this.checked = this.defaultChecked;
        this.value = this.defaultValue;
        this.indeterminate = this.defaultIndeterminate;
        this.emit("onSwitchReset", { event });
    }
}

customElements.define("md-switch", MdSwitchComponent);

export { MdSwitchComponent };
