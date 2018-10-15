# Subscription object

Property | Definition
--------- | -------
<b>id</b> <br> string| `"id": "10101"`<br>  Unique numeric identifier for the subscription.
<b>product_title</b> <br> string| `"product_title": "Sumatra Coffee"`<br>  The name of the product in a shop’s catalog.
<b>variant_title</b> <br> string| `"variant_title": "Milk - a / b"`<br> The name of the variant in a shop’s catalog.
<b>status</b> <br> string|  `"status": "ACTIVE"` <br> The status of the subscription. The valid values are “ACTIVE”, “CANCELLED”, “EXPIRED”, “ONETIME”.
<b>price</b>  <br> integer|  `"price": 12` <br> The price of the item before discounts, taxes, or shipping have been applied.
<b>quantity</b> <br> integer| `"quantity": 1`<br>  The number of items on the subscription.
<b>formatted_price</b> <br> string| `"formatted_price": " "`<br> 
<b>product_variant_title</b> <br> string| `"product_variant_title": " "`<br> 
<b>address</b> <br> string| `"address": " "`<br> 
<b>address_id</b> <br> integer| `"address_id": 178918`<br> Unique numeric identifier for the address the subscription is associated with.
<b>is_active</b> <br> boolean| `"is_active": true`<br> Returns boolean checking if subscription is active.
<b>is_cancelled</b> <br> boolean| `"is_cancelled": true`<br> Returns boolean checking if subscription is canceled.
<b>is_expired</b> <br> boolean| `"is_expired": true`<br> Returns boolean checking if subscription expired.
<b>is_skippable</b> <br> boolean| `"is_skippable": true`<br> Returns boolean checking if subscription is skippable.
<b>is_swappable</b> <br> boolean| `"has_active_subscriptions": true` <br> Returns boolean checking if subscription is active.
<b>is_one_time_product (BETA)</b> <br> boolean| `"is_one_time_product": true` <br> Returns boolean checking if subscription is one time product.
<b>order_interval_frequency</b> <br> boolean| `"order_interval_frequency": "true"` <br> 
<b>order_interval_unit</b> <br> string| `"order_interval_unit": "Mike"`<br>  The customer’s first name associated with the address.
<b>charge_interval_frequency</b> <br> string| `"charge_interval_frequency": "Flynn"`<br>  The customer’s last name associated with the address.
<b>charge_interval_unit</b> <br> string| `"charge_interval_unit": "ReCharge"`<br>  The company associated with the address.
<b>interval_options</b> <br> string|  `"interval_options": "3030 Nebraska Avenue"` <br> Hash containing the valid time units to use when creating a dropdown.
<b>interval_options.day</b> <br> string |  `"interval_options.day": "#301"` <br> List numbers to populate the dropdown.
<b>interval_options.week</b> <br> string| `"interval_options.week": "Los Angeles"`<br>  List numbers to populate the dropdown.
<b>interval_options.month</b> <br> string| `"interval_options.month": "California"`<br>  List numbers to populate the dropdown.
<b>next_charge_scheduled_at</b> <br> string| `"next_charge_scheduled_at": "90404"`<br>  The zip or postal code associated with the address.
<b>charges_made_on_item</b> <br> string| `"charges_made_on_item": "United States"`<br> The country associated with the address.
<b>number_of_charges</b> <br> string| `"number_of_charges": "3103843698"`<br>  Number of non error and non queued charges.
<b>number_of_charges_until_expiration</b> <br> string| `"number_of_charges_until_expiration": "3411137"`<br> How many charges remain.
<b>allow_date_selection</b> <br> boolean| `"allow_date_selection": "true"`<br>  Should the customer be allowed to choose a specific date to be charged on
<b>allow_schedule_edit</b> <br> boolean| `"allow_schedule_edit": "true"`<br> Should the customer be allowed to edit the delivery dates.
<b>shopify_product</b> <br> string| `"shopify_product": " "`<br> The product from Shopify. <https://help.shopify.com/api/reference/product>
<b>shopify_product_id</b> <br> string| `"shopify_product_id": "20"`<br> The discounted amount to be applied.
<b>shopify_variant_id</b> <br> string| `"shopify_variant_id": " "`<br>   Returns [Discount object](Theme-objects%3A-Discount).
