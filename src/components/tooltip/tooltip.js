import { MdComponent } from "../component/component";
import { PopperController } from "../popper/popper";
import { ifDefined } from "lit/directives/if-defined.js";
import { html, nothing } from "lit";

class MdTooltipComponent extends MdComponent {
    static properties = {
        leadingIconButton: { type: String },
        label: { type: String },
        subLabel: { type: String },
        trailingIconButtons: { type: Array },
        buttons: { type: Array },
        variant: { type: String },
        open: { type: Boolean, reflect: true },
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

    variants = ["plain"];

    constructor() {
        super();
        this.inner = Array.from(this.childNodes);
        this.popper = new PopperController(this);
    }

    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                class="md-tooltip__icon-button"
                .variant="${ifDefined(item?.variant)}"
                .icon="${ifDefined(item?.icon ?? item)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                .toggle="${ifDefined(item?.toggle)}"
                @click="${this.handleTooltipIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                class="md-tooltip__button"
                .variant="${ifDefined(item?.variant)}"
                .label="${ifDefined(item?.label ?? item)}"
                .icon="${ifDefined(item?.icon)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                @click="${this.handleTooltipButtonClick}"
            ></md-button>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader ? html`
                <div class="md-tooltip__header">
                    ${this.leadingIconButton ? this.renderIconButton(this.leadingIconButton) : nothing}
                    ${this.hasLabel ? html`
                        <div
                            class="md-tooltip__label"
                            @click="${this.handleTooltipLabelClick}"
                        >
                            ${this.label ? html`<div class="md-tooltip__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-tooltip__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.trailingIconButtons?.length ? html`<div class="md-tooltip__icon-buttons">${this.trailingIconButtons?.map((item) => this.renderIconButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
            ${this.hasContainer ? html`
                <div class="md-tooltip__container">
                    ${this.inner?.length ? html`<div class="md-tooltip__body">${this.inner}</div>` : nothing}
                    ${this.hasFooter ? html`<div class="md-tooltip__footer">${this.buttons?.map((item) => this.renderButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tooltip");
        this.style.setProperty("--md-comp-tooltip-animation", "none");
        await this.updateComplete;

        const rect=this.getBoundingClientRect()
        this.style.setProperty(`--md-comp-tooltip-height`, rect.height + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-tooltip--${variant}`, this.variant === variant);
            }
        }
    }

    show(options = {}) {
        this.popper.setPosition({
            placements: ["top", "bottom", "left", "right"],
            offset: 4,
            ...options,
        });
        this.style.removeProperty("--md-comp-tooltip-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-tooltip-animation");
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleTooltipLabelClick(event) {
        this.emit("onTooltipLabelClick", { event });
    }

    handleTooltipIconButtonClick(event) {
        this.emit("onTooltipIconButtonClick", { event });
    }

    handleTooltipButtonClick(event) {
        this.emit("onTooltipButtonClick", { event });
    }
}

customElements.define("md-tooltip", MdTooltipComponent);

export { MdTooltipComponent };
