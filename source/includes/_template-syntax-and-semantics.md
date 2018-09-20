# Template syntax and semantics

<aside class="notice">
There are a few possible types of delimiters that can used in our templates. The delimiters are configured as follows:
</aside>

```liquid
{% ... %} for Statements
{{ ... }} for Expressions to print to the template output
{# ... #} for Comments not included in the template output
```

## Control Flow Tags

Control Flow Tags determine which block of code should be executed.

### Directory

* [if](#if)
* [elif / else](#elif--else)

### if 

> Example input

```liquid
{% if store.name == 'Bare Supplements' %}
  Welcome to Bare Supplements!
{% endif %}
```

> Example output

```html
Welcome to Bare Supplements!
```

Executes a block of code only if a certain condition is met (that is, if the result is `true`).

### elsif / else

> Example input

```liquid
<!-- If customer.first_name is equal to 'Michael' -->
{% if customer.first_name == 'Jon' %}
  Hey Jon!
{% elsif customer.first_name == 'Michael' %}
  Hey Michael!
{% else %}
  Hi Stranger!
{% endif %}
```

> Example output

```html
Hey Michael!
```

Adds more conditions within an `if` or `unless` block.

## Iteration Tags

Iteration Tags are used to run a block of code repeatedly.

#### Directory

* [for](#for)


### for

> Example input

```liquid
{% for order in orders %}
  {{ order.id }}
{% endfor %}
```

> Example output

```html
1001
```
Repeatedly executes a block of code.

## Theme Tags

Theme Tags have various functions including: leaving comments, including files, extending files, etc.

#### Directory

* [comment](#comment)
* [extends](#extends)
* [include](#include)


### comment

> Example input

```liquid
My name is {# some comment #} ReCharge.
```

> Example output

```html
My name is ReCharge.
```

Allows you to leave un-rendered code inside a Theme Editor files. Any text within the {# ... #} will not be output, and any other code within will not be executed.

### extends

> Example input

```liquid
{% extends "base.html" %}
```

The `extends` tag should be the first tag in the template as it tells the engine that this template “extends” another template.

### include

> Example input

```liquid
{% include '_errors.html' %}
```

The `include` statement is useful to include a template and return the rendered contents of that file into the current namespace.

## Variable Tags

Variable Tags are used to create new Liquid variables.

#### Directory

* [set](#set)


### set

> Example input

```liquid
{% set favorite_food = 'apples' %}

My favorite food is {{ favorite_food }}.
```

> Example output

```html
My favorite food is apples.
```

Creates a new variable. 

> Example inputt

```liquid
{% set my_variable = false %}
{% if my_variable != true %}
  This statement is valid.
{% endif %}
```

> Example outpu

```html
This statement is valid.
```

`set`ed variables can be strings or booleans (true or false). Remember not to use quotation marks around the value if it is `true` or `false`.