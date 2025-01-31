import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoNavigationBar extends MdComponent {
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
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 1 },
                        { icon: "image", label: "Item 4", badge: 1000 },
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
customElements.define("demo-navigation-bar", DemoNavigationBar);
export default document.createElement("demo-navigation-bar");
