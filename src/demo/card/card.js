import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @class DemoCard
 * @extends MdComponent
 */
class DemoCard extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card> body </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card label="Label"> body </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card
                            label="Label"
                            sublabel="Sublabel"
                        >
                            body
                        </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card .icons="${[{ icon: "image" }]}"> body </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card
                            label="Label"
                            .icons="${[{ icon: "image" }]}"
                        >
                            body
                        </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card
                            label="Label"
                            sublabel="Sublabel"
                            .icons="${[{ icon: "image" }]}"
                        >
                            body
                        </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card
                            .icons="${[{ icon: "image" }]}"
                            .actions="${[{ icon: "image" }, { icon: "image" }]}"
                        >
                            body
                        </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card
                            label="Label"
                            .icons="${[{ icon: "image" }]}"
                            .actions="${[{ icon: "image" }, { icon: "image" }]}"
                        >
                            body
                        </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card
                            label="Label"
                            sublabel="Sublabel"
                            .icons="${[{ icon: "image" }]}"
                            .actions="${[{ icon: "image" }, { icon: "image" }]}"
                        >
                            body
                        </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card
                            .icons="${[{ icon: "image" }]}"
                            .actions="${[{ icon: "image" }, { icon: "image" }]}"
                            .buttons="${[{ component: "spacer" }, { label: "Label" }, { label: "Label" }]}"
                        >
                            body
                        </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card
                            label="Label"
                            .icons="${[{ icon: "image" }]}"
                            .actions="${[{ icon: "image" }, { icon: "image" }]}"
                            .buttons="${[{ component: "spacer" }, { label: "Label" }, { label: "Label" }]}"
                        >
                            body
                        </md-card>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-card
                            label="Label"
                            sublabel="Sublabel"
                            .icons="${[{ icon: "image" }]}"
                            .actions="${[{ icon: "image" }, { icon: "image" }]}"
                            .buttons="${[{ component: "spacer" }, { label: "Label" }, { label: "Label" }]}"
                        >
                            body
                        </md-card>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-card", DemoCard);
export default document.createElement("demo-card");
