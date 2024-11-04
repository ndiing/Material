import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoList2Component extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-menu__list"
                        .items="${[
                            //
                            { icon: "image", label: "Label 1", selected: true, badge: "" },
                            { icon: "image", label: "Label 2", badge: "3" },
                            { icon: "image", label: "Label 3", badge: "10" },
                            { icon: "image", label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-menu__list"
                        .items="${[
                            //
                            { label: "Label 1", selected: true, badge: "" },
                            { label: "Label 2", badge: "3" },
                            { label: "Label 3", badge: "10" },
                            { label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-navigation-bar__list"
                        .rippleOptions="${{ container: ".md-list__icon" }}"
                        .items="${[
                            //
                            { icon: "image", label: "Label 1", selected: true, badge: "" },
                            { icon: "image", label: "Label 2", badge: "3" },
                            { icon: "image", label: "Label 3", badge: "10" },
                            { icon: "image", label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-navigation-bar__list"
                        .rippleOptions="${{ container: ".md-list__icon" }}"
                        .items="${[
                            //
                            { icon: "image", selected: true, badge: "" },
                            { icon: "image", badge: "3" },
                            { icon: "image", badge: "10" },
                            { icon: "image", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-navigation-drawer__list"
                        .items="${[
                            //
                            { icon: "image", label: "Label 1", selected: true, badge: "" },
                            { icon: "image", label: "Label 2", badge: "3" },
                            { icon: "image", label: "Label 3", badge: "10" },
                            { icon: "image", label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-navigation-drawer__list"
                        .items="${[
                            //
                            { label: "Label 1", selected: true, badge: "" },
                            { label: "Label 2", badge: "3" },
                            { label: "Label 3", badge: "10" },
                            { label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        style="width:80px;"
                        selection="single"
                        class="md-navigation-rail__list"
                        .rippleOptions="${{ container: ".md-list__icon" }}"
                        .items="${[
                            //
                            { icon: "image", label: "Label 1", selected: true, badge: "" },
                            { icon: "image", label: "Label 2", badge: "3" },
                            { icon: "image", label: "Label 3", badge: "10" },
                            { icon: "image", label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        style="width:80px;"
                        selection="single"
                        class="md-navigation-rail__list"
                        .rippleOptions="${{ container: ".md-list__icon" }}"
                        .items="${[
                            //
                            { icon: "image", selected: true, badge: "" },
                            { icon: "image", badge: "3" },
                            { icon: "image", badge: "10" },
                            { icon: "image", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-tabs__list md-tabs__list--primary"
                        .items="${[
                            //
                            { icon: "image", label: "Label 1", selected: true, badge: "" },
                            { icon: "image", label: "Label 2", badge: "3" },
                            { icon: "image", label: "Label 3", badge: "10" },
                            { icon: "image", label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-tabs__list md-tabs__list--primary"
                        .items="${[
                            //
                            { label: "Label 1", selected: true, badge: "" },
                            { label: "Label 2", badge: "3" },
                            { label: "Label 3", badge: "10" },
                            { label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>

                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-tabs__list md-tabs__list--secondary"
                        .items="${[
                            //
                            { icon: "image", label: "Label 1", selected: true, badge: "" },
                            { icon: "image", label: "Label 2", badge: "3" },
                            { icon: "image", label: "Label 3", badge: "10" },
                            { icon: "image", label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="single"
                        class="md-tabs__list md-tabs__list--secondary"
                        .items="${[
                            //
                            { label: "Label 1", selected: true, badge: "" },
                            { label: "Label 2", badge: "3" },
                            { label: "Label 3", badge: "10" },
                            { label: "Label 4", badge: "9999" },
                        ]}"
                    ></md-list>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-list2", DemoList2Component);

export default document.createElement("demo-list2", DemoList2Component);
