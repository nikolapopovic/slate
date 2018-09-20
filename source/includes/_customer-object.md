# Customer Object
<aside class="notice">
Provides essential customer information, as well as associated billing information.
</aside>

> Example input

```liquid
Welcome {{customer.name}}

{{ customer.first_name }} {{ customer.last_name }}
{{ customer.email}}

{{ customer.billing_address1 }}
{{ customer.billing_address2 }}
{{ customer.billing_city }}, {{ customer.billing_province }}
{{ customer.billing_zip }}
{{ customer.billing_country }}
```

> Example output

```html
Welcome Mike Flynn

Mike Flynn
mike@gmail.com

3030 Nebraska Avenue
#301
Los Angeles, California
90404
United States
```

Property | Definition
--------- | -------
<b>first_name</b> <br> string| `"first_name": "Mike"`<br>  The customer's first name.
<b>last_name</b> <br> string| `"last_name": "Flynn"`<br>  The customer's last name.
<b>name</b> <br> string| `"name": "Mike Flynn"`<br>  The customer's name.
<b>email</b> <br> string|  `"email": "mike@gmail.com"` <br> The email address of the customer.
<b>hash</b>  <br> string |  `"hash": "143806234a9ff87a8d9e"` <br> The unique string identifier used in a customers portal link.
<b>billing_first_name</b> <br> string| `"billing_first_name": "Mike"`<br>  The customer's billing first name.
<b>billing_last_name</b> <br> string| `"billing_last_name": "Flynn"`<br>  The customer's billing last name.
<b>billing_company</b> <br> string| `"billing_company": "ReCharge"`<br>  The customer's billing company.
<b>billing_address1</b> <br> string| `"billing_address1": "3030 Nebraska Avenue"`<br> The customer's billing address.
<b>billing_address2</b> <br> string| `"billing_address2": "#301"`<br>  An additional field for the customer's billing address.
<b>billing_city</b> <br> string| `"billing_city": "Los Angeles"`<br> The customer's billing city.
<b>billing_province</b> <br> string| `"billing_province": "California"`<br>   The customer's billing province or state name.
<b>billing_zip</b> <br> string| `"billing_zip": "90404"`<br> The customer's billing zip or postal code.
<b>billing_country</b> <br> string| `"billing_country": "United States"`<br>   The customer's billing country.
<b>has_credit_card_purchase</b> <br> boolean| `"has_credit_card_purchase": "true"` <br> Returns boolean for customer's card.
<b>shopify_customer_id</b> <br> string| `"shopify_customer_id": "207119551"` <br> Shopify's unique identifier for the customer.
<b>customer_payment_type</b> <br> string| `"customer_payment_type": "Credit Card"` <br> Type of customer card.
<b>customer_card</b> <br> string| `"customer_card": "3301"` <br> Number of customer card.
