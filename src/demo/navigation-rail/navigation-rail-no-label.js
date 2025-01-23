import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoNavigationRailNoLabel extends MdComponent {
    render() {
        return html`
            <div class="md-layout__border">
                <md-navigation-rail
                    id="navigationRail1"
                    open
                    .items="${[
                        { icon: "image", selected: true },
                        { icon: "image", badge: 0 },
                        { icon: "image", badge: 1 },
                        { icon: "image", badge: 1000 },
                    ]}"
                ></md-navigation-rail>
                <md-sheet region="center">
                    <div class="md-layout">
                        <md-button variant="filled-tonal" label="Toggle Navigation Rail" @click="${() => navigationRail1.toggle()}"></md-button>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-navigation-rail-no-label", DemoNavigationRailNoLabel);

export default document.createElement("demo-navigation-rail-no-label");
