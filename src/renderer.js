import "./components/components.scss";
import "./components/components.js";
import { Router } from "./components/router/router.js";
import DemoMainComponent from "./demo/main/main.js";
const DemoUsersComponent = () => import("./demo/users/users.js").then((m) => m.default);
const DemoUserComponent = () => import("./demo/user/user.js").then((m) => m.default);
const DemoBlogsComponent = () => import("./demo/blogs/blogs.js").then((m) => m.default);
const DemoBlogComponent = () => import("./demo/blog/blog.js").then((m) => m.default);
const DemoMissingComponent = () => import("./demo/missing/missing.js").then((m) => m.default);
const beforeLoad = (next) => {
    next();
};

import DemoIconComponent from "./demo/icon/icon.js"
import DemoButtonComponent from "./demo/button/button.js"
import DemoSegmentedButtonComponent from "./demo/segmented-button/segmented-button.js"
import DemoIconButtonComponent from "./demo/icon-button/icon-button.js"
import DemoFabComponent from "./demo/fab/fab.js"
import DemoExtendedFabComponent from "./demo/extended-fab/extended-fab.js"
import DemoCheckboxComponent from "./demo/checkbox/checkbox.js"
import DemoRadioButtonComponent from "./demo/radio-button/radio-button.js"
import DemoSwitchComponent from "./demo/switch/switch.js"
import DemoSliderComponent from "./demo/slider/slider.js"
import DemoImageComponent from "./demo/image/image.js"
import DemoBadgeComponent from "./demo/badge/badge.js"
import DemoListComponent from "./demo/list/list.js"
import DemoList2Component from "./demo/list/list2.js"
import DemoCardComponent from "./demo/card/card.js"
import DemoScrimComponent from "./demo/scrim/scrim.js"
import DemoSheetComponent from "./demo/sheet/sheet.js"
import DemoSheet2Component from "./demo/sheet/sheet2.js"
import DemoBottomSheetComponent from "./demo/bottom-sheet/bottom-sheet.js"
import DemoBottomSheet2Component from "./demo/bottom-sheet/bottom-sheet2.js"
import DemoSideSheetComponent from "./demo/side-sheet/side-sheet.js"
import DemoSideSheet2Component from "./demo/side-sheet/side-sheet2.js"
import DemoBottomAppBarComponent from "./demo/bottom-app-bar/bottom-app-bar.js"
import DemoBottomAppBar2Component from "./demo/bottom-app-bar/bottom-app-bar2.js"
import DemoTopAppBarComponent from "./demo/top-app-bar/top-app-bar.js"
import DemoNavigationBarComponent from "./demo/navigation-bar/navigation-bar.js"
import DemoNavigationBar2Component from "./demo/navigation-bar/navigation-bar2.js"
import DemoNavigationDrawerComponent from "./demo/navigation-drawer/navigation-drawer.js"
import DemoNavigationDrawer2Component from "./demo/navigation-drawer/navigation-drawer2.js"
import DemoNavigationDrawer3Component from "./demo/navigation-drawer/navigation-drawer3.js"
import DemoNavigationDrawer4Component from "./demo/navigation-drawer/navigation-drawer4.js"
import DemoNavigationRailComponent from "./demo/navigation-drawer/navigation-rail.js"
import DemoNavigationRail2Component from "./demo/navigation-drawer/navigation-rail2.js"
import DemoDialogComponent from "./demo/dialog/dialog.js"
import DemoTooltipComponent from "./demo/tooltip/tooltip.js"
import DemoDatetimePickerComponent from "./demo/datetime-picker/datetime-picker.js"
import DemoMenuComponent from "./demo/menu/menu.js"
import DemoFormComponent from "./demo/form/form.js"

Router.init([
    {
        path: "",
        component: DemoMainComponent,
        children: [
            {
                path: "users",
                beforeLoad,
                load: DemoUsersComponent,
                children: [
                    {
                        path: ":id",
                        outlet: "user",
                        load: DemoUserComponent,
                        children: [],
                    },
                ],
            },
            {
                path: "blogs",
                load: DemoBlogsComponent,
                children: [
                    {
                        path: ":id",
                        load: DemoBlogComponent,
                        children: [],
                    },
                ],
            },
            { path: "icon", component: DemoIconComponent },
            { path: "button", component: DemoButtonComponent },
            { path: "segmented-button", component: DemoSegmentedButtonComponent },
            { path: "icon-button", component: DemoIconButtonComponent },
            { path: "fab", component: DemoFabComponent },
            { path: "extended-fab", component: DemoExtendedFabComponent },
            { path: "checkbox", component: DemoCheckboxComponent },
            { path: "radio-button", component: DemoRadioButtonComponent },
            { path: "switch", component: DemoSwitchComponent },
            { path: "slider", component: DemoSliderComponent },
            { path: "image", component: DemoImageComponent },
            { path: "badge", component: DemoBadgeComponent },
            { path: "list", component: DemoListComponent },
            { path: "list2", component: DemoList2Component },
            { path: "card", component: DemoCardComponent },
            { path: "scrim", component: DemoScrimComponent },
            { path: "sheet", component: DemoSheetComponent },
            { path: "sheet2", component: DemoSheet2Component },
            { path: "bottom-sheet", component: DemoBottomSheetComponent },
            { path: "bottom-sheet2", component: DemoBottomSheet2Component },
            { path: "side-sheet", component: DemoSideSheetComponent },
            { path: "side-sheet2", component: DemoSideSheet2Component },
            { path: "bottom-app-bar", component: DemoBottomAppBarComponent },
            { path: "bottom-app-bar2", component: DemoBottomAppBar2Component },
            { path: "top-app-bar", component: DemoTopAppBarComponent },
            { path: "navigation-bar", component: DemoNavigationBarComponent },
            { path: "navigation-bar2", component: DemoNavigationBar2Component },
            { path: "navigation-drawer", component: DemoNavigationDrawerComponent },
            { path: "navigation-drawer2", component: DemoNavigationDrawer2Component },
            { path: "navigation-drawer3", component: DemoNavigationDrawer3Component },
            { path: "navigation-drawer4", component: DemoNavigationDrawer4Component },
            { path: "navigation-rail", component: DemoNavigationRailComponent },
            { path: "navigation-rail2", component: DemoNavigationRail2Component },
            { path: "dialog", component: DemoDialogComponent },
            { path: "tooltip", component: DemoTooltipComponent },
            { path: "datetime-picker", component: DemoDatetimePickerComponent },
            { path: "menu", component: DemoMenuComponent },
            { path: "form", component: DemoFormComponent },
        ],
    },
    {
        path: "*",
        load: DemoMissingComponent,
        children: [],
    },
]);
