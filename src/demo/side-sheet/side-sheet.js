import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoSideSheetComponent extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-side-sheet
                    id="sideSheet"
                    @onSideSheetIconButtonClick="${() => sideSheet.toggle()}"
                    label="Label"
                ></md-side-sheet>
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Side Sheet"
                        @click="${() => sideSheet.toggle()}"
                    ></md-button>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-side-sheet", DemoSideSheetComponent);

export default document.createElement("demo-side-sheet", DemoSideSheetComponent);
