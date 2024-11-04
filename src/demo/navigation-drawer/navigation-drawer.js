import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoNavigationDrawerComponent extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-navigation-drawer
                    id="navigationDrawer"
                    @onNavigationDrawerIconButtonClick="${() => navigationDrawer.toggle()}"
                    .items="${[
                        //
                        { icon: "image", label: "Label 1", selected: true, badge: "" },
                        { icon: "image", label: "Label 2", badge: "3" },
                        { icon: "image", label: "Label 3", badge: "10" },
                        { icon: "image", label: "Label 4", badge: "9999" },
                    ]}"
                ></md-navigation-drawer>
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Navigation Drawer"
                        @click="${() => navigationDrawer.toggle()}"
                    ></md-button>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-navigation-drawer", DemoNavigationDrawerComponent);

export default document.createElement("demo-navigation-drawer", DemoNavigationDrawerComponent);
