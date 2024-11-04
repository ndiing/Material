import { MdComponent } from "../component/component";

class MdBadgeComponent extends MdComponent {
    static properties = {
        label: { type: Number },
        max: { type: Number },
    };

    constructor() {
        super();
        this.max = 999;
    }

    render() {
        if (this.label > this.max) {
            return this.max + "+";
        }

        return this.label;
    }

    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-badge");
    }
}

customElements.define("md-badge", MdBadgeComponent);

export { MdBadgeComponent };
