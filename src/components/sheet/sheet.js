import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

class MdSheetComponent extends MdComponent {
    static properties = {
        leadingIconButton: { type: String },
        label: { type: String },
        subLabel: { type: String },
        trailingIconButtons: { type: Array },
        buttons: { type: Array },
        region: { type: String },
        variant: { type: String },
        modal: { type: Boolean, reflect: true },
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

    regions = ["north", "east", "south", "west", "center"];

    variants = ["modal"];

    constructor() {
        super();
        this.region = "center";
        this.inner = Array.from(this.childNodes);
    }

    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                class="md-sheet__icon-button"
                .variant="${ifDefined(item?.variant)}"
                .icon="${ifDefined(item?.icon ?? item)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                .toggle="${ifDefined(item?.toggle)}"
                @click="${this.handleSheetIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                class="md-sheet__button"
                .variant="${ifDefined(item?.variant)}"
                .label="${ifDefined(item?.label ?? item)}"
                .icon="${ifDefined(item?.icon)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                @click="${this.handleSheetButtonClick}"
            ></md-button>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader ? html`
                <div class="md-sheet__header">
                    ${this.leadingIconButton ? this.renderIconButton(this.leadingIconButton) : nothing}
                    ${this.hasLabel ? html`
                        <div
                            class="md-sheet__label"
                            @click="${this.handleSheetLabelClick}"
                        >
                            ${this.label ? html`<div class="md-sheet__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-sheet__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.trailingIconButtons?.length ? html`<div class="md-sheet__icon-buttons">${this.trailingIconButtons?.map((item) => this.renderIconButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
            ${this.hasContainer ? html`
                <div class="md-sheet__container">
                    ${this.inner?.length ? html`<div class="md-sheet__body">${this.inner}</div>` : nothing}
                    ${this.hasFooter ? html`<div class="md-sheet__footer">${this.buttons?.map((item) => this.renderButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-sheet");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        await this.updateComplete;

        const rect=this.getBoundingClientRect()
        if (["north", "south"].includes(this.region)) {
            this.style.setProperty(`--md-comp-sheet-height`, rect.height + "px");
        } else if (["east", "west"].includes(this.region)) {
            this.style.setProperty(`--md-comp-sheet-width`, rect.width + "px");
        }
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("region")) {
            for (const region of this.regions) {
                this.classList.toggle(`md-border__item--${region}`, this.region === region);
            }
        }

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-sheet--${variant}`, this.variant === variant);
            }
        }

        if (changedProperties.has("open")) {
            if (this.open && this.variant === "modal" && !this.scrim) {
                this.scrim = document.createElement("md-scrim");
                this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
                this.handleSheetScrimClick = this.handleSheetScrimClick.bind(this);
                this.handleSheetScrimClosed = this.handleSheetScrimClosed.bind(this);
                this.scrim.addEventListener("onScrimClick", this.handleSheetScrimClick);
                this.scrim.addEventListener("onScrimClosed", this.handleSheetScrimClosed);
                this.scrim.show();
            }

            if (!this.open && this.scrim) {
                this.scrim.close();
            }
        }
    }

    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleSheetLabelClick(event) {
        this.emit("onSheetLabelClick", { event });
    }

    handleSheetIconButtonClick(event) {
        this.emit("onSheetIconButtonClick", { event });
    }

    handleSheetButtonClick(event) {
        this.emit("onSheetButtonClick", { event });
    }

    handleSheetScrimClosed(event) {
        this.scrim.remove();
        this.scrim.removeEventListener("onScrimClick", this.handleSheetScrimClick);
        this.scrim.removeEventListener("onScrimClosed", this.handleSheetScrimClosed);
        this.scrim = undefined;
        this.emit("onSheetScrimClosed", { event });
    }

    handleSheetScrimClick(event) {
        this.close();
        this.emit("onSheetScrimClick", { event });
    }
}

customElements.define("md-sheet", MdSheetComponent);

export { MdSheetComponent };
