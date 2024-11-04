import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { MdListComponent } from "../list/list";

class MdNavigationBarComponent extends MdComponent {
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
                class="md-navigation-bar__icon-button"
                .variant="${ifDefined(item?.variant)}"
                .icon="${ifDefined(item?.icon ?? item)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                .toggle="${ifDefined(item?.toggle)}"
                @click="${this.handleNavigationBarIconButtonClick}"
            ></md-icon-button>
        `;
    }

    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                class="md-navigation-bar__button"
                .variant="${ifDefined(item?.variant)}"
                .label="${ifDefined(item?.label ?? item)}"
                .icon="${ifDefined(item?.icon)}"
                .type="${ifDefined(item?.type)}"
                .selected="${ifDefined(item?.selected)}"
                @click="${this.handleNavigationBarButtonClick}"
            ></md-button>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.hasHeader ? html`
                <div class="md-navigation-bar__header">
                    ${this.leadingIconButton ? this.renderIconButton(this.leadingIconButton) : nothing}
                    ${this.hasLabel ? html`
                        <div
                            class="md-navigation-bar__label"
                            @click="${this.handleNavigationBarLabelClick}"
                        >
                            ${this.label ? html`<div class="md-navigation-bar__label-primary">${this.label}</div>` : nothing}
                            ${this.subLabel ? html`<div class="md-navigation-bar__label-secondary">${this.subLabel}</div>` : nothing}
                        </div>
                    ` : nothing}
                    ${this.trailingIconButtons?.length ? html`<div class="md-navigation-bar__icon-buttons">${this.trailingIconButtons?.map((item) => this.renderIconButton(item))}</div>` : nothing}
                </div>    
            ` : nothing}
            <div class="md-navigation-bar__container">
                <div class="md-navigation-bar__body">
                    <md-list
                        class="md-navigation-bar__list"
                        .items="${ifDefined(this.items)}"
                        .selection="${this.selection||'single'}"
                        .rippleOptions="${{
                            container:'.md-list__icon',
                            ...this.rippleOptions
                        }}"
                    ></md-list>
                </div>
                ${this.hasFooter ? html`<div class="md-navigation-bar__footer">${this.buttons?.map((item) => this.renderButton(item))}</div>` : nothing}
            </div> 
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-bar");
        this.style.setProperty("--md-comp-navigation-bar-animation", "none");
        this.classList.toggle(`md-border__item--south`, true);
        await this.updateComplete;

        const rect = this.getBoundingClientRect();
        this.style.setProperty(`--md-comp-navigation-bar-height`, rect.height + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-navigation-bar--${variant}`, this.variant === variant);
            }
        }

        if (changedProperties.has("open")) {
            if (this.open && this.variant === "modal" && !this.scrim) {
                this.scrim = document.createElement("md-scrim");
                this.parentElement.insertBefore(this.scrim, this.nextElementSibling);
                this.handleNavigationBarScrimClick = this.handleNavigationBarScrimClick.bind(this);
                this.handleNavigationBarScrimClosed = this.handleNavigationBarScrimClosed.bind(this);
                this.scrim.addEventListener("onScrimClick", this.handleNavigationBarScrimClick);
                this.scrim.addEventListener("onScrimClosed", this.handleNavigationBarScrimClosed);
                this.scrim.show();
            }

            if (!this.open && this.scrim) {
                this.scrim.close();
            }
        }
    }

    show() {
        this.style.removeProperty("--md-comp-navigation-bar-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-navigation-bar-animation");
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleNavigationBarLabelClick(event) {
        this.emit("onNavigationBarLabelClick", { event });
    }

    handleNavigationBarIconButtonClick(event) {
        this.emit("onNavigationBarIconButtonClick", { event });
    }

    handleNavigationBarButtonClick(event) {
        this.emit("onNavigationBarButtonClick", { event });
    }

    handleNavigationBarScrimClosed(event) {
        this.scrim.remove();
        this.scrim.removeEventListener("onScrimClick", this.handleNavigationBarScrimClick);
        this.scrim.removeEventListener("onScrimClosed", this.handleNavigationBarScrimClosed);
        this.scrim = undefined;
        this.emit("onNavigationBarScrimClosed", { event });
    }

    handleNavigationBarScrimClick(event) {
        this.close();
        this.emit("onNavigationBarScrimClick", { event });
    }
}

customElements.define("md-navigation-bar", MdNavigationBarComponent);

export { MdNavigationBarComponent };
