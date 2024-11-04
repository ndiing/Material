import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoSheetComponent extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-sheet
                    id="north"
                    region="north"
                    label="North"
                    trailingIconButtons='["close"]'
                    @onSheetIconButtonClick="${() => north.toggle()}"
                    style=""
                    >body</md-sheet
                >
                <md-sheet
                    id="east"
                    region="east"
                    label="East"
                    trailingIconButtons='["close"]'
                    @onSheetIconButtonClick="${() => east.toggle()}"
                    style="width:256px;"
                    >body</md-sheet
                >
                <md-sheet
                    id="south"
                    region="south"
                    label="South"
                    trailingIconButtons='["close"]'
                    @onSheetIconButtonClick="${() => south.toggle()}"
                    style=""
                    >body</md-sheet
                >
                <md-sheet
                    id="west"
                    region="west"
                    label="West"
                    trailingIconButtons='["close"]'
                    @onSheetIconButtonClick="${() => west.toggle()}"
                    style="width:360px;"
                    >body</md-sheet
                >
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <div class="md-grid">
                        <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="Toggle North"
                                @click="${() => north.toggle()}"
                            ></md-button>
                        </div>
                        <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="Toggle East"
                                @click="${() => east.toggle()}"
                            ></md-button>
                        </div>
                        <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="Toggle South"
                                @click="${() => south.toggle()}"
                            ></md-button>
                        </div>
                        <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="Toggle West"
                                @click="${() => west.toggle()}"
                            ></md-button>
                        </div>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-sheet", DemoSheetComponent);

export default document.createElement("demo-sheet", DemoSheetComponent);
