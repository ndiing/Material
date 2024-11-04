import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { RippleController } from "../ripple/ripple";

class MdIconButtonComponent extends MdComponent {
    static properties = {
        variant: { type: String },
        icon: { type: String },
        type: { type: String },
        selected: { type: Boolean, reflect: true },
        toggle: { type: Boolean, reflect: true },
    };

    variants = ["filled", "filled-tonal", "outlined", "standard"];

    constructor() {
        super();
        this.type = "button";
        new RippleController(this, {
            trigger: ".md-icon-button__native",
            unbounded: true,
            radius: 40,
        });
    }

    render() {
        /* prettier-ignore */
        return html`
            <button
                class="md-icon-button__native"
                .type="${this.type}"
            >button</button>
            ${this.icon ? html`<md-icon class="md-icon-button__icon">${this.icon}</md-icon>` : nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon-button");
        this.handleIconButtonClick = this.handleIconButtonClick.bind(this);
        this.addEventListener("click", this.handleIconButtonClick);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.removeEventListener("click", this.handleIconButtonClick);
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-icon-button--${variant}`, this.variant === variant);
            }
        }
    }

    handleIconButtonClick(event) {
        if (this.toggle) {
            this.selected = !this.selected;
        }
        this.emit("onIconButtonClick", { event });
    }
}

customElements.define("md-icon-button", MdIconButtonComponent);

export { MdIconButtonComponent };
