import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
class MdBottomAppBarComponent extends MdComponent {
    static properties = {
        actions: { type: Array },
        fab: { type: String },
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
                class="md-bottom-app-bar__action"
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleBottomAppBarIconButtonClick}"
            ></md-icon-button>
        `
    }

/**
 * @private
 * @param {String} item
 */
    renderFab(item) {
        /* prettier-ignore */
        return html`
            <md-fab
                class="md-bottom-app-bar__fab"
                .data="${item}"
                .icon="${ifDefined(item?.icon??item)}"
                .label="${ifDefined(item?.label)}"
                .type="${ifDefined(item?.type)}"
                .size="${ifDefined(item?.size)}"
                .variant="${ifDefined(item?.variant??'unelevated')}"
                @click="${this.handleBottomAppBarFabClick}"
            ></md-fab>
        `
    }

/**
 * @private
 */
    render() {
        /* prettier-ignore */
        return html`
            ${this.actions?.length?html`
                <div class="md-bottom-app-bar__actions">
                    ${this.actions.map(action=>this.renderIconButton(action))}
                </div>    
            `:nothing}
            ${this.fab?this.renderFab(this.fab):nothing}
        `
    }
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-bottom-app-bar");
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
        this.classList.remove("md-bottom-app-bar");
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
    handleBottomAppBarIconButtonClick(event) {
        this.emit("onBottomAppBarIconButtonClick", { event });
    }

/**
 * @private
 * @param {Object} event
 */
    handleBottomAppBarFabClick(event) {
        this.emit("onBottomAppBarFabClick", { event });
    }

/**
 *
 */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = true;
        this.emit("onBottomAppBarShown");
    }

/**
 *
 */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        this.emit("onBottomAppBarClosed");
    }

/**
 *
 */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }
}
customElements.define("md-bottom-app-bar", MdBottomAppBarComponent);
export { MdBottomAppBarComponent };
