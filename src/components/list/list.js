import { html } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";

class MdListComponent extends MdComponent {
    static properties = {
        items: { type: Array },
        selection: { type: String },
        rippleOptions: { type: Object },
    };

    selects = ["single", "multiple"];

    constructor() {
        super();
        this.items = [];
    }

    renderListRow(item) {
        return html`
            <div class="md-list__row">
                <md-list-item
                    class="${classMap({
                        "md-list__item--with-icon": item.icon,
                    })}"
                    .data="${item}"
                    .avatar="${ifDefined(item.avatar)}"
                    .image="${ifDefined(item.image)}"
                    .video="${ifDefined(item.video)}"
                    .icon="${ifDefined(item.icon)}"
                    .leadingCheckbox="${ifDefined(item.leadingCheckbox)}"
                    .leadingRadioButton="${ifDefined(item.leadingRadioButton)}"
                    .leadingSwitch="${ifDefined(item.leadingSwitch)}"
                    .label="${ifDefined(item.label)}"
                    .subLabel="${ifDefined(item.subLabel)}"
                    .trailingCheckbox="${ifDefined(item.trailingCheckbox)}"
                    .trailingRadioButton="${ifDefined(item.trailingRadioButton)}"
                    .trailingSwitch="${ifDefined(item.trailingSwitch)}"
                    .iconButton="${ifDefined(item.iconButton)}"
                    .text="${ifDefined(item.text)}"
                    .selected="${ifDefined(item.selected)}"
                    .selection="${ifDefined(this.selection)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .rippleOptions="${ifDefined(this.rippleOptions)}"
                    .badge="${ifDefined(item.badge)}"
                    @click="${this.handleListItemClick}"
                    @onCheckboxInput="${this.handleListItemCheckboxInput}"
                    @onRadioButtonInput="${this.handleListItemRadioButtonInput}"
                    @onSwitchInput="${this.handleListItemSwitchInput}"
                ></md-list-item>
            </div>
        `;
    }

    render() {
        return this.items.map((item) => this.renderListRow(item));
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-list");
    }

    handleListItemCheckboxInput(event) {
        const data = event.currentTarget.data;
        data.selected = !data.selected;
        this.requestUpdate();
        this.emit("onListItemCheckboxInput", { event });
    }

    handleListItemRadioButtonInput(event) {
        const data = event.currentTarget.data;

        for (const item of this.items) {
            item.selected = item === data;
        }
        this.requestUpdate();
        this.emit("onListItemRadioButtonInput", { event });
    }

    handleListItemSwitchInput(event) {
        const data = event.currentTarget.data;

        for (const item of this.items) {
            item.selected = item === data;
        }
        this.requestUpdate();
        this.emit("onListItemSwitchInput", { event });
    }

    handleListItemClick(event) {
        const target = event.target.closest(`.md-list__checkbox,.md-list__radio-button,.md-list__switch`);

        if (target) {
            return;
        }
        const data = event.currentTarget.data;

        if (this.selection === "multiple") {
            data.selected = !data.selected;
        } else {
            for (const item of this.items) {
                item.selected = item === data;
            }
        }
        this.requestUpdate();
    }
}

customElements.define("md-list", MdListComponent);

export { MdListComponent };
