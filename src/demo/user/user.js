import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoUser extends MdComponent {
    render() {
        return html`
            <h1>User</h1>
            <md-outlet></md-outlet>
        `;
    }
}

customElements.define("demo-user", DemoUser);

export default document.createElement("demo-user");
