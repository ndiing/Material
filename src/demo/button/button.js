import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoButtonComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-button
                        variant="elevated"
                        label="Elevated button"
                    ></md-button>
                    <md-button
                        variant="elevated"
                        label="Elevated button"
                        icon="add"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-button
                        variant="filled"
                        label="Filled button"
                    ></md-button>
                    <md-button
                        variant="filled"
                        label="Filled button"
                        icon="add"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-button
                        variant="filled-tonal"
                        label="Filled filled-tonal button"
                    ></md-button>
                    <md-button
                        variant="filled-tonal"
                        label="Filled filled-tonal button"
                        icon="add"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-button
                        variant="outlined"
                        label="Outlined button"
                    ></md-button>
                    <md-button
                        variant="outlined"
                        label="Outlined button"
                        icon="add"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-button label="Text button"></md-button>
                    <md-button
                        label="Text button"
                        icon="add"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-button", DemoButtonComponent);

export default document.createElement("demo-button", DemoButtonComponent);
