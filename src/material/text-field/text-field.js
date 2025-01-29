import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";
/**
 *
 */
class MdTextFieldComponent extends MdComponent {
    static properties = {
        label: { type: String },
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

        variant: { type: String },
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

    render() {
        /* prettier-ignore */
        return html`
            ${this.label?html`<label class="md-text-field__label">${this.label}</label>`:nothing}
            <div class="md-text-field__container">
                ${this.icons?.length?html`
                    <div class="md-text-field__icons">
                        ${this.icons.map(item => html`
                            <md-icon class="md-text-field__icon">${item.icon}</md-icon>
                        `)}    
                    </div>
                `:nothing}
                ${this.prefix?html`<div class="md-text-field__prefix">${this.prefix}</div>`:nothing}
                <input 
                    .name="${ifDefined(this.name)}" 
                    .type="${ifDefined(this.type)}" 
                    .value="${ifDefined(this.value)}" 
                    .placeholder="${ifDefined(this.placeholder)}" 
                    .required="${ifDefined(this.required)}" 
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
                ${this.actions?.length?html`
                    <div class="md-text-field__actions">
                        ${this.actions.map(item => html`
                            <md-icon-button class="md-text-field__action" icon="${item.icon}"></md-icon-button>
                        `)}    
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
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-text-field");
        this.defaultValue = this.value;
        this.classList.toggle("md-text-field--populated", !!this.value);
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
}
customElements.define("md-text-field", MdTextFieldComponent);
export { MdTextFieldComponent };
