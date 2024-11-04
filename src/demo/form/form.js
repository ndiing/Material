import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoFormComponent extends MdComponent {
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
                            <!-- <div 
class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
<label>hidden</label>
<input type="hidden" name="hidden" value="hidden">
</div> -->
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>text</label>
                                <input
                                    type="text"
                                    name="text"
                                    value="text"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value="password"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value="ndiing.inc@gmail.com"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>tel</label>
                                <input
                                    type="tel"
                                    name="tel"
                                    value="+6281935155404"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>url</label>
                                <input
                                    type="url"
                                    name="url"
                                    value="http://www.google.com"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>search</label>
                                <input
                                    type="search"
                                    name="search"
                                    value="search"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>number</label>
                                <input
                                    type="number"
                                    name="number"
                                    value="123456789"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>date</label>
                                <input
                                    type="date"
                                    name="date"
                                    value="1990-10-17"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>datetime</label>
                                <input
                                    type="datetime-local"
                                    name="datetime"
                                    value="1990-10-17T03:00:00"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>month</label>
                                <input
                                    type="month"
                                    name="month"
                                    value="1990-10"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>time</label>
                                <input
                                    type="time"
                                    name="time"
                                    value="03:00"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>week</label>
                                <input
                                    type="week"
                                    name="week"
                                    value="1990-W42"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>checkbox</label>
                                <!-- <input type="checkbox" name="checkbox" value="1" checked> -->
                                <md-checkbox
                                    name="checkbox"
                                    value="1"
                                    checked
                                ></md-checkbox>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>checkbox</label>
                                <!-- <input type="checkbox" name="checkbox" value="2"> -->
                                <md-checkbox
                                    name="checkbox"
                                    value="2"
                                ></md-checkbox>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>radio</label>
                                <!-- <input type="radio" name="radio" value="1" checked> -->
                                <md-radio-button
                                    name="radio"
                                    value="1"
                                    checked
                                ></md-radio-button>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>radio</label>
                                <!-- <input type="radio" name="radio" value="2"> -->
                                <md-radio-button
                                    name="radio"
                                    value="2"
                                ></md-radio-button>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>switch</label>
                                <md-switch
                                    name="switch"
                                    value="1"
                                    checked
                                ></md-switch>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>switch</label>
                                <md-switch
                                    name="switch"
                                    value="2"
                                ></md-switch>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>color</label>
                                <input
                                    type="color"
                                    name="color"
                                    value="#112233"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>file</label>
                                <input
                                    type="file"
                                    name="file"
                                    value="file"
                                />
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>range</label>
                                <!-- <input type="range" name="range" value="range"> -->
                                <md-slider name="range"></md-slider>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>select</label>
                                <select name="select0">
                                    <option
                                        value="1"
                                        label="Option 1"
                                        selected
                                    ></option>
                                    <option
                                        value="2"
                                        label="Option 2"
                                    ></option>
                                    <option
                                        value="3"
                                        label="Option 3"
                                    ></option>
                                </select>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>select</label>
                                <select
                                    name="select1"
                                    multiple
                                >
                                    <option
                                        value="1"
                                        label="Option 1"
                                        selected
                                    ></option>
                                    <option
                                        value="2"
                                        label="Option 2"
                                        selected
                                    ></option>
                                    <option
                                        value="3"
                                        label="Option 3"
                                    ></option>
                                </select>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>select</label>
                                <select name="select2">
                                    <optgroup label="Group 1">
                                        <option
                                            value="1"
                                            label="Option 1"
                                            selected
                                        ></option>
                                        <option
                                            value="2"
                                            label="Option 2"
                                        ></option>
                                        <option
                                            value="3"
                                            label="Option 3"
                                        ></option>
                                    </optgroup>
                                    <optgroup label="Group 2">
                                        <option
                                            value="a"
                                            label="Option A"
                                        ></option>
                                        <option
                                            value="b"
                                            label="Option B"
                                        ></option>
                                        <option
                                            value="c"
                                            label="Option C"
                                        ></option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>select</label>
                                <select
                                    name="select3"
                                    multiple
                                >
                                    <optgroup label="Group 1">
                                        <option
                                            value="1"
                                            label="Option 1"
                                            selected
                                        ></option>
                                        <option
                                            value="2"
                                            label="Option 2"
                                        ></option>
                                        <option
                                            value="3"
                                            label="Option 3"
                                        ></option>
                                    </optgroup>
                                    <optgroup label="Group 2">
                                        <option
                                            value="a"
                                            label="Option A"
                                            selected
                                        ></option>
                                        <option
                                            value="b"
                                            label="Option B"
                                        ></option>
                                        <option
                                            value="c"
                                            label="Option C"
                                        ></option>
                                    </optgroup>
                                </select>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <label>textarea</label>
                                <textarea name="textarea">textarea</textarea>
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
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-form", DemoFormComponent);

export default document.createElement("demo-form", DemoFormComponent);
