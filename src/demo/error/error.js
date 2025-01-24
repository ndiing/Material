import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoError extends MdComponent {
    render() {
        return html`
            <h1>Error</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("demo-error", DemoError);

export default document.createElement("demo-error");
