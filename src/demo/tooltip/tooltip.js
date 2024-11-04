import { html } from "lit";
import { MdComponent } from "../../components/component/component";

class DemoTooltipComponent extends MdComponent {
    render() {
        return html`
            <div
                class="md-grid"
                style="margin:24px;"
            >
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tooltip
                        id="tooltip"
                        style="width:314px;"
                        label="Lorem, ipsum"
                        buttons='["Label","Label"]'
                        @onTooltipButtonClick="${() => tooltip.close()}"
                        @pointerleave="${() => tooltip.close()}"
                    >
                        Lorem, ipsum dolor. Ducimus, voluptatibus odio. Debitis, explicabo velit?
                    </md-tooltip>
                    <md-button
                        id="button"
                        variant="filled-tonal"
                        label="Toggle Tooltip"
                        @pointerenter="${() => tooltip.show({ button })}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tooltip
                        id="tooltip2"
                        style="width:314px;"
                        label="Lorem, ipsum"
                        buttons='["Label"]'
                        @onTooltipButtonClick="${() => tooltip2.close()}"
                        @pointerleave="${() => tooltip2.close()}"
                    >
                        Lorem, ipsum dolor. Ducimus, voluptatibus odio. Debitis, explicabo velit?
                    </md-tooltip>
                    <md-button
                        id="button2"
                        variant="filled-tonal"
                        label="Toggle Tooltip"
                        @pointerenter="${() => tooltip2.show({ button: button2 })}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tooltip
                        id="tooltip3"
                        style="width:314px;"
                        label="Lorem, ipsum"
                        @pointerleave="${() => tooltip3.close()}"
                    >
                        Lorem, ipsum dolor. Ducimus, voluptatibus odio. Debitis, explicabo velit?
                    </md-tooltip>
                    <md-button
                        id="button3"
                        variant="filled-tonal"
                        label="Toggle Tooltip"
                        @pointerenter="${() => tooltip3.show({ button: button3 })}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tooltip
                        id="tooltip4"
                        style="width:314px;"
                        buttons='["Label"]'
                        @onTooltipButtonClick="${() => tooltip4.close()}"
                        @pointerleave="${() => tooltip4.close()}"
                    >
                        Lorem, ipsum dolor. Ducimus, voluptatibus odio. Debitis, explicabo velit?
                    </md-tooltip>
                    <md-button
                        id="button4"
                        variant="filled-tonal"
                        label="Toggle Tooltip"
                        @pointerenter="${() => tooltip4.show({ button: button4 })}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tooltip
                        id="tooltip5"
                        style="width:314px;"
                        buttons='["Label","Label"]'
                        @onTooltipButtonClick="${() => tooltip5.close()}"
                        @pointerleave="${() => tooltip5.close()}"
                    >
                        Lorem, ipsum dolor. Ducimus, voluptatibus odio. Debitis, explicabo velit?
                    </md-tooltip>
                    <md-button
                        id="button5"
                        variant="filled-tonal"
                        label="Toggle Tooltip"
                        @pointerenter="${() => tooltip5.show({ button: button5 })}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tooltip
                        id="tooltip6"
                        variant="plain"
                    >
                        Lorem, ipsum dolor.
                    </md-tooltip>
                    <md-button
                        id="button6"
                        variant="filled-tonal"
                        label="Toggle Tooltip"
                        @pointerenter="${() => tooltip6.show({ button: button6 })}"
                        @pointerleave="${() => tooltip6.close()}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4">
                    <md-tooltip
                        id="tooltip7"
                        style="width:214px;"
                        variant="plain"
                    >
                        Lorem, ipsum dolor. Ducimus, voluptatibus odio. Debitis, explicabo velit?
                    </md-tooltip>
                    <md-button
                        id="button7"
                        variant="filled-tonal"
                        label="Toggle Tooltip"
                        @pointerenter="${() => tooltip7.show({ button: button7 })}"
                        @pointerleave="${() => tooltip7.close()}"
                    ></md-button>
                </div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
                <div class="md-grid__item--expanded4 md-grid__item--medium4 md-grid__item--compact4"></div>
            </div>
        `;
    }
}

customElements.define("demo-tooltip", DemoTooltipComponent);

export default document.createElement("demo-tooltip", DemoTooltipComponent);
