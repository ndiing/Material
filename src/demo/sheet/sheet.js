import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSheet extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-sheet
                    style="height:80px;"
                    id="sheet1"
                    region="north"
                    label="North"
                ></md-sheet>
                <md-sheet
                    style="width:256px;"
                    id="sheet2"
                    region="east"
                    label="East"
                ></md-sheet>
                <md-sheet
                    style="height:80px;"
                    id="sheet3"
                    region="south"
                    label="South"
                ></md-sheet>
                <md-sheet
                    style="width:256px;"
                    id="sheet4"
                    region="west"
                    label="West"
                ></md-sheet>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Sheet North"
                            @click="${() => sheet1.toggle()}"
                        ></md-button>
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Sheet East"
                            @click="${() => sheet2.toggle()}"
                        ></md-button>
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Sheet South"
                            @click="${() => sheet3.toggle()}"
                        ></md-button>
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Sheet West"
                            @click="${() => sheet4.toggle()}"
                        ></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-sheet", DemoSheet);
export default document.createElement("demo-sheet");
