import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoNavigationBar2Component extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-navigation-bar
                    id="navigationBar"
                    @onNavigationBarIconButtonClick="${() => navigationBar.toggle()}"
                    .items="${[
                        //
                        { icon: "image", selected: true, badge: "" },
                        { icon: "image", badge: "3" },
                        { icon: "image", badge: "10" },
                        { icon: "image", badge: "9999" },
                    ]}"
                ></md-navigation-bar>
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Navigation Bar"
                        @click="${() => navigationBar.toggle()}"
                    ></md-button>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-navigation-bar2", DemoNavigationBar2Component);

export default document.createElement("demo-navigation-bar2", DemoNavigationBar2Component);
