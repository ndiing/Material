# Material 3

## Index
- [MdBadgeComponent](#MdBadgeComponent)
- [MdBottomAppBarComponent](#MdBottomAppBarComponent)
- [MdBottomSheetComponent](#MdBottomSheetComponent)
- [MdButtonComponent](#MdButtonComponent)
- [MdCardComponent](#MdCardComponent)
- [MdCheckboxComponent](#MdCheckboxComponent)
- [MdChipComponent](#MdChipComponent)
- [MdComponent](#MdComponent)
- [MdDataTableCellComponent](#MdDataTableCellComponent)
- [MdDataTableComponent](#MdDataTableComponent)
- [MdDatetimePickerComponent](#MdDatetimePickerComponent)
- [MdDialogComponent](#MdDialogComponent)
- [MdDividerComponent](#MdDividerComponent)
- [Dragger](#Dragger)
- [MdFabComponent](#MdFabComponent)
- [MdFormComponent](#MdFormComponent)
- [MdIconComponent](#MdIconComponent)
- [MdIconButtonComponent](#MdIconButtonComponent)
- [MdImageComponent](#MdImageComponent)
- [MdListItemComponent](#MdListItemComponent)
- [MdListRowComponent](#MdListRowComponent)
- [MdListComponent](#MdListComponent)
- [undefined](#undefined)
- [MdMenuComponent](#MdMenuComponent)
- [MdNavigationBarComponent](#MdNavigationBarComponent)
- [MdNavigationDrawerComponent](#MdNavigationDrawerComponent)
- [MdNavigationListItemComponent](#MdNavigationListItemComponent)
- [MdNavigationListRowComponent](#MdNavigationListRowComponent)
- [MdNavigationListComponent](#MdNavigationListComponent)
- [MdNavigationRailComponent](#MdNavigationRailComponent)
- [PopperController](#PopperController)
- [MdProgressIndicatorComponent](#MdProgressIndicatorComponent)
- [MdRadioButtonComponent](#MdRadioButtonComponent)
- [RippleController](#RippleController)
- [Router](#Router)
- [MdScrimComponent](#MdScrimComponent)
- [MdSegmentedButtonComponent](#MdSegmentedButtonComponent)
- [MdSheetComponent](#MdSheetComponent)
- [MdSideSheetComponent](#MdSideSheetComponent)
- [MdSliderComponent](#MdSliderComponent)
- [MdSnackbarComponent](#MdSnackbarComponent)
- [Store](#Store)
- [MdSwitchComponent](#MdSwitchComponent)
- [MdTabComponent](#MdTabComponent)
- [MdTabsComponent](#MdTabsComponent)
- [MdTextFieldComponent](#MdTextFieldComponent)
- [MdTooltipComponent](#MdTooltipComponent)
- [MdTopAppBarComponent](#MdTopAppBarComponent)
- [MdTreeItemComponent](#MdTreeItemComponent)
- [MdTreeRowComponent](#MdTreeRowComponent)
- [MdTreeComponent](#MdTreeComponent)

---
### MdBadgeComponent

#### Instance properties

name|type
---|---
<code>label</code>|Number
<code>max</code>|Number

#### Instance methods

- <code>constructor()</code>

#### Inheritance

<code>MdComponent</code>

---
### MdBottomAppBarComponent

#### Instance properties

name|type
---|---
<code>actions</code>|Array
<code>fab</code>|String
<code>open</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onBottomAppBarIconButtonClick</code>|{"detail":{"event":{}}}
<code>onBottomAppBarFabClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdBottomSheetComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>buttons</code>|Array
<code>open</code>|Boolean
<code>modal</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onBottomSheetIconButtonClick</code>|{"detail":{"event":{}}}
<code>onBottomSheetButtonClick</code>|{"detail":{"event":{}}}
<code>onBottomSheetScrimClosed</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdButtonComponent

#### Instance properties

name|type
---|---
<code>icon</code>|String
<code>label</code>|String
<code>variant</code>|String
<code>type</code>|String
<code>disabled</code>|Boolean
<code>selected</code>|Boolean

#### Instance methods

- <code>constructor()</code>

#### Inheritance

<code>MdComponent</code>

---
### MdCardComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>buttons</code>|Array

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onCardIconButtonClick</code>|{"detail":{"event":{}}}
<code>onCardButtonClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdCheckboxComponent

#### Instance properties

name|type
---|---
<code>name</code>|String
<code>value</code>|String
<code>indeterminate</code>|Boolean
<code>checked</code>|Boolean

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onCheckboxNativeInput</code>|{"detail":{"event":{}}}
<code>onCheckboxNativeReset</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdChipComponent

#### Instance properties

name|type
---|---
<code>items</code>|Array
<code>type</code>|String

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onChipClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdComponent

#### Instance methods

- <code>emit(type, detail)</code>
name|type|default
---|---|---
<code>type</code>|String|undefined
<code>detail</code>|String|undefined

#### Inheritance

<code>LitElement</code>

---
### MdDataTableCellComponent

#### Instance properties

name|type
---|---
<code>checkbox</code>|Boolean
<code>avatar</code>|String
<code>icon</code>|String
<code>label</code>|String
<code>sublabel</code>|String
<code>action</code>|String

#### Instance methods

- <code>constructor()</code>

#### Inheritance

<code>MdComponent</code>

---
### MdDataTableComponent

#### Instance properties

name|type
---|---
<code>headers</code>|Array
<code>bodies</code>|Array
<code>data</code>|Array
<code>footers</code>|Array

#### Instance methods

- <code>constructor()</code>

#### Inheritance

<code>MdComponent</code>

---
### MdDatetimePickerComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>buttons</code>|Array
<code>open</code>|Boolean
<code>index</code>|Number

#### Instance methods

- <code>startOfDay()</code>
- <code>years()</code>
- <code>months()</code>
- <code>weekdays()</code>
- <code>days()</code>
- <code>hours()</code>
- <code>minutes()</code>
- <code>label()</code>
- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onDatetimePickerLabelClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerIconButtonPrevClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerIconButtonNextClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerIconButtonClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerYearItemClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerMonthItemClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerDayItemClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerHourItemClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerMinuteItemClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerButtonCancelClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerButtonOkClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerButtonClick</code>|{"detail":{"event":{}}}
<code>onDatetimePickerScrimClosed</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdDialogComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>buttons</code>|Array
<code>open</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onDialogIconButtonClick</code>|{"detail":{"event":{}}}
<code>onDialogButtonClick</code>|{"detail":{"event":{}}}
<code>onDialogScrimClosed</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdDividerComponent

#### Instance methods


#### Inheritance

<code>MdComponent</code>

---
### Dragger

### MdFabComponent

#### Instance properties

name|type
---|---
<code>icon</code>|String
<code>label</code>|String
<code>type</code>|String
<code>size</code>|String
<code>variant</code>|String

#### Instance methods

- <code>constructor()</code>

#### Inheritance

<code>MdComponent</code>

---
### MdFormComponent

#### Instance properties

name|type
---|---
<code>acceptCharset</code>|String
<code>action</code>|String
<code>autocomplete</code>|String
<code>enctype</code>|String
<code>method</code>|String
<code>name</code>|String
<code>noValidate</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>formNative()</code>
- <code>reset()</code>
- <code>submit(submitButton)</code>
name|type|default
---|---|---
<code>submitButton</code>|String|undefined

#### Events

name|event
---|---
<code>onFormNativeFormdata</code>|{"detail":{"event":{}}}
<code>onFormNativeReset</code>|{"detail":{"event":{}}}
<code>onFormNativeSubmit</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdIconComponent

#### Instance methods


#### Inheritance

<code>MdComponent</code>

---
### MdIconButtonComponent

#### Instance properties

name|type
---|---
<code>icon</code>|String
<code>variant</code>|String
<code>type</code>|String
<code>toggle</code>|Boolean
<code>selected</code>|Boolean
<code>disabled</code>|Boolean

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onIconButtonClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdImageComponent

#### Instance properties

name|type
---|---
<code>src</code>|String
<code>alt</code>|String
<code>ratio</code>|String
<code>circular</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>styleInfo()</code>

#### Inheritance

<code>MdComponent</code>

---
### MdListItemComponent

#### Instance properties

name|type
---|---
<code>leadingCheckbox</code>|Boolean
<code>leadingRadioButton</code>|Boolean
<code>leadingSwitch</code>|Boolean
<code>avatar</code>|String
<code>image</code>|String
<code>video</code>|String
<code>icon</code>|String
<code>label</code>|String
<code>sublabel</code>|String
<code>text</code>|String
<code>trailingCheckbox</code>|Boolean
<code>trailingRadioButton</code>|Boolean
<code>trailingSwitch</code>|Boolean
<code>selected</code>|Boolean
<code>disabled</code>|Boolean
<code>routerLink</code>|String
<code>rippleOptions</code>|Object
<code>badge</code>|Number

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onListItemSelected</code>|{"detail":{"listItem":"this"}}

#### Inheritance

<code>MdComponent</code>

---
### MdListRowComponent

#### Instance methods


#### Inheritance

<code>MdComponent</code>

---
### MdListComponent

#### Instance properties

name|type
---|---
<code>items</code>|Array
<code>type</code>|String
<code>rippleOptions</code>|Object

#### Instance methods

- <code>constructor()</code>
- <code>multiSelect(data)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined
- <code>singleSelect(data)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined

#### Events

name|event
---|---
<code>onListItemClick</code>|{"detail":{"event":{}}}
<code>onListItemCheckboxNativeInput</code>|{"detail":{"event":{}}}
<code>onListItemRadioButtonNativeInput</code>|{"detail":{"event":{}}}
<code>onListItemSwitchNativeInput</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### undefined

### MdMenuComponent

#### Instance properties

name|type
---|---
<code>open</code>|Boolean
<code>items</code>|Array

#### Instance methods

- <code>constructor()</code>
- <code>show(options)</code>
name|type|default
---|---|---
<code>options</code>|Object|{}
- <code>close()</code>
- <code>toggle(options)</code>
name|type|default
---|---|---
<code>options</code>|String|undefined

#### Inheritance

<code>MdComponent</code>

---
### MdNavigationBarComponent

#### Instance properties

name|type
---|---
<code>open</code>|Boolean
<code>items</code>|Array

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Inheritance

<code>MdComponent</code>

---
### MdNavigationDrawerComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>items</code>|Array
<code>open</code>|Boolean
<code>modal</code>|Boolean
<code>view</code>|String

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onNavigationDrawerIconButtonClick</code>|{"detail":{"event":{}}}
<code>onNavigationDrawerScrimClosed</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdNavigationListItemComponent

#### Instance properties

name|type
---|---
<code>icon</code>|String
<code>label</code>|String
<code>sublabel</code>|String
<code>selected</code>|Boolean
<code>disabled</code>|Boolean
<code>routerLink</code>|String
<code>rippleOptions</code>|Object
<code>badge</code>|Number

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onNavigationListItemSelected</code>|{"detail":{"navigationListItem":"this"}}

#### Inheritance

<code>MdComponent</code>

---
### MdNavigationListRowComponent

#### Instance methods


#### Inheritance

<code>MdComponent</code>

---
### MdNavigationListComponent

#### Instance properties

name|type
---|---
<code>items</code>|Array
<code>rippleOptions</code>|Object

#### Instance methods

- <code>constructor()</code>
- <code>singleSelect(data)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined

#### Events

name|event
---|---
<code>onNavigationListItemClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdNavigationRailComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>items</code>|Array
<code>open</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onNavigationRailIconButtonClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### PopperController

#### Instance methods

- <code>show(options)</code>
name|type|default
---|---|---
<code>options</code>|Object|{}
- <code>closestScrollable(element)</code>
name|type|default
---|---|---
<code>element</code>|String|undefined

### MdProgressIndicatorComponent

#### Instance properties

name|type
---|---
<code>variant</code>|String
<code>max</code>|Number
<code>value</code>|Number

#### Instance methods

- <code>constructor()</code>

#### Inheritance

<code>MdComponent</code>

---
### MdRadioButtonComponent

#### Instance properties

name|type
---|---
<code>name</code>|String
<code>value</code>|String
<code>indeterminate</code>|Boolean
<code>checked</code>|Boolean

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onRadioButtonNativeInput</code>|{"detail":{"event":{}}}
<code>onRadioButtonNativeReset</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### RippleController

#### Instance methods

- <code>constructor(host, options)</code>
name|type|default
---|---|---
<code>host</code>|String|undefined
<code>options</code>|String|undefined
- <code>hostConnected()</code>
- <code>hostDisconnected()</code>

### Router

#### Instance methods

- <code>get(pathname, routes, parent, result)</code>
name|type|default
---|---|---
<code>pathname</code>|undefined|this.pathname
<code>routes</code>|undefined|this.routes
<code>parent</code>|String|null
<code>result</code>|Array|[]
- <code>pathname()</code>
- <code>removeComponent(routes)</code>
name|type|default
---|---|---
<code>routes</code>|String|undefined
- <code>getOutlet(container, route)</code>
name|type|default
---|---|---
<code>container</code>|String|undefined
<code>route</code>|String|undefined
- <code>setContainer(route)</code>
name|type|default
---|---|---
<code>route</code>|String|undefined
- <code>loadComponent(route)</code>
name|type|default
---|---|---
<code>route</code>|String|undefined
- <code>setController()</code>
- <code>navigate(url)</code>
name|type|default
---|---|---
<code>url</code>|String|undefined
- <code>emit(type, detail)</code>
name|type|default
---|---|---
<code>type</code>|String|undefined
<code>detail</code>|String|undefined
- <code>use(routes, options)</code>
name|type|default
---|---|---
<code>routes</code>|Array|[]
<code>options</code>|Object|{}

### MdScrimComponent

#### Instance properties

name|type
---|---
<code>open</code>|Boolean

#### Instance methods

- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onScrimClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdSegmentedButtonComponent

#### Instance properties

name|type
---|---
<code>items</code>|Array
<code>type</code>|String

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onSegmentedButtonItemClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdSheetComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>buttons</code>|Array
<code>open</code>|Boolean
<code>region</code>|String
<code>modal</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onSheetIconButtonClick</code>|{"detail":{"event":{}}}
<code>onSheetButtonClick</code>|{"detail":{"event":{}}}
<code>onSheetScrimClosed</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdSideSheetComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>buttons</code>|Array
<code>open</code>|Boolean
<code>modal</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onSideSheetIconButtonClick</code>|{"detail":{"event":{}}}
<code>onSideSheetButtonClick</code>|{"detail":{"event":{}}}
<code>onSideSheetScrimClosed</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdSliderComponent

#### Instance properties

name|type
---|---
<code>min</code>|Number
<code>max</code>|Number
<code>step</code>|Number
<code>variant</code>|String
<code>name</code>|String
<code>value</code>|undefined
<code>converter</code>|undefined

#### Instance methods

- <code>constructor()</code>
- <code>indicators()</code>
- <code>sliderNatives()</code>
- <code>updateValue()</code>
- <code>percentage(value, min, max)</code>
name|type|default
---|---|---
<code>value</code>|String|undefined
<code>min</code>|undefined|this.min
<code>max</code>|undefined|this.max

#### Events

name|event
---|---
<code>onSliderNativeInput</code>|{"detail":{"event":{}}}
<code>onSliderNativeReset</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdSnackbarComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>buttons</code>|Array
<code>open</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onSnackbarIconButtonClick</code>|{"detail":{"event":{}}}
<code>onSnackbarButtonClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### Store

#### Instance methods

- <code>constructor(data, options)</code>
name|type|default
---|---|---
<code>data</code>|Object|[]
<code>options</code>|Object|{}
- <code>sort(data, sorters)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined
<code>sorters</code>|String|undefined
- <code>deepSearch(item, q)</code>
name|type|default
---|---|---
<code>item</code>|String|undefined
<code>q</code>|String|undefined
- <code>search(data, q)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined
<code>q</code>|String|undefined
- <code>getNestedValue(item, name)</code>
name|type|default
---|---|---
<code>item</code>|String|undefined
<code>name</code>|String|undefined
- <code>filter(data, filters)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined
<code>filters</code>|String|undefined
- <code>range(data, _start, _end)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined
<code>_start</code>|String|undefined
<code>_end</code>|String|undefined
- <code>paginate(data, _page, _limit)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined
<code>_page</code>|String|undefined
<code>_limit</code>|String|undefined
- <code>get(options)</code>
name|type|default
---|---|---
<code>options</code>|Object|{}

### MdSwitchComponent

#### Instance properties

name|type
---|---
<code>name</code>|String
<code>value</code>|String
<code>indeterminate</code>|Boolean
<code>checked</code>|Boolean
<code>icons</code>|Array

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onSwitchNativeInput</code>|{"detail":{"event":{}}}
<code>onSwitchNativeReset</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdTabComponent

#### Instance properties

name|type
---|---
<code>icon</code>|String
<code>label</code>|String
<code>sublabel</code>|String
<code>selected</code>|Boolean
<code>disabled</code>|Boolean
<code>routerLink</code>|String
<code>rippleOptions</code>|Object
<code>badge</code>|Number

#### Instance methods

- <code>constructor()</code>

#### Events

name|event
---|---
<code>onTabSelected</code>|{"detail":{"tab":"this"}}

#### Inheritance

<code>MdComponent</code>

---
### MdTabsComponent

#### Instance properties

name|type
---|---
<code>items</code>|Array
<code>rippleOptions</code>|Object
<code>variant</code>|String

#### Instance methods

- <code>constructor()</code>
- <code>singleSelect(data)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined

#### Events

name|event
---|---
<code>onTabClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdTextFieldComponent

#### Instance properties

name|type
---|---
<code>label</code>|String
<code>separateLabel</code>|Boolean
<code>icons</code>|Array
<code>prefix</code>|String
<code>suffix</code>|String
<code>actions</code>|Array
<code>text</code>|String
<code>error</code>|String
<code>counter</code>|String
<code>name</code>|String
<code>type</code>|String
<code>value</code>|String
<code>placeholder</code>|String
<code>title</code>|String
<code>autocomplete</code>|String
<code>required</code>|Boolean
<code>readOnly</code>|Boolean
<code>variant</code>|String
<code>disabled</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>actions2()</code>
- <code>textFieldNative()</code>

#### Events

name|event
---|---
<code>onTextFieldFocus</code>|{"detail":{"event":{}}}
<code>onTextFieldBlur</code>|{"detail":{"event":{}}}
<code>onTextFieldInput</code>|{"detail":{"event":{}}}
<code>onTextFieldSearch</code>|{"detail":{"event":{}}}
<code>onTextFieldInvalid</code>|{"detail":{"event":{}}}
<code>onTextFieldReset</code>|{"detail":{"event":{}}}
<code>onTextFieldIconButtonClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdTooltipComponent

#### Instance properties

name|type
---|---
<code>icons</code>|Array
<code>actions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>buttons</code>|Array
<code>open</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>show(options)</code>
name|type|default
---|---|---
<code>options</code>|String|undefined
- <code>close()</code>
- <code>toggle(options)</code>
name|type|default
---|---|---
<code>options</code>|String|undefined

#### Events

name|event
---|---
<code>onTooltipIconButtonClick</code>|{"detail":{"event":{}}}
<code>onTooltipButtonClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdTopAppBarComponent

#### Instance properties

name|type
---|---
<code>leadingActions</code>|Array
<code>label</code>|String
<code>sublabel</code>|String
<code>trailingActions</code>|Array
<code>open</code>|Boolean

#### Instance methods

- <code>constructor()</code>
- <code>show()</code>
- <code>close()</code>
- <code>toggle()</code>

#### Events

name|event
---|---
<code>onTopAppBarIconButtonClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
### MdTreeItemComponent

#### Instance properties

name|type
---|---
<code>selected</code>|Boolean
<code>expanded</code>|Boolean
<code>indent</code>|String
<code>actions</code>|Array
<code>nodeIcons</code>|Array
<code>leafIcons</code>|Array
<code>label</code>|String
<code>routerLink</code>|String

#### Instance methods

- <code>constructor()</code>
- <code>action()</code>
- <code>icon()</code>

#### Events

name|event
---|---
<code>onTreeItemSelected</code>|{"detail":{"treeItem":"this"}}

#### Inheritance

<code>MdComponent</code>

---
### MdTreeRowComponent

#### Instance methods


#### Inheritance

<code>MdComponent</code>

---
### MdTreeComponent

#### Instance properties

name|type
---|---
<code>items</code>|Array
<code>items2</code>|Array

#### Instance methods

- <code>constructor()</code>
- <code>flatten(items, parent, indent)</code>
name|type|default
---|---|---
<code>items</code>|Array|undefined
<code>parent</code>|String|undefined
<code>indent</code>|Number|0
- <code>toggle(data)</code>
name|type|default
---|---|---
<code>data</code>|Object|undefined

#### Events

name|event
---|---
<code>onTreeItemClick</code>|{"detail":{"event":{}}}

#### Inheritance

<code>MdComponent</code>

---
