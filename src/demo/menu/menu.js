import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoMenuComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-menu
                        id="menu"
                        .items="${[
                            //
                            { icon: "image", label: "Label 1", selected: true, badge: "" },
                            { icon: "image", label: "Label 2", badge: "3" },
                            { icon: "image", label: "Label 3", badge: "10" },
                            { icon: "image", label: "Label 4", badge: "9999" },
                        ]}"
                        @onListItemClick="${(event) => {
                            button.label = event.detail.event.currentTarget.data.label;
                            menu.close();
                        }}"
                    ></md-menu>
                    <md-button
                        id="button"
                        variant="filled-tonal"
                        label="Toggle Menu"
                        @click="${() => menu.toggle({ button })}"
                    ></md-button>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-menu
                        id="menu2"
                        .items="${[
                            //
                            { label: "Label 1", selected: true, badge: "" },
                            { label: "Label 2", badge: "3" },
                            { label: "Label 3", badge: "10" },
                            { label: "Label 4", badge: "9999" },
                        ]}"
                        @onListItemClick="${(event) => {
                            button2.label = event.detail.event.currentTarget.data.label;
                            menu2.close();
                        }}"
                    ></md-menu>
                    <md-button
                        id="button2"
                        variant="filled-tonal"
                        label="Toggle Menu"
                        @click="${() => menu2.toggle({ button: button2 })}"
                    ></md-button>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <div style="height:3000px"></div>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-menu", DemoMenuComponent);

export default document.createElement("demo-menu", DemoMenuComponent);
