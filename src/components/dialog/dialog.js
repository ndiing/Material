import { ifDefined } from "lit/directives/if-defined.js";
import { MdComponent } from "../component/component";
import { html, nothing } from "lit";

class MdDialogComponent extends MdComponent {
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

    variants = ["full-screen"];

    constructor() {
        super();
        this.inner = Array.from(this.childNodes);
    }

    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                class="md-dialog__icon-button"
                .variant="${ifDefined(item?.variant)}"
                .icon="${ifDefined(item?.icon ?? item)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                .toggle="${ifDefined(item?.toggle)}"
                @click="${this.handleDialogIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                class="md-dialog__button"
                .variant="${ifDefined(item?.variant)}"
                .label="${ifDefined(item?.label ?? item)}"
                .icon="${ifDefined(item?.icon)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                @click="${this.handleDialogButtonClick}"
            ></md-button>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader ? html`
                <div class="md-dialog__header">
                    ${this.leadingIconButton ? this.renderIconButton(this.leadingIconButton) : nothing}
                    ${this.hasLabel ? html`
                        <div
                            class="md-dialog__label"
                            @click="${this.handleDialogLabelClick}"
                        >
                            ${this.label ? html`<div class="md-dialog__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-dialog__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.trailingIconButtons?.length ? html`<div class="md-dialog__icon-buttons">${this.trailingIconButtons?.map((item) => this.renderIconButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
            ${this.hasContainer ? html`
                <div class="md-dialog__container">
                    ${this.inner?.length ? html`<div class="md-dialog__body">${this.inner}</div>` : nothing}
                    ${this.hasFooter ? html`<div class="md-dialog__footer">${this.buttons?.map((item) => this.renderButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-dialog");
        this.style.setProperty("--md-comp-dialog-animation", "none");
        await this.updateComplete;

        const rect=this.getBoundingClientRect()
        this.style.setProperty(`--md-comp-dialog-height`, rect.height + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-dialog--${variant}`, this.variant === variant);
            }
        }

        if (changedProperties.has("open")) {
            if (this.open && !this.scrim) {
                this.scrim = document.createElement("md-scrim");
                this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
                this.handleDialogScrimClick = this.handleDialogScrimClick.bind(this);
                this.handleDialogScrimClosed = this.handleDialogScrimClosed.bind(this);
                this.scrim.addEventListener("onScrimClick", this.handleDialogScrimClick);
                this.scrim.addEventListener("onScrimClosed", this.handleDialogScrimClosed);
                this.scrim.show();
            }

            if (!this.open && this.scrim) {
                this.scrim.close();
            }
        }
    }

    show() {
        this.style.removeProperty("--md-comp-dialog-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-dialog-animation");
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleDialogLabelClick(event) {
        this.emit("onDialogLabelClick", { event });
    }

    handleDialogIconButtonClick(event) {
        this.emit("onDialogIconButtonClick", { event });
    }

    handleDialogButtonClick(event) {
        this.emit("onDialogButtonClick", { event });
    }

    handleDialogScrimClosed(event) {
        this.scrim.remove();
        this.scrim.removeEventListener("onScrimClick", this.handleDialogScrimClick);
        this.scrim.removeEventListener("onScrimClosed", this.handleDialogScrimClosed);
        this.scrim = undefined;
        this.emit("onDialogScrimClosed", { event });
    }

    handleDialogScrimClick(event) {
        this.close();
        this.emit("onDialogScrimClick", { event });
    }
}

customElements.define("md-dialog", MdDialogComponent);

export { MdDialogComponent };
