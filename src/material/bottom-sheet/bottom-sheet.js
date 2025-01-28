import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
class MdBottomSheetComponent extends MdComponent {
    /**
     *
     * @property {Array} [icons]
     * @property {Array} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {Array} [buttons]
     * @property {Boolean} [open]
     * @property {Boolean} [modal]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
        modal: { type: Boolean, reflect: true },
    };

    /**
     * @private
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
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
                @click="${this.handleBottomSheetIconButtonClick}"
            ></md-icon-button>
        `
    }

    /**
     * @private
     * @param {String} item
     */
    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .disabled="${ifDefined(item.disabled)}"
                .selected="${ifDefined(item.selected)}"
                @click="${this.handleBottomSheetButtonClick}"
            ></md-button>
        `
    }

    /**
     * @private
     * @param {String} item
     */
    renderSpacer(item) {
        /* prettier-ignore */
        return html`
            <div class="md-bottom-sheet__spacer"></div>
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
            ['button',() => this.renderButton(item)],
            ['spacer',() => this.renderSpacer(item)],
        ],() => nothing)
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length||this.label||this.sublabel||this.actions?.length?html`
                <div class="md-bottom-sheet__header">
                    ${this.icons?.length?html`
                        <div class="md-bottom-sheet__icons">
                            ${this.icons.map(icon=>this.renderItem(icon,'icon'))}
                        </div>    
                    `:nothing}
                    ${this.label||this.sublabel?html`
                        <div class="md-bottom-sheet__labels">
                            ${this.label?html`<div class="md-bottom-sheet__label">${this.label}</div>`:nothing}
                            ${this.sublabel?html`<div class="md-bottom-sheet__sublabel">${this.sublabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.actions?.length?html`
                        <div class="md-bottom-sheet__actions">
                            ${this.actions.map(action=>this.renderItem(action,'icon-button'))}
                        </div>    
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-bottom-sheet__wrapper">
                    ${this.body?.length?html`<div class="md-bottom-sheet__body">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-bottom-sheet__footer">
                            ${this.buttons?.length?html`
                                <div class="md-bottom-sheet__buttons">
                                    ${this.buttons.map(button=>this.renderItem(button,'button'))}
                                </div>    
                            `:nothing}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `
    }
    async connectedCallback() {
        super.connectedCallback();
        this.bottomSheetScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.bottomSheetScrim, this.nextElementSibling);
        this.handleBottomSheetScrimClosed = this.handleBottomSheetScrimClosed.bind(this);
        this.bottomSheetScrim.addEventListener("onScrimClosed", this.handleBottomSheetScrimClosed);
        if (this.modal && this.open) this.bottomSheetScrim.show();
        this.classList.add("md-bottom-sheet");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.bottomSheetScrim.removeEventListener("onScrimClosed", this.handleBottomSheetScrimClosed);
        this.bottomSheetScrim.remove();
        this.classList.remove("md-bottom-sheet");
        this.style.setProperty("--md-comp-sheet-animation", "none");
    }

    /**
     * @private
     * @param {Object} changedProperties
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-bottom-sheet--modal`, !!this.modal);
        }
    }

    /**
     * @private
     * @param {Object} event
     */
    handleBottomSheetIconButtonClick(event) {
        this.emit("onBottomSheetIconButtonClick", { event });
    }

    /**
     * @private
     * @param {Object} event
     */
    handleBottomSheetButtonClick(event) {
        this.emit("onBottomSheetButtonClick", { event });
    }

    /**
     *
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        if (this.modal) this.bottomSheetScrim.show();
        this.open = true;
        this.emit("onBottomSheetShown");
    }

    /**
     *
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        if (this.bottomSheetScrim.open) this.bottomSheetScrim.close();
        this.emit("onBottomSheetClosed");
    }

    /**
     *
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**
     * @private
     * @param {Object} event
     */
    handleBottomSheetScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onBottomSheetScrimClosed", { event });
    }
}
customElements.define("md-bottom-sheet", MdBottomSheetComponent);
export { MdBottomSheetComponent };
