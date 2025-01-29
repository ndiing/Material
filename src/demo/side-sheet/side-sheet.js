import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSideSheet extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-side-sheet id="sideSheet2">body</md-side-sheet>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Side Sheet"
                            @click="${() => sideSheet2.toggle()}"
                        ></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-side-sheet", DemoSideSheet);
export default document.createElement("demo-side-sheet");
