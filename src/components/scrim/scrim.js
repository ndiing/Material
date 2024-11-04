import { MdComponent } from "../component/component";

class MdScrimComponent extends MdComponent {
    static properties = {
        open: { type: Boolean, reflect: true },
    };

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-scrim");
        this.style.setProperty("--md-comp-scrim-animation", "none");
        this.handleScrimClick = this.handleScrimClick.bind(this);
        this.handleScrimAnimationend = this.handleScrimAnimationend.bind(this);
        this.addEventListener("click", this.handleScrimClick);
        this.addEventListener("animationend", this.handleScrimAnimationend);
    }

    disconnectedCallback() {
        super.connectedCallback();
        this.classList.remove("md-scrim");
        this.removeEventListener("click", this.handleScrimClick);
        this.removeEventListener("animationend", this.handleScrimAnimationend);
    }

    show() {
        this.style.removeProperty("--md-comp-scrim-animation");
        this.open = true;
    }

    close() {
        this.style.removeProperty("--md-comp-scrim-animation");
        this.open = false;
    }

    toggle() {
        if (this.open) {
            this.close();
        } else {
            this.show();
        }
    }

    handleScrimClick(event) {
        this.emit("onScrimClick", { event });
    }

    handleScrimAnimationend(event) {
        this.emit(this.open ? "onScrimOpened" : "onScrimClosed", {});
        this.emit("onScrimAnimationend", { event });
    }
}

customElements.define("md-scrim", MdScrimComponent);

export { MdScrimComponent };
