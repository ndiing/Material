import { MdComponent } from "../component/component";
import { PopperController } from "../popper/popper";
import { ifDefined } from "lit/directives/if-defined.js";
import { html } from "lit";
import { MdListComponent } from "../list/list";
import { closestScrollable } from "../util/util";

class MdMenuComponent extends MdComponent {
    static properties = {
        ...MdListComponent.properties,
        open: { type: Boolean, reflect: true },
    };

    constructor() {
        super();
        this.popper = new PopperController(this);
    }

    render() {
        /* prettier-ignore */
        return html`
            <div class="md-menu__container">
                <div class="md-menu__body">
                    <md-list
                        class="md-menu__list"
                        .items="${ifDefined(this.items)}"
                        .selection="${this.selection||'single'}"
                        .rippleOptions="${ifDefined(this.rippleOptions)}"
                    ></md-list>
                </div>
            </div>    
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-menu");
        this.style.setProperty("--md-comp-menu-animation", "none");
        await this.updateComplete;

        const rect=this.getBoundingClientRect()
        this.style.setProperty(`--md-comp-menu-height`, rect.height + "px");
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    async updated(changedProperties) {
        super.updated(changedProperties);

        if (changedProperties.has("open")) {
            if (this.open && !this.container) {
                await new Promise((resolve) => window.requestAnimationFrame(resolve));
                this.container = closestScrollable(this);
                this.handleContainerScroll = this.handleContainerScroll.bind(this);
                this.handleWindowClick = this.handleWindowClick.bind(this);
                this.container.addEventListener("scroll", this.handleContainerScroll);
                window.addEventListener("click", this.handleWindowClick);
            } else if (!this.open && this.container) {
                await new Promise((resolve) => window.requestAnimationFrame(resolve));
                this.container.removeEventListener("scroll", this.handleContainerScroll);
                window.removeEventListener("click", this.handleWindowClick);
                this.container = null;
            }
        }
    }

    handleContainerScroll() {
        this.close();
    }

    handleWindowClick(event) {
        if (!event.target.closest(".md-menu")) {
            this.close();
        }
    }

    show(options = {}) {
        this.popper.setPosition({
            placements: ["bottom-start", "bottom-end", "bottom", "top-start", "top-end", "top"],
            ...options,
        });
        this.style.removeProperty("--md-comp-menu-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-menu-animation");
        this.open = false;
    }

    toggle(options = {}) {
        if (this.open) {
            this.close();
        } else {
            this.show(options);
        }
    }
}

customElements.define("md-menu", MdMenuComponent);

export { MdMenuComponent };
