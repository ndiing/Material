import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @class DemoLayoutBorder
 * @extends MdComponent
 */
class DemoLayoutBorder extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__border">
                    <div class="md-layout__north">north</div>
                    <div class="md-layout__east">east</div>
                    <div class="md-layout__south">south</div>
                    <div class="md-layout__west">west</div>
                    <div class="md-layout__center">center</div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-layout-border", DemoLayoutBorder);
export default document.createElement("demo-layout-border");
