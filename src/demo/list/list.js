import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @extends MdComponent
 */
class DemoList extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                            ]}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                { trailingCheckbox: true, avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                            ]}"
                            type="multi-select"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                { image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                            ]}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { trailingCheckbox: true, image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                { trailingCheckbox: true, image: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                            ]}"
                            type="multi-select"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                { video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                            ]}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { trailingCheckbox: true, video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline", sublabel: "Supporting text" },
                                { trailingCheckbox: true, video: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", label: "Headline" },
                            ]}"
                            type="multi-select"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { icon: "image", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { icon: "image", label: "Headline", sublabel: "Supporting text" },
                                { icon: "image", label: "Headline" },
                            ]}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, icon: "image", label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { trailingCheckbox: true, icon: "image", label: "Headline", sublabel: "Supporting text" },
                                { trailingCheckbox: true, icon: "image", label: "Headline" },
                            ]}"
                            type="multi-select"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list .items="${[{ label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" }, { label: "Headline", sublabel: "Supporting text" }, { label: "Headline" }]}"></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingCheckbox: true, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { trailingCheckbox: true, label: "Headline", sublabel: "Supporting text" },
                                { trailingCheckbox: true, label: "Headline" },
                            ]}"
                            type="multi-select"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { leadingCheckbox: true, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { leadingCheckbox: true, label: "Headline", sublabel: "Supporting text" },
                                { leadingCheckbox: true, label: "Headline" },
                            ]}"
                            type="multi-select"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { text: "100+", leadingCheckbox: true, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { text: "100+", leadingCheckbox: true, label: "Headline", sublabel: "Supporting text" },
                                { text: "100+", leadingCheckbox: true, label: "Headline" },
                            ]}"
                            type="multi-select"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { leadingRadioButton: true, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { leadingRadioButton: true, label: "Headline", sublabel: "Supporting text" },
                                { leadingRadioButton: true, label: "Headline" },
                            ]}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { text: "100+", leadingRadioButton: true, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { text: "100+", leadingRadioButton: true, label: "Headline", sublabel: "Supporting text" },
                                { text: "100+", leadingRadioButton: true, label: "Headline" },
                            ]}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { trailingSwitch: true, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { trailingSwitch: true, label: "Headline", sublabel: "Supporting text" },
                                { trailingSwitch: true, label: "Headline" },
                            ]}"
                        ></md-list>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-list
                            .items="${[
                                { icon: "image", trailingSwitch: true, label: "Headline", sublabel: "Supporting text that is long enough to fill up multiple lines" },
                                { icon: "image", trailingSwitch: true, label: "Headline", sublabel: "Supporting text" },
                                { icon: "image", trailingSwitch: true, label: "Headline" },
                            ]}"
                        ></md-list>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-list", DemoList);
export default document.createElement("demo-list");
