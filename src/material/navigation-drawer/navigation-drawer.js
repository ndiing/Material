import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";

/**
 * @requires MdScrimComponent
 * @requires MdIconComponent
 * @requires MdIconButtonComponent
 * @requires MdButtonComponent
 * @fires onNavigationDrawerIconButtonClick
 * @fires onNavigationDrawerButtonClick
 * @fires onNavigationDrawerShown
 * @fires onNavigationDrawerClosed
 * @fires onNavigationDrawerScrimClosed
 */
class MdNavigationDrawerComponent extends MdComponent {
    /**
     * @typedef {Array} MdNavigationDrawerComponentIcons
     * @property {String} icon
     * @property {String} [component=icon]
     */
    /**
     * @typedef {Array} MdNavigationDrawerComponentActions
     * @property {String} icon
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [toggle]
     * @property {Boolean} [selected]
     * @property {Boolean} [disabled]
     * @property {String} [component=icon-button]
     */
    /**
     * @typedef {Array} MdNavigationDrawerComponentButtons
     * @property {String} [icon]
     * @property {String} label
     * @property {String} [variant]
     * @property {String} [type]
     * @property {Boolean} [disabled]
     * @property {Boolean} [selected]
     * @property {String} [component=button]
     */
    /**
     * @property {MdNavigationDrawerComponentIcons} [icons]
     * @property {MdNavigationDrawerComponentActions} [actions]
     * @property {String} [label]
     * @property {String} [sublabel]
     * @property {MdNavigationDrawerComponentButtons} [buttons]
     * @property {Boolean} [open]
     */
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        items: { type: Array },
        open: { type: Boolean, reflect: true },
        modal: { type: Boolean, reflect: true },
        view: { type: String },
    };

    /* prettier-ignore */
    views=[
        'flat',
        'tree',
    ]

    /**
     *
     */
    constructor() {
        super();
        this.view = "flat";
    }

    /**@private*/
    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                .data="${item}"
            >${item.icon}</md-icon>
        `
    }

    /**@private*/
    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleNavigationDrawerIconButtonClick}"
            ></md-icon-button>
        `
    }

    /**@private*/
    renderItem(item, component = "icon") {
        /* prettier-ignore */
        return choose(item.component||component,[
            ['icon',() => this.renderIcon(item)],
            ['icon-button',() => this.renderIconButton(item)],
        ],() => nothing)
    }

    /**@private*/
    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length||this.label||this.sublabel||this.actions?.length?html`
                <div class="md-navigation-drawer__header">
                    ${this.icons?.length?html`
                        <div class="md-navigation-drawer__icons">
                            ${this.icons.map(icon=>this.renderItem(icon,'icon'))}
                        </div>    
                    `:nothing}
                    ${this.label||this.sublabel?html`
                        <div class="md-navigation-drawer__labels">
                            ${this.label?html`<div class="md-navigation-drawer__label">${this.label}</div>`:nothing}
                            ${this.sublabel?html`<div class="md-navigation-drawer__sublabel">${this.sublabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.actions?.length?html`
                        <div class="md-navigation-drawer__actions">
                            ${this.actions.map(action=>this.renderItem(action,'icon-button'))}
                        </div>    
                    `:nothing}
                </div>
            `:nothing}
            <div class="md-navigation-drawer__wrapper">
                <div class="md-navigation-drawer__body">
                    ${this.view==='flat'?html`
                        <md-navigation-list .items="${this.items}"></md-navigation-list>
                    `:html`
                        <md-tree .items="${this.items}"></md-tree>
                    `}
                </div>
            </div>
        `
    }

    /**@private*/
    async connectedCallback() {
        super.connectedCallback();
        this.navigationDrawerScrim = document.createElement("md-scrim");
        this.parentElement.insertBefore(this.navigationDrawerScrim, this.nextElementSibling);
        this.handleNavigationDrawerScrimClosed = this.handleNavigationDrawerScrimClosed.bind(this);
        this.navigationDrawerScrim.addEventListener("onScrimClosed", this.handleNavigationDrawerScrimClosed);
        if (this.modal && this.open) this.navigationDrawerScrim.show();
        this.classList.add("md-navigation-drawer");
        this.style.setProperty("--md-comp-sheet-animation", "none");
        await this.updateComplete;

        this.style.setProperty("--md-comp-sheet-width", this.clientWidth + "px");
        this.style.setProperty("--md-comp-sheet-height", this.clientHeight + "px");
    }

    /**@private*/
    disconnectedCallback() {
        super.disconnectedCallback();
        this.navigationDrawerScrim.removeEventListener("onScrimClosed", this.handleNavigationDrawerScrimClosed);
        this.navigationDrawerScrim.remove();
        this.classList.remove("md-navigation-drawer");
        this.style.setProperty("--md-comp-sheet-animation", "none");
    }

    /**@private*/
    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("region")) {
            this.regions.forEach((region) => {
                this.classList.toggle(`md-navigation-drawer--${region}`, region === this.region);
            });
        }

        if (changedProperties.has("modal")) {
            this.classList.toggle(`md-navigation-drawer--modal`, !!this.modal);
        }
    }

    /**@private*/
    handleNavigationDrawerIconButtonClick(event) {
        this.emit("onNavigationDrawerIconButtonClick", { event });
    }

    /**
     *
     */
    show() {
        this.style.removeProperty("--md-comp-sheet-animation");
        if (this.modal) this.navigationDrawerScrim.show();
        this.open = true;
        this.emit("onNavigationDrawerShown");
    }

    /**
     *
     */
    close() {
        this.style.removeProperty("--md-comp-sheet-animation");
        this.open = false;
        if (this.navigationDrawerScrim.open) this.navigationDrawerScrim.close();
        this.emit("onNavigationDrawerClosed");
    }

    /**
     *
     */
    toggle() {
        if (this.open) this.close();
        else this.show();
    }

    /**@private*/
    handleNavigationDrawerScrimClosed(event) {
        if (this.open) this.close();
        this.emit("onNavigationDrawerScrimClosed", { event });
    }
}

customElements.define("md-navigation-drawer", MdNavigationDrawerComponent);

export { MdNavigationDrawerComponent };
