import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoFabComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-fab
                        size="small"
                        icon="add"
                    ></md-fab>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-fab icon="add"></md-fab>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-fab
                        size="large"
                        icon="add"
                    ></md-fab>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-fab
                        color="surface"
                        icon="add"
                    ></md-fab>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-fab
                        color="secondary"
                        icon="add"
                    ></md-fab>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-fab
                        color="tertiary"
                        icon="add"
                    ></md-fab>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-fab", DemoFabComponent);

export default document.createElement("demo-fab", DemoFabComponent);
