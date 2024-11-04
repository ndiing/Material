import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";

class MdTabComponent extends MdComponent {
    static properties = {
        icon: { type: String },
        label: { type: String },
        subLabel: { type: String },
        selected: { type: Boolean, reflect: true },
        selection: { type: String },
        routerLink: { type: String, reflect: true },
        rippleOptions: { type: Object },
        badge: { type: Number },
    };

    constructor() {
        super();
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.icon ? html`<md-icon class="md-tab__icon">${this.icon}</md-icon>` : nothing} 
            ${this.label || this.subLabel ? html`
                <div class="md-tab__label">
                    ${this.label ? html`<div class="md-tab__label-primary">${this.label}</div>` : nothing}
                    ${this.subLabel ? html`<div class="md-tab__label-secondary">${this.subLabel}</div>` : nothing}
                </div>    
            ` : nothing} 
            ${this.badge!==undefined ? html`<md-badge class="md-tab__badge" .label="${ifDefined(this.badge)}"></md-badge>` : nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tab");
        // this.style.setProperty("--md-comp-navigation-bar-animation", "none");

        if (this.selection) {
            new RippleController(this, this.rippleOptions);
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.handleTabSelected();
            }
        }
    }

    async handleTabSelected() {
        this.emit("onTabSelected", { tab: this });
    }
}

customElements.define("md-tab", MdTabComponent);

export { MdTabComponent };
