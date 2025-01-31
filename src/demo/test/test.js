import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoTest extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-dragger"
                            style="background:var(--md-sys-color-primary8);"
                        ></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-dragger"
                            style="background:var(--md-sys-color-primary10);"
                        ></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-dragger"
                            style="background:var(--md-sys-color-primary16);"
                        ></div>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <div
                            class="demo-dragger"
                            style="background:red"
                        ></div>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-test", DemoTest);
export default document.createElement("demo-test");
