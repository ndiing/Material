import { Router } from "../material/router/router";

import DemoMain from "./main/main.js";
import DemoError from "./error/error.js";

Router.use([
    {
        path: "",
        component: DemoMain,
        children: [
            { path: "layout-grid", load: () => import("./layout-grid/layout-grid.js").then((m) => m.default) },
            { path: "layout-border", load: () => import("./layout-border/layout-border.js").then((m) => m.default) },
            { path: "icon", load: () => import("./icon/icon.js").then((m) => m.default) },
            { path: "image", load: () => import("./image/image.js").then((m) => m.default) },
            { path: "badge", load: () => import("./badge/badge.js").then((m) => m.default) },
            { path: "button", load: () => import("./button/button.js").then((m) => m.default) },
            { path: "fab", load: () => import("./fab/fab.js").then((m) => m.default) },
            { path: "icon-button", load: () => import("./icon-button/icon-button.js").then((m) => m.default) },
            { path: "segmented-button", load: () => import("./segmented-button/segmented-button.js").then((m) => m.default) },
            { path: "checkbox", load: () => import("./checkbox/checkbox.js").then((m) => m.default) },
            { path: "radio-button", load: () => import("./radio-button/radio-button.js").then((m) => m.default) },
            { path: "switch", load: () => import("./switch/switch.js").then((m) => m.default) },
            { path: "card", load: () => import("./card/card.js").then((m) => m.default) },
            { path: "scrim", load: () => import("./scrim/scrim.js").then((m) => m.default) },
            { path: "dialog", load: () => import("./dialog/dialog.js").then((m) => m.default) },
            { path: "sheet", load: () => import("./sheet/sheet.js").then((m) => m.default) },
            { path: "sheet-modal", load: () => import("./sheet/sheet-modal.js").then((m) => m.default) },
            { path: "list", load: () => import("./list/list.js").then((m) => m.default) },
            { path: "tooltip", load: () => import("./tooltip/tooltip.js").then((m) => m.default) },
            { path: "tree", load: () => import("./tree/tree.js").then((m) => m.default) },
            { path: "bottom-app-bar", load: () => import("./bottom-app-bar/bottom-app-bar.js").then((m) => m.default) },
            { path: "top-app-bar", load: () => import("./top-app-bar/top-app-bar.js").then((m) => m.default) },
            { path: "navigation-list", load: () => import("./navigation-list/navigation-list.js").then((m) => m.default) },
            { path: "tabs", load: () => import("./tabs/tabs.js").then((m) => m.default) },
            { path: "navigation-bar", load: () => import("./navigation-bar/navigation-bar.js").then((m) => m.default) },
            { path: "navigation-bar-no-label", load: () => import("./navigation-bar/navigation-bar-no-label.js").then((m) => m.default) },
            { path: "navigation-drawer", load: () => import("./navigation-drawer/navigation-drawer.js").then((m) => m.default) },
            { path: "navigation-drawer-no-icon", load: () => import("./navigation-drawer/navigation-drawer-no-icon.js").then((m) => m.default) },
            { path: "navigation-drawer-modal", load: () => import("./navigation-drawer/navigation-drawer-modal.js").then((m) => m.default) },
            { path: "navigation-rail", load: () => import("./navigation-rail/navigation-rail.js").then((m) => m.default) },
            { path: "navigation-rail-no-label", load: () => import("./navigation-rail/navigation-rail-no-label.js").then((m) => m.default) },
            { path: "menu", load: () => import("./menu/menu.js").then((m) => m.default) },
            { path: "progress-indicator", load: () => import("./progress-indicator/progress-indicator.js").then((m) => m.default) },
        ],
    },
    {
        path: "*",
        component: DemoError,
    },
]);
