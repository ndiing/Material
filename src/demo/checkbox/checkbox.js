import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @class DemoCheckbox
 * @extends MdComponent
 */
class DemoCheckbox extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-checkbox></md-checkbox>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-checkbox indeterminate></md-checkbox>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-checkbox checked></md-checkbox>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-checkbox", DemoCheckbox);
export default document.createElement("demo-checkbox");
