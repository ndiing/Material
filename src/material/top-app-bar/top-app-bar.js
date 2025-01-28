import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
class MdTopAppBarComponent extends MdComponent {
    static properties = {
        leadingActions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        trailingActions: { type: Array },
        open: { type: Boolean, reflect: true },
    };

/**
 * @private
 */
    constructor() {
        super();
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
                @click="${this.handleTopAppBarIconButtonClick}"
            ></md-icon-button>
        `
    }

/**
 * @private
 */
    render() {
        /* prettier-ignore */
        return html`
            ${this.leadingActions?.length?html`
                <div class="md-top-app-bar__actions">
                    ${this.leadingActions.map(action=>this.renderIconButton(action))}
                </div>    
            `:nothing}
            ${this.label||this.sublabel?html`
                <div class="md-top-app-bar__labels">
                    ${this.label?html`<div class="md-top-app-bar__label">${this.label}</div>`:nothing}
                    ${this.sublabel?html`<div class="md-top-app-bar__sublabel">${this.sublabel}</div>`:nothing}
                </div>
            `:nothing}
            ${this.trailingActions?.length?html`
                <div class="md-top-app-bar__actions">
                    ${this.trailingActions.map(action=>this.renderIconButton(action))}
                </div>    
            `:nothing}
        `
    }
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-top-app-bar");
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
        this.classList.remove("md-top-app-bar");
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
    handleTopAppBarIconButtonClick(event) {
        this.emit("onTopAppBarIconButtonClick", { event });
    }

/**
 *
 */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = true;
        this.emit("onTopAppBarShown");
    }

/**
 *
 */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        this.emit("onTopAppBarClosed");
    }

/**
 *
 */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }
}
customElements.define("md-top-app-bar", MdTopAppBarComponent);
export { MdTopAppBarComponent };
