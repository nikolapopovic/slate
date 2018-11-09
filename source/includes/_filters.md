# Filters

**Directory**

* [Date filters](#date-filters)
* [Math filters](#math-filters)
* [Money filters](#money-filters)
* [String filters](#string-filters)
* [URL filters](#url-filters)

## Date filters
Converts a timestamp into another date format.

> Example input

```jinja
{{ order.processed_at |  date('%B %-d, %Y') }}
```

> Example output

```html
August 5, 2018
```

_date_ accepts the same parameters as Python's _time strftime_ method. You can find a [list of the shorthand formats](https://www.tutorialspoint.com/html/time_strftime.htm) in Python's documentation or use a site like [strfti.me](http://www.strfti.me/).

## Math filters

> Example input abs

```jinja
{{ -17 | abs }}
```

> Example output abs

```html
17
```

> Example input ceil

```jinja
{{ 4.6 | ceil }}
```

> Example output ceil

```html
5
```

> Example input divided_by

```jinja
{{ 200 | divided_by(10) }}
```

> Example output divided_by

```html
20
```

> Example input floor

```jinja
{{ 4.6 | floor }}
```

> Example output floor

```html
4
```

> Example input minus

```jinja
{{ 200 | minus(15) }}
```

> Example output minus

```html
185
```

> Example input modulo

```jinja
{{ 12 | modulo(5) }}
```

> Example output modulo

```html
2
```

> Example input plus

```jinja
{{ 200 | plus(15) }}
```

> Example output plus

```html
215
```

> Example input round

```jinja
{{ 4.6 | round }}
```

> Example output round

```html
5
```

> Example input times

```jinja
{{ 200 | times(1.15) }}
```

> Example output times

```html
230
```

## Money filters

> Example input money

```jinja
{{ 1450 | money }}
```

> Example output money

```html
$14.50
```

> Example input money_with_currency

```jinja
{{ 1450 | money_with_currency }}
```

> Example output money_with_currency

```html
$14.50 CAD
```

> Example input money_without_currency

```jinja
{{ 1450 | money_without_currency }}
```

> Example output money_without_currency

```html
14.50
```

> Example input money_without_trailing_zeros

```jinja
{{ 1450 | money_without_trailing_zeros }}
```

> Example output money_without_trailing_zeros

```html
$14.50
```

> Example input money_without_trailing_zeros

```jinja
{{ 1400 | money_without_trailing_zeros }}
```

> Example output money_without_trailing_zeros

```html
$14
```

> Example input money_localized

```jinja
{{ 1450 | money_localized }}
```

> Example output money_localized

```html
14,50 US$
```

## String filters
String filters are used to manipulate outputs and variables of the string type.

> Example input append

```jinja
{{ 'sales' | append('.jpg') }}
```

> Example output append

```html
sales.jpg
```

> Example input camelcase

```jinja
{{ 'coming-soon' | camelcase }}
```
> Example output camelcase

```html
ComingSoon
```

> Example input capitalize

```jinja
{{ 'capitalize me' | capitalize }}
```

> Example output capitalize

```html
Capitalize me
```

> Example input downcase

```jinja
{{ 'UPPERCASE' | downcase }}
```

> Example output downcase

```html
uppercase
```

> Example input escape

```jinja
{{ '<p>coding is fun!</p>'}}
```

> Example output escape

```text
<p>coding is fun!</p>
```

> Example input lstrip

```jinja
{{ '   too many spaces           ' | lstrip }}
```

> Example output lstrip

```html
<!-- Highlight to see the empty spaces to the right of the string -->
too many spaces
```

> Example input prepend

```jinja
{{ 'sale' | prepend('Made a great ') }}
```

> Example output prepend

```html
Made a great sale
```

> Example input remove

```jinja
{{ 'Hello, world. Goodbye, world.' | remove('world') }}
```

> Example output remove

```html
Hello, . Goodbye, .
```

> Example input remove_first

```jinja
{{ 'Hello, world. Goodbye, world.' | remove_first('world') }}
```

> Example output remove_first

```html
Hello, . Goodbye, world.
```

> Example input replace

```jinja
<!-- product.title = "Awesome Shoes" -->
{{ product.title | replace('Awesome', 'Mega') }}
```

> Example output replace

```html
Mega Shoes
```

> Example input replace_first

```jinja
<!-- product.title = "Awesome Awesome Shoes" -->
{{ product.title | replace_first('Awesome', 'Mega') }}
```

> Example output replace_first

```html
Mega Awesome Shoes
```

> Example input rstrip

```jinja
{{ '              too many spaces      ' | rstrip }}
```

> Example output rstrip

```html
<!-- Notice the empty spaces to the left of the string -->
too many spaces
```

> Example input strip

```jinja
{{ '   too many spaces           ' | strip }}
```

> Example output strip

```html
too many spaces
```

> Example input strip_html

```jinja
{{ '<h1>Hello</h1> World' | strip_html }}
```

> Example output strip_html

```html
Hello World
```

> Example input strip_newlines

```jinja
{{'strip\r new\n lines'}}
```

> Example output strip_newlines

```html
strip new lines
```

> Example input truncate

```jinja
{{ 'The cat came back the very next day' | truncate(13) }}
```

> Example output truncate

```html
The cat ca...
```

> Example input truncatewords

```jinja
{{ 'The cat came back the very next day' | truncatewords(4) }}
```

> Example output truncatewords

```html
The cat came back...
```

> Example input upcase

```jinja
{{ 'i want this to be uppercase' | upcase }}
```

> Example output upcase

```html
I WANT THIS TO BE UPPERCASE
```

Filter | Definition    
--------- | -------
<b>append</b> <br> | Appends characters to a string.
<b>camelcase</b> <br> | Converts a string into CamelCase.
<b>capitalize</b> <br> | Capitalizes the first word in a string.
<b>downcase</b> <br> | Converts a string into lowercase.
<b>escape</b> <br> | Converts html tags into html entities.
<b>lstrip</b> <br> | Strips tabs, spaces, and newlines (all whitespace) from the left side of a string.
<b>prepend</b> <br> | Prepends characters to a string.
<b>remove</b> <br> | Removes all occurrences of a substring from a string.
<b>remove_first</b> <br> | Removes only the first occurrence of a substring from a string.
<b>replace</b> <br> | Replaces all occurrences of a string with a substring.
<b>replace_first</b> <br> | Replaces the first occurrence of a string with a substring.
<b>rstrip</b> <br> | Strips tabs, spaces, and newlines (all whitespace) from the right side of a string.
<b>strip</b> <br> | Strips tabs, spaces, and newlines (all whitespace) from the left side of a string.
<b>strip_html</b> <br> | Strips all HTML tags from a string.
<b>strip_newlines</b> <br> | Strips all HTML tags from a string.
<b>truncate</b> <br> | Truncates a string down to the number of characters passed as the first parameter. An ellipsis (...) is appended to the truncated string and is included in the character count.
<b>truncatewords</b> <br> | Truncates a string down to the number of characters passed as the first parameter. An ellipsis (...) is appended to the truncated string and is included in the character count.
<b>upcase</b> <br> | Converts a string into uppercase.

## Route generators

> Example input activate_subscription_url

```jinja
{{ subscription | activate_subscription_url }}
```

> Example output activate_subscription_url

```html
tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/activate
```

> Example input apply_discount_url

```jinja
{{ subscription | apply_discount_url }}
```

> Example output apply_discount_url

```html
tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/apply_discount
```

> Example input cancel_subscription_url

```jinja
{{ subscription | cancel_subscription_url }}
```

> Example output cancel_subscription_url

```html
tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/cancel
```

> Example input create_address_url

```jinja
{{ create_address_url }}
```

> Example output create_address_url

```html
tools/recurring/customer_portal/<string:customer_hash>/addresses/new
```

> Example input create_subscription_url

```jinja
{{ create_subscription_url }}
```

> Example output create_subscription_url

```html
tools/recurring/customer_portal/<string:customer_hash>/subscriptions/new
```

> Example input

```jinja
{{ subscription.shopify_product | img_url('300x300') }}
```

> Example output img_url

```html
https://cdn.shopify.com/s/files/1/1/1/products/IconTShirt_300x300.jpg
```

> Example input img_url

```jinja
{{ subscription.shopify_product.image | img_url('200x200') }}
```

> Example output img_url

```html
https://cdn.shopify.com/s/files/1/1/1/products/IconTShirt_200x200.jpg
```

> Example input img_url

```jinja
{{ subscription.shopify_product.image.src | img_url }}
```

> Example output img_url

```html
https://cdn.shopify.com/s/files/1/1/1/products/IconTShirt_100x100.jpg
```

> Example input list_addresses_url

```jinja
{{ list_addresses_url }}
```

> Example output list_addresses_url

```html
tools/recurring/customer_portal/<string:customer_hash>/addresses
```

> Example input list_subscriptions_url

```jinja
{{ list_subscriptions_url }}
```

> Example output list_subscriptions_url

```html
tools/recurring/customer_portal/<string:customer_hash>/subscriptions
```

> Example input show_address_url

```jinja
{{ address | show_address_url }}
```

> Example output show_address_url

```html
tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>
```

> Example input show_address_url

```jinja
{{ address_id | show_address_url }}
```

> Example output show_address_url

```html
tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>
```

> Example input show_customer_url

```jinja
{{ show_customer_url }}
```

> Example output show_customer_url

```html
tools/recurring/customer_portal/<string:customer_hash>
```

> Example input show_subscription_url

```jinja
{{ subscription | show_subscription_url }}
```

> Example output show_subscription_url

```html
tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>
```

> Example input show_subscription_url

```html
{{ subscription_id | show_subscription_url }}
```

> Example output show_subscription_url

```html
tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>
```

> Example input update_address_url

```jinja
{{ address | update_address_url }}
```

> Example output update_address_url

```html
tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/edit
```

> Example input update_address_url

```html
{{ address_id | update_address_url }}
```

> Example output update_address_url

```html
tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/edit
```

> Example input update_subscription_url

```jinja
{{ subscription | update_subscription_url }}
```

> Example output update_subscription_url

```html
/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/edit
```

> Example input update_subscription_url

```jinja
{{ subscription_id | update_subscription_url }}
```

> Example output update_subscription_url

```html
/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/edit
```

## URL filters

> Example input url_encode

```jinja
{{ "https://rechargepayments.com" | url_encode }}
```

> Example output url_encode

```html
https%3A%2F%2Frechargepayments.com
```

> Example input url_escape

```jinja
{{ "https://rechargepayments.com/!@#$%^&*()" | url_escape }}
```

> Example output url_escape

```html
https://rechargepayments.com/!@%23$%25%5E&*()
```

> Example input url_param_escape

```jinja
{{ "support@rechargeapps.com" | url_param_escape }}
```

> Example output url_param_escape

```html
support%40rechargeapps.com
```