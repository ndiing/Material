import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoMenu extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-menu
                            id="menu1"
                            .items="${[
                                //
                                { label: "Item 1", selected: true },
                                { label: "Item 2", badge: 0 },
                                { label: "Item 3", badge: 1 },
                                { label: "Item 4", badge: 1000 },
                            ]}"
                        ></md-menu>
                        <md-button id="button1" variant="filled-tonal" label="Toggle Menu" @click="${() => menu1.toggle({ trigger: button1 })}"></md-button>
                    </div>
                    <div class="md-layout__column--expanded12 md-layout__column--medium4 md-layout__column--compact4">
                        <md-menu
                            id="menu2"
                            .items="${[
                                //
                                { icon: "image", label: "Item 1", selected: true },
                                { icon: "image", label: "Item 2", badge: 0 },
                                { icon: "image", label: "Item 3", badge: 1 },
                                { icon: "image", label: "Item 4", badge: 1000 },
                            ]}"
                        ></md-menu>
                        <md-button id="button2" variant="filled-tonal" label="Toggle Menu" @click="${() => menu2.toggle({ trigger: button2 })}"></md-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-menu", DemoMenu);

export default document.createElement("demo-menu");
