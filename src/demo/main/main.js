import { html } from "lit";
import { MdComponent } from "../../components/component/component";
import { Router } from "../../components/router/router";
import { scrollInto } from "../../components/util/util";

const list = [
    { routerLink: "/icon", label: "Icon" },
    { routerLink: "/button", label: "Button" },
    { routerLink: "/segmented-button", label: "Segmented Button" },
    { routerLink: "/icon-button", label: "Icon Button" },
    { routerLink: "/fab", label: "Fab" },
    { routerLink: "/extended-fab", label: "Extended Fab" },
    { routerLink: "/checkbox", label: "Checkbox" },
    { routerLink: "/radio-button", label: "Radio Button" },
    { routerLink: "/switch", label: "Switch" },
    { routerLink: "/slider", label: "Slider" },
    { routerLink: "/image", label: "Image" },
    { routerLink: "/badge", label: "Badge" },
    { routerLink: "/list", label: "List" },
    // { routerLink: "/list2", label: "List 2" },
    { routerLink: "/card", label: "Card" },
    { routerLink: "/scrim", label: "Scrim" },
    { routerLink: "/sheet", label: "Sheet" },
    { routerLink: "/sheet2", label: "Sheet Modal" },
    { routerLink: "/bottom-sheet", label: "Bottom Sheet" },
    { routerLink: "/bottom-sheet2", label: "Bottom Sheet Modal" },
    { routerLink: "/side-sheet", label: "Side Sheet" },
    { routerLink: "/side-sheet2", label: "Side Sheet Modal" },
    { routerLink: "/bottom-app-bar", label: "Bottom App Bar" },
    { routerLink: "/bottom-app-bar2", label: "Bottom App Bar No Fab" },
    { routerLink: "/top-app-bar", label: "Top App Bar" },
    { routerLink: "/navigation-bar", label: "Navigation Bar" },
    { routerLink: "/navigation-bar2", label: "Navigation Bar No Label" },
    { routerLink: "/navigation-drawer", label: "Navigation Drawer" },
    { routerLink: "/navigation-drawer2", label: "Navigation Drawer No Icon" },
    { routerLink: "/navigation-drawer3", label: "Navigation Drawer Modal" },
    { routerLink: "/navigation-drawer4", label: "Navigation Drawer Modal No Icon" },
    { routerLink: "/navigation-rail", label: "Navigation Rail" },
    { routerLink: "/navigation-rail2", label: "Navigation Rail No Label" },
    { routerLink: "/dialog", label: "Dialog" },
    { routerLink: "/tooltip", label: "Tooltip" },
    { routerLink: "/datetime-picker", label: "Datetime Picker" },
    { routerLink: "/menu", label: "Menu" },
    { routerLink: "/form", label: "Form" },
].map((item) => {
    item.selected = item.routerLink === Router.pathname;
    return item;
});

class DemoMainComponent extends MdComponent {
    render() {
        return html`
            <div class="md-border">
                <md-navigation-drawer
                    id="mainNavigationDrawer"
                    .items="${list}"
                    open
                    @onListItemSelected="${this.handleListItemSelected}"
                ></md-navigation-drawer>
                <md-sheet region="center">
                    <md-outlet></md-outlet>
                </md-sheet>
            </div>
        `;
    }

    handleListItemSelected(event) {
        const element = event.detail.listItem;

        scrollInto(element, {
            block: "center",
            inline: "center",
            behavior: "smooth",
        });
    }
}

customElements.define("demo-main", DemoMainComponent);

export default document.createElement("demo-main", DemoMainComponent);
