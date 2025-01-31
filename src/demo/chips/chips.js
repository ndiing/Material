import { html } from "lit";
import { MdComponent } from "../../material/component/component";

/**
 * @class DemoChips
 * @extends MdComponent
 */
class DemoChips extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips
                            .items="${[
                                { icon: "image", label: "Item 1" },
                                { icon: "image", label: "Item 2" },
                                { icon: "image", label: "Item 3" },
                                { icon: "image", label: "Item 4" },
                            ]}"
                        ></md-chips>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips .items="${[{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }]}"></md-chips>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips
                            .items="${[
                                { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", action: "close", label: "Item 1" },
                                { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", action: "close", label: "Item 2" },
                                { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", action: "close", label: "Item 3" },
                                { avatar: "https://api.dicebear.com/9.x/icons/svg?seed=Andrea", action: "close", label: "Item 4" },
                            ]}"
                        ></md-chips>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-chips .items="${[{ label: "Item 1" }, { label: "Item 2" }, { label: "Item 3" }, { label: "Item 4" }]}"></md-chips>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-chips", DemoChips);
export default document.createElement("demo-chips");
