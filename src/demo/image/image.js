import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoImageComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image src="https://placehold.co/64x64"></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image
                        variant="circular"
                        src="https://placehold.co/64x64"
                    ></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image
                        variant="circular"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image
                        variant="circular"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image
                        ratio="16/9"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="3/2"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="4/3"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="1/1"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="3/4"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="2/3"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image
                        ratio="16/9"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="3/2"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="4/3"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="1/1"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="3/4"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        ratio="2/3"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image
                        variant="circular"
                        ratio="16/9"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="3/2"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="4/3"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="1/1"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="3/4"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="2/3"
                        style="width:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4">
                    <md-image
                        variant="circular"
                        ratio="16/9"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="3/2"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="4/3"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="1/1"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="3/4"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                    <md-image
                        variant="circular"
                        ratio="2/3"
                        style="height:64px;"
                        src="https://placehold.co/64x64"
                    ></md-image>
                </div>

                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded12 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-image", DemoImageComponent);

export default document.createElement("demo-image", DemoImageComponent);
