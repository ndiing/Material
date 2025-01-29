import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoFab extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab icon="image"></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            size="small"
                            icon="image"
                        ></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            size="large"
                            icon="image"
                        ></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            type="extended"
                            icon="image"
                            label="Label"
                        ></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            type="extended"
                            label="Label"
                        ></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            variant="unelevated"
                            icon="image"
                        ></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            variant="unelevated"
                            size="small"
                            icon="image"
                        ></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            variant="unelevated"
                            size="large"
                            icon="image"
                        ></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            variant="unelevated"
                            type="extended"
                            icon="image"
                            label="Label"
                        ></md-fab>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-fab
                            variant="unelevated"
                            type="extended"
                            label="Label"
                        ></md-fab>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-fab", DemoFab);
export default document.createElement("demo-fab");
