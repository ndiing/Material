import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoIconButtonComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        variant="filled"
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        variant="filled-tonal"
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        variant="outlined"
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button icon="add"></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        toggle
                        variant="filled"
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        toggle
                        variant="filled-tonal"
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        toggle
                        variant="outlined"
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        toggle
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        toggle
                        selected
                        variant="filled"
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        toggle
                        selected
                        variant="filled-tonal"
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        toggle
                        selected
                        variant="outlined"
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-icon-button
                        toggle
                        selected
                        icon="add"
                    ></md-icon-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-icon-button", DemoIconButtonComponent);

export default document.createElement("demo-icon-button", DemoIconButtonComponent);
