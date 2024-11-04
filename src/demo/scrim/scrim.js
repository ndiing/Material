import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoScrimComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-scrim
                        id="scrim"
                        @onScrimClick="${() => scrim.close()}"
                    ></md-scrim>
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Scrim"
                        @click="${() => scrim.toggle()}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-scrim", DemoScrimComponent);

export default document.createElement("demo-scrim", DemoScrimComponent);
