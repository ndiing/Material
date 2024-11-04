import { html } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

class MdImageComponent extends MdComponent {
    static properties = {
        variant: { type: String },
        src: { type: String },
        alt: { type: String },
        loading: { type: String },
        ratio: { type: String },
    };

    variants = ["circular"];

    constructor() {
        super();
        this.loading = "lazy";
    }

    render() {
        /* prettier-ignore */
        return html`
            <img
                .src="${ifDefined(this.src)}"
                .alt="${ifDefined(this.alt)}"
                .loading="${ifDefined(this.loading)}"
                class="md-image__native"
                @load="${this.handleImageLoad}"
                @error="${this.handleImageError}"
            />
        `;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-image");
    }

    updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("variant")) {
            for (const variant of this.variants) {
                this.classList.toggle(`md-image--${variant}`, this.variant === variant);
            }
        }

        if (changedProperties.has("ratio")) {
            if (this.ratio) {
                this.style.setProperty("aspect-ratio", this.ratio);

                if (this.variant === "circular") {
                    const [x, y] = this.ratio.split("/");
                    this.style.setProperty("border-radius", `50% / calc(50% * ${x} / ${y})`);
                }
            } else {
                this.style.removeProperty("aspect-ratio");
            }
        }
    }

    handleImageLoad(event) {
        this.emit("onImageLoad", { event });
    }

    handleImageError(event) {
        this.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
        this.emit("onImageError", { event });
    }
}

customElements.define("md-image", MdImageComponent);

export { MdImageComponent };
