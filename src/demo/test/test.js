import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTest extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="demo-dragger"></div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
