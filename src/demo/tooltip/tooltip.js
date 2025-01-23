import { html } from "lit";
import { MdComponent } from "../../material/component/component";

class DemoTooltip extends MdComponent {
    render() {
        return html`
            <div class="md-layout">
                <div class="md-layout__grid">
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tooltip style="width:344px;" id="tooltip1" label="Rich tooltip" .buttons="${[{ label: "Action" }, { label: "Action" }]}" @onTooltipButtonClick="${() => tooltip1.toggle({ trigger: button1 })}">Rich tooltips bring attention to particular element of feature that warrants the user's focus.</md-tooltip>
                        <md-button id="button1" variant="filled-tonal" label="Toggle Rich tooltip 1" @click="${() => tooltip1.toggle({ trigger: button1 })}"></md-button>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tooltip style="width:344px;" id="tooltip2" label="Rich tooltip" .buttons="${[{ label: "Action" }]}" @onTooltipButtonClick="${() => tooltip2.toggle({ trigger: button2 })}">Rich tooltips bring attention to particular element of feature that warrants the user's focus.</md-tooltip>
                        <md-button id="button2" variant="filled-tonal" label="Toggle Rich tooltip 2" @click="${() => tooltip2.toggle({ trigger: button2 })}"></md-button>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tooltip style="width:344px;" id="tooltip3" label="Rich tooltip">Rich tooltips bring attention to particular element of feature that warrants the user's focus.</md-tooltip>
                        <md-button id="button3" variant="filled-tonal" label="Toggle Rich tooltip 3" @click="${() => tooltip3.toggle({ trigger: button3 })}"></md-button>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tooltip style="width:344px;" id="tooltip4" .buttons="${[{ label: "Action" }]}" @onTooltipButtonClick="${() => tooltip4.toggle({ trigger: button4 })}">Rich tooltips bring attention to particular element of feature that warrants the user's focus.</md-tooltip>
                        <md-button id="button4" variant="filled-tonal" label="Toggle Rich tooltip 4" @click="${() => tooltip4.toggle({ trigger: button4 })}"></md-button>
                    </div>
                    <div class="md-layout__column--expanded4 md-layout__column--medium4 md-layout__column--compact4">
                        <md-tooltip style="width:344px;" id="tooltip5" .buttons="${[{ label: "Action" }, { label: "Action" }]}" @onTooltipButtonClick="${() => tooltip5.toggle({ trigger: button5 })}">Rich tooltips bring attention to particular element of feature that warrants the user's focus.</md-tooltip>
                        <md-button id="button5" variant="filled-tonal" label="Toggle Rich tooltip 5" @click="${() => tooltip5.toggle({ trigger: button5 })}"></md-button>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define("demo-tooltip", DemoTooltip);

export default document.createElement("demo-tooltip");
