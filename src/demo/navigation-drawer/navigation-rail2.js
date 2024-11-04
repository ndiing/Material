import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoNavigationRail2Component extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-navigation-rail
                    id="navigationRail"
                    @onNavigationRailIconButtonClick="${() => navigationRail.toggle()}"
                    .items="${[
                        //
                        { icon: "image", selected: true, badge: "" },
                        { icon: "image", badge: "3" },
                        { icon: "image", badge: "10" },
                        { icon: "image", badge: "9999" },
                    ]}"
                ></md-navigation-rail>
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Navigation Rail"
                        @click="${() => navigationRail.toggle()}"
                    ></md-button>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-navigation-rail2", DemoNavigationRail2Component);

export default document.createElement("demo-navigation-rail2", DemoNavigationRail2Component);
