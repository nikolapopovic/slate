# Address Object

<aside class="notice">
Not to be confused with a billing address, this is tied to individual subscription items. Most commonly used as a shipping address.
</aside>

> Example input

```liquid
{{ address.first_name }} {{ address.last_name }}<br>
{{ address.company }}<br>
{{ address.address1 }} {{ address.address2 }}<br>
{{ address.zip }} {{ address.city }} {{ address.province }}<br>
{{ address.country }}<br>
{{ address.phone }}
```

> Example output

```html
Mike Flynn
ReCharge
3030 Nebraska Avenue #301
90404 Los Angeles California
United States
3103843698
```

Property | Definition
--------- | -------
<b>first_name</b> <br> string| `"first_name": "Mike"`<br>  The customer’s first name associated with the address.
<b>last_name</b> <br> string| `"last_name": "Flynn"`<br>  The customer’s last name associated with the address.
<b>company</b> <br> string| `"company": "ReCharge"`<br>  The company associated with the address.
<b>address1</b> <br> string|  `"address1": "3030 Nebraska Avenue"` <br> The street associated with the address.
<b>address2</b>  <br> string |  `"address2": "#301"` <br> Any additional information associated with the address.
<b>city</b> <br> string| `"city": "Los Angeles"`<br>  The city associated with the address.
<b>province</b> <br> string| `"province": "California"`<br>  The state or province associated with the address.
<b>zip</b> <br> string| `"zip": "90404"`<br>  The zip or postal code associated with the address.
<b>country</b> <br> string| `"country": "United States"`<br> The country associated with the address.
<b>phone</b> <br> string| `"phone": "3103843698"`<br>  The phone number associated with the address.
<b>id</b> <br> string| `"id": "3411137"`<br> Unique numeric identifier for the address.
<b>discount_id</b> <br> string| `"discount_id": "12312312"`<br>   Id of discount that is applied on the address.
<b>discount_amount</b> <br> string| `"discount_amount": "20"`<br> The discounted amount to be applied.
<b>discount</b> <br> string| `"discount": " "`<br>   Returns [Discount object](Theme-objects%3A-Discount).
<b>has_active_subscriptions</b> <br> boolean| `"has_active_subscriptions": "true"` <br> Returns boolean checking if address has active subscriptions.
<b>has_active_one_time_products (BETA)</b> <br> boolean| `"has_active_one_time_products": "true"` <br> Returns boolean checking if address has active one time products.
<b>has_active_items_include_cancelled_and_expired</b> <br> boolean| `"has_active_items_include_cancelled_and_expired": "true"` <br> Returns boolean checking if address has active items including cancelled and expired.