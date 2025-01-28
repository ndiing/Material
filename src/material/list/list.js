import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

class MdListComponent extends MdComponent {
    static properties = {
        items: { type: Array },
        type: { type: String },
        rippleOptions: { type: Object },
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

    renderListItem(item) {
        /* prettier-ignore */
        return html`
            <md-list-row>
                <md-list-item
                    .data="${item}"
                    .avatar="${ifDefined(item.avatar)}"
                    .image="${ifDefined(item.image)}"
                    .video="${ifDefined(item.video)}"
                    .icon="${ifDefined(item.icon)}"
                    .label="${ifDefined(item.label)}"
                    .sublabel="${ifDefined(item.sublabel)}"
                    .text="${ifDefined(item.text)}"
                    .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                    .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                    .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                    .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                    .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                    .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                    .selected="${ifDefined(item.selected)}"
                    .disabled="${ifDefined(item.disabled)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .rippleOptions="${ifDefined(item.rippleOptions||this.rippleOptions)}"
                    .badge="${ifDefined(item.badge)}"
                    @click="${this.handleListItemClick}"
                    @onCheckboxNativeInput="${this.handleListItemCheckboxNativeInput}"
                    @onRadioButtonNativeInput="${this.handleListItemRadioButtonNativeInput}"
                    @onSwitchNativeInput="${this.handleListItemSwitchNativeInput}"
                ></md-list-item>
            </md-list-row>
        `
    }

    render() {
        /* prettier-ignore */
        return this.items.map(item=>this.renderListItem(item))
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
    }

    handleListItemClick(event) {
        const action = event.target.closest(".md-list__checkbox,.md-list__radio-button,.md-list__switch");
        if (action) return;

        const data = event.currentTarget.data;
        if (this.type === "single-select") {
            this.singleSelect(data);
        } else {
            this.multiSelect(data);
        }
        this.requestUpdate();

        this.emit("onListItemClick", { event });
    }

    multiSelect(data) {
        data.selected = !data.selected;
    }

    singleSelect(data) {
        this.items.forEach((item) => {
            item.selected = item === data;
        });
    }

    handleListItemCheckboxNativeInput(event) {
        const data = event.currentTarget.data;
        this.multiSelect(data);
        this.requestUpdate();

        this.emit("onListItemCheckboxNativeInput", { event });
    }

    handleListItemRadioButtonNativeInput(event) {
        const data = event.currentTarget.data;
        this.singleSelect(data);
        this.requestUpdate();

        this.emit("onListItemRadioButtonNativeInput", { event });
    }

    handleListItemSwitchNativeInput(event) {
        const data = event.currentTarget.data;
        this.multiSelect(data);
        this.requestUpdate();

        this.emit("onListItemSwitchNativeInput", { event });
    }
}

customElements.define("md-list", MdListComponent);

export { MdListComponent };
