import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoBottomAppBarComponent extends MdComponent {
    render() {
        return html`
            <div class="md-border">
         
            
                <md-bottom-app-bar
                    id="bottomAppBar"
                    .leadingActions="${[
                        "image",
                        "image",
                        "image",
                        "image",
                    ]}"
                    .trailingActions="${[
                        {comp:'fab',icon:"add"},
                    ]}"
                    ></md-bottom-app-bar
                >
                
                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                
                    <md-button
                        variant="filled-tonal"
                        label="Toggle Bottom App Bar"
                        @click="${() => bottomAppBar.toggle()}"
                    ></md-button>
                    
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-bottom-app-bar", DemoBottomAppBarComponent);

export default document.createElement("demo-bottom-app-bar", DemoBottomAppBarComponent);
