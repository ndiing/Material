import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoBottomSheet2Component extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-bottom-sheet
                    id="bottomSheet"
                    @onBottomSheetIconButtonClick="${() => bottomSheet.toggle()}"
                    variant="modal"
                    label="Label"
                ></md-bottom-sheet>
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Bottom Sheet"
                        @click="${() => bottomSheet.toggle()}"
                    ></md-button>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-bottom-sheet2", DemoBottomSheet2Component);

export default document.createElement("demo-bottom-sheet2", DemoBottomSheet2Component);
