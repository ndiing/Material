import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoBottomAppBar2Component extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-bottom-app-bar
                    id="bottomAppBar"
                    .leadingActions="${["image", "image", "image", "image"]}"
                    @onBottomAppBarIconButtonClick="${console.log}"
                ></md-bottom-app-bar>

                <md-sheet
                    region="center"
                    style="padding:24px;"
                >
                    <div class="md-grid">
                        <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                            <md-button
                                variant="filled-tonal"
                                label="Toggle Bottom App Bar"
                                @click="${() => bottomAppBar.toggle()}"
                            ></md-button>
                        </div>
                    </div>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-bottom-app-bar2", DemoBottomAppBar2Component);

export default document.createElement("demo-bottom-app-bar2", DemoBottomAppBar2Component);
