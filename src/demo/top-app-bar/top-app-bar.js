import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTopAppBar extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-top-app-bar open id="topAppBar1" label="North" .leadingActions="${[{ icon: "image" }]}" .trailingActions="${[{ icon: "image" }, { icon: "image" }, { icon: "image" }]}"></md-top-app-bar>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button variant="filled-tonal" label="Toggle Top App Bar" @click="${() => topAppBar1.toggle()}"></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-top-app-bar", DemoTopAppBar);
export default document.createElement("demo-top-app-bar");
