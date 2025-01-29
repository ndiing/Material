import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { RippleController } from "../ripple/ripple";
/**
 *
 */
class MdChipComponent extends MdComponent {
    static properties = {
        icon: { type: String },
        avatar: { type: String },
        label: { type: String },
        action: { type: String },
        selected: { type: Boolean, reflect: true },
        disabled: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.ripple = new RippleController(this, {});
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.icon?html`<md-icon class="md-chip__icon">${this.icon}</md-icon>`:nothing}
            ${this.avatar?html`<md-image class="md-chip__avatar" .circular="${true}" .src="${this.avatar}"></md-image>`:nothing}
            ${this.label?html`<div class="md-chip__label">${this.label}</div>`:nothing}
            ${this.action?html`<md-icon-button 
                class="md-chip__action" 
                .icon="${this.action}" 
                .rippleOptions="${{radius:24}}"
                @click="${this.handleChipActionClick}"></md-icon-button>`:nothing}
        `
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chip");
    }

    handleChipActionClick(event) {
        this.emit("onChipActionClick", { event });
    }
}
customElements.define("md-chip", MdChipComponent);
export { MdChipComponent };
