# Attemic Web Element Definitons

### Getting started

To create  a new element, copy a existing element and delete its uuid, @id and @type. To save it to the Database you can simply import all content.
<br>

There are two types of elements: sections and content<br>
Sections are the first layer and group content. Normally a Website has only one section per Page, but for paralell content, complicated structures or complicated overlays a second section can be used<br>
Content elements usually contain Fields, sections rarely, but can, contain fields too.<br>

### Fieldsets
Elements must be grouped in fieldsets, these can only be of one valid type
* standard<br>

Fieldsets are not relevant for the generation of the rendered frontend site but exist only to bring order to content elements with lots of fields.<br>
Fieldsets have 2 additional properties: their label, which is displayed inside the cms but can be empty, and the gridType:

The Grid type decides how fields are displayed inside the fieldset. There are multiple options:
* grid-double
* grid-flex
* grid-multiple
* grid-oneline

### Fields
Fieldsets can contain multiple fields. Fields create a value, whos key is configured in the valueKey property. There are multiple types of fields, which are set in the field property. Fields have  
* `image` - one image
* `images` - multiple images
* `input-number` - can only be a number
* `input-text` - allowes to be inputed a text
* `pagelink` - allows the user to select a internal or external link
* `richtext` - allows the user to input formatted and format text
* `select` - allows the user to select one item
* `select-multiple` - allows the user to select multiple items
* `switch` - on off toggle
* `toggle-choice` - toggle between multiple labeled items, similar to select
* `textarea` - textarea without format

Additional to the above fields there is a `subform` field, which allows to start another form level