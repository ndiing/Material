import { html } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

class MdSegmentedButtonComponent extends MdComponent {
    static properties = {
        selection: { type: String },
        items: { type: Array },
    };

    selections = ["single", "multiple"];

    constructor() {
        super();
        this.items = [];
    }

    renderButton(item) {
        return html`
            <md-button
                .data="${item}"
                .variant="${item.variant || "outlined"}"
                .label="${ifDefined(item.label)}"
                .icon="${ifDefined(item.icon)}"
                .type="${ifDefined(item.type)}"
                .selected="${ifDefined(item.selected)}"
                @click="${this.handleSegmentedButtonClick}"
            ></md-button>
        `;
    }

    render() {
        return this.items.map((item) => this.renderButton(item));
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
    }

    handleSegmentedButtonClick(event) {
        const data = event.currentTarget.data;

        if (this.selection === "multiple") {
            data.selected = !data.selected;
        } else {
            for (const item of this.items) {
                item.selected = item === data;
            }
        }
        this.requestUpdate();
        this.emit("onSegmentedButtonClick", { event });
    }
}

customElements.define("md-segmented-button", MdSegmentedButtonComponent);

export { MdSegmentedButtonComponent };
