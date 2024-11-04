import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoNavigationRailComponent extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-navigation-rail
                    id="navigationRail"
                    @onNavigationRailIconButtonClick="${() => navigationRail.toggle()}"
                    .items="${[
                        //
                        { icon: "image", label: "Label 1", selected: true, badge: "" },
                        { icon: "image", label: "Label 2", badge: "3" },
                        { icon: "image", label: "Label 3", badge: "10" },
                        { icon: "image", label: "Label 4", badge: "9999" },
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

customElements.define("demo-navigation-rail", DemoNavigationRailComponent);

export default document.createElement("demo-navigation-rail", DemoNavigationRailComponent);
