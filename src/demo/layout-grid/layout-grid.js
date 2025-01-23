import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoLayoutGrid extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">4</div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">4</div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">4</div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-layout-grid", DemoLayoutGrid);

export default document.createElement("demo-layout-grid");
