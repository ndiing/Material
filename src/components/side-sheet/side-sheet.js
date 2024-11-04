import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdListComponent } from "../list/list";

class MdSideSheetComponent extends MdComponent {
    static properties = {
        ...MdListComponent.properties,
        leadingIconButton: { type: String },
        label: { type: String },
        subLabel: { type: String },
        trailingIconButtons: { type: Array },
        buttons: { type: Array },
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

    variants = ["modal"];

    constructor() {
        super();
        this.inner = Array.from(this.childNodes);
    }

    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                class="md-side-sheet__icon-button"
                .variant="${ifDefined(item?.variant)}"
                .icon="${ifDefined(item?.icon ?? item)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                .toggle="${ifDefined(item?.toggle)}"
                @click="${this.handleSideSheetIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                class="md-side-sheet__button"
                .variant="${ifDefined(item?.variant)}"
                .label="${ifDefined(item?.label ?? item)}"
                .icon="${ifDefined(item?.icon)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                @click="${this.handleSideSheetButtonClick}"
            ></md-button>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader ? html`
                <div class="md-side-sheet__header">
                    ${this.leadingIconButton ? this.renderIconButton(this.leadingIconButton) : nothing}
                    ${this.hasLabel ? html`
                        <div
                            class="md-side-sheet__label"
                            @click="${this.handleSideSheetLabelClick}"
                        >
                            ${this.label ? html`<div class="md-side-sheet__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-side-sheet__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.trailingIconButtons?.length ? html`<div class="md-side-sheet__icon-buttons">${this.trailingIconButtons?.map((item) => this.renderIconButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
            ${this.hasContainer?html`
                <div class="md-side-sheet__container">
                    ${this.inner?.length?html`<div class="md-side-sheet__body">${this.inner}</div>`:nothing}
                    ${this.hasFooter ? html`<div class="md-side-sheet__footer">${this.buttons?.map((item) => this.renderButton(item))}</div>` : nothing}
                </div> 
            `:nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-side-sheet");
        this.style.setProperty("--md-comp-side-sheet-animation", "none");
        this.classList.toggle(`md-border__item--east`, true);
        await this.updateComplete;

        const rect=this.getBoundingClientRect()
        this.style.setProperty(`--md-comp-side-sheet-width`, rect.width + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-side-sheet--${variant}`, this.variant === variant);
            }
        }

        if (changedProperties.has("open")) {
            if (this.open && this.variant === "modal" && !this.scrim) {
                this.scrim = document.createElement("md-scrim");
                this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
                this.handleSideSheetScrimClick = this.handleSideSheetScrimClick.bind(this);
                this.handleSideSheetScrimClosed = this.handleSideSheetScrimClosed.bind(this);
                this.scrim.addEventListener("onScrimClick", this.handleSideSheetScrimClick);
                this.scrim.addEventListener("onScrimClosed", this.handleSideSheetScrimClosed);
                this.scrim.show();
            }

            if (!this.open && this.scrim) {
                this.scrim.close();
            }
        }
    }

    show() {
        this.style.removeProperty("--md-comp-side-sheet-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-side-sheet-animation");
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleSideSheetLabelClick(event) {
        this.emit("onSideSheetLabelClick", { event });
    }

    handleSideSheetIconButtonClick(event) {
        this.emit("onSideSheetIconButtonClick", { event });
    }

    handleSideSheetButtonClick(event) {
        this.emit("onSideSheetButtonClick", { event });
    }

    handleSideSheetScrimClosed(event) {
        this.scrim.remove();
        this.scrim.removeEventListener("onScrimClick", this.handleSideSheetScrimClick);
        this.scrim.removeEventListener("onScrimClosed", this.handleSideSheetScrimClosed);
        this.scrim = undefined;
        this.emit("onSideSheetScrimClosed", { event });
    }

    handleSideSheetScrimClick(event) {
        this.close();
        this.emit("onSideSheetScrimClick", { event });
    }
}

customElements.define("md-side-sheet", MdSideSheetComponent);

export { MdSideSheetComponent };
