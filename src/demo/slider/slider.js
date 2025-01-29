import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoSlider extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <br />
                        <br />
                        <br />
                        <md-slider
                            min="-50"
                            max="50"
                        ></md-slider>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <br />
                        <br />
                        <br />
                        <md-slider></md-slider>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <br />
                        <br />
                        <br />
                        <md-slider step="10"></md-slider>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <br />
                        <br />
                        <br />
                        <md-slider value="[25,75]"></md-slider>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <br />
                        <br />
                        <br />
                        <md-slider
                            min="-5000"
                            max="5000"
                        ></md-slider>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <br />
                        <br />
                        <br />
                        <md-slider max="10000"></md-slider>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <br />
                        <br />
                        <br />
                        <md-slider
                            step="1000"
                            max="10000"
                        ></md-slider>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <br />
                        <br />
                        <br />
                        <md-slider
                            value="[2500,7500]"
                            max="10000"
                        ></md-slider>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-slider", DemoSlider);
export default document.createElement("demo-slider");
