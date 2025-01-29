import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoNavigationBarNoLabel extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-navigation-bar
                    id="navigationBar1"
                    open
                    .items="${[
                        { icon: "image", selected: true },
                        { icon: "image", badge: 0 },
                        { icon: "image", badge: 1 },
                        { icon: "image", badge: 1000 },
                    ]}"
                ></md-navigation-bar>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Navigation Bar"
                            @click="${() => navigationBar1.toggle()}"
                        ></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-navigation-bar-no-label", DemoNavigationBarNoLabel);
export default document.createElement("demo-navigation-bar-no-label");
