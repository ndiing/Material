import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { styleMap } from "lit/directives/style-map.js";
class MdImageComponent extends MdComponent {
    static properties = {
        src: { type: String },
        alt: { type: String },
        ratio: { type: String },
        circular: { type: Boolean },
    };

/**
 * @private
 */
    constructor() {
        super();
    }
    get styleInfo() {
        const style = {};
        if (this.ratio) style["aspect-ratio"] = this.ratio;
        if (this.circular) {
            if (this.ratio) {
                let [x, y] = this.ratio.split("/");
                x = Number(x);
                y = Number(y);
                style["border-radius"] = `50% / ${(50 * x) / y}%`;
            } else style["border-radius"] = "50%";
        }
        return style;
    }

/**
 * @private
 */
    render() {
        /* prettier-ignore */
        return html`
            <img 
                .src="${ifDefined(this.src)}" 
                .alt="${ifDefined(this.alt)}" 
                class="md-image__native"
                style="${styleMap(this.styleInfo)}"
            >
        `
    }

/**
 *
 */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-image");
    }
}
customElements.define("md-image", MdImageComponent);
export { MdImageComponent };
