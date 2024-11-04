import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoCardComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-card
                        leadingIconButton="image"
                        label="Label"
                        subLabel="Lorem ipsum"
                        trailingIconButtons='["image","image","more_vert"]'
                        buttons='["Label","Label"]'
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi?</md-card
                    >
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-card
                        leadingIconButton="image"
                        label="Label"
                        trailingIconButtons='["image","image","more_vert"]'
                        buttons='["Label","Label"]'
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi?</md-card
                    >
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-card
                        leadingIconButton="image"
                        label="Label"
                        trailingIconButtons='["image","image","more_vert"]'
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi?</md-card
                    >
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-card
                        leadingIconButton="image"
                        label="Label"
                        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi?</md-card
                    >
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-card label="Label">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi?</md-card>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-card>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, sequi?</md-card>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-card", DemoCardComponent);

export default document.createElement("demo-card", DemoCardComponent);
