import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTextField extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <md-form
                    @onFormNativeFormdata="${console.log}"
                    @onFormNativeReset="${console.log}"
                    @onFormNativeSubmit="${console.log}"
                >
                    <div class="md-layout__grid">

                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text0" required prefix="Rp"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text1" required suffix="@gmail.com"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text2" required placeholder="Placeholder" text="Supporting text"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text3" required placeholder="Placeholder" counter="5/20"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text4" required .icons="${[{icon:'image'}]}"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text5" required .actions="${[{icon:'image'}]}"></md-text-field>
                        </div>

                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text6" required label="Text Field" prefix="Rp"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text7" required label="Text Field" suffix="@gmail.com"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text8" required placeholder="Placeholder" label="Text Field" text="Supporting text"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text9" required placeholder="Placeholder" label="Text Field" counter="5/20"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text10" required label="Text Field" .icons="${[{icon:'image'}]}"></md-text-field>
                        </div>
                        <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                            <md-text-field name="text11" required label="Text Field" .actions="${[{icon:'image'}]}"></md-text-field>
                        </div>

                        <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                            <md-button variant="filled-tonal" type="reset" label="Reset"></md-button>
                            <md-button variant="filled-tonal" type="submit" label="Submit"></md-button>
                        </div>
                    </div>
                </md-form>
            </div>
        `;
    }
}
customElements.define("demo-text-field", DemoTextField);
export default document.createElement("demo-text-field");
