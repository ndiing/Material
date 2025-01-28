import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { PopperController } from "../popper/popper";
/**
 *
 */
class MdMenuComponent extends MdComponent {
    /**
     *
     * @property {Boolean} [open]
     * @property {Array} [items]
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

    /**
     * @private
     */
    render() {
        /* prettier-ignore */
        return html`
            <md-navigation-list
                .items="${this.items}"
            ></md-navigation-list>
        `
    }
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
        this.style.setProperty("--md-comp-menu-animation", "none");
        await this.updateComplete;
        this.style.setProperty("--md-comp-menu-height", this.clientHeight + "px");
        this.style.setProperty("--md-comp-menu-width", this.clientWidth + "px");
    }

    /**
     * @private
     */
    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-menu");
    }

    /**
     *
     * @param {String} options
     */
    show(options = {}) {
        this.style.removeProperty("--md-comp-menu-animation");
        options = {
            container: this,
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top", "right-start", "right-end", "right", "left-start", "left-end", "left"],
            ...options,
        };
        this.open = true;
        this.popper = new PopperController();
        this.popper.show(options);
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
     * @param {String} options
     */
    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }
}
customElements.define("md-menu", MdMenuComponent);
export { MdMenuComponent };
