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
            { path: "icon", load: () => import("./demo/icon/icon.js").then((m) => m.default) },
            { path: "button", load: () => import("./demo/button/button.js").then((m) => m.default) },
            { path: "segmented-button", load: () => import("./demo/segmented-button/segmented-button.js").then((m) => m.default) },
            { path: "icon-button", load: () => import("./demo/icon-button/icon-button.js").then((m) => m.default) },
            { path: "fab", load: () => import("./demo/fab/fab.js").then((m) => m.default) },
            { path: "extended-fab", load: () => import("./demo/extended-fab/extended-fab.js").then((m) => m.default) },
            { path: "checkbox", load: () => import("./demo/checkbox/checkbox.js").then((m) => m.default) },
            { path: "radio-button", load: () => import("./demo/radio-button/radio-button.js").then((m) => m.default) },
            { path: "switch", load: () => import("./demo/switch/switch.js").then((m) => m.default) },
            { path: "slider", load: () => import("./demo/slider/slider.js").then((m) => m.default) },
            { path: "image", load: () => import("./demo/image/image.js").then((m) => m.default) },
            { path: "badge", load: () => import("./demo/badge/badge.js").then((m) => m.default) },
            { path: "list", load: () => import("./demo/list/list.js").then((m) => m.default) },
            { path: "list2", load: () => import("./demo/list/list2.js").then((m) => m.default) },
            { path: "card", load: () => import("./demo/card/card.js").then((m) => m.default) },
            { path: "scrim", load: () => import("./demo/scrim/scrim.js").then((m) => m.default) },
            { path: "sheet", load: () => import("./demo/sheet/sheet.js").then((m) => m.default) },
            { path: "sheet2", load: () => import("./demo/sheet/sheet2.js").then((m) => m.default) },
            { path: "bottom-sheet", load: () => import("./demo/bottom-sheet/bottom-sheet.js").then((m) => m.default) },
            { path: "bottom-sheet2", load: () => import("./demo/bottom-sheet/bottom-sheet2.js").then((m) => m.default) },
            { path: "side-sheet", load: () => import("./demo/side-sheet/side-sheet.js").then((m) => m.default) },
            { path: "side-sheet2", load: () => import("./demo/side-sheet/side-sheet2.js").then((m) => m.default) },
            { path: "bottom-app-bar", load: () => import("./demo/bottom-app-bar/bottom-app-bar.js").then((m) => m.default) },
            { path: "bottom-app-bar2", load: () => import("./demo/bottom-app-bar/bottom-app-bar2.js").then((m) => m.default) },
            { path: "top-app-bar", load: () => import("./demo/top-app-bar/top-app-bar.js").then((m) => m.default) },
            { path: "navigation-bar", load: () => import("./demo/navigation-bar/navigation-bar.js").then((m) => m.default) },
            { path: "navigation-bar2", load: () => import("./demo/navigation-bar/navigation-bar2.js").then((m) => m.default) },
            { path: "navigation-drawer", load: () => import("./demo/navigation-drawer/navigation-drawer.js").then((m) => m.default) },
            { path: "navigation-drawer2", load: () => import("./demo/navigation-drawer/navigation-drawer2.js").then((m) => m.default) },
            { path: "navigation-drawer3", load: () => import("./demo/navigation-drawer/navigation-drawer3.js").then((m) => m.default) },
            { path: "navigation-drawer4", load: () => import("./demo/navigation-drawer/navigation-drawer4.js").then((m) => m.default) },
            { path: "navigation-rail", load: () => import("./demo/navigation-drawer/navigation-rail.js").then((m) => m.default) },
            { path: "navigation-rail2", load: () => import("./demo/navigation-drawer/navigation-rail2.js").then((m) => m.default) },
            { path: "dialog", load: () => import("./demo/dialog/dialog.js").then((m) => m.default) },
            { path: "tooltip", load: () => import("./demo/tooltip/tooltip.js").then((m) => m.default) },
            { path: "datetime-picker", load: () => import("./demo/datetime-picker/datetime-picker.js").then((m) => m.default) },
            { path: "menu", load: () => import("./demo/menu/menu.js").then((m) => m.default) },
            { path: "form", load: () => import("./demo/form/form.js").then((m) => m.default) },
        ],
    },
    {
        path: "*",
        load: DemoMissingComponent,
        children: [],
    },
]);
