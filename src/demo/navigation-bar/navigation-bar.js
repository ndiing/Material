import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoNavigationBarComponent extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-navigation-bar
                    id="navigationBar"
                    @onNavigationBarIconButtonClick="${() => navigationBar.toggle()}"
                    .items="${[
                        //
                        { icon: "image", label: "Label 1", selected: true, badge: "" },
                        { icon: "image", label: "Label 2", badge: "3" },
                        { icon: "image", label: "Label 3", badge: "10" },
                        { icon: "image", label: "Label 4", badge: "9999" },
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

customElements.define("demo-navigation-bar", DemoNavigationBarComponent);

export default document.createElement("demo-navigation-bar", DemoNavigationBarComponent);
