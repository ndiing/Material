import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoNavigationList extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="md-menu">
                            <md-navigation-list
                                .items="${[
                                    //
                                    { label: "Item 1", selected: true },
                                    { label: "Item 2", badge: 0 },
                                    { label: "Item 3", badge: 1 },
                                    { label: "Item 4", badge: 1000 },
                                ]}"
                            ></md-navigation-list>
                        </div>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="md-menu">
                            <md-navigation-list
                                .items="${[
                                    { icon: "image", label: "Item 1", selected: true },
                                    { icon: "image", label: "Item 2", badge: 0 },
                                    { icon: "image", label: "Item 3", badge: 1 },
                                    { icon: "image", label: "Item 4", badge: 1000 },
                                ]}"
                            ></md-navigation-list>
                        </div>
                    </div> -->

                    <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="md-navigation-drawer">
                            <md-navigation-list
                                .items="${[
                        //
                        { label: "Item 1", selected: true },
                        { label: "Item 2", badge: 0 },
                        { label: "Item 3", badge: 1 },
                        { label: "Item 4", badge: 1000 },
                    ]}"
                            ></md-navigation-list>
                        </div>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="md-navigation-drawer">
                            <md-navigation-list
                                .items="${[
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 1 },
                        { icon: "image", label: "Item 4", badge: 1000 },
                    ]}"
                            ></md-navigation-list>
                        </div>
                    </div> -->

                    <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="md-navigation-rail">
                            <md-navigation-list
                                .rippleOptions="${{ container: ".md-navigation-list__icon" }}"
                                .items="${[
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 1 },
                        { icon: "image", label: "Item 4", badge: 1000 },
                    ]}"
                            ></md-navigation-list>
                        </div>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="md-navigation-rail">
                            <md-navigation-list
                                .rippleOptions="${{ container: ".md-navigation-list__icon" }}"
                                .items="${[
                        //
                        { icon: "image", selected: true },
                        { icon: "image", badge: 0 },
                        { icon: "image", badge: 1 },
                        { icon: "image", badge: 1000 },
                    ]}"
                            ></md-navigation-list>
                        </div>
                    </div> -->

                    <!-- <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="md-navigation-bar">

                            <md-navigation-list
                                .rippleOptions="${{ container: ".md-navigation-list__icon" }}"
                                .items="${[
                        { icon: "image", label: "Item 1", selected: true },
                        { icon: "image", label: "Item 2", badge: 0 },
                        { icon: "image", label: "Item 3", badge: 1 },
                        { icon: "image", label: "Item 4", badge: 1000 },
                    ]}"
                            ></md-navigation-list>
                        </div>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <div class="md-navigation-bar">

                            <md-navigation-list
                                .rippleOptions="${{ container: ".md-navigation-list__icon" }}"
                                .items="${[
                        //
                        { icon: "image", selected: true },
                        { icon: "image", badge: 0 },
                        { icon: "image", badge: 1 },
                        { icon: "image", badge: 1000 },
                    ]}"
                            ></md-navigation-list>
                        </div>
                    </div> -->
                </div>
            </div>
        `;
    }
}

customElements.define("demo-navigation-list", DemoNavigationList);

export default document.createElement("demo-navigation-list");
