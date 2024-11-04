import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoSideSheet2Component extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-side-sheet
                    id="sideSheet"
                    @onSideSheetIconButtonClick="${() => sideSheet.toggle()}"
                    label="Label"
                    variant="modal"
                ></md-side-sheet>
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <div class="md-grid">
                        <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="Toggle Side Sheet"
                                @click="${() => sideSheet.toggle()}"
                            ></md-button>
                        </div>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-side-sheet2", DemoSideSheet2Component);

export default document.createElement("demo-side-sheet2", DemoSideSheet2Component);
