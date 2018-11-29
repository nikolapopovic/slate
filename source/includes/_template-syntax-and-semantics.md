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

### if 

> EXAMPLE REQUEST

```liquid
{% if store.name == 'Bare Supplements' %}
  Welcome to Bare Supplements!
{% endif %}
```

> EXAMPLE RESPONSE

```html
Welcome to Bare Supplements!
```

Executes a block of code only if a certain condition is met (that is, if the result is `true`).

### elsif / else

> EXAMPLE REQUEST

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

> EXAMPLE RESPONSE

```html
Hey Michael!
```

Adds more conditions within an `if` or `unless` block.

### escaping

> EXAMPLE REQUEST

```liquid
{% raw %}
  {% for product in collections.frontpage.products %}
    {{ product.title }}
  {% endfor %}
{% endraw %}
```

ReCharge uses its own form of liquid syntax called Jinja. Sometimes it is desireable — even necessary — to use Shopify’s liquid, if you need access to Shopify objects or filters. In order to invoke Shopify code, you’ll need to wrap the specific block of code in {% raw %} tags, so our renderer will ignore it and Shopify will instead attempt to parse it.

For more information on Shopify liquid, see [Shopify liquid objects](https://help.shopify.com/en/themes/liquid/objects)

## Iteration Tags

Iteration Tags are used to run a block of code repeatedly.

### for

> EXAMPLE REQUEST

```liquid
{% for order in orders %}
  {{ order.id }}
{% endfor %}
```

> EXAMPLE RESPONSE

```html
1001
```
Repeatedly executes a block of code.

## Theme Tags

Theme Tags have various functions including: leaving comments, including files, extending files, etc.

### comment

> EXAMPLE REQUEST

```liquid
My name is {# some comment #} ReCharge.
```

> EXAMPLE RESPONSE

```html
My name is ReCharge.
```

Allows you to leave un-rendered code inside a Theme Editor files. Any text within the {# ... #} will not be output, and any other code within will not be executed.

### extends

> EXAMPLE REQUEST

```liquid
{% extends "base.html" %}
```

The `extends` tag should be the first tag in the template as it tells the engine that this template “extends” another template.

### include

> EXAMPLE REQUEST

```liquid
{% include '_errors.html' %}
```

The `include` statement is useful to include a template and return the rendered contents of that file into the current namespace.

## Variable Tags

Variable Tags are used to create new Liquid variables.

### set

> EXAMPLE REQUEST

```liquid
{% set favorite_food = 'apples' %}

My favorite food is {{ favorite_food }}.
```

> EXAMPLE RESPONSE

```html
My favorite food is apples.
```

Creates a new variable. 

> EXAMPLE REQUEST

```liquid
{% set my_variable = false %}
{% if my_variable != true %}
  This statement is valid.
{% endif %}
```

> EXAMPLE RESPONSE

```html
This statement is valid.
```

`set`ed variables can be strings or booleans (true or false). Remember not to use quotation marks around the value if it is `true` or `false`.