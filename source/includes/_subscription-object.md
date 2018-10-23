# Subscription object

> Example input

```liquid
Product: {{ subscription.product_title }} {{ subscription.variant_title }}
Status: {{ subscription.status }}
Price: {{ subscription.price }}
{{ subscription.country }}
{{ subscription.phone }}
```

> Example output

```html

```

Property | Definition
--------- | -------
<b>id</b> <br> string| `"id": 10101`<br>  Unique numeric identifier for the subscription.
<b>product_title</b> <br> string| `"product_title": "Sumatra Coffee"`<br> The name of the product in a shop’s catalog.
<b>variant_title</b> <br> string| `"variant_title": "Milk - a / b"`<br> The name of the variant in a shop’s catalog.
<b>product_variant_title</b> <br> string| `"product_variant_title": "Sumatra Coffee - Milk - a / b"`<br> Concatenates product_title and variant_title.
<b>status</b> <br> string|  `"status": "ACTIVE"` <br> The status of the subscription. The valid values are “ACTIVE”, “CANCELLED”, “EXPIRED”, “ONETIME”.
<b>price</b>  <br> integer|  `"price": 12` <br> The price of the item before discounts, taxes, or shipping have been applied.
<b>quantity</b> <br> integer| `"quantity": 1`<br>  The number of items on the subscription.
<b>formatted_price</b> <br> string| `"formatted_price": " "`<br> 
<b>address</b> <br>| `"address1": "1933 Manning"`<br>`"address2": "204"`<br>`"cart_note": null`<br>`"city": "los angeles"`<br>`"company": "bootstrap"`<br>`"country": United States"`<br>`"discount_id": null`<br>`"first_name": "Recharge"`<br>`"id": 7976732`<br>`"last_name": "Test"`<br>`"phone": "3103103101"`<br>`"province": "California"`<br>`"zip": "90025"`<br> Returns [addres object](#address-object).
<b>address_id</b> <br> integer| `"address_id": 178918`<br> Unique numeric identifier for the address the subscription is associated with.
<b>is_active</b> <br> boolean| `"is_active": true`<br> Returns boolean checking if subscription is active.
<b>is_cancelled</b> <br> boolean| `"is_cancelled": true`<br> Returns boolean checking if subscription is cancelled.
<b>is_expired</b> <br> boolean| `"is_expired": true`<br> Returns boolean checking if subscription expired.
<b>is_skippable</b> <br> boolean| `"is_skippable": true`<br> Returns boolean checking if subscription is skippable.
<b>is_swappable</b> <br> boolean| `"is_swappable": true` <br> Returns boolean checking if subscription is swappable.
<b>is_one_time_product (BETA)</b> <br> boolean| `"is_one_time_product": true` <br> Returns boolean checking if subscription is one time product.
<b>order_interval_unit</b> <br> string| `"order_interval_unit": "day"`<br> The frequency with which a subscription should have order created. Valid values are “day”, “week” and “month”.
<b>order_interval_frequency</b> <br> string| `"order_interval_frequency":30` <br> The number of units (specified in order_interval_unit) between each order. For example, "order_interval_unit": "month" and "order_interval_frequency": 3, indicate order every 3 months. 
<b>charge_interval_frequency</b> <br> string| `"charge_interval_frequency": 30`<br>  The number of units (specified in order_interval_unit) between each charge. For example, "order_interval_unit": "month" and "charge_interval_frequency": 3, indicate charge every 3 months. Charges must use the same unit types as orders.
<b>charge_interval_unit</b> <br> string| `"charge_interval_unit": "day"`<br> The frequency with which a subscription should have charge created. Valid values are “day”, “week” and “month”.
<b>interval_options</b> <br> string|  `"interval_options.day": "day"`<br> `"interval_options.week": "week"`<br> `"interval_options.month": "month"`<br> Hash containing the valid time units to use when creating a dropdown.
<b>interval_options.day</b> <br> string |  `"interval_options.day": "day"` <br> List numbers to populate the dropdown.
<b>interval_options.week</b> <br> string| `"interval_options.week": "week"`<br>  List numbers to populate the dropdown.
<b>interval_options.month</b> <br> string| `"interval_options.month": "month"`<br>  List numbers to populate the dropdown.
<b>next_charge_scheduled_at</b> <br> string| `"next_charge_scheduled_at": "2018-12-23T00:00:00"`<br> This will set the first charge date of a new subscription.
<b>number_of_charges</b> <br> integer| `"number_of_charges": 1`<br> Number of non error and non queued charges.
<b>number_of_charges_until_expiration</b> <br> string| `"number_of_charges_until_expiration": 5`<br> How many charges remain.
<b>allow_date_selection</b> <br> boolean| `"allow_date_selection": true`<br>  Should the customer be allowed to choose a specific date to be charged on.
<b>allow_schedule_edit</b> <br> boolean| `"allow_schedule_edit": true`<br> Should the customer be allowed to edit the delivery dates.
<b>shopify_product</b> <br> string| `"shopify_product": " "`<br> The product from Shopify. <https://help.shopify.com/api/reference/product>
<b>shopify_product_id</b> <br> integer| `"shopify_product_id": 1255183683`<br> The id of the Shopify product.
<b>shopify_variant_id</b> <br> integer| `"shopify_variant_id": 3844924611`<br> The id of the Shopify product variant.
