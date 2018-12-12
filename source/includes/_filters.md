# Filters

## Date filters

> Example input

```jinja
{{ order.processed_at |  date('%B %-d, %Y') }}
```

> Example output

```html
August 5, 2018
```

Converts a timestamp into another date format.

_date_ accepts the same parameters as Python's _time strftime_ method. You can find a [list of the shorthand formats](https://www.tutorialspoint.com/html/time_strftime.htm) in Python's documentation or use a site like [strfti.me](http://www.strfti.me/).

## Math filters

<aside class="notice">
 Math filters allow you to apply mathematical tasks. Math filters can be linked and, as with any other filters, are applied in order of left to right.
</aside>

Filter | Input | Output | Definition 
--------- | ------- | --------- | -------
<b>abs</b> | {{ -17 &mid; abs }} | 17 | Returns the absolute value of a number.
<b>ceil</b> | {{ 4.6 &mid; ceil }} <br> {{ 4.3 &mid; ceil }} | 5 <br> 5 | Rounds an output up to the nearest integer.
<b>divided_by</b> | <!-- subscription.price = 200 --> <br> {{ 200 &mid; divided_by(10) }} | 20 | Divides an output by a number. The output is rounded down to the nearest integer.
<b>floor</b> | {{ 4.6 &mid; floor }} <br> {{ 4.3 &mid; floor }} | 4 <br> 4 | Subtracts a number from an output.
<b>minus</b> | <!-- subscription.price = 200 --> <br> {{ 200 &mid; minus(15) }} | 185 | Subtracts a number from an output.
<b>plus</b> | <!-- subscription.price = 200 --> <br> {{ 200 &mid; plus(15) }} | 215 | Adds a number to an output.
<b>modulo</b> | {{ 12 &mid; modulo(5) }} | 2 | Divides an output by a number and returns the remainder.
<b>round</b> | {{ 4.6  &mid; round }} <br> {{ 4.3  &mid; round }} <br> {{ 4.5612  &mid; round(2) }} | 5.0 <br> 5.0 <br> 4.56 | Rounds the output to the nearest integer or specified number of decimals.
<b>times</b> | <!-- subscription.price = 200 --> <br> {{ subscription.price  &mid; times(1.15) }} | 230 | Multiplies an output by a number.

## Money filters

Filter | Input | Output | Definition 
--------- | ------- | --------- | -------
<b>money</b> | {{ 1450 &mid; money }} | $14.50 | This is money filter
<b>money_with_currency</b> | {{ 1450 &mid; money_with_currency }} | $14.50 CAD | This is money_with_currency filter
<b>money_without_currency</b> | {{ 1450 &mid; money_without_currency }} | 14.50 | This is money_without_currency filter
<b>money_without_trailing_zeros</b> | {{ 1450 &mid; money_without_trailing_zeros }} | $14.50 | This is money_without_trailing_zeros filter
<b>money_without_trailing_zeros</b> | {{ 1400 &mid; money_without_trailing_zeros }} | $14 | This is money_without_trailing_zeros filter
<b>money_localized</b> | {{ 1450 &mid; money_localized }} | 14,50 US$ | This is money_localized filter

## String filters
String filters are used to manipulate outputs and variables of the string type.

Filter | Input | Output | Definition 
--------- | ------- | --------- | -------
<b>append</b> | {{ 'sales' &mid; append('.jpg') }} | sales.jpg | Appends characters to a string.
<b>camelcase</b> | {{ 'coming-soon' &mid; camelcase }} | ComingSoon | Converts a string into CamelCase.
<b>capitalize</b> | {{ 'capitalize me' &mid; capitalize }} | Capitalize me | Capitalizes the first word in a string.
<b>upcase</b> | {{ 'i want this to be uppercase'  &mid; upcase }} | I WANT THIS TO BE UPPERCASE | This is upcase filter
<b>downcase</b> | {{ 'UPPERCASE' &mid; downcase }} | uppercase | Converts a string into lowercase.
<b>escape</b> | {{ '<p>coding is fun!</p>'}} | coding is fun! | Converts html tags into html entities.
<b>lstrip</b> | {{ '   too many spaces           ' &mid; lstrip }} | <!-- Highlight to see the empty spaces to the right of the string --> <br> too many spaces | Strips tabs, spaces, and newlines (all whitespace) from the left side of a string.
<b>prepend</b> | {{ 'sale' &mid; prepend('Made a great ') }} | Made a great sale | Prepends characters to a string.
<b>remove</b> | {{ 'Hello, world. Goodbye, world.' &mid; remove('world') }} | Hello, . Goodbye, . | Removes all occurrences of a substring from a string.
<b>remove_first</b> | {{ 'Hello, world. Goodbye, world.' &mid; remove_first('world') }} | Hello, . Goodbye, . | Removes only the first occurrence of a substring from a string.
<b>replace</b> | <!-- product.title = "Awesome Shoes" --> <br> {{ product.title &mid; replace('Awesome', 'Mega') }} | Mega Shoes | Replaces all occurrences of a string with a substring.
<b>replace_first</b> | <!-- product.title = "Awesome Awesome Shoes" --> <br> {{ product.title &mid; replace_first('Awesome', 'Mega') }} | Mega Awesome Shoes | Replaces the first occurrence of a string with a substring.
<b>rstrip</b> | {{ '              too many spaces      ' &mid; rstrip }} | <!-- Notice the empty spaces to the left of the string --> <br> too many spaces | Strips tabs, spaces, and newlines (all whitespace) from the right side of a string.
<b>strip</b> | {{ '              too many spaces      ' &mid; strip }} | too many spaces | Strips tabs, spaces, and newlines (all whitespace) from the left side of a string.
<b>strip_html</b> | {{ '`<h1>`Hello`</h1>` World' &mid; strip_html }} | Hello World | Strips all HTML tags from a string.
<b>strip_newlines</b> | {{'strip\r new\n lines'}} | strip new lines | Strips all HTML tags from a string.
<b>truncate</b> | {{ 'The cat came back the very next day' &mid; truncate(13) }} | The cat ca… | Truncates a string down to the number of characters passed as the first parameter. An ellipsis (...) is appended to the truncated string and is included in the character count.
<b>truncatewords</b> | {{ 'The cat came back the very next day' &mid; truncatewords(4) }} | The cat came back... | Truncates a string down to the number of characters passed as the first parameter. An ellipsis (...) is appended to the truncated string and is included in the character count.
<b>upcase</b> | {{ 'The cat came back the very next day' &mid; truncatewords(4) }} | The cat came back... | Converts a string into uppercase.

## Route generators

Filter | Input | Output
--------- | ------- | -------
<b>activate_subscription_url</b> | {{ subscription  &mid; activate_subscription_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/subscriptions/&#60;int&#58;subscription_id&#62;/activate
<b>apply_discount_url</b> | {{ subscription  &mid; apply_discount_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/subscriptions/&#60;int&#58;subscription_id&#62;/apply_discount
<b>cancel_subscription_url</b> | {{ subscription  &mid; cancel_subscription_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/subscriptions/&#60;int&#58;subscription_id&#62;/cancel
<b>create_address_url</b> | {{ create_address_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/addresses/new
<b>create_subscription_url</b> | {{ create_subscription_url }} | ttools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/subscriptions/new
<b>img_url</b> | {{ subscription.shopify_product  &mid; img_url('300x300') }} <br> {{ subscription.shopify_product.image &mid; img_url('200x200') }} <br> {{ subscription.shopify_product.image.src &mid; img_url }} | https://cdn.shopify.com/s/files/1/1/1/products/IconTShirt_300x300.jpg <br> https://cdn.shopify.com/s/files/1/1/1/products/IconTShirt_200x200.jpg <br> https://cdn.shopify.com/s/files/1/1/1/products/IconTShirt_100x100.jpg
<b>list_addresses_url</b> | {{ list_addresses_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/addresses
<b>list_subscriptions_url</b> | {{ list_subscriptions_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/subscriptions
<b>show_address_url</b> | {{ address  &mid; show_address_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/addresses/&#60;int&#58;address_id&#62;
<b>show_customer_url</b> | {{ show_customer_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;
<b>show_subscription_url</b> | {{ subscription  &mid; show_subscription_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/subscriptions/&#60;int&#58;subscription_id&#62;
<b>update_address_url</b> | {{ address  &mid; update_address_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/addresses/&#60;int&#58;address_id&#62;/edit
<b>update_subscription_url</b> | {{ subscription  &mid; update_subscription_url }} | tools/recurring/customer_portal/&#60;string&#58;customer_hash&#62;/subscriptions/&#60;int&#58;subscription_id&#62;/edit
<b>url_encode</b> | {{ "https://rechargepayments.com"  &mid; url_encode }} | https%3A%2F%2Frechargepayments.com
<b>url_escape</b> | {{ "https://rechargepayments.com/!@#$%^&*()"  &mid; url_escape }} | https://rechargepayments.com/!@%23$%25%5E&*()
<b>url_param_escape</b> | {{ "support@rechargeapps.com"  &mid; url_param_escape }} | support%40rechargeapps.com