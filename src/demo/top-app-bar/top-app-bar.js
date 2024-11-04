import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoTopAppBarComponent extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-top-app-bar
                    id="topAppBar"
                    .leadingActions="${["image"]}"
                    label="Label"
                    .trailingActions="${["image", "image", "image"]}"
                ></md-top-app-bar>

                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <div class="md-grid">
                        <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="Toggle Top App Bar"
                                @click="${() => topAppBar.toggle()}"
                            ></md-button>
                        </div>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-top-app-bar", DemoTopAppBarComponent);

export default document.createElement("demo-top-app-bar", DemoTopAppBarComponent);
