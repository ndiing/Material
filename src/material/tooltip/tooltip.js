import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { PopperController } from "../popper/popper";

class MdTooltipComponent extends MdComponent {
    static properties = {
        icons: { type: Array },
        actions: { type: Array },
        label: { type: String },
        sublabel: { type: String },
        buttons: { type: Array },
        open: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.body = Array.from(this.childNodes);
    }

    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                .data="${item}"
            >${item.icon}</md-icon>
        `
    }

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
                @click="${this.handleTooltipIconButtonClick}"
            ></md-icon-button>
        `
    }

    renderButton(item) {
        /* prettier-ignore */
        return html`
            <md-button
                .data="${item}"
                .icon="${ifDefined(item.icon)}"
                .label="${ifDefined(item.label)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .disabled="${ifDefined(item.disabled)}"
                .selected="${ifDefined(item.selected)}"
                @click="${this.handleTooltipButtonClick}"
            ></md-button>
        `
    }

    renderSpacer(item) {
        /* prettier-ignore */
        return html`
            <div class="md-tooltip__spacer"></div>
        `
    }

    renderItem(item, component = "icon") {
        /* prettier-ignore */
        return choose(item.component||component,[
            ['icon',() => this.renderIcon(item)],
            ['icon-button',() => this.renderIconButton(item)],
            ['button',() => this.renderButton(item)],
            ['spacer',() => this.renderSpacer(item)],
        ],() => nothing)
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.icons?.length||this.label||this.sublabel||this.actions?.length?html`
                <div class="md-tooltip__header">
                    ${this.icons?.length?html`
                        <div class="md-tooltip__icons">
                            ${this.icons.map(icon=>this.renderItem(icon,'icon'))}
                        </div>    
                    `:nothing}
                    ${this.label||this.sublabel?html`
                        <div class="md-tooltip__labels">
                            ${this.label?html`<div class="md-tooltip__label">${this.label}</div>`:nothing}
                            ${this.sublabel?html`<div class="md-tooltip__sublabel">${this.sublabel}</div>`:nothing}
                        </div>
                    `:nothing}
                    ${this.actions?.length?html`
                        <div class="md-tooltip__actions">
                            ${this.actions.map(action=>this.renderItem(action,'icon-button'))}
                        </div>    
                    `:nothing}
                </div>
            `:nothing}
            ${this.body?.length||this.buttons?.length?html`
                <div class="md-tooltip__wrapper">
                    ${this.body?.length?html`<div class="md-tooltip__body">${this.body}</div>`:nothing}
                    ${this.buttons?.length?html`
                        <div class="md-tooltip__footer">
                            ${this.buttons?.length?html`
                                <div class="md-tooltip__buttons">
                                    ${this.buttons.map(button=>this.renderItem(button,'button'))}
                                </div>    
                            `:nothing}
                        </div>
                    `:nothing}
                </div>
            `:nothing}
        `
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-tooltip");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        this.classList.remove("md-tooltip");
    }

    handleTooltipIconButtonClick(event) {
        this.emit("onTooltipIconButtonClick", { event });
    }

    handleTooltipButtonClick(event) {
        this.emit("onTooltipButtonClick", { event });
    }

    show(options) {
        options = {
            container: this,
            placements: ["bottom", "top", "right", "left", "top-right", "bottom-right", "top-left", "bottom-left"],
            offset: 8,
            ...options,
        };
        this.open = true;
        this.popper = new PopperController();
        this.popper.show(options);
        this.emit("onTooltipShown");
    }

    close() {
        this.open = false;
        this.emit("onTooltipClosed");
    }

    toggle(options) {
        if (this.open) this.close();
        else this.show(options);
    }
}

customElements.define("md-tooltip", MdTooltipComponent);

export { MdTooltipComponent };
