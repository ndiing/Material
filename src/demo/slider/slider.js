import { html } from "lit";
import { MdComponent } from "../../components/component/component";
const format = (value) => new Intl.NumberFormat("id", { currency: "IDR", style: "currency" }).format(value);

class DemoSliderComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-form
                        @onFormReset="${console.log}"
                        @onFormSubmit="${console.log}"
                        @onFormData="${(event) => console.log(event.detail.event.body)}"
                    >
                        <div class="md-grid">
                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                                <md-slider
                                    name="slider0"
                                    min="-50"
                                    max="50"
                                    value="0"
                                ></md-slider>
                            </div>
                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                                <md-slider
                                    name="slider1"
                                    value="50"
                                ></md-slider>
                            </div>
                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                                <md-slider
                                    name="slider2"
                                    step="10"
                                    value="50"
                                ></md-slider>
                            </div>
                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                                <md-slider
                                    name="slider3"
                                    value="[25,75]"
                                ></md-slider>
                            </div>
                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                                <md-slider
                                    .format="${format}"
                                    name="slider4"
                                    min="-1000000"
                                    max="1000000"
                                    value="0"
                                ></md-slider>
                            </div>
                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                                <md-slider
                                    .format="${format}"
                                    name="slider5"
                                    max="1000000"
                                    value="500000"
                                ></md-slider>
                            </div>
                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                                <md-slider
                                    .format="${format}"
                                    name="slider6"
                                    max="1000000"
                                    step="100000"
                                    value="500000"
                                ></md-slider>
                            </div>
                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                                <md-slider
                                    .format="${format}"
                                    name="slider7"
                                    max="1000000"
                                    value="[250000,750000]"
                                ></md-slider>
                            </div>
                            <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                                <md-button
                                    variant="filled-tonal"
                                    label="Reset"
                                    type="reset"
                                ></md-button>
                                <md-button
                                    variant="filled"
                                    label="Submit"
                                    type="submit"
                                ></md-button>
                            </div>
                        </div>
                    </md-form>
                </div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-slider", DemoSliderComponent);

export default document.createElement("demo-slider", DemoSliderComponent);
