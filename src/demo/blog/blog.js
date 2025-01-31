import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @class DemoBlog
 * @extends MdComponent
 */
class DemoBlog extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <h1>Blog</h1>
            <md-outlet></md-outlet>
        `;
    }
}
customElements.define("demo-blog", DemoBlog);
export default document.createElement("demo-blog");
