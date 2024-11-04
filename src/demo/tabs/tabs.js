import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoTabsComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tabs
                        selection="single"
                        variant="primary"
                        .items="${[
                            //
                            { icon: "image", label: "Label 1", selected: true, badge: "" },
                            { icon: "image", label: "Label 2", badge: "3" },
                            { icon: "image", label: "Label 3", badge: "10" },
                            { icon: "image", label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-tabs>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tabs
                        selection="single"
                        variant="primary"
                        .items="${[
                            //
                            { label: "Label 1", selected: true, badge: "" },
                            { label: "Label 2", badge: "3" },
                            { label: "Label 3", badge: "10" },
                            { label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-tabs>
                </div>

                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tabs
                        selection="single"
                        variant="secondary"
                        .items="${[
                            //
                            { icon: "image", label: "Label 1", selected: true, badge: "" },
                            { icon: "image", label: "Label 2", badge: "3" },
                            { icon: "image", label: "Label 3", badge: "10" },
                            { icon: "image", label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-tabs>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tabs
                        selection="single"
                        variant="secondary"
                        .items="${[
                            //
                            { label: "Label 1", selected: true, badge: "" },
                            { label: "Label 2", badge: "3" },
                            { label: "Label 3", badge: "10" },
                            { label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-tabs>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-tabs", DemoTabsComponent);

export default document.createElement("demo-tabs", DemoTabsComponent);
