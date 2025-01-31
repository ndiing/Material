import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoBottomSheetModal extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-bottom-sheet
                    id="bottomSheet2"
                    modal
                    >body</md-bottom-sheet
                >
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Bottom Sheet"
                            @click="${() => bottomSheet2.toggle()}"
                        ></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-bottom-sheet-modal", DemoBottomSheetModal);
export default document.createElement("demo-bottom-sheet-modal");
