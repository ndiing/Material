import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoButton extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="elevated" label="Label"></md-button>
                        <md-button variant="elevated" icon="image" label="Label"></md-button>
                        <md-button variant="elevated" disabled label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="filled" label="Label"></md-button>
                        <md-button variant="filled" icon="image" label="Label"></md-button>
                        <md-button variant="filled" disabled label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="filled-tonal" label="Label"></md-button>
                        <md-button variant="filled-tonal" icon="image" label="Label"></md-button>
                        <md-button variant="filled-tonal" disabled label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button variant="outlined" label="Label"></md-button>
                        <md-button variant="outlined" icon="image" label="Label"></md-button>
                        <md-button variant="outlined" disabled label="Label"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-button label="Label"></md-button>
                        <md-button icon="image" label="Label"></md-button>
                        <md-button disabled label="Label"></md-button>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-button", DemoButton);
export default document.createElement("demo-button");
