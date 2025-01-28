import { html } from "lit";
import { MdComponent } from "../../material/component/component";
class DemoTabs extends MdComponent {
    /**
     * @private
     */
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tabs
                            variant="primary"
                            .items="${[
                                //
                                { label: "Item 1", selected: true },
                                { label: "Item 2", badge: 0 },
                                { label: "Item 3", badge: 1 },
                                { label: "Item 4", badge: 1000 },
                            ]}"
                        ></md-tabs>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tabs
                            variant="primary"
                            .items="${[
                                { icon: "image", label: "Item 1", selected: true },
                                { icon: "image", label: "Item 2", badge: 0 },
                                { icon: "image", label: "Item 3", badge: 1 },
                                { icon: "image", label: "Item 4", badge: 1000 },
                            ]}"
                        ></md-tabs>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tabs
                            variant="secondary"
                            .items="${[
                                //
                                { label: "Item 1", selected: true },
                                { label: "Item 2", badge: 0 },
                                { label: "Item 3", badge: 1 },
                                { label: "Item 4", badge: 1000 },
                            ]}"
                        ></md-tabs>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tabs
                            variant="secondary"
                            .items="${[
                                { icon: "image", label: "Item 1", selected: true },
                                { icon: "image", label: "Item 2", badge: 0 },
                                { icon: "image", label: "Item 3", badge: 1 },
                                { icon: "image", label: "Item 4", badge: 1000 },
                            ]}"
                        ></md-tabs>
                    </div>
                </div>
            </div>
        `;
    }
}
customElements.define("demo-tabs", DemoTabs);
export default document.createElement("demo-tabs");
