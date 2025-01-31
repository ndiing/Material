import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @class DemoForm
 * @extends MdComponent
 */
class DemoForm extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-form
                            @onFormNativeFormdata="${console.log}"
                            @onFormNativeReset="${console.log}"
                            @onFormNativeSubmit="${console.log}"
                        >
                            <div class="md-layout__grid">
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-checkbox name="checkbox0"></md-checkbox>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-checkbox
                                        name="checkbox1"
                                        indeterminate
                                    ></md-checkbox>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-checkbox
                                        name="checkbox2"
                                        checked
                                    ></md-checkbox>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-radio-button
                                        name="radio-button"
                                        name="radio1"
                                    ></md-radio-button>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-radio-button
                                        name="radio-button"
                                        name="radio1"
                                        checked
                                    ></md-radio-button>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-switch name="switch0"></md-switch>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-switch
                                        name="switch1"
                                        checked
                                    ></md-switch>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-switch
                                        name="switch2"
                                        .icons="${["close", "check"]}"
                                    ></md-switch>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-switch
                                        name="switch3"
                                        .icons="${["close", "check"]}"
                                        checked
                                    ></md-switch>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-slider
                                        name="slider0"
                                        min="-50"
                                        max="50"
                                    ></md-slider>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-slider name="slider1"></md-slider>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-slider
                                        name="slider2"
                                        step="10"
                                    ></md-slider>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-slider
                                        name="slider3"
                                        value="[25,75]"
                                    ></md-slider>
                                </div>
                                <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4"><md-text-field variant="filled" label="Color" name="color" type="color"></md-text-field></div> -->
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Date"
                                        name="date"
                                        type="date"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Datetime Local"
                                        name="datetime-local"
                                        type="datetime-local"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Email"
                                        name="email"
                                        type="email"
                                    ></md-text-field>
                                </div>
                                <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4"><md-text-field variant="filled" label="File" name="file" type="file"></md-text-field></div> -->
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Month"
                                        name="month"
                                        type="month"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Number"
                                        name="number"
                                        type="number"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Password"
                                        name="password"
                                        type="password"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Search"
                                        name="search"
                                        type="search"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Tel"
                                        name="tel"
                                        type="tel"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Text"
                                        name="text"
                                        type="text"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Time"
                                        name="time"
                                        type="time"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="URL"
                                        name="url"
                                        type="url"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-text-field
                                        variant="filled"
                                        label="Week"
                                        name="week"
                                        type="week"
                                    ></md-text-field>
                                </div>
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <md-button
                                        variant="filled-tonal"
                                        type="submit"
                                        label="Submit"
                                    ></md-button>
                                    <md-button
                                        variant="filled-tonal"
                                        type="reset"
                                        label="Reset"
                                    ></md-button>
                                </div>
                            </div>
                        </md-form>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-form", DemoForm);
export default document.createElement("demo-form");
