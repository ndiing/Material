import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoTopAppBarComponent extends MdComponent {
    render() {
        return html`
            <div class="md-border">
         
            
                <md-top-app-bar
                    id="topAppBar"
                    .leadingActions="${[
                        "image",
                    ]}"
                    label="Label"
                    .trailingActions="${[
                        "image",
                        "image",
                        "image",
                    ]}"
                    ></md-top-app-bar
                >
                
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Top App Bar"
                        @click="${() => topAppBar.toggle()}"
                    ></md-button>
                    
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-top-app-bar", DemoTopAppBarComponent);

export default document.createElement("demo-top-app-bar", DemoTopAppBarComponent);
