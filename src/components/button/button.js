import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { RippleController } from "../ripple/ripple";

class MdButtonComponent extends MdComponent {
    static properties = {
        variant: { type: String },
        label: { type: String },
        icon: { type: String },
        type: { type: String },
        selected: { type: Boolean, reflect: true },
    };

    variants = ["elevated", "filled", "filled-tonal", "outlined", "text"];

    constructor() {
        super();
        this.type = "button";
        new RippleController(this, {
            trigger: ".md-button__native",
        });
    }

    render() {
        /* prettier-ignore */
        return html`
            <button
                class="md-button__native"
                .type="${this.type}"
            >button</button>
            ${this.icon ? html`<md-icon class="md-button__icon">${this.icon}</md-icon>` : nothing}
            ${this.label ? html`<div class="md-button__label">${this.label}</div>` : nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-button");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-button--${variant}`, this.variant === variant);
            }
        }
    }
}

customElements.define("md-button", MdButtonComponent);

export { MdButtonComponent };
