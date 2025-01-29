import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSnackbar extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-snackbar
                            id="snackbar1"
                            label="Label"
                            @onSnackbarButtonClick="${() => snackbar1.close()}"
                        >
                            Single-line snackbar
                        </md-snackbar>
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar1.show()}"
                        ></md-button>
                    </div>

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-snackbar
                            id="snackbar2"
                            label="Label"
                            @onSnackbarButtonClick="${() => snackbar2.close()}"
                            .buttons="${[{ component: "spacer" }, { label: "Action" }]}"
                        >
                            Single-line snackbar with action
                        </md-snackbar>
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar2.show()}"
                        ></md-button>
                    </div>

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-snackbar
                            id="snackbar3"
                            label="Label"
                            @onSnackbarButtonClick="${() => snackbar3.close()}"
                        >
                            Two-line snackbar
                            <br />without action
                        </md-snackbar>
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar3.show()}"
                        ></md-button>
                    </div>

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-snackbar
                            id="snackbar4"
                            label="Label"
                            @onSnackbarButtonClick="${() => snackbar4.close()}"
                            .buttons="${[{ component: "spacer" }, { label: "Action" }]}"
                        >
                            Two-line snackbar
                            <br />with action
                        </md-snackbar>
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar4.show()}"
                        ></md-button>
                    </div>

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-snackbar
                            id="snackbar0"
                            label="Label"
                            @onSnackbarButtonClick="${() => snackbar0.close()}"
                            .buttons="${[{ component: "spacer" }, { label: "Longer action" }]}"
                        >
                            Two-line snackbar
                            <br />with longer action
                        </md-snackbar>
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Snackbar"
                            @click="${() => snackbar0.show()}"
                        ></md-button>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-snackbar", DemoSnackbar);
export default document.createElement("demo-snackbar");
