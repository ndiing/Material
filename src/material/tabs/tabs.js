import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 * @fires onTabClick
 * @fires onTabCheckboxInput
 * @fires onTabRadioButtonInput
 * @fires onTabSwitchInput
 */
class MdTabsComponent extends MdComponent {
    /**
     * @property {Array} [items=[]]
     * @property {Object} [rippleOptions]
     * @property {String} [variant=primary]
     */
    static properties = {
        items: { type: Array },
        rippleOptions: { type: Object },
        variant: { type: String },
    };

    /* prettier-ignore */
    variants=[
        'primary',
        'secondary',
    ]

    /**
     *
     */
    constructor() {
        super();
        this.items = [];
        this.variant = "primary";
    }

    /**@private*/
    renderTab(item) {
        /* prettier-ignore */
        return html`
            <md-tab
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                .routerLink="${ifDefined(item.routerLink)}"
                .rippleOptions="${ifDefined(item.rippleOptions||this.rippleOptions)}"
                .badge="${ifDefined(item.badge)}"
                @click="${this.handleTabClick}"
                @onTabSelected="${this.handleTabSelected}"
            ></md-tab>
        `
    }

    /**@private*/
    render() {
        /* prettier-ignore */
        return this.items.map(item=>this.renderTab(item))
    }

    /**@private*/
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tabs");
        this.style.setProperty("--md-comp-tabs-indicator-transition-property", "none");
    }

    /**@private*/
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-tabs--${variant}`, variant === this.variant);
            });
        }
    }

    /**@private*/
    handleTabClick(event) {
        this.style.removeProperty("--md-comp-tabs-indicator-transition-property");

        const data = event.currentTarget.data;

        this.singleSelect(data);
        this.requestUpdate();

        this.emit("onTabClick", { event });
    }

    singleSelect(data) {
        this.items.forEach((item) => {
            item.selected = item === data;
        });
    }

    async handleTabSelected(event) {
        if (this.classList.contains("md-tabs")) {
            const navigationListItem = event.detail.navigationListItem;
            const data = navigationListItem.data;

            this.currIndex = this.items.indexOf(data);
            this.prevIndex = this.prevIndex ?? this.currIndex;
            const direction = this.currIndex > this.prevIndex ? "right" : "left";
            this.classList.remove("md-tabs--left");
            this.classList.remove("md-tabs--right");
            this.classList.add("md-tabs--" + direction);
            this.prevIndex = this.currIndex;

            let left = navigationListItem.offsetLeft;
            let right = this.clientWidth - (left + navigationListItem.clientWidth);

            if (this.classList.contains("md-tabs--primary")) {
                const label = navigationListItem.querySelector(".md-tab__label");
                left = label.offsetLeft + navigationListItem.offsetLeft;
                right = this.clientWidth - (left + label.clientWidth);

                if (!navigationListItem.classList.contains("md-tab--with-icon")) {
                    const badge = navigationListItem.querySelector(".md-tab__badge");
                    if (badge) {
                        right = this.clientWidth - (badge.offsetLeft + navigationListItem.offsetLeft + badge.clientWidth);
                    }
                }
            }

            this.style.setProperty("--md-comp-tabs-indicator-left", left + "px");
            this.style.setProperty("--md-comp-tabs-indicator-right", right + "px");
        }
    }
}

customElements.define("md-tabs", MdTabsComponent);

export { MdTabsComponent };
