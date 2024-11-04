import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoSegmentedButtonComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-segmented-button
                        selection="single"
                        .items="${[{ label: "Label", selected: true }, { label: "Label" }, { label: "Label" }]}"
                    ></md-segmented-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-segmented-button
                        selection="multiple"
                        .items="${[{ label: "Label", selected: true }, { label: "Label", selected: true }, { label: "Label" }]}"
                    ></md-segmented-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-segmented-button", DemoSegmentedButtonComponent);

export default document.createElement("demo-segmented-button", DemoSegmentedButtonComponent);
