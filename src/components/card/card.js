import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

class MdCardComponent extends MdComponent {
    static properties = {
        leadingIconButton: { type: String },
        label: { type: String },
        subLabel: { type: String },
        trailingIconButtons: { type: Array },
        buttons: { type: Array },
    };

    get hasLabel() {
        return this.label || this.subLabel;
    }

    get hasHeader() {
        return this.leadingIconButton || this.hasLabel || this.trailingIconButtons?.length;
    }

    get hasFooter() {
        return this.buttons?.length;
    }

    get hasContainer() {
        return this.inner?.length || this.hasFooter;
    }

    constructor() {
        super();
        this.inner = Array.from(this.childNodes);
    }

    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                class="md-card__icon-button"
                .variant="${ifDefined(item?.variant)}"
                .icon="${ifDefined(item?.icon ?? item)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                .toggle="${ifDefined(item?.toggle)}"
                @click="${this.handleCardIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                class="md-card__button"
                .variant="${ifDefined(item?.variant)}"
                .label="${ifDefined(item?.label ?? item)}"
                .icon="${ifDefined(item?.icon)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                @click="${this.handleCardButtonClick}"
            ></md-button>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader ? html`
                <div class="md-card__header">
                    ${this.leadingIconButton ? this.renderIconButton(this.leadingIconButton) : nothing}
                    ${this.hasLabel ? html`
                        <div
                            class="md-card__label"
                            @click="${this.handleCardLabelClick}"
                        >
                            ${this.label ? html`<div class="md-card__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-card__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.trailingIconButtons?.length ? html`<div class="md-card__icon-buttons">${this.trailingIconButtons?.map((item) => this.renderIconButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
            ${this.hasContainer ? html`
                <div class="md-card__container">
                    ${this.inner?.length ? html`<div class="md-card__body">${this.inner}</div>` : nothing}
                    ${this.hasFooter ? html`<div class="md-card__footer">${this.buttons?.map((item) => this.renderButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-card");
    }

    handleCardLabelClick(event) {
        this.emit("onCardLabelClick", { event });
    }

    handleCardIconButtonClick(event) {
        this.emit("onCardIconButtonClick", { event });
    }

    handleCardButtonClick(event) {
        this.emit("onCardButtonClick", { event });
    }
}

customElements.define("md-card", MdCardComponent);

export { MdCardComponent };
