import { html } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { classMap } from "lit/directives/class-map.js";

class MdTabsComponent extends MdComponent {
    static properties = {
        items: { type: Array },
        selection: { type: String },
        variant: { type: String },
        rippleOptions: { type: Object },
    };

    selects = ["single", "multiple"];
    
    variants = ["primary", "secondary"];

    constructor() {
        super();
        this.items = [];
    }

    renderTab(item) {
        return html`
            <md-tab
                class="${classMap({
                    "md-tab--with-icon": item.icon,
                })}"
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .subLabel="${ifDefined(item.subLabel)}"
                .selected="${ifDefined(item.selected)}"
                .selection="${ifDefined(this.selection)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .rippleOptions="${ifDefined(this.rippleOptions)}"
                .badge="${ifDefined(item.badge)}"
                @click="${this.handleTabClick}"
                @onTabSelected="${this.handleTabSelected}"
            ></md-tab>
        `;
    }

    render() {
        return this.items.map((item) => this.renderTab(item));
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-tabs--${variant}`, this.variant === variant);
            }
        }
    }

    handleTabClick(event) {
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

    async handleTabSelected(event) {
        if (!this.classList.contains("md-tabs")) {
            return;
        }
        const tab = event.target;

        let width;
        let left;

        const secondary = this.classList.contains("md-tabs--secondary");
        if (secondary) {
            width = tab.clientWidth;
            left = tab.offsetLeft;
        } else {
            const withIcon = tab.classList.contains("md-tab--with-icon");
            const label = tab?.querySelector(".md-tab__label");
            width = label.clientWidth;
            left = tab.offsetLeft + label.offsetLeft;
            const badge = tab?.querySelector(".md-tab__badge");
            if (!withIcon && badge) {
                width += badge.clientWidth + 4;
            }
        }

        this.style.setProperty("--md-comp-tabs-indicator-width", width + "px");
        this.style.setProperty("--md-comp-tabs-indicator-left", left + "px");
    }
}

customElements.define("md-tabs", MdTabsComponent);

export { MdTabsComponent };
