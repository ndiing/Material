import { LitElement } from "lit";
import { updateWhenLocaleChanges } from "@lit/localize";

class MdComponent extends LitElement {
    constructor() {
        super();
        updateWhenLocaleChanges(this);
    }

    createRenderRoot() {
        return this;
    }

    updated(changedProperties) {
        super.updated(changedProperties);
    }

    on(type, listener) {
        this.addEventListener(type, listener);
    }

    emit(type, detail) {
        const event = new CustomEvent(type, {
            bubbles: true,
            cancelable: true,
            detail,
        });
        this.dispatchEvent(event);
    }
}

export { MdComponent };
