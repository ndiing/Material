import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { RippleController } from "../ripple/ripple";

class MdFabComponent extends MdComponent {
    static properties = {
        variant: { type: String },
        color: { type: String },
        size: { type: String },
        label: { type: String },
        icon: { type: String },
        type: { type: String },
        selected: { type: Boolean, reflect: true },
    };

    variants = ["extended"];

    colors = ["surface", "secondary", "tertiary"];

    sizes = ["small", "large"];

    constructor() {
        super();
        new RippleController(this, {
            trigger: ".md-fab__native",
        });
        this.type = "button";
    }

    render() {
        /* prettier-ignore */
        return html`
            <button
                class="md-fab__native"
                .type="${this.type}"
            >button</button>
            ${this.icon ? html`<md-icon class="md-fab__icon">${this.icon}</md-icon>` : nothing}
            ${this.label ? html`<div class="md-fab__label">${this.label}</div>` : nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-fab");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-fab--${variant}`, this.variant === variant);
            }
        }

        if (changedProperties.has("color")) {
            for (const color of this.colors) {
                this.classList.toggle(`md-fab--${color}`, this.color === color);
            }
        }

        if (changedProperties.has("size")) {
            for (const size of this.sizes) {
                this.classList.toggle(`md-fab--${size}`, this.size === size);
            }
        }
    }
}

customElements.define("md-fab", MdFabComponent);

export { MdFabComponent };
