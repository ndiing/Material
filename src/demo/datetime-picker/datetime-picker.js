import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoDatetimepickerComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-datetime-picker
                        id="datetimePicker"
                        @onDatetimePickerButtonClick="${() => datetimePicker.close()}"
                        @pointerleave="${() => datetimePicker.close()}"
                    ></md-datetime-picker>
                    <md-button
                        id="button"
                        variant="filled-tonal"
                        label="Toggle Datetime Picker"
                        @click="${() => datetimePicker.show({ button })}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-datetime-picker", DemoDatetimepickerComponent);

export default document.createElement("demo-datetime-picker", DemoDatetimepickerComponent);
