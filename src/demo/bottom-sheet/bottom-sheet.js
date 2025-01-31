import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @class DemoBottomSheet
 * @extends MdComponent
 */
class DemoBottomSheet extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-bottom-sheet id="bottomSheet3">body</md-bottom-sheet>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Bottom Sheet"
                            @click="${() => bottomSheet3.toggle()}"
                        ></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-bottom-sheet", DemoBottomSheet);
export default document.createElement("demo-bottom-sheet");
