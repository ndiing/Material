import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
class MdBadgeComponent extends MdComponent {
    static properties = {
        label: { type: Number },
        max: { type: Number },
    };

/**
 * @private
 */
    constructor() {
        super();
        this.max = 999;
    }

/**
 * @private
 */
    render() {
        return this.label ? (this.label > this.max ? this.max + "+" : this.label) : nothing;
    }

/**
 *
 */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-badge");
    }
}
customElements.define("md-badge", MdBadgeComponent);
export { MdBadgeComponent };
