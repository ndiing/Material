import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoNavigationDrawer extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout__border">
                <md-navigation-drawer
                    open
                    id="navigationDrawer1"
                    .items="${[
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 1 },
                        { icon: "image", label: "Item 4", badge: 1000 },
                    ]}"
                ></md-navigation-drawer>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button variant="filled-tonal" label="Toggle Navigation Drawer" @click="${() => navigationDrawer1.toggle()}"></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}
customElements.define("demo-navigation-drawer", DemoNavigationDrawer);
export default document.createElement("demo-navigation-drawer");
