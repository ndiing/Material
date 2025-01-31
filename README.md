# MdBadgeComponent

## Instance properties

name|type
---|---
label|Number
max|Number

## Instance methods

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]

## Events

name|event
---|---
onChipClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# MdComponent

## Instance methods

name|params
---|---
emit|["type","detail"]

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]

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

name|params
---|---
startOfDay|[]
years|[]
months|[]
weekdays|[]
days|[]
hours|[]
minutes|[]
label|[]
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]
formNative|[]
reset|[]
submit|["submitButton"]

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

name|params
---|---

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]
styleInfo|[]

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

name|params
---|---
constructor|[]

## Events

name|event
---|---
onListItemSelected|{"detail":{"listItem":"this"}}

## Inheritance

MdComponent

---
# MdListRowComponent

## Instance methods

name|params
---|---

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

name|params
---|---
constructor|[]
multiSelect|["data"]
singleSelect|["data"]

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

name|params
---|---
constructor|[]
show|["options"]
close|[]
toggle|["options"]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|[]

## Events

name|event
---|---
onNavigationListItemSelected|{"detail":{"navigationListItem":"this"}}

## Inheritance

MdComponent

---
# MdNavigationListRowComponent

## Instance methods

name|params
---|---

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

name|params
---|---
constructor|[]
singleSelect|["data"]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

## Events

name|event
---|---
onNavigationRailIconButtonClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
# PopperController

## Instance methods

name|params
---|---
show|["options"]
closestScrollable|["element"]

# MdProgressIndicatorComponent

## Instance properties

name|type
---|---
variant|String
max|Number
value|Number

## Instance methods

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|["host","options"]
hostConnected|[]
hostDisconnected|[]

# Router

## Instance methods

name|params
---|---
get|["pathname","routes","parent","result"]
pathname|[]
removeComponent|["routes"]
getOutlet|["container","route"]
setContainer|["route"]
loadComponent|["route"]
setController|[]
navigate|["url"]
emit|["type","detail"]
use|["routes","options"]

# MdScrimComponent

## Instance properties

name|type
---|---
open|Boolean

## Instance methods

name|params
---|---
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|[]
indicators|[]
sliderNatives|[]
updateValue|[]
percentage|["value","min","max"]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|["data","options"]
sort|["data","sorters"]
deepSearch|["item","q"]
search|["data","q"]
getNestedValue|["item","name"]
filter|["data","filters"]
range|["data","_start","_end"]
paginate|["data","_page","_limit"]
get|["options"]

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]

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

name|params
---|---
constructor|[]
singleSelect|["data"]

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

name|params
---|---
constructor|[]
actions2|[]
textFieldNative|[]

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

name|params
---|---
constructor|[]
show|["options"]
close|[]
toggle|["options"]

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

name|params
---|---
constructor|[]
show|[]
close|[]
toggle|[]

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

name|params
---|---
constructor|[]
action|[]
icon|[]

## Events

name|event
---|---
onTreeItemSelected|{"detail":{"treeItem":"this"}}

## Inheritance

MdComponent

---
# MdTreeRowComponent

## Instance methods

name|params
---|---

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

name|params
---|---
constructor|[]
flatten|["items","parent","indent"]
toggle|["data"]

## Events

name|event
---|---
onTreeItemClick|{"detail":{"event":{}}}

## Inheritance

MdComponent

---
