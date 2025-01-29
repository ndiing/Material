import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoForm extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-form>
                            <div class="md-layout__grid">
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                    /><br />
                                    <input
                                        type="color"
                                        name="color"
                                    /><br />
                                    <input
                                        type="date"
                                        name="date"
                                    /><br />
                                    <input
                                        type="datetime-local"
                                        name="datetime-local"
                                    /><br />
                                    <input
                                        type="email"
                                        name="email"
                                    /><br />
                                    <input
                                        type="file"
                                        name="file"
                                    /><br />
                                    <input
                                        type="month"
                                        name="month"
                                    /><br />
                                    <input
                                        type="number"
                                        name="number"
                                    /><br />
                                    <input
                                        type="password"
                                        name="password"
                                    /><br />
                                    <input
                                        type="radio"
                                        name="radio"
                                    /><br />
                                    <input
                                        type="range"
                                        name="range"
                                    /><br />
                                    <input
                                        type="search"
                                        name="search"
                                    /><br />
                                    <input
                                        type="tel"
                                        name="tel"
                                    /><br />
                                    <input
                                        type="text"
                                        name="text"
                                    /><br />
                                    <input
                                        type="time"
                                        name="time"
                                    /><br />
                                    <input
                                        type="url"
                                        name="url"
                                    /><br />
                                    <input
                                        type="week"
                                        name="week"
                                    /><br />
                                    <textarea name="textarea"></textarea><br />
                                    <select name="select">
                                        <option
                                            value="1"
                                            label="One"
                                        ></option>
                                        <option
                                            value="2"
                                            label="Two"
                                        ></option>
                                        <option
                                            value="3"
                                            label="Three"
                                        ></option>
                                        <option
                                            value="4"
                                            label="Four"
                                        ></option></select
                                    ><br />
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
                    </div> -->

                    <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-form>
                            <div class="md-layout__grid">
                                <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                                    <input
                                        value="on"
                                        checked
                                        type="checkbox"
                                        name="checkbox"
                                    /><br />
                                    <input
                                        value="#000000"
                                        type="color"
                                        name="color"
                                    /><br />
                                    <input
                                        value="2025-01-29"
                                        type="date"
                                        name="date"
                                    /><br />
                                    <input
                                        value="2025-01-29T10:23"
                                        type="datetime-local"
                                        name="datetime-local"
                                    /><br />
                                    <input
                                        value="ndiing.inc@gmail.com"
                                        type="email"
                                        name="email"
                                    /><br />
                                    <input
                                        type="file"
                                        name="file"
                                    /><br />
                                    <input
                                        value="2025-06"
                                        type="month"
                                        name="month"
                                    /><br />
                                    <input
                                        value="123456789"
                                        type="number"
                                        name="number"
                                    /><br />
                                    <input
                                        value="secret"
                                        type="password"
                                        name="password"
                                    /><br />
                                    <input
                                        value="on"
                                        checked
                                        type="radio"
                                        name="radio"
                                    /><br />
                                    <input
                                        value="75"
                                        min="0"
                                        max="100"
                                        type="range"
                                        name="range"
                                    /><br />
                                    <input
                                        value="material"
                                        type="search"
                                        name="search"
                                    /><br />
                                    <input
                                        value="6281935155404"
                                        type="tel"
                                        name="tel"
                                    /><br />
                                    <input
                                        value="hello word"
                                        type="text"
                                        name="text"
                                    /><br />
                                    <input
                                        value="10:23"
                                        type="time"
                                        name="time"
                                    /><br />
                                    <input
                                        value="http://google.com"
                                        type="url"
                                        name="url"
                                    /><br />
                                    <input
                                        value="2025-W05"
                                        type="week"
                                        name="week"
                                    /><br />
                                    <textarea name="textarea">textarea</textarea><br />
                                    <select name="select">
                                        <option
                                            value="1"
                                            label="One"
                                        ></option>
                                        <option
                                            value="2"
                                            label="Two"
                                        ></option>
                                        <option
                                            value="3"
                                            label="Three"
                                            selected
                                        ></option>
                                        <option
                                            value="4"
                                            label="Four"
                                        ></option></select
                                    ><br />
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
                    </div> -->

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
