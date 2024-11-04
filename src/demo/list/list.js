import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoListComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                avatar: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                            },
                            {
                                avatar: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum",
                            },
                            {
                                avatar: "https://placehold.co/360x360",
                                label: "Label",
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                avatar: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                trailingCheckbox: true,
                            },
                            {
                                avatar: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                trailingCheckbox: true,
                            },
                            {
                                avatar: "https://placehold.co/360x360",
                                label: "Label",
                                trailingCheckbox: true,
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                image: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                            },
                            {
                                image: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum",
                            },
                            {
                                image: "https://placehold.co/360x360",
                                label: "Label",
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                image: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                trailingCheckbox: true,
                            },
                            {
                                image: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                trailingCheckbox: true,
                            },
                            {
                                image: "https://placehold.co/360x360",
                                label: "Label",
                                trailingCheckbox: true,
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                video: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                            },
                            {
                                video: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum",
                            },
                            {
                                video: "https://placehold.co/360x360",
                                label: "Label",
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                video: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                trailingCheckbox: true,
                            },
                            {
                                video: "https://placehold.co/360x360",
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                trailingCheckbox: true,
                            },
                            {
                                video: "https://placehold.co/360x360",
                                label: "Label",
                                trailingCheckbox: true,
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                icon: "image",
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                            },
                            {
                                icon: "image",
                                label: "Label",
                                subLabel: "Lorem ipsum",
                            },
                            { icon: "image", label: "Label" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                icon: "image",
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                trailingCheckbox: true,
                            },
                            {
                                icon: "image",
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                trailingCheckbox: true,
                            },
                            {
                                icon: "image",
                                label: "Label",
                                trailingCheckbox: true,
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                            },
                            { label: "Label", subLabel: "Lorem ipsum" },
                            { label: "Label" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                trailingCheckbox: true,
                            },
                            {
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                trailingCheckbox: true,
                            },
                            { label: "Label", trailingCheckbox: true },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="multiple"
                        .items="${[
                            {
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                            },
                            { label: "Label", subLabel: "Lorem ipsum" },
                            { label: "Label" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        selection="multiple"
                        .items="${[
                            {
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                trailingCheckbox: true,
                            },
                            {
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                trailingCheckbox: true,
                            },
                            { label: "Label", trailingCheckbox: true },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                leadingCheckbox: true,
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                            },
                            {
                                leadingCheckbox: true,
                                label: "Label",
                                subLabel: "Lorem ipsum",
                            },
                            { leadingCheckbox: true, label: "Label" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                leadingCheckbox: true,
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                text: "100+",
                            },
                            {
                                leadingCheckbox: true,
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                text: "100+",
                            },
                            {
                                leadingCheckbox: true,
                                label: "Label",
                                text: "100+",
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                leadingRadioButton: true,
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                            },
                            {
                                leadingRadioButton: true,
                                label: "Label",
                                subLabel: "Lorem ipsum",
                            },
                            { leadingRadioButton: true, label: "Label" },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                leadingRadioButton: true,
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                text: "100+",
                            },
                            {
                                leadingRadioButton: true,
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                text: "100+",
                            },
                            {
                                leadingRadioButton: true,
                                label: "Label",
                                text: "100+",
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                trailingSwitch: true,
                            },
                            {
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                trailingSwitch: true,
                            },
                            { label: "Label", trailingSwitch: true },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4">
                    <md-list
                        .items="${[
                            {
                                icon: "image",
                                label: "Label",
                                subLabel: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, eveniet.",
                                trailingSwitch: true,
                            },
                            {
                                icon: "image",
                                label: "Label",
                                subLabel: "Lorem ipsum",
                                trailingSwitch: true,
                            },
                            {
                                icon: "image",
                                label: "Label",
                                trailingSwitch: true,
                            },
                        ]}"
                    ></md-list>
                </div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded6 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-list", DemoListComponent);

export default document.createElement("demo-list", DemoListComponent);
