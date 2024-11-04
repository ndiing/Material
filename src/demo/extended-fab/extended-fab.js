import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoExtendedFabComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-fab
                        variant="extended"
                        label="Label"
                    ></md-fab>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-fab
                        variant="extended"
                        label="Label"
                        icon="add"
                    ></md-fab>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-extended-fab", DemoExtendedFabComponent);

export default document.createElement("demo-extended-fab", DemoExtendedFabComponent);
