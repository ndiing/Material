import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
class MdNavigationRailComponent extends MdComponent {
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        items: { type: Array },
        open: { type: Boolean, reflect: true },
    };

/**
 * @private
 */
    constructor() {
        super();
        this.items = [];
        this.rippleOptions = { container: ".md-navigation-list__icon" };
    }

/**
 * @private
 * @param {String} item
 */
    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                .data="${item}"
            >${item.icon}</md-icon>
        `
    }

/**
 * @private
 * @param {String} item
 */
    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleNavigationRailIconButtonClick}"
            ></md-icon-button>
        `
    }

/**
 * @private
 * @param {String} item
 * @param {String} component
 */
    renderItem(item, component = "icon") {
        /* prettier-ignore */
        return choose(item.component||component,[
            ['icon',() => this.renderIcon(item)],
            ['icon-button',() => this.renderIconButton(item)],
        ],() => nothing)
    }

/**
 * @private
 */
    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length||this.label||this.sublabel||this.actions?.length?html`
                <div class="md-navigation-rail__header">
                    ${this.icons?.length?html`
                        <div class="md-navigation-rail__icons">
                            ${this.icons.map(icon=>this.renderItem(icon,'icon'))}
                        </div>    
                    `:nothing}
                    ${this.label||this.sublabel?html`
                        <div class="md-navigation-rail__labels">
                            ${this.label?html`<div class="md-navigation-rail__label">${this.label}</div>`:nothing}
                            ${this.sublabel?html`<div class="md-navigation-rail__sublabel">${this.sublabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.actions?.length?html`
                        <div class="md-navigation-rail__actions">
                            ${this.actions.map(action=>this.renderItem(action,'icon-button'))}
                        </div>    
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-navigation-rail__wrapper">
                <div class="md-navigation-rail__body">
                    <md-navigation-list
                        .rippleOptions="${this.rippleOptions}"
                        .items="${this.items}"
                    ></md-navigation-list>
                </div>
            </div>
        `
    }
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-rail");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

/**
 *
 */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-rail");
        this.style.setProperty("--md-comp-sheet-animation", "none");
    }

/**
 *
 * @param {Object} changedProperties
 */
    updated(changedProperties) {
        super.updated(changedProperties);
    }

/**
 * @private
 * @param {Object} event
 */
    handleNavigationRailIconButtonClick(event) {
        this.emit("onNavigationRailIconButtonClick", { event });
    }

/**
 *
 */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = true;
        this.emit("onNavigationRailShown");
    }

/**
 *
 */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        this.emit("onNavigationRailClosed");
    }

/**
 *
 */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }
}
customElements.define("md-navigation-rail", MdNavigationRailComponent);
export { MdNavigationRailComponent };
