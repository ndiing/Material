import { html } from "lit";
import { MdComponent } from "../../material/component/component";
import { Router } from "../../material/router/router";

class DemoMain extends MdComponent {
    constructor() {
        super();

        this.items = [
            { label: "Layout Grid", routerLink: "/layout-grid" },
            { label: "Layout Border", routerLink: "/layout-border" },
            { label: "Icon", routerLink: "/icon" },
            { label: "Image", routerLink: "/image" },
            { label: "Badge", routerLink: "/badge" },
            { label: "Button", routerLink: "/button" },
            { label: "Fab", routerLink: "/fab" },
            { label: "Icon Button", routerLink: "/icon-button" },
            { label: "Segmented Button", routerLink: "/segmented-button" },
            { label: "Checkbox", routerLink: "/checkbox" },
            { label: "Radio Button", routerLink: "/radio-button" },
            { label: "Switch", routerLink: "/switch" },
            { label: "Card", routerLink: "/card" },
            { label: "Scrim", routerLink: "/scrim" },
            { label: "Dialog", routerLink: "/dialog" },
            { label: "Sheet", routerLink: "/sheet" },
            { label: "Sheet Modal", routerLink: "/sheet-modal" },
            { label: "List", routerLink: "/list" },
            { label: "Tooltip", routerLink: "/tooltip" },
            { label: "Tree", routerLink: "/tree" },
            { label: "Bottom App Bar", routerLink: "/bottom-app-bar" },
            { label: "Top App Bar", routerLink: "/top-app-bar" },
            // { label: "Navigation List", routerLink: "/navigation-list" },
            { label: "Tabs", routerLink: "/tabs" },
            {
                label: "Navigation Bar",
                children: [
                    { label: "Default", routerLink: "/navigation-bar" },
                    { label: "No Label", routerLink: "/navigation-bar-no-label" },
                ],
            },
            {
                label: "Navigation Drawer",
                children: [
                    { label: "Default", routerLink: "/navigation-drawer" },
                    { label: "No Icon", routerLink: "/navigation-drawer-no-icon" },
                    { label: "Modal", routerLink: "/navigation-drawer-modal" },
                ],
            },
            {
                label: "Navigation Rail",
                children: [
                    { label: "Default", routerLink: "/navigation-rail" },
                    { label: "No Label", routerLink: "/navigation-rail-no-label" },
                ],
            },
        ];
        this.items.sort((a, b) => a.label.localeCompare(b.label));
        function select(items) {
            items.forEach((item) => {
                item.selected = item.routerLink === Router.pathname;
                if (item.children?.length) {
                    select(item.children);
                }
            });
        }
        select(this.items);
        this.leadingActions = [{ icon: "menu" }];
    }
    render() {
        return html`
            <div class="md-layout__border">
                <md-top-app-bar class="demo-main-top-app-bar" open label="Material 3" .leadingActions="${this.leadingActions}" @onTopAppBarIconButtonClick="${() => navigationDrawer.toggle()}"></md-top-app-bar>
                <md-navigation-drawer id="navigationDrawer" view="tree" open .items="${this.items}" @onTreeItemClick="${() => {}}"></md-navigation-drawer>
                <md-sheet region="center">
                    <md-outlet></md-outlet>
                </md-sheet>
            </div>
        `;
    }
}

customElements.define("demo-main", DemoMain);

export default document.createElement("demo-main");
