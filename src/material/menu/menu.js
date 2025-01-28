import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { PopperController } from "../popper/popper";

/**
 * @requires MdScrimComponent
 * @requires MdIconComponent
 * @requires MdIconButtonComponent
 * @requires MdButtonComponent
 * @fires onMenuIconButtonClick
 * @fires onMenuButtonClick
 * @fires onMenuShown
 * @fires onMenuClosed
 * @fires onMenuScrimClosed
 */
class MdMenuComponent extends MdComponent {
    /**
     * @typedef {Array} MdMenuComponentIcons
     * @property {String} icon
     * @property {String} [component=icon]
     */
    /**
     * @typedef {Array} MdMenuComponentActions
     * @property {String} icon
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [toggle]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     * @property {String} [component=icon-button]
     */
    /**
     * @typedef {Array} MdMenuComponentButtons
     * @property {String} [icon]
     * @property {String} label
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [disabled]
     * @property {Boolean} [selected]
     * @property {String} [component=button]
     */
    /**
     * @property {MdMenuComponentIcons} [icons]
     * @property {MdMenuComponentActions} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {MdMenuComponentButtons} [buttons]
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
    }

    /**@private*/
    render() {
        /* prettier-ignore */
        return html`
            <md-navigation-list
                .items="${this.items}"
            ></md-navigation-list>
        `
    }

    /**@private*/
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
        this.style.setProperty("--md-comp-menu-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-menu-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-menu-width", this.clientWidth + "px");
    }

    /**@private*/
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-menu");
    }

    /**
     *
     */
    show(options = {}) {
        this.style.removeProperty("--md-comp-menu-animation");
        options = {
            container: this,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        };
        this.open = true;
        this.popper=new PopperController();
        this.popover.show(options)
        this.emit("onMenuShown");
    }

    /**
     *
     */
    close() {
        this.style.removeProperty("--md-comp-menu-animation");

        this.open = false;
        this.emit("onMenuClosed");
    }

    /**
     *
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }
}

customElements.define("md-menu", MdMenuComponent);

export { MdMenuComponent };
