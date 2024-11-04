import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdListComponent } from "../list/list";

class MdNavigationDrawerComponent extends MdComponent {
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
    }

    renderIconButton(item) {
        return html`
            <md-icon-button
                .data="${item}"
                class="md-navigation-drawer__icon-button"
                .variant="${ifDefined(item?.variant)}"
                .icon="${ifDefined(item?.icon ?? item)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                .toggle="${ifDefined(item?.toggle)}"
                @click="${this.handleNavigationDrawerIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                class="md-navigation-drawer__button"
                .variant="${ifDefined(item?.variant)}"
                .label="${ifDefined(item?.label ?? item)}"
                .icon="${ifDefined(item?.icon)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                @click="${this.handleNavigationDrawerButtonClick}"
            ></md-button>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader ? html`
                <div class="md-navigation-drawer__header">
                    ${this.leadingIconButton ? this.renderIconButton(this.leadingIconButton) : nothing}
                    ${this.hasLabel ? html`
                        <div
                            class="md-navigation-drawer__label"
                            @click="${this.handleNavigationDrawerLabelClick}"
                        >
                            ${this.label ? html`<div class="md-navigation-drawer__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-navigation-drawer__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.trailingIconButtons?.length ? html`<div class="md-navigation-drawer__icon-buttons">${this.trailingIconButtons?.map((item) => this.renderIconButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
            <div class="md-navigation-drawer__container">
                <div class="md-navigation-drawer__body">
                    <md-list
                        class="md-navigation-drawer__list"
                        .items="${ifDefined(this.items)}"
                        .selection="${this.selection||'single'}"
                        .rippleOptions="${ifDefined(this.rippleOptions)}"
                    ></md-list>
                </div>
                ${this.hasFooter ? html`<div class="md-navigation-drawer__footer">${this.buttons?.map((item) => this.renderButton(item))}</div>` : nothing}
            </div> 
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-drawer");
        this.style.setProperty("--md-comp-navigation-drawer-animation", "none");
        this.classList.toggle(`md-border__item--west`, true);
        await this.updateComplete;

        const rect=this.getBoundingClientRect()
        this.style.setProperty(`--md-comp-navigation-drawer-width`, rect.width + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-navigation-drawer--${variant}`, this.variant === variant);
            }
        }

        if (changedProperties.has("open")) {
            if (this.open && this.variant === "modal" && !this.scrim) {
                this.scrim = document.createElement("md-scrim");
                this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
                this.handleNavigationDrawerScrimClick = this.handleNavigationDrawerScrimClick.bind(this);
                this.handleNavigationDrawerScrimClosed = this.handleNavigationDrawerScrimClosed.bind(this);
                this.scrim.addEventListener("onScrimClick", this.handleNavigationDrawerScrimClick);
                this.scrim.addEventListener("onScrimClosed", this.handleNavigationDrawerScrimClosed);
                this.scrim.show();
            }

            if (!this.open && this.scrim) {
                this.scrim.close();
            }
        }
    }

    show() {
        this.style.removeProperty("--md-comp-navigation-drawer-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-navigation-drawer-animation");
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleNavigationDrawerLabelClick(event) {
        this.emit("onNavigationDrawerLabelClick", { event });
    }

    handleNavigationDrawerIconButtonClick(event) {
        this.emit("onNavigationDrawerIconButtonClick", { event });
    }

    handleNavigationDrawerButtonClick(event) {
        this.emit("onNavigationDrawerButtonClick", { event });
    }

    handleNavigationDrawerScrimClosed(event) {
        this.scrim.remove();
        this.scrim.removeEventListener("onScrimClick", this.handleNavigationDrawerScrimClick);
        this.scrim.removeEventListener("onScrimClosed", this.handleNavigationDrawerScrimClosed);
        this.scrim = undefined;
        this.emit("onNavigationDrawerScrimClosed", { event });
    }

    handleNavigationDrawerScrimClick(event) {
        this.close();
        this.emit("onNavigationDrawerScrimClick", { event });
    }
}

customElements.define("md-navigation-drawer", MdNavigationDrawerComponent);

export { MdNavigationDrawerComponent };
