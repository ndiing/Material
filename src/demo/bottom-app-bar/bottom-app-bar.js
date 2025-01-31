import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoBottomAppBar extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-bottom-app-bar
                    id="bottomAppBar1"
                    open
                    .actions="${[{ icon: "image" }, { icon: "image" }, { icon: "image" }, { icon: "image" }]}"
                    .fab="${"image"}"
                ></md-bottom-app-bar>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Bottom App Bar"
                            @click="${() => bottomAppBar1.toggle()}"
                        ></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-bottom-app-bar", DemoBottomAppBar);
export default document.createElement("demo-bottom-app-bar");
