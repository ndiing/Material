import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoDialog extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-dialog id="dialog1" label="Label" .buttons="${[{ component: "spacer" }, { label: "Label" }, { label: "Label" }]}" @onDialogButtonClick="${() => dialog1.toggle()}"> body </md-dialog>
                        <md-button variant="filled-tonal" label="Toggle Dialog" @click="${() => dialog1.toggle()}"></md-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-dialog", DemoDialog);

export default document.createElement("demo-dialog");
