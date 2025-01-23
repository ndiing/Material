import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoSheetModal extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <md-sheet style="height:80px;" id="sheet1" modal region="north" label="North"></md-sheet>
                <md-sheet style="width:256px;" id="sheet2" modal region="east" label="East"></md-sheet>
                <md-sheet style="height:80px;" id="sheet3" modal region="south" label="South"></md-sheet>
                <md-sheet style="width:256px;" id="sheet4" modal region="west" label="West"></md-sheet>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button variant="filled-tonal" label="Toggle Sheet Modal North" @click="${() => sheet1.toggle()}"></md-button>
                        <md-button variant="filled-tonal" label="Toggle Sheet Modal East" @click="${() => sheet2.toggle()}"></md-button>
                        <md-button variant="filled-tonal" label="Toggle Sheet Modal South" @click="${() => sheet3.toggle()}"></md-button>
                        <md-button variant="filled-tonal" label="Toggle Sheet Modal West" @click="${() => sheet4.toggle()}"></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-sheet-modal", DemoSheetModal);

export default document.createElement("demo-sheet-modal");
