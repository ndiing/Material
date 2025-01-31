import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoDatetimePicker extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-datetime-picker id="datetimePicker1"></md-datetime-picker>
                        <md-button
                            id="button1"
                            variant="filled-tonal"
                            label="Toggle Datetime Picker"
                            @click="${() => datetimePicker1.toggle({ trigger: button1 })}"
                        ></md-button>
                    </div>

                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-datetime-picker
                            modal
                            id="datetimePicker2"
                        ></md-datetime-picker>
                        <md-button
                            id="button2"
                            variant="filled-tonal"
                            label="Toggle Datetime Picker"
                            @click="${() => datetimePicker2.toggle({ trigger: button2 })}"
                        ></md-button>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-datetime-picker", DemoDatetimePicker);
export default document.createElement("demo-datetime-picker");
