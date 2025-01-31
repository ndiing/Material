import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @class DemoScrim
 * @extends MdComponent
 */
class DemoScrim extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-scrim id="scrim1"></md-scrim>
                        <md-button
                            variant="filled-tonal"
                            label="Toggle Scrim"
                            @click="${() => scrim1.toggle()}"
                        ></md-button>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-scrim", DemoScrim);
export default document.createElement("demo-scrim");
