# Customers

> EXAMPLE REQUEST

```liquid
{{ customer.billing_first_name }} {{ customer.billing_last_name }}<br>
{% if customer.billing_company %}
   {{ customer.billing_company }}<br>
{% endif %}
{{ customer.billing_address1 }} {{ customer.billing_address2 }}<br>
{{ customer.billing_city }} {{ customer.billing_province }} {{ customer.billing_zip }}<br>
{{ customer.billing_country }}<br>
```

> EXAMPLE RESPONSE

```liquid
Corey Capetillo
ReCharge
607 Midvale Ave
Los Angeles California 90024
United States
```

<aside class="notice">
 Customer represents a customer account with a shop.
</aside>

**Customer information**

Property | Definition
--------- | -------
<b>first_name</b> <br> string| `"first_name": "Corey"`<br>  The customer's first name.
<b>last_name</b> <br> string| `"last_name": "Capetillo"`<br>  The customer's last name.
<b>name</b> <br> string| `"name": "Corey Capetillo"`<br>  The customer's name.
<b>email</b> <br> string|  `"email": "corey@rechargeapps.com"` <br> The email address of the customer.
<b>hash</b>  <br> string |  `"hash": "818762670d14f56b6f39fd7"` <br> The unique string identifier used in a customers portal link.

**Payment details**

Property | Definition
--------- | -------
<b>has_credit_card_purchase</b> <br> boolean| `"has_credit_card_purchase": true` <br> Returns boolean for customer's card.
<b>has_error_charge</b> <br> boolean| `"has_error_charge": false` <br> Returns boolean checking if customer has error charge.
<b>shopify_customer_id</b> <br> string| `"shopify_customer_id": "391100760128"` <br> Shopify's unique identifier for the customer.
<b>customer_payment_type</b> <br> string| `"customer_payment_type": "credit"` <br> Type of customer card.
<b>customer_card</b> <br> string| `"customer_card": null` <br> Number of customer card.

**Billing address**

Property | Definition
--------- | -------
<b>billing_first_name</b> <br> string| `"billing_first_name": "Corey"`<br>  The customer's billing first name.
<b>billing_last_name</b> <br> string| `"billing_last_name": "Capetillo"`<br>  The customer's billing last name.
<b>billing_company</b> <br> string| `"billing_company": "ReCharge"`<br>  The customer's billing company.
<b>billing_address1</b> <br> string| `"billing_address1": "607 Midvale Ave"`<br> The customer's billing address.
<b>billing_address2</b> <br> string| `"billing_address2": " "`<br>  An additional field for the customer's billing address.
<b>billing_city</b> <br> string| `"billing_city": "Los Angeles"`<br> The customer's billing city.
<b>billing_province</b> <br> string| `"billing_province": "California"`<br>   The customer's billing province or state name.
<b>billing_phone</b> <br> string| `"billing_phone": "5623095450"`<br> The customer’s billing phone number.
<b>billing_zip</b> <br> string| `"billing_zip": "90024"`<br> The customer's billing zip or postal code.
<b>billing_country</b> <br> string| `"billing_country": "United States"`<br>   The customer's billing country.

## Retrieve customer

> GET `{{ show_customer_url }}`

```javascript
$.ajax({
  url: '{{ show_customer_url }}',
  type: 'get',
  dataType: 'json'
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

> EXAMPLE RESPONSE

```javascript
{  
   "addresses":[  
      {  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":null,
         "city":"los angeles",
         "company":"bootstrap",
         "country":"United States",
         "discount_id":null,
         "first_name":"Recharge",
         "id":7976732,
         "last_name":"Test",
         "phone":"3103103101",
         "province":"California",
         "subscriptions":[  
            {  
               "address_id":7976732,
               "allow_date_selection":true,
               "allow_schedule_edit":true,
               "charge_interval_frequency":null,
               "charge_interval_unit":"",
               "charges_made_on_item":1,
               "id":11959565,
               "interval_options":{ },
               "is_active":false,
               "is_cancelled":true,
               "is_expired":false,
               "is_one_time_product":false,
               "is_skippable":true,
               "is_skipped":false,
               "is_swappable":false,
               "modifiable_properties":[ ],
               "next_charge_scheduled_at":null,
               "number_of_charges":1,
               "number_of_charges_until_expiration":null,
               "order_interval_frequency":null,
               "order_interval_unit":"",
               "price":1299,
               "product_title":"Bare Sleep",
               "product_variant_title":"Bare Sleep",
               "properties":[ ],
               "quantity":1,
               "shopify_product_id":505545949248,
               "shopify_variant_id":5421270171712,
               "status":"CANCELLED",
               "variant_title":""
            }
         ],
         "zip":"90025"
      },
      {  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":"",
         "city":"Los Angeles",
         "company":"",
         "country":"United States",
         "discount_id":null,
         "first_name":"Recharge",
         "id":18586680,
         "last_name":"Test",
         "phone":"3103103101",
         "province":"California",
         "subscriptions":[  
            {  
               "address_id":18586680,
               "allow_date_selection":true,
               "allow_schedule_edit":true,
               "charge_interval_frequency":"1",
               "charge_interval_unit":"month",
               "charges_made_on_item":0,
               "id":24221298,
               "interval_options":{  
                  "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
               },
               "is_active":false,
               "is_cancelled":true,
               "is_expired":false,
               "is_one_time_product":false,
               "is_skippable":true,
               "is_skipped":false,
               "is_swappable":false,
               "modifiable_properties":[ ],
               "next_charge_scheduled_at":null,
               "number_of_charges":0,
               "number_of_charges_until_expiration":null,
               "order_interval_frequency":"1",
               "order_interval_unit":"month",
               "price":1039,
               "product_title":"Bare Memory  20.00% Off Auto renew",
               "product_variant_title":"Bare Memory  20.00% Off Auto renew",
               "properties":[ ],
               "quantity":1,
               "shopify_product_id":505638748224,
               "shopify_variant_id":5421822509120,
               "status":"CANCELLED",
               "variant_title":""
            }
         ],
         "zip":"90025"
      }
   ],
   "customer":{  
      "billing_address1":"607 Midvale Ave",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"ReCharge",
      "billing_country":"United States",
      "billing_first_name":"Corey",
      "billing_last_name":"Capetillo",
      "billing_phone":"5623095450",
      "billing_province":"California",
      "billing_zip":"90024",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"corey@rechargeapps.com",
      "first_name":"Corey",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"818762670d14f56b6f39fd7",
      "last_name":"Capetillo",
      "name":"Corey Capetillo",
      "shopify_customer_id":"391100760128"
   },
   "subscriptions":[  
      {  
         "address":{  
            "address1":"1933 Manning",
            "address2":"204",
            "cart_note":null,
            "city":"los angeles",
            "company":"bootstrap",
            "country":"United States",
            "discount_id":null,
            "first_name":"Recharge",
            "id":7976732,
            "last_name":"Test",
            "phone":"3103103101",
            "province":"California",
            "zip":"90025"
         },
         "address_id":7976732,
         "allow_date_selection":true,
         "allow_schedule_edit":true,
         "charge_interval_frequency":"1",
         "charge_interval_unit":"month",
         "charges_made_on_item":1,
         "id":11959568,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "is_active":true,
         "is_cancelled":false,
         "is_expired":false,
         "is_one_time_product":false,
         "is_skippable":true,
         "is_skipped":false,
         "is_swappable":true,
         "modifiable_properties":[ ],
         "next_charge_scheduled_at":"2018-11-29T00:00:00",
         "number_of_charges":1,
         "number_of_charges_until_expiration":5,
         "order_interval_frequency":"1",
         "order_interval_unit":"month",
         "price":7000,
         "product_title":"Bare Box - 3 Month Plan  Auto renew",
         "product_variant_title":"Bare Box - 3 Month Plan  Auto renew - x-small",
         "properties":[  
            {  
               "name":"shipping_interval_frequency",
               "value":"1"
            },
            {  
               "name":"shipping_interval_unit_type",
               "value":"Months"
            }
         ],
         "quantity":1,
         "shopify_product_id":506020921408,
         "shopify_variant_id":5424189177920,
         "status":"ACTIVE",
         "variant_title":"x-small"
      }
   ]
}
```

Show current customer's information.

**URL:** `{{ show_customer_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>`

**Template file:** `customer.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Addresses](#addresses)
* [Subscriptions](#subscriptions)

**JSON:** Appending `.json` to the end of this GET request will return JSON data of the objects available on that route.

## Update customer

> POST `{{ show_customer_url }}`

```javascript
$.ajax({
  url: '{{ show_customer_url }}',
  type: 'post',
  dataType: 'json',
  data: {
      "billing_address1":"607 Midvale Ave",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"ReCharge",
      "billing_country":"United States",
      "billing_first_name":"Corey",
      "billing_last_name":"Capetillo",
      "billing_phone":"5623095450",
      "billing_province":"California",
      "billing_zip":"90024",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"corey@rechargeapps.com",
      "first_name":"Corey",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"818762670d14f56b6f39fd7",
      "last_name":"Capetillo",
      "name":"Corey Capetillo",
      "shopify_customer_id":"391100760128"
  }
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

> EXAMPLE RESPONSE

```javascript
{  
   "addresses":[  
      {  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":null,
         "city":"los angeles",
         "company":"bootstrap",
         "country":"United States",
         "discount_id":null,
         "first_name":"Recharge",
         "id":7976732,
         "last_name":"Test",
         "phone":"3103103101",
         "province":"California",
         "subscriptions":[  
            {  
               "address_id":7976732,
               "allow_date_selection":true,
               "allow_schedule_edit":true,
               "charge_interval_frequency":null,
               "charge_interval_unit":"",
               "charges_made_on_item":1,
               "id":11959565,
               "interval_options":{ },
               "is_active":false,
               "is_cancelled":true,
               "is_expired":false,
               "is_one_time_product":false,
               "is_skippable":true,
               "is_skipped":false,
               "is_swappable":false,
               "modifiable_properties":[ ],
               "next_charge_scheduled_at":null,
               "number_of_charges":1,
               "number_of_charges_until_expiration":null,
               "order_interval_frequency":null,
               "order_interval_unit":"",
               "price":1299,
               "product_title":"Bare Sleep",
               "product_variant_title":"Bare Sleep",
               "properties":[ ],
               "quantity":1,
               "shopify_product_id":505545949248,
               "shopify_variant_id":5421270171712,
               "status":"CANCELLED",
               "variant_title":""
            }
         ],
         "zip":"90025"
      },
      {  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":"",
         "city":"Los Angeles",
         "company":"",
         "country":"United States",
         "discount_id":null,
         "first_name":"Recharge",
         "id":18586680,
         "last_name":"Test",
         "phone":"3103103101",
         "province":"California",
         "subscriptions":[  
            {  
               "address_id":18586680,
               "allow_date_selection":true,
               "allow_schedule_edit":true,
               "charge_interval_frequency":"1",
               "charge_interval_unit":"month",
               "charges_made_on_item":0,
               "id":24221298,
               "interval_options":{  
                  "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
               },
               "is_active":false,
               "is_cancelled":true,
               "is_expired":false,
               "is_one_time_product":false,
               "is_skippable":true,
               "is_skipped":false,
               "is_swappable":false,
               "modifiable_properties":[ ],
               "next_charge_scheduled_at":null,
               "number_of_charges":0,
               "number_of_charges_until_expiration":null,
               "order_interval_frequency":"1",
               "order_interval_unit":"month",
               "price":1039,
               "product_title":"Bare Memory  20.00% Off Auto renew",
               "product_variant_title":"Bare Memory  20.00% Off Auto renew",
               "properties":[ ],
               "quantity":1,
               "shopify_product_id":505638748224,
               "shopify_variant_id":5421822509120,
               "status":"CANCELLED",
               "variant_title":""
            }
         ],
         "zip":"90025"
      }
   ],
   "customer":{  
      "billing_address1":"607 Midvale Ave",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"ReCharge",
      "billing_country":"United States",
      "billing_first_name":"Corey",
      "billing_last_name":"Capetillo",
      "billing_phone":"5623095450",
      "billing_province":"California",
      "billing_zip":"90024",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"corey@rechargeapps.com",
      "first_name":"Corey",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"818762670d14f56b6f39fd7",
      "last_name":"Capetillo",
      "name":"Corey Capetillo",
      "shopify_customer_id":"391100760128"
   },
   "subscriptions":[  
      {  
         "address":{  
            "address1":"1933 Manning",
            "address2":"204",
            "cart_note":null,
            "city":"los angeles",
            "company":"bootstrap",
            "country":"United States",
            "discount_id":null,
            "first_name":"Recharge",
            "id":7976732,
            "last_name":"Test",
            "phone":"3103103101",
            "province":"California",
            "zip":"90025"
         },
         "address_id":7976732,
         "allow_date_selection":true,
         "allow_schedule_edit":true,
         "charge_interval_frequency":"1",
         "charge_interval_unit":"month",
         "charges_made_on_item":1,
         "id":11959568,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "is_active":true,
         "is_cancelled":false,
         "is_expired":false,
         "is_one_time_product":false,
         "is_skippable":true,
         "is_skipped":false,
         "is_swappable":true,
         "modifiable_properties":[ ],
         "next_charge_scheduled_at":"2018-11-29T00:00:00",
         "number_of_charges":1,
         "number_of_charges_until_expiration":5,
         "order_interval_frequency":"1",
         "order_interval_unit":"month",
         "price":7000,
         "product_title":"Bare Box - 3 Month Plan  Auto renew",
         "product_variant_title":"Bare Box - 3 Month Plan  Auto renew - x-small",
         "properties":[  
            {  
               "name":"shipping_interval_frequency",
               "value":"1"
            },
            {  
               "name":"shipping_interval_unit_type",
               "value":"Months"
            }
         ],
         "quantity":1,
         "shopify_product_id":506020921408,
         "shopify_variant_id":5424189177920,
         "status":"ACTIVE",
         "variant_title":"x-small"
      }
   ]
}
```

Show current customer's information.

**URL:** `{{ show_customer_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>`

**Template file:** `customer_edit.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Addresses](#addresses)
* [Subscriptions](#subscriptions)

**Available properties**

**Customer Information**

|Input| Type| Name attribute|
|:-------|:-------|:-------|
|First Name (*optional*)| text| first_name|
|Last name (*mandatory*)| text| last_name|
|Email (*mandatory*)| text| email|

**Billing address**

|Input| Type| Name attribute|
|:-------|:-------|:-------|
|First name (*optional*)| text| billing_first_name|
|Last name (*optional*)| text| billing_last_name|
|Billing address 1 (*optional*)| text| billing_address1|
|Billing address 2 (*optional*)| text| billing_address2|
|Company (*optional*)| text| billing_company|
|City (*optional*)| text | billing_city|
|State/province (*optional*)| text| billing_province|
|Zip/postal code (*optional*)| text| billing_zip|
|Country (*optional*)| text| billing_country|
|Phone (*optional*)| text| billing_phone|

## Update customer card
Show current customer's information.

**URL:** `{{ update_card_url }}`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/card`

**Template file:** `customer_card.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Addresses](#addresses)
* [Subscriptions](#subscriptions)