import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoDialogComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-dialog
                        style="width:340px;"
                        id="dialog"
                        leadingIconButton="image"
                        label="Lorem ipsum dolor"
                        buttons='["Label","Label"]'
                        @onDialogButtonClick="${() => dialog.toggle()}"
                    >
                        Lorem ipsum dolor sit. Tenetur quasi officiis deserunt. In, excepturi quos. Ducimus!
                    </md-dialog>
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Dialog"
                        @click="${() => dialog.toggle()}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-dialog
                        style="width:340px;"
                        id="dialog2"
                        label="Lorem ipsum dolor"
                        buttons='["Label","Label"]'
                        @onDialogButtonClick="${() => dialog2.toggle()}"
                    >
                        Lorem ipsum dolor sit. Tenetur quasi officiis deserunt. In, excepturi quos. Ducimus!
                    </md-dialog>
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Dialog"
                        @click="${() => dialog2.toggle()}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-dialog
                        id="dialog3"
                        leadingIconButton="image"
                        label="Lorem ipsum dolor"
                        buttons='["Label","Label"]'
                        variant="full-screen"
                        @onDialogButtonClick="${() => dialog3.toggle()}"
                    >
                        Lorem ipsum dolor sit. Tenetur quasi officiis deserunt. In, excepturi quos. Ducimus!
                    </md-dialog>
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Dialog"
                        @click="${() => dialog3.toggle()}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-dialog", DemoDialogComponent);

export default document.createElement("demo-dialog", DemoDialogComponent);
