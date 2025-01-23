import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoNavigationDrawerNoIcon extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <md-navigation-drawer
                    open
                    id="navigationDrawer1"
                    .items="${[
                        { label: "Item 1", selected: true },
                        { label: "Item 2", badge: 0 },
                        { label: "Item 3", badge: 1 },
                        { label: "Item 4", badge: 1000 },
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

customElements.define("demo-navigation-drawer-no-icon", DemoNavigationDrawerNoIcon);

export default document.createElement("demo-navigation-drawer-no-icon");
