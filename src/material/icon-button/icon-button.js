import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { RippleController } from "../ripple/ripple";
import { ifDefined } from "lit/directives/if-defined.js";
/**
 *
 */
class MdIconButtonComponent extends MdComponent {
    /**
     *
     * @property {String} [icon]
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [toggle]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     */
    static properties = {
        icon: { type: String },
        variant: { type: String },
        type: { type: String },
        toggle: { type: Boolean, reflect: true },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    /* prettier-ignore */
    variants=[
        'filled',
        'filled-tonal',
        'outlined',
    ]

    /**
     *
     */
    constructor() {
        super();
        this.type = "icon-button";
        this.ripple = new RippleController(this, {
            trigger: ".md-icon-button__native",
            unbounded: true,
            radius: 40,
        });
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <button 
                class="md-icon-button__native"
                .type="${ifDefined(this.type)}"
            >icon-button</button>
            ${this.icon?html`<md-icon class="md-icon-button__icon">${this.icon}</md-icon>`:nothing}
        `
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-icon-button");
        this.handleIconButtonClick = this.handleIconButtonClick.bind(this);
        this.addEventListener("click", this.handleIconButtonClick);
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-icon-button");
        this.removeEventListener("click", this.handleIconButtonClick);
    }

    /**
     * @private
     * @param {Object} changedProperties
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-icon-button--${variant}`, variant === this.variant);
            });
        }
    }

    /**
     * @private
     * @param {Object} event
     */
    handleIconButtonClick(event) {
        if (this.toggle) {
            this.selected = !this.selected;
        }
        this.emit("onIconButtonClick", { event });
    }
}
customElements.define("md-icon-button", MdIconButtonComponent);
export { MdIconButtonComponent };
