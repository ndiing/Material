import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";

class MdListItemComponent extends MdComponent {
    static properties = {
        avatar: { type: String },
        image: { type: String },
        video: { type: String },
        icon: { type: String },
        leadingCheckbox: { type: String },
        leadingRadioButton: { type: String },
        leadingSwitch: { type: String },
        label: { type: String },
        subLabel: { type: String },
        trailingCheckbox: { type: String },
        trailingRadioButton: { type: String },
        trailingSwitch: { type: String },
        iconButton: { type: String },
        text: { type: String },
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
            ${this.avatar ? html`<md-image class="md-list__avatar" .src="${ifDefined(this.avatar)}" ></md-image>` : nothing} 
            ${this.image ? html`<md-image class="md-list__image" .src="${ifDefined(this.image)}" ></md-image>` : nothing} 
            ${this.video ? html`<md-image class="md-list__video" .src="${ifDefined(this.video)}" .ratio="${"3/2"}" ></md-image>` : nothing} 
            ${this.icon ? html`<md-icon class="md-list__icon">${this.icon}</md-icon>` : nothing} 
            ${this.leadingCheckbox ? html`<md-checkbox class="md-list__checkbox" .checked="${ifDefined(this.selected)}" ></md-checkbox>` : nothing} 
            ${this.leadingRadioButton ? html`<md-radio-button class="md-list__radio-button" .checked="${ifDefined(this.selected)}" ></md-radio-button>` : nothing} 
            ${this.leadingSwitch ? html`<md-switch class="md-list__switch" .checked="${ifDefined(this.selected)}" ></md-switch>` : nothing} 
            ${this.label || this.subLabel ? html`
                <div class="md-list__label">
                    ${this.label ? html`<div class="md-list__label-primary">${this.label}</div>` : nothing}
                    ${this.subLabel ? html`<div class="md-list__label-secondary">${this.subLabel}</div>` : nothing}
                </div>    
            ` : nothing} 
            ${this.trailingCheckbox ? html`<md-checkbox class="md-list__checkbox" .checked="${ifDefined(this.selected)}" ></md-checkbox>` : nothing} 
            ${this.trailingRadioButton ? html`<md-radio-button class="md-list__radio-button" .checked="${ifDefined(this.selected)}" ></md-radio-button>` : nothing} 
            ${this.trailingSwitch ? html`<md-switch class="md-list__switch" .checked="${ifDefined(this.selected)}" ></md-switch>` : nothing} 
            ${this.iconButton ? html`<icon-button class="md-list__icon-button" .icon="${ifDefined(this.iconButton)}" ></icon-button>` : nothing} 
            ${this.text ? html`<div class="md-list__text">${this.text}</div>` : nothing}
            ${this.badge!==undefined ? html`<md-badge class="md-list__badge" .label="${ifDefined(this.badge)}"></md-badge>` : nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list__item");
        // this.style.setProperty("--md-comp-navigation-bar-animation", "none");

        if (this.selection) {
            new RippleController(this, this.rippleOptions);
        }
        await this.updateComplete;
        const secondary = this.querySelector(".md-list__label-secondary");

        if (secondary) {
            const lineHeight = parseFloat(window.getComputedStyle(secondary).getPropertyValue("line-height"));

            if (secondary.scrollHeight > lineHeight) {
                this.classList.add("md-list__item--three");
            } else {
                this.classList.add("md-list__item--two");
            }
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("selected")) {
            if (this.selected) {
                this.handleListItemSelected();
            }
        }
    }

    async handleListItemSelected() {
        this.emit("onListItemSelected", { listItem: this });
    }
}

customElements.define("md-list-item", MdListItemComponent);

export { MdListItemComponent };
