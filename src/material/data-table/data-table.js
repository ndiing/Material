import { html, nothing } from "lit";
import { MdComponent } from "../component/component";
import { ifDefined } from "lit/directives/if-defined.js";

/**
 *
 *
 */
class MdDataTableComponent extends MdComponent {
    static properties = {
        headers: { type: Array },
        bodies: { type: Array },
        data: { type: Array },
        footers: { type: Array },
    };

    constructor() {
        super();
        this.headers = [];
        this.bodies = [];
        this.data = [];
        this.footers = [];
    }

    renderDataTableHeaderRow(tr) {
        /* prettier-ignore */
        return html`
            <tr>
                ${tr.map(th => html`
                    <th 
                        .data="${th}"
                    >
                        <md-data-table-cell
                            .label="${ifDefined(th.label)}"
                            .checkbox="${ifDefined(th.checkbox)}"
                            .action="${ifDefined(th.action)}"
                        ></md-data-table-cell>
                    </th>
                `)}
            </tr>
        `;
    }

    renderDataTableBodyRow(item) {
        /* prettier-ignore */
        return html`
            <tbody>
                ${this.bodies.map(tr => html`
                    <tr>
                        ${tr.map(td => html`
                            <td 
                                .data="${td}"
                            >
                                <md-data-table-cell
                                    .label="${ifDefined(item[td.name])}"
                                    .checkbox="${ifDefined(td.checkbox)}"
                                    .action="${ifDefined(td.action)}"
                                ></md-data-table-cell>
                            </td>
                        `)}
                    </tr>
                `)}
            </tbody>
        `;
    }

    renderDataTableFooterRow(tr) {
        /* prettier-ignore */
        return html`
            <tr>
                ${tr.map(td => html`
                    <td 
                        .data="${td}"
                    >
                        <md-data-table-cell></md-data-table-cell>
                    </td>
                `)}
            </tr>
        `;
    }

    render() {
        /* prettier-ignore */
        return html`
            <table class="md-data-table__native">
                <thead>
                    ${this.headers.map(tr=>this.renderDataTableHeaderRow(tr))}
                </thead>
                ${this.data.map(item=>this.renderDataTableBodyRow(item))}
                <tfoot>
                    ${this.footers.map(tr=>this.renderDataTableFooterRow(tr))}
                </tfoot>
            </table>
        `
    }

    /**
     * @private
     */
    connectedCallback() {
        super.connectedCallback();
        this.classList.add("md-data-table");
    }

    /**
     * @private
     */
    async updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("headers")) {
            if (!this.bodies?.length) {
                await this.updateComplete;
                this.bodies = this.headers;
            }
        }
    }
}
customElements.define("md-data-table", MdDataTableComponent);
export { MdDataTableComponent };
