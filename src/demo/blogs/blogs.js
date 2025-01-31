import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @class DemoBlogs
 * @extends MdComponent
 */
class DemoBlogs extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <h1>Blogs</h1>
            <md-outlet></md-outlet>
        `;
    }
}
customElements.define("demo-blogs", DemoBlogs);
export default document.createElement("demo-blogs");
