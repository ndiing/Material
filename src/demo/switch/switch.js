import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoSwitchComponent extends MdComponent {
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
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <md-switch name="switch"></md-switch>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <md-switch
                                    name="switch"
                                    checked
                                ></md-switch>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <md-switch
                                    .icons="${["close", "check"]}"
                                    name="switch"
                                ></md-switch>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                                <md-switch
                                    .icons="${["close", "check"]}"
                                    name="switch"
                                    checked
                                ></md-switch>
                            </div>
                            <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
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

customElements.define("demo-switch", DemoSwitchComponent);

export default document.createElement("demo-switch", DemoSwitchComponent);
