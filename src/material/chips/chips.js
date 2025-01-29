import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { RippleController } from "../ripple/ripple";
/**
 *
 */
class MdChipComponent extends MdComponent {
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
        this.type = "single-select";
    }

    renderChip(item) {
        /* prettier-ignore */
        return html`
            <md-chip
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .avatar="${ifDefined(item.avatar)}"
                .label="${ifDefined(item.label)}"
                .action="${ifDefined(item.action)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleChipClick}"
            ></md-chip>
        `
    }

    render() {
        /* prettier-ignore */
        return this.items.map(item=>this.renderChip(item))
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-chips");
    }

    handleChipClick(event) {
        const data = event.currentTarget.data;

        if (this.type === "single-select") {
            this.items.forEach((item) => {
                item.selected = data === item;
            });
        } else {
            data.selected = !data.selected;
        }

        this.requestUpdate();

        this.emit("onChipClick", { event });
    }
}
customElements.define("md-chips", MdChipComponent);
export { MdChipComponent };
