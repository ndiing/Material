# MdBadgeComponent

## Instance properties

name|type
---|---
label|Number
max|Number

## Instance methods

### constructor()

## Inheritance

MdComponent

---
# MdBottomAppBarComponent

## Instance properties

name|type
---|---
actions|Array
fab|String
open|Boolean

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onBottomAppBarIconButtonClick|{"detail":{"event":{}}}
onBottomAppBarFabClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdBottomSheetComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
label|String
sublabel|String
buttons|Array
open|Boolean
modal|Boolean

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onBottomSheetIconButtonClick|{"detail":{"event":{}}}
onBottomSheetButtonClick|{"detail":{"event":{}}}
onBottomSheetScrimClosed|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdButtonComponent

## Instance properties

name|type
---|---
icon|String
label|String
variant|String
type|String
disabled|Boolean
selected|Boolean

## Instance methods

### constructor()

## Inheritance

MdComponent

---
# MdCardComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
label|String
sublabel|String
buttons|Array

## Instance methods

### constructor()

## Events

name|event
---|---
onCardIconButtonClick|{"detail":{"event":{}}}
onCardButtonClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdCheckboxComponent

## Instance properties

name|type
---|---
name|String
value|String
indeterminate|Boolean
checked|Boolean

## Instance methods

### constructor()

## Events

name|event
---|---
onCheckboxNativeInput|{"detail":{"event":{}}}
onCheckboxNativeReset|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdChipComponent

## Instance properties

name|type
---|---
items|Array
type|String

## Instance methods

### constructor()

## Events

name|event
---|---
onChipClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdComponent

## Instance methods

### emit(type, detail)
name|type|default
---|---|---
type|String|undefined
detail|String|undefined

## Inheritance

LitElement

---
# MdDataTableCellComponent

## Instance properties

name|type
---|---
checkbox|Boolean
avatar|String
icon|String
label|String
sublabel|String
action|String

## Instance methods

### constructor()

## Inheritance

MdComponent

---
# MdDataTableComponent

## Instance properties

name|type
---|---
headers|Array
bodies|Array
data|Array
footers|Array

## Instance methods

### constructor()

## Inheritance

MdComponent

---
# MdDatetimePickerComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
label|String
sublabel|String
buttons|Array
open|Boolean
index|Number

## Instance methods

### startOfDay()
### years()
### months()
### weekdays()
### days()
### hours()
### minutes()
### label()
### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onDatetimePickerLabelClick|{"detail":{"event":{}}}
onDatetimePickerIconButtonPrevClick|{"detail":{"event":{}}}
onDatetimePickerIconButtonNextClick|{"detail":{"event":{}}}
onDatetimePickerIconButtonClick|{"detail":{"event":{}}}
onDatetimePickerYearItemClick|{"detail":{"event":{}}}
onDatetimePickerMonthItemClick|{"detail":{"event":{}}}
onDatetimePickerDayItemClick|{"detail":{"event":{}}}
onDatetimePickerHourItemClick|{"detail":{"event":{}}}
onDatetimePickerMinuteItemClick|{"detail":{"event":{}}}
onDatetimePickerButtonCancelClick|{"detail":{"event":{}}}
onDatetimePickerButtonOkClick|{"detail":{"event":{}}}
onDatetimePickerButtonClick|{"detail":{"event":{}}}
onDatetimePickerScrimClosed|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdDialogComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
label|String
sublabel|String
buttons|Array
open|Boolean

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onDialogIconButtonClick|{"detail":{"event":{}}}
onDialogButtonClick|{"detail":{"event":{}}}
onDialogScrimClosed|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdDividerComponent

## Instance methods


## Inheritance

MdComponent

---
# Dragger

# MdFabComponent

## Instance properties

name|type
---|---
icon|String
label|String
type|String
size|String
variant|String

## Instance methods

### constructor()

## Inheritance

MdComponent

---
# MdFormComponent

## Instance properties

name|type
---|---
acceptCharset|String
action|String
autocomplete|String
enctype|String
method|String
name|String
noValidate|Boolean

## Instance methods

### constructor()
### formNative()
### reset()
### submit(submitButton)
name|type|default
---|---|---
submitButton|String|undefined

## Events

name|event
---|---
onFormNativeFormdata|{"detail":{"event":{}}}
onFormNativeReset|{"detail":{"event":{}}}
onFormNativeSubmit|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdIconComponent

## Instance methods


## Inheritance

MdComponent

---
# MdIconButtonComponent

## Instance properties

name|type
---|---
icon|String
variant|String
type|String
toggle|Boolean
selected|Boolean
disabled|Boolean

## Instance methods

### constructor()

## Events

name|event
---|---
onIconButtonClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdImageComponent

## Instance properties

name|type
---|---
src|String
alt|String
ratio|String
circular|Boolean

## Instance methods

### constructor()
### styleInfo()

## Inheritance

MdComponent

---
# MdListItemComponent

## Instance properties

name|type
---|---
leadingCheckbox|Boolean
leadingRadioButton|Boolean
leadingSwitch|Boolean
avatar|String
image|String
video|String
icon|String
label|String
sublabel|String
text|String
trailingCheckbox|Boolean
trailingRadioButton|Boolean
trailingSwitch|Boolean
selected|Boolean
disabled|Boolean
routerLink|String
rippleOptions|Object
badge|Number

## Instance methods

### constructor()

## Events

name|event
---|---
onListItemSelected|{"detail":{"listItem":"this"}}

## Inheritance

MdComponent

---
# MdListRowComponent

## Instance methods


## Inheritance

MdComponent

---
# MdListComponent

## Instance properties

name|type
---|---
items|Array
type|String
rippleOptions|Object

## Instance methods

### constructor()
### multiSelect(data)
name|type|default
---|---|---
data|Object|undefined
### singleSelect(data)
name|type|default
---|---|---
data|Object|undefined

## Events

name|event
---|---
onListItemClick|{"detail":{"event":{}}}
onListItemCheckboxNativeInput|{"detail":{"event":{}}}
onListItemRadioButtonNativeInput|{"detail":{"event":{}}}
onListItemSwitchNativeInput|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# undefined

# MdMenuComponent

## Instance properties

name|type
---|---
open|Boolean
items|Array

## Instance methods

### constructor()
### show(options)
name|type|default
---|---|---
options|Object|{}
### close()
### toggle(options)
name|type|default
---|---|---
options|String|undefined

## Inheritance

MdComponent

---
# MdNavigationBarComponent

## Instance properties

name|type
---|---
open|Boolean
items|Array

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Inheritance

MdComponent

---
# MdNavigationDrawerComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
label|String
sublabel|String
items|Array
open|Boolean
modal|Boolean
view|String

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onNavigationDrawerIconButtonClick|{"detail":{"event":{}}}
onNavigationDrawerScrimClosed|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdNavigationListItemComponent

## Instance properties

name|type
---|---
icon|String
label|String
sublabel|String
selected|Boolean
disabled|Boolean
routerLink|String
rippleOptions|Object
badge|Number

## Instance methods

### constructor()

## Events

name|event
---|---
onNavigationListItemSelected|{"detail":{"navigationListItem":"this"}}

## Inheritance

MdComponent

---
# MdNavigationListRowComponent

## Instance methods


## Inheritance

MdComponent

---
# MdNavigationListComponent

## Instance properties

name|type
---|---
items|Array
rippleOptions|Object

## Instance methods

### constructor()
### singleSelect(data)
name|type|default
---|---|---
data|Object|undefined

## Events

name|event
---|---
onNavigationListItemClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdNavigationRailComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
label|String
sublabel|String
items|Array
open|Boolean

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onNavigationRailIconButtonClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# PopperController

## Instance methods

### show(options)
name|type|default
---|---|---
options|Object|{}
### closestScrollable(element)
name|type|default
---|---|---
element|String|undefined

# MdProgressIndicatorComponent

## Instance properties

name|type
---|---
variant|String
max|Number
value|Number

## Instance methods

### constructor()

## Inheritance

MdComponent

---
# MdRadioButtonComponent

## Instance properties

name|type
---|---
name|String
value|String
indeterminate|Boolean
checked|Boolean

## Instance methods

### constructor()

## Events

name|event
---|---
onRadioButtonNativeInput|{"detail":{"event":{}}}
onRadioButtonNativeReset|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# RippleController

## Instance methods

### constructor(host, options)
name|type|default
---|---|---
host|String|undefined
options|String|undefined
### hostConnected()
### hostDisconnected()

# Router

## Instance methods

### get(pathname, routes, parent, result)
name|type|default
---|---|---
pathname|undefined|this.pathname
routes|undefined|this.routes
parent|String|null
result|Array|[]
### pathname()
### removeComponent(routes)
name|type|default
---|---|---
routes|String|undefined
### getOutlet(container, route)
name|type|default
---|---|---
container|String|undefined
route|String|undefined
### setContainer(route)
name|type|default
---|---|---
route|String|undefined
### loadComponent(route)
name|type|default
---|---|---
route|String|undefined
### setController()
### navigate(url)
name|type|default
---|---|---
url|String|undefined
### emit(type, detail)
name|type|default
---|---|---
type|String|undefined
detail|String|undefined
### use(routes, options)
name|type|default
---|---|---
routes|Array|[]
options|Object|{}

# MdScrimComponent

## Instance properties

name|type
---|---
open|Boolean

## Instance methods

### show()
### close()
### toggle()

## Events

name|event
---|---
onScrimClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdSegmentedButtonComponent

## Instance properties

name|type
---|---
items|Array
type|String

## Instance methods

### constructor()

## Events

name|event
---|---
onSegmentedButtonItemClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdSheetComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
label|String
sublabel|String
buttons|Array
open|Boolean
region|String
modal|Boolean

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onSheetIconButtonClick|{"detail":{"event":{}}}
onSheetButtonClick|{"detail":{"event":{}}}
onSheetScrimClosed|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdSideSheetComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
label|String
sublabel|String
buttons|Array
open|Boolean
modal|Boolean

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onSideSheetIconButtonClick|{"detail":{"event":{}}}
onSideSheetButtonClick|{"detail":{"event":{}}}
onSideSheetScrimClosed|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdSliderComponent

## Instance properties

name|type
---|---
min|Number
max|Number
step|Number
variant|String
name|String
value|undefined
converter|undefined

## Instance methods

### constructor()
### indicators()
### sliderNatives()
### updateValue()
### percentage(value, min, max)
name|type|default
---|---|---
value|String|undefined
min|undefined|this.min
max|undefined|this.max

## Events

name|event
---|---
onSliderNativeInput|{"detail":{"event":{}}}
onSliderNativeReset|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdSnackbarComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
buttons|Array
open|Boolean

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onSnackbarIconButtonClick|{"detail":{"event":{}}}
onSnackbarButtonClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# Store

## Instance methods

### constructor(data, options)
name|type|default
---|---|---
data|Object|[]
options|Object|{}
### sort(data, sorters)
name|type|default
---|---|---
data|Object|undefined
sorters|String|undefined
### deepSearch(item, q)
name|type|default
---|---|---
item|String|undefined
q|String|undefined
### search(data, q)
name|type|default
---|---|---
data|Object|undefined
q|String|undefined
### getNestedValue(item, name)
name|type|default
---|---|---
item|String|undefined
name|String|undefined
### filter(data, filters)
name|type|default
---|---|---
data|Object|undefined
filters|String|undefined
### range(data, _start, _end)
name|type|default
---|---|---
data|Object|undefined
_start|String|undefined
_end|String|undefined
### paginate(data, _page, _limit)
name|type|default
---|---|---
data|Object|undefined
_page|String|undefined
_limit|String|undefined
### get(options)
name|type|default
---|---|---
options|Object|{}

# MdSwitchComponent

## Instance properties

name|type
---|---
name|String
value|String
indeterminate|Boolean
checked|Boolean
icons|Array

## Instance methods

### constructor()

## Events

name|event
---|---
onSwitchNativeInput|{"detail":{"event":{}}}
onSwitchNativeReset|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdTabComponent

## Instance properties

name|type
---|---
icon|String
label|String
sublabel|String
selected|Boolean
disabled|Boolean
routerLink|String
rippleOptions|Object
badge|Number

## Instance methods

### constructor()

## Events

name|event
---|---
onTabSelected|{"detail":{"tab":"this"}}

## Inheritance

MdComponent

---
# MdTabsComponent

## Instance properties

name|type
---|---
items|Array
rippleOptions|Object
variant|String

## Instance methods

### constructor()
### singleSelect(data)
name|type|default
---|---|---
data|Object|undefined

## Events

name|event
---|---
onTabClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdTextFieldComponent

## Instance properties

name|type
---|---
label|String
separateLabel|Boolean
icons|Array
prefix|String
suffix|String
actions|Array
text|String
error|String
counter|String
name|String
type|String
value|String
placeholder|String
title|String
autocomplete|String
required|Boolean
readOnly|Boolean
variant|String
disabled|Boolean

## Instance methods

### constructor()
### actions2()
### textFieldNative()

## Events

name|event
---|---
onTextFieldFocus|{"detail":{"event":{}}}
onTextFieldBlur|{"detail":{"event":{}}}
onTextFieldInput|{"detail":{"event":{}}}
onTextFieldSearch|{"detail":{"event":{}}}
onTextFieldInvalid|{"detail":{"event":{}}}
onTextFieldReset|{"detail":{"event":{}}}
onTextFieldIconButtonClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdTooltipComponent

## Instance properties

name|type
---|---
icons|Array
actions|Array
label|String
sublabel|String
buttons|Array
open|Boolean

## Instance methods

### constructor()
### show(options)
name|type|default
---|---|---
options|String|undefined
### close()
### toggle(options)
name|type|default
---|---|---
options|String|undefined

## Events

name|event
---|---
onTooltipIconButtonClick|{"detail":{"event":{}}}
onTooltipButtonClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdTopAppBarComponent

## Instance properties

name|type
---|---
leadingActions|Array
label|String
sublabel|String
trailingActions|Array
open|Boolean

## Instance methods

### constructor()
### show()
### close()
### toggle()

## Events

name|event
---|---
onTopAppBarIconButtonClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdTreeItemComponent

## Instance properties

name|type
---|---
selected|Boolean
expanded|Boolean
indent|String
actions|Array
nodeIcons|Array
leafIcons|Array
label|String
routerLink|String

## Instance methods

### constructor()
### action()
### icon()

## Events

name|event
---|---
onTreeItemSelected|{"detail":{"treeItem":"this"}}

## Inheritance

MdComponent

---
# MdTreeRowComponent

## Instance methods


## Inheritance

MdComponent

---
# MdTreeComponent

## Instance properties

name|type
---|---
items|Array
items2|Array

## Instance methods

### constructor()
### flatten(items, parent, indent)
name|type|default
---|---|---
items|Array|undefined
parent|String|undefined
indent|Number|0
### toggle(data)
name|type|default
---|---|---
data|Object|undefined

## Events

name|event
---|---
onTreeItemClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
