import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @requires MdScrimComponent
 * @requires MdIconComponent
 * @requires MdIconButtonComponent
 * @requires MdButtonComponent
 * @fires onDialogIconButtonClick
 * @fires onDialogButtonClick
 * @fires onDialogShown
 * @fires onDialogClosed
 * @fires onDialogScrimClosed
 */
class MdDialogComponent extends MdComponent {
    /**
     * @typedef {Array} MdDialogComponentIcons
     * @property {String} icon
     * @property {String} [component=icon]
     */
    /**
     * @typedef {Array} MdDialogComponentActions
     * @property {String} icon
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [toggle]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     * @property {String} [component=icon-button]
     */
    /**
     * @typedef {Array} MdDialogComponentButtons
     * @property {String} [icon]
     * @property {String} label
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [disabled]
     * @property {Boolean} [selected]
     * @property {String} [component=button]
     */
    /**
     * @property {MdDialogComponentIcons} [icons]
     * @property {MdDialogComponentActions} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {MdDialogComponentButtons} [buttons]
     * @property {Boolean} [open]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
    };

    /**
     *
     */
    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    /**@private*/
    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                .data="${item}"
            >${item.icon}</md-icon>
        `
    }

    /**@private*/
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
                @click="${this.handleDialogIconButtonClick}"
            ></md-icon-button>
        `
    }

    /**@private*/
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
                @click="${this.handleDialogButtonClick}"
            ></md-button>
        `
    }

    /**@private*/
    renderSpacer(item) {
        /* prettier-ignore */
        return html`
            <div class="md-dialog__spacer"></div>
        `
    }

    /**@private*/
    renderItem(item, component = "icon") {
        /* prettier-ignore */
        return choose(item.component||component,[
            ['icon',() => this.renderIcon(item)],
            ['icon-button',() => this.renderIconButton(item)],
            ['button',() => this.renderButton(item)],
            ['spacer',() => this.renderSpacer(item)],
        ],() => nothing)
    }

    /**@private*/
    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length||this.label||this.sublabel||this.actions?.length?html`
                <div class="md-dialog__header">
                    ${this.icons?.length?html`
                        <div class="md-dialog__icons">
                            ${this.icons.map(icon=>this.renderItem(icon,'icon'))}
                        </div>    
                    `:nothing}
                    ${this.label||this.sublabel?html`
                        <div class="md-dialog__labels">
                            ${this.label?html`<div class="md-dialog__label">${this.label}</div>`:nothing}
                            ${this.sublabel?html`<div class="md-dialog__sublabel">${this.sublabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.actions?.length?html`
                        <div class="md-dialog__actions">
                            ${this.actions.map(action=>this.renderItem(action,'icon-button'))}
                        </div>    
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-dialog__wrapper">
                    ${this.body?.length?html`<div class="md-dialog__body">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-dialog__footer">
                            ${this.buttons?.length?html`
                                <div class="md-dialog__buttons">
                                    ${this.buttons.map(button=>this.renderItem(button,'button'))}
                                </div>    
                            `:nothing}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `
    }

    /**@private*/
    async connectedCallback() {
        super.connectedCallback();
        this.dialogScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.dialogScrim, this.nextElementSibling);
        this.handleDialogScrimClosed = this.handleDialogScrimClosed.bind(this);
        this.dialogScrim.addEventListener("onScrimClosed", this.handleDialogScrimClosed);
        if (this.open) this.dialogScrim.show();
        this.classList.add("md-dialog");
        this.style.setProperty("--md-comp-dialog-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-dialog-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-dialog-width", this.clientWidth + "px");
    }

    /**@private*/
    disconnectedCallback() {
        super.disconnectedCallback();
        this.dialogScrim.removeEventListener("onScrimClosed", this.handleDialogScrimClosed);
        this.dialogScrim.remove();
        this.classList.remove("md-dialog");
    }

    /**@private*/
    handleDialogIconButtonClick(event) {
        this.emit("onDialogIconButtonClick", { event });
    }
    /**@private*/
    handleDialogButtonClick(event) {
        this.emit("onDialogButtonClick", { event });
    }

    /**
     *
     */
    show() {
        this.style.removeProperty("--md-comp-dialog-animation");

        this.dialogScrim.show();
        this.open = true;
        this.emit("onDialogShown");
    }

    /**
     *
     */
    close() {
        this.style.removeProperty("--md-comp-dialog-animation");

        this.open = false;
        this.dialogScrim.close();
        this.emit("onDialogClosed");
    }

    /**
     *
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**@private*/
    handleDialogScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onDialogScrimClosed", { event });
    }
}

customElements.define("md-dialog", MdDialogComponent);

export { MdDialogComponent };
