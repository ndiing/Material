## Classes

<dl>
<dt><a href="#MdBadgeComponent">MdBadgeComponent</a></dt>
<dd></dd>
<dt><a href="#MdBottomAppBarComponent">MdBottomAppBarComponent</a></dt>
<dd></dd>
<dt><a href="#MdButtonComponent">MdButtonComponent</a></dt>
<dd></dd>
<dt><a href="#MdCardComponent">MdCardComponent</a></dt>
<dd></dd>
<dt><a href="#MdCheckboxComponent">MdCheckboxComponent</a></dt>
<dd></dd>
<dt><a href="#MdComponent">MdComponent</a></dt>
<dd></dd>
<dt><a href="#MdDialogComponent">MdDialogComponent</a></dt>
<dd></dd>
<dt><a href="#MdFabComponent">MdFabComponent</a></dt>
<dd></dd>
<dt><a href="#MdIconButtonComponent">MdIconButtonComponent</a></dt>
<dd></dd>
<dt><a href="#MdIconComponent">MdIconComponent</a></dt>
<dd></dd>
<dt><a href="#MdImageComponent">MdImageComponent</a></dt>
<dd></dd>
<dt><a href="#MdListItemComponent">MdListItemComponent</a></dt>
<dd></dd>
<dt><a href="#MdListRowComponent">MdListRowComponent</a></dt>
<dd></dd>
<dt><a href="#MdListComponent">MdListComponent</a></dt>
<dd></dd>
<dt><a href="#MdRadioButtonComponent">MdRadioButtonComponent</a></dt>
<dd></dd>
<dt><a href="#RippleController">RippleController</a></dt>
<dd></dd>
<dt><a href="#Router">Router</a></dt>
<dd></dd>
<dt><a href="#MdScrimComponent">MdScrimComponent</a></dt>
<dd></dd>
<dt><a href="#MdSegmentedButtonComponent">MdSegmentedButtonComponent</a></dt>
<dd></dd>
<dt><a href="#MdSheetComponent">MdSheetComponent</a></dt>
<dd></dd>
<dt><a href="#MdSwitchComponent">MdSwitchComponent</a></dt>
<dd></dd>
<dt><a href="#MdTooltipComponent">MdTooltipComponent</a></dt>
<dd></dd>
<dt><a href="#MdTopAppBarComponent">MdTopAppBarComponent</a></dt>
<dd></dd>
<dt><a href="#MdTreeItemComponent">MdTreeItemComponent</a></dt>
<dd></dd>
<dt><a href="#MdTreeRowComponent">MdTreeRowComponent</a></dt>
<dd></dd>
<dt><a href="#MdTreeComponent">MdTreeComponent</a></dt>
<dd></dd>
</dl>

## Constants

<dl>
<dt><a href="#sourceLocale">sourceLocale</a></dt>
<dd><p>The locale code that templates in this source code are written in.</p>
</dd>
<dt><a href="#targetLocales">targetLocales</a></dt>
<dd><p>The other locale codes that this application is localized into. Sorted
lexicographically.</p>
</dd>
<dt><a href="#allLocales">allLocales</a></dt>
<dd><p>All valid project locale codes. Sorted lexicographically.</p>
</dd>
<dt><a href="#methods">methods</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#setPlacement">setPlacement(options)</a></dt>
<dd></dd>
<dt><a href="#closestScrollable">closestScrollable(element)</a> ⇒ <code>HTMLElement</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#MdBottomAppBarComponentActions">MdBottomAppBarComponentActions</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdCardComponentIcons">MdCardComponentIcons</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdCardComponentActions">MdCardComponentActions</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdCardComponentButtons">MdCardComponentButtons</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdDialogComponentIcons">MdDialogComponentIcons</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdDialogComponentActions">MdDialogComponentActions</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdDialogComponentButtons">MdDialogComponentButtons</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#PlacementOptions">PlacementOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#RippleControllerOptions">RippleControllerOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#RouterRoutes">RouterRoutes</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#RouterOptions">RouterOptions</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#MdSheetComponentIcons">MdSheetComponentIcons</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdSheetComponentActions">MdSheetComponentActions</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdSheetComponentButtons">MdSheetComponentButtons</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdTooltipComponentIcons">MdTooltipComponentIcons</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdTooltipComponentActions">MdTooltipComponentActions</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdTooltipComponentButtons">MdTooltipComponentButtons</a> : <code>Array</code></dt>
<dd></dd>
<dt><a href="#MdTopAppBarComponentActions">MdTopAppBarComponentActions</a> : <code>Array</code></dt>
<dd></dd>
</dl>

<a name="MdBadgeComponent"></a>

## MdBadgeComponent

**Kind**: global class  
<a name="MdBadgeComponent+properties"></a>

### mdBadgeComponent.properties

**Kind**: instance property of [<code>MdBadgeComponent</code>](#MdBadgeComponent)  
**Properties**

| Name  | Type                | Default          |
| ----- | ------------------- | ---------------- |
| label | <code>Number</code> |                  |
| [max] | <code>Number</code> | <code>999</code> |

<a name="MdBottomAppBarComponent"></a>

## MdBottomAppBarComponent

**Kind**: global class  
**Emits**: <code>event:onBottomAppBarIconButtonClick</code>, <code>event:onBottomAppBarShown</code>, <code>event:onBottomAppBarClosed</code>  
**Requires**: <code>module:MdIconButtonComponent</code>

- [MdBottomAppBarComponent](#MdBottomAppBarComponent)
    - [.properties](#MdBottomAppBarComponent+properties)
    - [.show()](#MdBottomAppBarComponent+show)
    - [.close()](#MdBottomAppBarComponent+close)
    - [.toggle()](#MdBottomAppBarComponent+toggle)

<a name="MdBottomAppBarComponent+properties"></a>

### mdBottomAppBarComponent.properties

**Kind**: instance property of [<code>MdBottomAppBarComponent</code>](#MdBottomAppBarComponent)  
**Properties**

| Name      | Type                 |
| --------- | -------------------- |
| [actions] | <code>Array</code>   |
| [open]    | <code>Boolean</code> |

<a name="MdBottomAppBarComponent+show"></a>

### mdBottomAppBarComponent.show()

**Kind**: instance method of [<code>MdBottomAppBarComponent</code>](#MdBottomAppBarComponent)  
<a name="MdBottomAppBarComponent+close"></a>

### mdBottomAppBarComponent.close()

**Kind**: instance method of [<code>MdBottomAppBarComponent</code>](#MdBottomAppBarComponent)  
<a name="MdBottomAppBarComponent+toggle"></a>

### mdBottomAppBarComponent.toggle()

**Kind**: instance method of [<code>MdBottomAppBarComponent</code>](#MdBottomAppBarComponent)  
<a name="MdButtonComponent"></a>

## MdButtonComponent

**Kind**: global class  
**Requires**: <code>module:MdIconComponent</code>  
<a name="MdButtonComponent+properties"></a>

### mdButtonComponent.properties

**Kind**: instance property of [<code>MdButtonComponent</code>](#MdButtonComponent)  
**Properties**

| Name       | Type                 | Default             |
| ---------- | -------------------- | ------------------- |
| [icon]     | <code>String</code>  |                     |
| label      | <code>String</code>  |                     |
| [variant]  | <code>String</code>  |                     |
| [type]     | <code>String</code>  | <code>button</code> |
| [disabled] | <code>Boolean</code> |                     |
| [selected] | <code>Boolean</code> |                     |

<a name="MdCardComponent"></a>

## MdCardComponent

**Kind**: global class  
**Emits**: <code>event:onCardIconButtonClick</code>, <code>event:onCardButtonClick</code>  
**Requires**: <code>module:MdIconComponent</code>, <code>module:MdIconButtonComponent</code>, <code>module:MdButtonComponent</code>  
<a name="MdCardComponent+properties"></a>

### mdCardComponent.properties

**Kind**: instance property of [<code>MdCardComponent</code>](#MdCardComponent)  
**Properties**

| Name       | Type                                                           |
| ---------- | -------------------------------------------------------------- |
| [icons]    | [<code>MdCardComponentIcons</code>](#MdCardComponentIcons)     |
| [actions]  | [<code>MdCardComponentActions</code>](#MdCardComponentActions) |
| [label]    | <code>String</code>                                            |
| [sublabel] | <code>String</code>                                            |
| [buttons]  | [<code>MdCardComponentButtons</code>](#MdCardComponentButtons) |

<a name="MdCheckboxComponent"></a>

## MdCheckboxComponent

**Kind**: global class  
**Emits**: <code>event:onCheckboxNativeInput</code>  
<a name="MdCheckboxComponent+properties"></a>

### mdCheckboxComponent.properties

**Kind**: instance property of [<code>MdCheckboxComponent</code>](#MdCheckboxComponent)  
**Properties**

| Name          | Type                 |
| ------------- | -------------------- |
| name          | <code>String</code>  |
| value         | <code>String</code>  |
| indeterminate | <code>Boolean</code> |
| checked       | <code>Boolean</code> |

<a name="MdComponent"></a>

## MdComponent

**Kind**: global class  
<a name="MdComponent+emit"></a>

### mdComponent.emit(type, [detail])

**Kind**: instance method of [<code>MdComponent</code>](#MdComponent)

| Param    | Type                |
| -------- | ------------------- |
| type     | <code>String</code> |
| [detail] | <code>Object</code> |

<a name="MdDialogComponent"></a>

## MdDialogComponent

**Kind**: global class  
**Emits**: <code>event:onDialogIconButtonClick</code>, <code>event:onDialogButtonClick</code>, <code>event:onDialogShown</code>, <code>event:onDialogClosed</code>, <code>event:onDialogScrimClosed</code>  
**Requires**: <code>module:MdScrimComponent</code>, <code>module:MdIconComponent</code>, <code>module:MdIconButtonComponent</code>, <code>module:MdButtonComponent</code>

- [MdDialogComponent](#MdDialogComponent)
    - [.properties](#MdDialogComponent+properties)
    - [.show()](#MdDialogComponent+show)
    - [.close()](#MdDialogComponent+close)
    - [.toggle()](#MdDialogComponent+toggle)

<a name="MdDialogComponent+properties"></a>

### mdDialogComponent.properties

**Kind**: instance property of [<code>MdDialogComponent</code>](#MdDialogComponent)  
**Properties**

| Name       | Type                                                               |
| ---------- | ------------------------------------------------------------------ |
| [icons]    | [<code>MdDialogComponentIcons</code>](#MdDialogComponentIcons)     |
| [actions]  | [<code>MdDialogComponentActions</code>](#MdDialogComponentActions) |
| [label]    | <code>String</code>                                                |
| [sublabel] | <code>String</code>                                                |
| [buttons]  | [<code>MdDialogComponentButtons</code>](#MdDialogComponentButtons) |
| [open]     | <code>Boolean</code>                                               |

<a name="MdDialogComponent+show"></a>

### mdDialogComponent.show()

**Kind**: instance method of [<code>MdDialogComponent</code>](#MdDialogComponent)  
<a name="MdDialogComponent+close"></a>

### mdDialogComponent.close()

**Kind**: instance method of [<code>MdDialogComponent</code>](#MdDialogComponent)  
<a name="MdDialogComponent+toggle"></a>

### mdDialogComponent.toggle()

**Kind**: instance method of [<code>MdDialogComponent</code>](#MdDialogComponent)  
<a name="MdFabComponent"></a>

## MdFabComponent

**Kind**: global class  
**Requires**: <code>module:MdIconComponent</code>

- [MdFabComponent](#MdFabComponent)
    - [.properties](#MdFabComponent+properties)
    - [.sizes](#MdFabComponent+sizes)
    - [.types](#MdFabComponent+types)
    - [.variants](#MdFabComponent+variants)

<a name="MdFabComponent+properties"></a>

### mdFabComponent.properties

**Kind**: instance property of [<code>MdFabComponent</code>](#MdFabComponent)  
**Properties**

| Name    | Type                |
| ------- | ------------------- |
| [icon]  | <code>String</code> |
| [label] | <code>String</code> |
| [type]  | <code>String</code> |
| [size]  | <code>String</code> |

<a name="MdFabComponent+sizes"></a>

### mdFabComponent.sizes

**Kind**: instance property of [<code>MdFabComponent</code>](#MdFabComponent)  
<a name="MdFabComponent+types"></a>

### mdFabComponent.types

**Kind**: instance property of [<code>MdFabComponent</code>](#MdFabComponent)  
<a name="MdFabComponent+variants"></a>

### mdFabComponent.variants

**Kind**: instance property of [<code>MdFabComponent</code>](#MdFabComponent)  
<a name="MdIconButtonComponent"></a>

## MdIconButtonComponent

**Kind**: global class  
**Emits**: <code>event:onIconButtonClick</code>  
**Requires**: <code>module:MdIconComponent</code>

- [MdIconButtonComponent](#MdIconButtonComponent)
    - [.properties](#MdIconButtonComponent+properties)
    - [.variants](#MdIconButtonComponent+variants)

<a name="MdIconButtonComponent+properties"></a>

### mdIconButtonComponent.properties

**Kind**: instance property of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  
**Properties**

| Name       | Type                 | Default                  |
| ---------- | -------------------- | ------------------------ |
| icon       | <code>String</code>  |                          |
| [variant]  | <code>String</code>  |                          |
| [type]     | <code>String</code>  | <code>icon-button</code> |
| [toggle]   | <code>Boolean</code> |                          |
| [selected] | <code>Boolean</code> |                          |
| [disabled] | <code>Boolean</code> |                          |

<a name="MdIconButtonComponent+variants"></a>

### mdIconButtonComponent.variants

**Kind**: instance property of [<code>MdIconButtonComponent</code>](#MdIconButtonComponent)  
<a name="MdIconComponent"></a>

## MdIconComponent

**Kind**: global class  
<a name="MdImageComponent"></a>

## MdImageComponent

**Kind**: global class  
<a name="MdImageComponent+properties"></a>

### mdImageComponent.properties

**Kind**: instance property of [<code>MdImageComponent</code>](#MdImageComponent)  
**Properties**

| Name     | Type                 |
| -------- | -------------------- |
| src      | <code>String</code>  |
| alt      | <code>String</code>  |
| ratio    | <code>String</code>  |
| circular | <code>Boolean</code> |

<a name="MdListItemComponent"></a>

## MdListItemComponent

**Kind**: global class  
<a name="MdListItemComponent+properties"></a>

### mdListItemComponent.properties

**Kind**: instance property of [<code>MdListItemComponent</code>](#MdListItemComponent)  
**Properties**

| Name                  | Type                 |
| --------------------- | -------------------- |
| [leadingCheckbox]     | <code>Boolean</code> |
| [leadingRadioButton]  | <code>Boolean</code> |
| [leadingSwitch]       | <code>Boolean</code> |
| [avatar]              | <code>String</code>  |
| [image]               | <code>String</code>  |
| [video]               | <code>String</code>  |
| [icon]                | <code>String</code>  |
| [label]               | <code>String</code>  |
| [sublabel]            | <code>String</code>  |
| [text]                | <code>String</code>  |
| [trailingCheckbox]    | <code>Boolean</code> |
| [trailingRadioButton] | <code>Boolean</code> |
| [trailingSwitch]      | <code>Boolean</code> |
| [routerLink]          | <code>String</code>  |
| [rippleOptions]       | <code>Object</code>  |
| [badge]               | <code>Number</code>  |

<a name="MdListRowComponent"></a>

## MdListRowComponent

**Kind**: global class  
<a name="MdListComponent"></a>

## MdListComponent

**Kind**: global class  
**Emits**: <code>event:onListItemClick</code>, <code>event:onListItemCheckboxInput</code>, <code>event:onListItemRadioButtonInput</code>, <code>event:onListItemSwitchInput</code>  
<a name="MdListComponent+properties"></a>

### mdListComponent.properties

**Kind**: instance property of [<code>MdListComponent</code>](#MdListComponent)  
**Properties**

| Name            | Type                | Default                    |
| --------------- | ------------------- | -------------------------- |
| [items]         | <code>Array</code>  | <code>[]</code>            |
| [type]          | <code>String</code> | <code>single-select</code> |
| [rippleOptions] | <code>Object</code> |                            |

<a name="MdRadioButtonComponent"></a>

## MdRadioButtonComponent

**Kind**: global class  
**Emits**: <code>event:onRadioButtonNativeInput</code>  
<a name="MdRadioButtonComponent+properties"></a>

### mdRadioButtonComponent.properties

**Kind**: instance property of [<code>MdRadioButtonComponent</code>](#MdRadioButtonComponent)  
**Properties**

| Name          | Type                 |
| ------------- | -------------------- |
| name          | <code>String</code>  |
| value         | <code>String</code>  |
| indeterminate | <code>Boolean</code> |
| checked       | <code>Boolean</code> |

<a name="RippleController"></a>

## RippleController

**Kind**: global class  
<a name="new_RippleController_new"></a>

### new RippleController(host, options)

| Param   | Type                                                             |
| ------- | ---------------------------------------------------------------- |
| host    | <code>HTMLElement</code>                                         |
| options | [<code>RippleControllerOptions</code>](#RippleControllerOptions) |

<a name="Router"></a>

## Router

**Kind**: global class  
**Emits**: <code>event:onRouterCurrentEntryChange</code>, <code>event:onRouterNavigate</code>, <code>event:onRouterNavigateError</code>, <code>event:onRouterNavigateSuccess</code>

- [Router](#Router)
    - [new Router()](#new_Router_new)
    - _instance_
        - [.params](#Router+params)
    - _static_
        - [.navigate(url)](#Router.navigate)
        - [.use(routes, options)](#Router.use)

<a name="new_Router_new"></a>

### new Router()

**Example**

```js
import { Router } from "../material/router/router";

import DemoMain from "./main/main.js";
const DemoUsers = () => import("./users/users.js").then((m) => m.default);
const DemoUser = () => import("./user/user.js").then((m) => m.default);
const DemoBlogs = () => import("./blogs/blogs.js").then((m) => m.default);
const DemoBlog = () => import("./blog/blog.js").then((m) => m.default);
const DemoError = () => import("./error/error.js").then((m) => m.default);

const beforeLoad = (next) => {
    next();
};

Router.use([
    {
        path: "",
        component: DemoMain,
        children: [
            { path: "users", beforeLoad, load: DemoUsers, children: [{ path: ":id", outlet: "user", load: DemoUser, children: [] }] },
            { path: "blogs", load: DemoBlogs, children: [{ path: ":id", load: DemoBlog, children: [] }] },
        ],
    },
    { path: "*", load: DemoError, children: [] },
]);
```

<a name="Router+params"></a>

### router.params

**Kind**: instance property of [<code>Router</code>](#Router)  
<a name="Router.navigate"></a>

### Router.navigate(url)

**Kind**: static method of [<code>Router</code>](#Router)

| Param | Type                |
| ----- | ------------------- |
| url   | <code>String</code> |

<a name="Router.use"></a>

### Router.use(routes, options)

**Kind**: static method of [<code>Router</code>](#Router)

| Param   | Type                                         |
| ------- | -------------------------------------------- |
| routes  | [<code>RouterRoutes</code>](#RouterRoutes)   |
| options | [<code>RouterOptions</code>](#RouterOptions) |

<a name="MdScrimComponent"></a>

## MdScrimComponent

**Kind**: global class  
**Emits**: <code>event:onScrimShown</code>, <code>event:onScrimClosed</code>, <code>event:onScrimClick</code>

- [MdScrimComponent](#MdScrimComponent)
    - [.properties](#MdScrimComponent+properties)
    - [.show()](#MdScrimComponent+show)
    - [.close()](#MdScrimComponent+close)
    - [.toggle()](#MdScrimComponent+toggle)

<a name="MdScrimComponent+properties"></a>

### mdScrimComponent.properties

**Kind**: instance property of [<code>MdScrimComponent</code>](#MdScrimComponent)  
**Properties**

| Name   | Type                 |
| ------ | -------------------- |
| [open] | <code>Boolean</code> |

<a name="MdScrimComponent+show"></a>

### mdScrimComponent.show()

**Kind**: instance method of [<code>MdScrimComponent</code>](#MdScrimComponent)  
<a name="MdScrimComponent+close"></a>

### mdScrimComponent.close()

**Kind**: instance method of [<code>MdScrimComponent</code>](#MdScrimComponent)  
<a name="MdScrimComponent+toggle"></a>

### mdScrimComponent.toggle()

**Kind**: instance method of [<code>MdScrimComponent</code>](#MdScrimComponent)  
<a name="MdSegmentedButtonComponent"></a>

## MdSegmentedButtonComponent

**Kind**: global class  
**Emits**: <code>event:onSegmentedButtonItemClick</code>  
**Requires**: <code>module:MdButtonComponent</code>  
<a name="MdSegmentedButtonComponent+properties"></a>

### mdSegmentedButtonComponent.properties

**Kind**: instance property of [<code>MdSegmentedButtonComponent</code>](#MdSegmentedButtonComponent)  
**Properties**

| Name   | Type                | Default                    |
| ------ | ------------------- | -------------------------- |
| items  | <code>Array</code>  |                            |
| [type] | <code>String</code> | <code>single-select</code> |

<a name="MdSheetComponent"></a>

## MdSheetComponent

**Kind**: global class  
**Emits**: <code>event:onSheetIconButtonClick</code>, <code>event:onSheetButtonClick</code>, <code>event:onSheetShown</code>, <code>event:onSheetClosed</code>, <code>event:onSheetScrimClosed</code>  
**Requires**: <code>module:MdScrimComponent</code>, <code>module:MdIconComponent</code>, <code>module:MdIconButtonComponent</code>, <code>module:MdButtonComponent</code>

- [MdSheetComponent](#MdSheetComponent)
    - [.properties](#MdSheetComponent+properties)
    - [.show()](#MdSheetComponent+show)
    - [.close()](#MdSheetComponent+close)
    - [.toggle()](#MdSheetComponent+toggle)

<a name="MdSheetComponent+properties"></a>

### mdSheetComponent.properties

**Kind**: instance property of [<code>MdSheetComponent</code>](#MdSheetComponent)  
**Properties**

| Name       | Type                                                             |
| ---------- | ---------------------------------------------------------------- |
| [icons]    | [<code>MdSheetComponentIcons</code>](#MdSheetComponentIcons)     |
| [actions]  | [<code>MdSheetComponentActions</code>](#MdSheetComponentActions) |
| [label]    | <code>String</code>                                              |
| [sublabel] | <code>String</code>                                              |
| [buttons]  | [<code>MdSheetComponentButtons</code>](#MdSheetComponentButtons) |
| [open]     | <code>Boolean</code>                                             |

<a name="MdSheetComponent+show"></a>

### mdSheetComponent.show()

**Kind**: instance method of [<code>MdSheetComponent</code>](#MdSheetComponent)  
<a name="MdSheetComponent+close"></a>

### mdSheetComponent.close()

**Kind**: instance method of [<code>MdSheetComponent</code>](#MdSheetComponent)  
<a name="MdSheetComponent+toggle"></a>

### mdSheetComponent.toggle()

**Kind**: instance method of [<code>MdSheetComponent</code>](#MdSheetComponent)  
<a name="MdSwitchComponent"></a>

## MdSwitchComponent

**Kind**: global class  
**Emits**: <code>event:onSwitchNativeInput</code>  
<a name="MdSwitchComponent+properties"></a>

### mdSwitchComponent.properties

**Kind**: instance property of [<code>MdSwitchComponent</code>](#MdSwitchComponent)  
**Properties**

| Name          | Type                 |
| ------------- | -------------------- |
| name          | <code>String</code>  |
| value         | <code>String</code>  |
| indeterminate | <code>Boolean</code> |
| checked       | <code>Boolean</code> |
| icons         | <code>Array</code>   |

<a name="MdTooltipComponent"></a>

## MdTooltipComponent

**Kind**: global class  
**Emits**: <code>event:onTooltipIconButtonClick</code>, <code>event:onTooltipButtonClick</code>, <code>event:onTooltipShown</code>, <code>event:onTooltipClosed</code>, <code>event:onTooltipScrimClosed</code>  
**Requires**: <code>module:MdScrimComponent</code>, <code>module:MdIconComponent</code>, <code>module:MdIconButtonComponent</code>, <code>module:MdButtonComponent</code>

- [MdTooltipComponent](#MdTooltipComponent)
    - [.properties](#MdTooltipComponent+properties)
    - [.show()](#MdTooltipComponent+show)
    - [.close()](#MdTooltipComponent+close)
    - [.toggle()](#MdTooltipComponent+toggle)

<a name="MdTooltipComponent+properties"></a>

### mdTooltipComponent.properties

**Kind**: instance property of [<code>MdTooltipComponent</code>](#MdTooltipComponent)  
**Properties**

| Name       | Type                                                                 |
| ---------- | -------------------------------------------------------------------- |
| [icons]    | [<code>MdTooltipComponentIcons</code>](#MdTooltipComponentIcons)     |
| [actions]  | [<code>MdTooltipComponentActions</code>](#MdTooltipComponentActions) |
| [label]    | <code>String</code>                                                  |
| [sublabel] | <code>String</code>                                                  |
| [buttons]  | [<code>MdTooltipComponentButtons</code>](#MdTooltipComponentButtons) |
| [open]     | <code>Boolean</code>                                                 |

<a name="MdTooltipComponent+show"></a>

### mdTooltipComponent.show()

**Kind**: instance method of [<code>MdTooltipComponent</code>](#MdTooltipComponent)  
<a name="MdTooltipComponent+close"></a>

### mdTooltipComponent.close()

**Kind**: instance method of [<code>MdTooltipComponent</code>](#MdTooltipComponent)  
<a name="MdTooltipComponent+toggle"></a>

### mdTooltipComponent.toggle()

**Kind**: instance method of [<code>MdTooltipComponent</code>](#MdTooltipComponent)  
<a name="MdTopAppBarComponent"></a>

## MdTopAppBarComponent

**Kind**: global class  
**Emits**: <code>event:onTopAppBarIconButtonClick</code>, <code>event:onTopAppBarShown</code>, <code>event:onTopAppBarClosed</code>  
**Requires**: <code>module:MdIconButtonComponent</code>

- [MdTopAppBarComponent](#MdTopAppBarComponent)
    - [.properties](#MdTopAppBarComponent+properties)
    - [.show()](#MdTopAppBarComponent+show)
    - [.close()](#MdTopAppBarComponent+close)
    - [.toggle()](#MdTopAppBarComponent+toggle)

<a name="MdTopAppBarComponent+properties"></a>

### mdTopAppBarComponent.properties

**Kind**: instance property of [<code>MdTopAppBarComponent</code>](#MdTopAppBarComponent)  
**Properties**

| Name              | Type                                                                     |
| ----------------- | ------------------------------------------------------------------------ |
| [leadingActions]  | [<code>MdTopAppBarComponentActions</code>](#MdTopAppBarComponentActions) |
| [label]           | <code>String</code>                                                      |
| [sublabel]        | <code>String</code>                                                      |
| [trailingActions] | [<code>MdTopAppBarComponentActions</code>](#MdTopAppBarComponentActions) |
| [open]            | <code>Boolean</code>                                                     |

<a name="MdTopAppBarComponent+show"></a>

### mdTopAppBarComponent.show()

**Kind**: instance method of [<code>MdTopAppBarComponent</code>](#MdTopAppBarComponent)  
<a name="MdTopAppBarComponent+close"></a>

### mdTopAppBarComponent.close()

**Kind**: instance method of [<code>MdTopAppBarComponent</code>](#MdTopAppBarComponent)  
<a name="MdTopAppBarComponent+toggle"></a>

### mdTopAppBarComponent.toggle()

**Kind**: instance method of [<code>MdTopAppBarComponent</code>](#MdTopAppBarComponent)  
<a name="MdTreeItemComponent"></a>

## MdTreeItemComponent

**Kind**: global class  
<a name="MdTreeItemComponent+properties"></a>

### mdTreeItemComponent.properties

**Kind**: instance property of [<code>MdTreeItemComponent</code>](#MdTreeItemComponent)  
**Properties**

| Name         | Type                 |
| ------------ | -------------------- |
| [selected]   | <code>Boolean</code> |
| [expanded]   | <code>Boolean</code> |
| label        | <code>String</code>  |
| [routerLink] | <code>String</code>  |

<a name="MdTreeRowComponent"></a>

## MdTreeRowComponent

**Kind**: global class  
<a name="MdTreeComponent"></a>

## MdTreeComponent

**Kind**: global class  
<a name="MdTreeComponent+properties"></a>

### mdTreeComponent.properties

**Kind**: instance property of [<code>MdTreeComponent</code>](#MdTreeComponent)  
**Properties**

| Name    | Type               | Default         |
| ------- | ------------------ | --------------- |
| [items] | <code>Array</code> | <code>[]</code> |

<a name="sourceLocale"></a>

## sourceLocale

The locale code that templates in this source code are written in.

**Kind**: global constant  
<a name="targetLocales"></a>

## targetLocales

The other locale codes that this application is localized into. Sorted
lexicographically.

**Kind**: global constant  
<a name="allLocales"></a>

## allLocales

All valid project locale codes. Sorted lexicographically.

**Kind**: global constant  
<a name="methods"></a>

## methods

**Kind**: global constant  
<a name="setPlacement"></a>

## setPlacement(options)

**Kind**: global function

| Param   | Type                                               |
| ------- | -------------------------------------------------- |
| options | [<code>PlacementOptions</code>](#PlacementOptions) |

<a name="closestScrollable"></a>

## closestScrollable(element) ⇒ <code>HTMLElement</code>

**Kind**: global function

| Param   | Type                     |
| ------- | ------------------------ |
| element | <code>HTMLElement</code> |

<a name="MdBottomAppBarComponentActions"></a>

## MdBottomAppBarComponentActions : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default                  |
| ----------- | -------------------- | ------------------------ |
| icon        | <code>String</code>  |                          |
| [variant]   | <code>String</code>  |                          |
| [type]      | <code>String</code>  |                          |
| [toggle]    | <code>Boolean</code> |                          |
| [selected]  | <code>Boolean</code> |                          |
| [disabled]  | <code>Boolean</code> |                          |
| [component] | <code>String</code>  | <code>icon-button</code> |

<a name="MdCardComponentIcons"></a>

## MdCardComponentIcons : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                | Default           |
| ----------- | ------------------- | ----------------- |
| icon        | <code>String</code> |                   |
| [component] | <code>String</code> | <code>icon</code> |

<a name="MdCardComponentActions"></a>

## MdCardComponentActions : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default                  |
| ----------- | -------------------- | ------------------------ |
| icon        | <code>String</code>  |                          |
| [variant]   | <code>String</code>  |                          |
| [type]      | <code>String</code>  |                          |
| [toggle]    | <code>Boolean</code> |                          |
| [selected]  | <code>Boolean</code> |                          |
| [disabled]  | <code>Boolean</code> |                          |
| [component] | <code>String</code>  | <code>icon-button</code> |

<a name="MdCardComponentButtons"></a>

## MdCardComponentButtons : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default             |
| ----------- | -------------------- | ------------------- |
| [icon]      | <code>String</code>  |                     |
| label       | <code>String</code>  |                     |
| [variant]   | <code>String</code>  |                     |
| [type]      | <code>String</code>  |                     |
| [disabled]  | <code>Boolean</code> |                     |
| [selected]  | <code>Boolean</code> |                     |
| [component] | <code>String</code>  | <code>button</code> |

<a name="MdDialogComponentIcons"></a>

## MdDialogComponentIcons : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                | Default           |
| ----------- | ------------------- | ----------------- |
| icon        | <code>String</code> |                   |
| [component] | <code>String</code> | <code>icon</code> |

<a name="MdDialogComponentActions"></a>

## MdDialogComponentActions : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default                  |
| ----------- | -------------------- | ------------------------ |
| icon        | <code>String</code>  |                          |
| [variant]   | <code>String</code>  |                          |
| [type]      | <code>String</code>  |                          |
| [toggle]    | <code>Boolean</code> |                          |
| [selected]  | <code>Boolean</code> |                          |
| [disabled]  | <code>Boolean</code> |                          |
| [component] | <code>String</code>  | <code>icon-button</code> |

<a name="MdDialogComponentButtons"></a>

## MdDialogComponentButtons : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default             |
| ----------- | -------------------- | ------------------- |
| [icon]      | <code>String</code>  |                     |
| label       | <code>String</code>  |                     |
| [variant]   | <code>String</code>  |                     |
| [type]      | <code>String</code>  |                     |
| [disabled]  | <code>Boolean</code> |                     |
| [selected]  | <code>Boolean</code> |                     |
| [component] | <code>String</code>  | <code>button</code> |

<a name="PlacementOptions"></a>

## PlacementOptions : <code>Object</code>

**Kind**: global typedef  
**Properties**

| Name         | Type                     | Default                                                                                                                                                                                                                                                                                                                                                                             |
| ------------ | ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| container    | <code>HTMLElement</code> |                                                                                                                                                                                                                                                                                                                                                                                     |
| trigger      | <code>HTMLElement</code> |                                                                                                                                                                                                                                                                                                                                                                                     |
| boundary     | <code>HTMLElement</code> |                                                                                                                                                                                                                                                                                                                                                                                     |
| [offset]     | <code>Number</code>      | <code>0</code>                                                                                                                                                                                                                                                                                                                                                                      |
| [placements] | <code>Array</code>       | <code>[&quot;top-end&quot;, &quot;top&quot;, &quot;top-start&quot;, &quot;top-right&quot;, &quot;right-end&quot;, &quot;right&quot;, &quot;right-start&quot;, &quot;bottom-right&quot;, &quot;bottom-start&quot;, &quot;bottom&quot;, &quot;bottom-end&quot;, &quot;bottom-left&quot;, &quot;left-start&quot;, &quot;left&quot;, &quot;left-end&quot;, &quot;top-left&quot;]</code> |

<a name="RippleControllerOptions"></a>

## RippleControllerOptions : <code>Object</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                            | Default                |
| ----------- | ------------------------------- | ---------------------- |
| [centered]  | <code>Boolean</code>            |                        |
| [radius]    | <code>Number</code>             |                        |
| [trigger]   | <code>String/HTMLElement</code> | <code>this.host</code> |
| [unbounded] | <code>Boolean</code>            |                        |
| [container] | <code>String/HTMLElement</code> | <code>this.host</code> |

<a name="RouterRoutes"></a>

## RouterRoutes : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name         | Type                     |
| ------------ | ------------------------ |
| path         | <code>String</code>      |
| component    | <code>HTMLElement</code> |
| load         | <code>function</code>    |
| [beforeLoad] | <code>function</code>    |
| [outlet]     | <code>String</code>      |
| [children]   | <code>Array</code>       |

<a name="RouterOptions"></a>

## RouterOptions : <code>Object</code>

**Kind**: global typedef  
**Properties**

| Name                 | Type                 | Default           |
| -------------------- | -------------------- | ----------------- |
| [historyApiFallback] | <code>Boolean</code> | <code>true</code> |

<a name="MdSheetComponentIcons"></a>

## MdSheetComponentIcons : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                | Default           |
| ----------- | ------------------- | ----------------- |
| icon        | <code>String</code> |                   |
| [component] | <code>String</code> | <code>icon</code> |

<a name="MdSheetComponentActions"></a>

## MdSheetComponentActions : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default                  |
| ----------- | -------------------- | ------------------------ |
| icon        | <code>String</code>  |                          |
| [variant]   | <code>String</code>  |                          |
| [type]      | <code>String</code>  |                          |
| [toggle]    | <code>Boolean</code> |                          |
| [selected]  | <code>Boolean</code> |                          |
| [disabled]  | <code>Boolean</code> |                          |
| [component] | <code>String</code>  | <code>icon-button</code> |

<a name="MdSheetComponentButtons"></a>

## MdSheetComponentButtons : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default             |
| ----------- | -------------------- | ------------------- |
| [icon]      | <code>String</code>  |                     |
| label       | <code>String</code>  |                     |
| [variant]   | <code>String</code>  |                     |
| [type]      | <code>String</code>  |                     |
| [disabled]  | <code>Boolean</code> |                     |
| [selected]  | <code>Boolean</code> |                     |
| [component] | <code>String</code>  | <code>button</code> |

<a name="MdTooltipComponentIcons"></a>

## MdTooltipComponentIcons : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                | Default           |
| ----------- | ------------------- | ----------------- |
| icon        | <code>String</code> |                   |
| [component] | <code>String</code> | <code>icon</code> |

<a name="MdTooltipComponentActions"></a>

## MdTooltipComponentActions : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default                  |
| ----------- | -------------------- | ------------------------ |
| icon        | <code>String</code>  |                          |
| [variant]   | <code>String</code>  |                          |
| [type]      | <code>String</code>  |                          |
| [toggle]    | <code>Boolean</code> |                          |
| [selected]  | <code>Boolean</code> |                          |
| [disabled]  | <code>Boolean</code> |                          |
| [component] | <code>String</code>  | <code>icon-button</code> |

<a name="MdTooltipComponentButtons"></a>

## MdTooltipComponentButtons : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default             |
| ----------- | -------------------- | ------------------- |
| [icon]      | <code>String</code>  |                     |
| label       | <code>String</code>  |                     |
| [variant]   | <code>String</code>  |                     |
| [type]      | <code>String</code>  |                     |
| [disabled]  | <code>Boolean</code> |                     |
| [selected]  | <code>Boolean</code> |                     |
| [component] | <code>String</code>  | <code>button</code> |

<a name="MdTopAppBarComponentActions"></a>

## MdTopAppBarComponentActions : <code>Array</code>

**Kind**: global typedef  
**Properties**

| Name        | Type                 | Default                  |
| ----------- | -------------------- | ------------------------ |
| icon        | <code>String</code>  |                          |
| [variant]   | <code>String</code>  |                          |
| [type]      | <code>String</code>  |                          |
| [toggle]    | <code>Boolean</code> |                          |
| [selected]  | <code>Boolean</code> |                          |
| [disabled]  | <code>Boolean</code> |                          |
| [component] | <code>String</code>  | <code>icon-button</code> |
