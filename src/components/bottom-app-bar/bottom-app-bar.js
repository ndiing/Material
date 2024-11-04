import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

class MdBottomAppBarComponent extends MdComponent {
    static properties = {
        leadingActions: { type: String },
        leadingIconButton: { type: String },
        label: { type: String },
        subLabel: { type: String },
        trailingIconButtons: { type: Array },
        trailingActions: { type: String },
        buttons: { type: Array },
        variant: { type: String },
        modal: { type: Boolean, reflect: true },
        open: { type: Boolean, reflect: true },
    };

    get hasLabel() {
        return this.label || this.subLabel;
    }

    get hasHeader() {
        return this.leadingIconButton || this.hasLabel || this.trailingIconButtons?.length || this.leadingActions?.length || this.trailingActions?.length;
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
        /* prettier-ignore */
        return html`
            <md-icon-button
                .data="${item}"
                .variant="${ifDefined(item.variant)}"
                .icon="${ifDefined(item.icon??item)}"
                .type="${ifDefined(item.type)}"
                .selected="${ifDefined(item.selected)}"
                .toggle="${ifDefined(item.toggle)}"
                @click="${this.handleBottomAppBarIconButtonClick}"
            ></md-icon-button>
        `
    }

    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button
                .data="${item}"
                .variant="${ifDefined(item.variant)}"
                .label="${ifDefined(item.label??item)}"
                .icon="${ifDefined(item.icon)}"
                .type="${ifDefined(item.type)}"
                .selected="${ifDefined(item.selected)}"
                @click="${this.handleBottomAppBarButtonClick}"
            ></md-button>
        `
    }

    renderFab(item) {
        /* prettier-ignore */
        return html`
            <md-fab
                .data="${item}"
                .variant="${ifDefined(item.variant)}"
                .color="${ifDefined(item.color)}"
                .size="${ifDefined(item.size)}"
                .label="${ifDefined(item.label)}"
                .icon="${ifDefined(item.icon??item)}"
                .type="${ifDefined(item.type)}"
                .selected="${ifDefined(item.selected)}"
                @click="${this.handleBottomAppBarFabClick}"
            ></md-fab>
        `
    }

    renderAction(item) {
        return choose(
            item.comp,
            [
                ["icon-button", () => this.renderIconButton(item)],
                ["fab", () => this.renderFab(item)],
                ["button", () => this.renderButton(item)],
            ],
            () => this.renderIconButton(item),
        );
    }

    renderHeader() {
        /* prettier-ignore */
        return html`
            <div class="md-bottom-app-bar__header">
                ${this.leadingActions?.length?html`
                    <div class="md-bottom-app-bar__actions md-bottom-app-bar__actions--start">
                        ${this.leadingActions.map(item => this.renderAction(item))}
                    </div>
                `:nothing}
                ${this.hasLabel?html`
                    <div class="md-bottom-app-bar__label">
                        ${this.label?html`<div class="md-bottom-app-bar__label-primary">${this.label}</div>`:nothing}
                        ${this.subLabel?html`<div class="md-bottom-app-bar__label-secondary">${this.subLabel}</div>`:nothing}
                    </div>
                `:nothing}
                ${this.trailingActions?.length?html`
                    <div class="md-bottom-app-bar__actions md-bottom-app-bar__actions--end">
                        ${this.trailingActions.map(item => this.renderAction(item))}
                    </div>
                `:nothing}
            </div>
        `
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader ? this.renderHeader() : nothing}
            ${this.hasContainer ? html`
                <div class="md-bottom-app-bar__container">
                    ${this.inner?.length ? html`<div class="md-bottom-app-bar__body">${this.inner}</div>` : nothing}
                    ${this.hasFooter ? html`<div class="md-bottom-app-bar__footer">${this.buttons?.map((item) => this.renderButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");
        this.style.setProperty("--md-comp-bottom-app-bar-animation", "none");
        this.classList.toggle(`md-border__item--south`, true);
        await this.updateComplete;

        const rect=this.getBoundingClientRect()
        this.style.setProperty(`--md-comp-bottom-app-bar-height`, rect.height + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-bottom-app-bar--${variant}`, this.variant === variant);
            }
        }

        if (changedProperties.has("open")) {
            if (this.open && this.variant === "modal" && !this.scrim) {
                this.scrim = document.createElement("md-scrim");
                this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
                this.handleBottomAppBarScrimClick = this.handleBottomAppBarScrimClick.bind(this);
                this.handleBottomAppBarScrimClosed = this.handleBottomAppBarScrimClosed.bind(this);
                this.scrim.addEventListener("onScrimClick", this.handleBottomAppBarScrimClick);
                this.scrim.addEventListener("onScrimClosed", this.handleBottomAppBarScrimClosed);
                this.scrim.show();
            }

            if (!this.open && this.scrim) {
                this.scrim.close();
            }
        }
    }

    show() {
        this.style.removeProperty("--md-comp-bottom-app-bar-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-bottom-app-bar-animation");
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleBottomAppBarLabelClick(event) {
        this.emit("onBottomAppBarLabelClick", { event });
    }

    handleBottomAppBarIconButtonClick(event) {
        this.emit("onBottomAppBarIconButtonClick", { event });
    }

    handleBottomAppBarButtonClick(event) {
        this.emit("onBottomAppBarButtonClick", { event });
    }

    handleBottomAppBarFabClick(event) {
        this.emit("onBottomAppBarFabClick", { event });
    }

    handleBottomAppBarScrimClosed(event) {
        this.scrim.remove();
        this.scrim.removeEventListener("onScrimClick", this.handleBottomAppBarScrimClick);
        this.scrim.removeEventListener("onScrimClosed", this.handleBottomAppBarScrimClosed);
        this.scrim = undefined;
        this.emit("onBottomAppBarScrimClosed", { event });
    }

    handleBottomAppBarScrimClick(event) {
        this.close();
        this.emit("onBottomAppBarScrimClick", { event });
    }
}

customElements.define("md-bottom-app-bar", MdBottomAppBarComponent);

export { MdBottomAppBarComponent };
