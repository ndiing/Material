import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoSheet2Component extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-sheet
                    id="north"
                    region="north"
                    label="North"
                    trailingIconButtons='["close"]'
                    @onSheetIconButtonClick="${() => north.toggle()}"
                    variant="modal"
                    style=""
                    >body</md-sheet
                >
                <md-sheet
                    id="east"
                    region="east"
                    label="East"
                    trailingIconButtons='["close"]'
                    @onSheetIconButtonClick="${() => east.toggle()}"
                    variant="modal"
                    style="width:256px;"
                    >body</md-sheet
                >
                <md-sheet
                    id="south"
                    region="south"
                    label="South"
                    trailingIconButtons='["close"]'
                    @onSheetIconButtonClick="${() => south.toggle()}"
                    variant="modal"
                    style=""
                    >body</md-sheet
                >
                <md-sheet
                    id="west"
                    region="west"
                    label="West"
                    trailingIconButtons='["close"]'
                    @onSheetIconButtonClick="${() => west.toggle()}"
                    variant="modal"
                    style="width:360px;"
                    >body</md-sheet
                >
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <md-button
                        variant="filled-tonal"
                        label="Toggle North"
                        @click="${() => north.toggle()}"
                    ></md-button>
                    <md-button
                        variant="filled-tonal"
                        label="Toggle East"
                        @click="${() => east.toggle()}"
                    ></md-button>
                    <md-button
                        variant="filled-tonal"
                        label="Toggle South"
                        @click="${() => south.toggle()}"
                    ></md-button>
                    <md-button
                        variant="filled-tonal"
                        label="Toggle West"
                        @click="${() => west.toggle()}"
                    ></md-button>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-sheet2", DemoSheet2Component);

export default document.createElement("demo-sheet2", DemoSheet2Component);
