import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoUsers extends MdComponent {
    render() {
        return html`
            <h1>Users</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("demo-users", DemoUsers);

export default document.createElement("demo-users");
