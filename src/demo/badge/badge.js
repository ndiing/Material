import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoBadgeComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-badge></md-badge>
                    <md-badge label="3"></md-badge>
                    <md-badge label="10"></md-badge>
                    <md-badge label="9999"></md-badge>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-badge", DemoBadgeComponent);

export default document.createElement("demo-badge", DemoBadgeComponent);
