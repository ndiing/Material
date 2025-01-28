import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

class MdSegmentedButtonComponent extends MdComponent {
    static properties = {
        items: { type: Array },
        type: { type: String },
    };

    /* prettier-ignore */
    types=[
        'single-select',
        'multi-select',
    ]

    constructor() {
        super();
        this.items = [];
        this.type = "single-select";
    }

    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button 
                .data="${item}"
                class="md-segmented-button__button"
                .icon="${ifDefined(item.icon||item.selected&&'check')}"
                .label="${ifDefined(item.label)}"
                variant="outlined"
                .type="${ifDefined(item.type)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleSegmentedButtonItemClick}"
            ></md-button>
        `
    }

    render() {
        return this.items.map((item) => this.renderButton(item));
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-segmented-button");
    }

    handleSegmentedButtonItemClick(event) {
        const data = event.currentTarget.data;
        if (this.type === "single-select") {
            this.items.forEach((item) => {
                item.selected = item === data;
            });
        } else {
            data.selected = !data.selected;
        }
        this.requestUpdate();
        this.emit("onSegmentedButtonItemClick", { event });
    }
}

customElements.define("md-segmented-button", MdSegmentedButtonComponent);

export { MdSegmentedButtonComponent };
