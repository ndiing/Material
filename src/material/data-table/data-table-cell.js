import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";
/**
 *
 */
class MdDataTableCellComponent extends MdComponent {
    /**
     *
     * @property {Boolean} [checkbox]
     * @property {String} [avatar]
     * @property {String} [icon]
     * @property {String} [label]
     * @property {String} [sublabel]
     */
    static properties = {
        checkbox: { type: Boolean },
        avatar: { type: String },
        icon: { type: String },
        label: { type: String },
        sublabel: { type: String },
        action: { type: String },
    };

    /**
     *
     */
    constructor() {
        super();
    }

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            ${this.checkbox?html`<md-checkbox class="md-data-table__checkbox" .checked="${this.selected}"></md-checkbox>`:nothing}
            ${this.avatar?html`<md-image class="md-data-table__avatar" .src="${ifDefined(this.avatar)}" circular></md-image>`:nothing}
            ${this.icon?html`<md-icon class="md-data-table__icon">${this.icon}</md-icon>`:nothing}
            ${this.label||this.sublabel?html`
                <div class="md-data-table__labels">
                    ${this.label?html`<div class="md-data-table__label">${this.label}</div>`:nothing}
                    ${this.sublabel?html`<div class="md-data-table__sublabel">${this.sublabel}</div>`:nothing}
                </div>
            `:nothing}
            ${this.action?html`<md-icon-button class="md-data-table__action" .icon="${this.action}"></md-icon-button>`:nothing}
        `
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table__cell");
        await this.updateComplete;
        if (this.sublabel) {
            const sublabel = this.querySelector(".md-data-table__sublabel");
            if (sublabel.scrollHeight > sublabel.clientHeight) {
                this.classList.add("md-data-table__cell--three-line");
            } else {
                this.classList.add("md-data-table__cell--two-line");
            }
        }
    }
    
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("icon")) {
            this.classList.toggle("md-data-table__cell--with-icon", !!this.icon);
        }
    }
}
customElements.define("md-data-table-cell", MdDataTableCellComponent);
export { MdDataTableCellComponent };
