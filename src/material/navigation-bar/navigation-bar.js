import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @requires MdScrimComponent
 * @requires MdIconComponent
 * @requires MdIconButtonComponent
 * @requires MdButtonComponent
 * @fires onNavigationBarIconButtonClick
 * @fires onNavigationBarButtonClick
 * @fires onNavigationBarShown
 * @fires onNavigationBarClosed
 * @fires onNavigationBarScrimClosed
 */
class MdNavigationBarComponent extends MdComponent {
    /**
     * @typedef {Array} MdNavigationBarComponentIcons
     * @property {String} icon
     * @property {String} [component=icon]
     */
    /**
     * @typedef {Array} MdNavigationBarComponentActions
     * @property {String} icon
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [toggle]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     * @property {String} [component=icon-button]
     */
    /**
     * @typedef {Array} MdNavigationBarComponentButtons
     * @property {String} [icon]
     * @property {String} label
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [disabled]
     * @property {Boolean} [selected]
     * @property {String} [component=button]
     */
    /**
     * @property {MdNavigationBarComponentIcons} [icons]
     * @property {MdNavigationBarComponentActions} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {MdNavigationBarComponentButtons} [buttons]
     * @property {Boolean} [open]
     */
    static properties = {
        open: { type: Boolean, reflect: true },
        items: { type: Array },
    };

    /**
     *
     */
    constructor() {
        super();
        this.items = [];
        this.rippleOptions = { container: ".md-navigation-list__icon" };
    }

    /**@private*/
    render() {
        /* prettier-ignore */
        return html`
            <md-navigation-list
                .rippleOptions="${this.rippleOptions}"
                .items="${this.items}"
            ></md-navigation-list>
        `
    }

    /**@private*/
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-bar");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        await this.updateComplete;

        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    /**@private*/
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-navigation-bar");
        this.style.setProperty("--md-comp-sheet-animation", "none");
    }

    /**@private*/
    updated(changedProperties) {
        super.updated(changedProperties);
    }

    /**
     *
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = true;
        this.emit("onNavigationBarShown");
    }

    /**
     *
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        this.emit("onNavigationBarClosed");
    }

    /**
     *
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }
}

customElements.define("md-navigation-bar", MdNavigationBarComponent);

export { MdNavigationBarComponent };
