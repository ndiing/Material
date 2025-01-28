import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

class MdNavigationListComponent extends MdComponent {
    static properties = {
        items: { type: Array },
        rippleOptions: { type: Object },
    };

    constructor() {
        super();
        this.items = [];
    }

    renderNavigationListItem(item) {
        /* prettier-ignore */
        return html`
            <md-navigation-list-row>
                <md-navigation-list-item
                    .data="${item}"
                    .icon="${ifDefined(item.icon)}"
                    .label="${ifDefined(item.label)}"
                    .selected="${ifDefined(item.selected)}"
                    .disabled="${ifDefined(item.disabled)}"
                    .routerLink="${ifDefined(item.routerLink)}"
                    .rippleOptions="${ifDefined(item.rippleOptions||this.rippleOptions)}"
                    .badge="${ifDefined(item.badge)}"
                    @click="${this.handleNavigationListItemClick}"
                    
                ></md-navigation-list-item>
            </md-navigation-list-row>
        `
    }

    render() {
        /* prettier-ignore */
        return this.items.map(item=>this.renderNavigationListItem(item))
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-navigation-list");
        this.style.setProperty("--md-comp-navigation-list-icon-animation", "none");
    }

    handleNavigationListItemClick(event) {
        this.style.removeProperty("--md-comp-navigation-list-icon-animation");

        const data = event.currentTarget.data;

        this.singleSelect(data);
        this.requestUpdate();

        this.emit("onNavigationListItemClick", { event });
    }

    singleSelect(data) {
        this.items.forEach((item) => {
            item.selected = item === data;
        });
    }
}

customElements.define("md-navigation-list", MdNavigationListComponent);

export { MdNavigationListComponent };
