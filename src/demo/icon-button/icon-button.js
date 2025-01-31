import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoIconButton extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            variant="filled"
                            icon="image"
                        ></md-icon-button>
                        <md-icon-button
                            variant="filled"
                            icon="image"
                            toggle
                        ></md-icon-button>
                        <md-icon-button
                            variant="filled"
                            icon="image"
                            toggle
                            selected
                        ></md-icon-button>
                        <md-icon-button
                            variant="filled"
                            icon="image"
                            disabled
                        ></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            variant="filled-tonal"
                            icon="image"
                        ></md-icon-button>
                        <md-icon-button
                            variant="filled-tonal"
                            icon="image"
                            toggle
                        ></md-icon-button>
                        <md-icon-button
                            variant="filled-tonal"
                            icon="image"
                            toggle
                            selected
                        ></md-icon-button>
                        <md-icon-button
                            variant="filled-tonal"
                            icon="image"
                            disabled
                        ></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button
                            variant="outlined"
                            icon="image"
                        ></md-icon-button>
                        <md-icon-button
                            variant="outlined"
                            icon="image"
                            toggle
                        ></md-icon-button>
                        <md-icon-button
                            variant="outlined"
                            icon="image"
                            toggle
                            selected
                        ></md-icon-button>
                        <md-icon-button
                            variant="outlined"
                            icon="image"
                            disabled
                        ></md-icon-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-icon-button icon="image"></md-icon-button>
                        <md-icon-button
                            icon="image"
                            toggle
                        ></md-icon-button>
                        <md-icon-button
                            icon="image"
                            toggle
                            selected
                        ></md-icon-button>
                        <md-icon-button
                            icon="image"
                            disabled
                        ></md-icon-button>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-icon-button", DemoIconButton);
export default document.createElement("demo-icon-button");
