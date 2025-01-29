import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
import { choose } from "lit/directives/choose.js";
import { classMap } from "lit/directives/class-map.js";

/**
 *
 */
class MdTextFieldComponent extends MdComponent {
    static properties = {
        label: { type: String },
        separateLabel: { type: Boolean },

        icons: { type: Array },
        prefix: { type: String },
        suffix: { type: String },
        actions: { type: Array },

        text: { type: String },
        error: { type: String },
        counter: { type: String },

        name: { type: String },
        type: { type: String },
        value: { type: String },
        placeholder: { type: String },
        title: { type: String },
        autocomplete: { type: String },
        required: { type: Boolean },
        readOnly: { type: Boolean },

        variant: { type: String },

        disabled: { type: Boolean, reflect: true },
    };

    /* prettier-ignore */
    variants=[
        'outlined',
        'filled',
    ]

    constructor() {
        super();
        this.title = "";
        this.autocomplete = "off";
    }

    /**
     * @private
     * @param {String} item
     */
    renderIcon(item) {
        /* prettier-ignore */
        return html`
            <md-icon
                .data="${item}"
                class="${classMap({...item.classMap})}"
            >${item.icon}</md-icon>
        `
    }

    /**
     * @private
     * @param {String} item
     */
    renderIconButton(item) {
        /* prettier-ignore */
        return html`
            <md-icon-button
                .data="${item}"
                class="${classMap({...item.classMap})}"
                .icon="${ifDefined(item.icon)}"
                .variant="${ifDefined(item.variant)}"
                .type="${ifDefined(item.type)}"
                .toggle="${ifDefined(item.toggle)}"
                .selected="${ifDefined(item.selected)}"
                .disabled="${ifDefined(item.disabled)}"
                @click="${this.handleTextFieldIconButtonClick}"
            ></md-icon-button>
        `
    }

    /**
     * @private
     * @param {String} item
     * @param {String} component
     */
    renderItem(item, component = "icon") {
        /* prettier-ignore */
        return choose(item.component||component,[
            ['icon',() => this.renderIcon(item)],
            ['icon-button',() => this.renderIconButton(item)],
        ],() => nothing)
    }

    get actions2() {
        let actions = [];
        if (this.error) actions = actions.concat([{ component: "icon", icon: "error", classMap: { "md-text-field__icon--error": true } }]);
        if (this.actions?.length) actions = actions.concat(this.actions);
        return actions;
    }

    render() {
        /* prettier-ignore */
        return html`
            ${this.label?html`<label class="md-text-field__label">${this.label}</label>`:nothing}
            <div class="md-text-field__container">
                ${this.icons?.length?html`
                    <div class="md-text-field__icons">
                        ${this.icons.map(item => this.renderItem(item,'icon'))}    
                    </div>
                `:nothing}
                ${this.prefix?html`<div class="md-text-field__prefix">${this.prefix}</div>`:nothing}
                <input 
                    .name="${ifDefined(this.name)}" 
                    .type="${ifDefined(this.type)}" 
                    .value="${ifDefined(this.value)}" 
                    .placeholder="${ifDefined(this.placeholder)}" 
                    .required="${ifDefined(this.required)}" 
                    .readOnly="${ifDefined(this.readOnly)}" 
                    .title="${ifDefined(this.title)}" 
                    .autocomplete="${ifDefined(this.autocomplete)}" 
                    .defaultValue="${ifDefined(this.defaultValue)}" 
                    @focus="${this.handleTextFieldFocus}"
                    @blur="${this.handleTextFieldBlur}"
                    @input="${this.handleTextFieldInput}"
                    @search="${this.handleTextFieldSearch}"
                    @invalid="${this.handleTextFieldInvalid}"
                    @reset="${this.handleTextFieldReset}"
                    class="md-text-field__native"
                >
                ${this.suffix?html`<div class="md-text-field__suffix">${this.suffix}</div>`:nothing}
                ${this.actions2?.length?html`
                    <div class="md-text-field__actions">
                        ${this.actions2.map(item => this.renderItem(item,'icon-button'))}    
                    </div>
                `:nothing}
            </div>
            ${this.text||this.error||this.counter?html`
                <div class="md-text-field__wrapper">
                    ${this.text||this.error?html`<div class="md-text-field__text">${this.error||this.text}</div>`:nothing}
                    ${this.counter?html`<div class="md-text-field__counter">${this.counter}</div>`:nothing}
                </div>
            `:nothing}
        `
    }

    /**
     * @private
     */
    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.defaultValue = this.value;
        this.classList.toggle("md-text-field--populated", !!this.value);
        await this.updateComplete
        this.style.setProperty('--md-comp-text-field-offset-left',this.textFieldNative.offsetLeft+'px')
    }

    /**
     * @private
     * @param {Object} changedProperties
     */
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("variant")) {
            this.variants.forEach((variant) => {
                this.classList.toggle(`md-text-field--${variant}`, variant === this.variant);
            });
        }
        if (changedProperties.has("separateLabel")) {
            this.classList.toggle(`md-text-field--separate-label`, !!this.separateLabel);
        }
        if (changedProperties.has("label")) {
            this.classList.toggle(`md-text-field--with-label`, !!this.label);
        }
    }

    get textFieldNative() {
        return this.querySelector(".md-text-field__native");
    }

    handleTextFieldFocus(event) {
        this.classList.add("md-text-field--focus");
        this.emit("onTextFieldFocus", { event });
    }

    handleTextFieldBlur(event) {
        this.classList.remove("md-text-field--focus");
        this.emit("onTextFieldBlur", { event });
    }

    handleTextFieldInput(event) {
        this.value = this.textFieldNative.value;
        this.classList.toggle("md-text-field--populated", !!this.value);
        this.error = this.textFieldNative.validationMessage;
        this.classList.toggle("md-text-field--error", !!this.error);

        this.emit("onTextFieldInput", { event });
    }

    handleTextFieldSearch(event) {
        this.value = this.textFieldNative.value;
        this.classList.toggle("md-text-field--populated", !!this.value);
        this.error = this.textFieldNative.validationMessage;
        this.classList.toggle("md-text-field--error", !!this.error);

        this.emit("onTextFieldSearch", { event });
    }

    handleTextFieldInvalid(event) {
        event.preventDefault();

        this.error = this.textFieldNative.validationMessage;
        this.classList.toggle("md-text-field--error", !!this.error);

        this.emit("onTextFieldInvalid", { event });
    }

    handleTextFieldReset(event) {
        this.value = this.defaultValue;
        this.classList.toggle("md-text-field--populated", !!this.value);

        this.error = undefined;
        this.classList.toggle("md-text-field--error", !!this.error);

        this.emit("onTextFieldReset", { event });
    }

    handleTextFieldIconButtonClick(event) {

        this.emit("onTextFieldIconButtonClick", { event });
    }
}
customElements.define("md-text-field", MdTextFieldComponent);
export { MdTextFieldComponent };
