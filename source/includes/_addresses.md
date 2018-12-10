# Addresses

> EXAMPLE REQUEST

```liquid
{{ address.first_name }} {{ address.last_name }}<br>
{{ address.company }}<br>
{{ address.address1 }} {{ address.address2 }}<br>
{{ address.zip }} {{ address.city }} {{ address.province }}<br>
{{ address.country }}<br>
{{ address.phone }}
```

> EXAMPLE RESPONSE

```html
Recharge Test
Bootstrap
1933 Manning 204
90025 los angeles California
United States
3103103101
```

<aside class="notice">
 Addresses represents one of the many shipping locations a customer may have. Subscriptions are tied to a given address. Each customer can have multiple address objects (many-to-one) in the relationship. Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available. Not to be confused with a billing address, this is tied to individual subscription items. Most commonly used as a shipping address.
</aside>

![](images/address.png)

Property | Definition
--------- | -------
<b>{{ first_name }}</b> <br> string| `"first_name": "Recharge"`<br>  The customer’s first name associated with the address.
<b>{{ last_name }}</b> <br> string| `"last_name": "Test"`<br>  The customer’s last name associated with the address.
<b>{{ company }}</b> <br> string| `"company": "Bootstrap"`<br>  The company associated with the address.
<b>{{ address1 }}</b> <br> string|  `"address1": "1993 Manning"` <br> The street associated with the address.
<b>{{ address2 }}</b>  <br> string |  `"address2": "204"` <br> Any additional information associated with the address.
<b>{{ city }}</b> <br> string| `"city": "Los Angeles"`<br>  The city associated with the address.
<b>{{ province }}</b> <br> string| `"province": "California"`<br>  The state or province associated with the address.
<b>{{ zip }}</b> <br> string| `"zip": "90025"`<br>  The zip or postal code associated with the address.
<b>{{ country }}</b> <br> string| `"country": "United States"`<br> The country associated with the address.
<b>{{ phone }}</b> <br> string| `"phone": "3103103101"`<br>  The phone number associated with the address.
<b>{{ id }}</b> <br> integer| `"id": 7976732`<br> Unique numeric identifier for the address.
<b>{{ discount_id }}</b> <br> string| `"discount_id": null`<br>   Id of discount that is applied on the address.
<b>{{ discount_amount }}</b> <br> string| `"discount_amount": ""`<br> The discounted amount to be applied.
<b>{{ discount }}</b> <br> string| `"discount": ""`<br>   Returns [Discount object](#discounts).
<b>{{ has_active_subscriptions }}</b> <br> boolean| `"has_active_subscriptions": true` <br> Returns boolean checking if address has active subscriptions.
<b>{{ has_active_one_time_products }} (BETA)</b> <br> boolean| `"has_active_one_time_products": true` <br> Returns boolean checking if address has active one time products.
<b>{{ has_active_items_include_cancelled_and_expired }}</b> <br> boolean| `"has_active_items_include_cancelled_and_expired": true` <br> Returns boolean checking if address has active items including cancelled and expired.

## Create address
Page with form to create a new address for current customer.

> POST `{{ create_address_url }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ create_address_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    "address1":"1933 Manning",
    "address2":"204",
    "city":"Los Angeles",
    "company":"Bootstrap",
    "country":"United States",
    "first_name":"Recharge",
    "last_name":"Test",
    "phone":"3103103101",
    "province":"California",
    "zip":"90025"
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
   "address":{  
      "address1":"1933 Manning",
      "address2":"204",
      "cart_note":"",
      "city":"Los Angeles",
      "company":"Bootstrap",
      "country":"United States",
      "discount_id":null,
      "first_name":"Recharge",
      "id":23246832,
      "last_name":"Test",
      "phone":"3103103101",
      "province":"California",
      "subscriptions":[  ],
      "zip":"90025"
   },
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
   }
}
```

**URL:** `{{ create_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/new`

**Template file:** `address_new.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Addresses](#addresses)
* [Subscriptions](#subscriptions)

**Available properties**

|Input| Type| Name attribute|
---|---|---
|First name (*optional*)| text| first_name|
|Last name (*mandatory*)| text| last_name|
|Company (*optional*)| text| company|
|Address 1 (*mandatory*)| text| address1|
|Address 2 (*optional*)| text| address2|
|City (*optional*)| text | city|
|Country (*mandatory*)| text| country|
|Province (*optional*)| text| province|
|ZIP/Postal Code (*optional*)| text| zip|
|Phone Number (*optional*)| text| phone|

## Retrieve address
Show details for the current address.

> GET `{{ address | show_address_url }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ address | show_address_url }}',
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
   "address":{  
      "address1":"1933 Manning",
      "address2":"204",
      "cart_note":"",
      "city":"Los Angeles",
      "company":"Bootstrap",
      "country":"United States",
      "discount_id":null,
      "first_name":"Recharge",
      "id":23246832,
      "last_name":"Test",
      "phone":"3103103101",
      "province":"California",
      "subscriptions":[  ],
      "zip":"90025"
   },
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
   }
}
```

**URL:** `{{ address | show_address_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>`

**Template file:** `address.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Address](#addresses)

**JSON:** Appending `.json` to the end of this GET request will return JSON data of the objects available on that route.

## Update address
Form to edit and update the current address.

> POST `{{ address | update_address_url }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ address | update_address_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    "address1":"1933 Manning",
    "address2":"204",
    "city":"Los Angeles",
    "company":"ReCharge",
    "country":"United States",
    "first_name":"Recharge",
    "last_name":"Test",
    "phone":"3103103101",
    "province":"California",
    "zip":"90025"
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
   "address":{  
      "address1":"1933 Manning",
      "address2":"204",
      "cart_note":"",
      "city":"Los Angeles",
      "company":"ReCharge",
      "country":"United States",
      "discount_id":null,
      "first_name":"Recharge",
      "id":23246832,
      "last_name":"Test",
      "phone":"3103103101",
      "province":"California",
      "subscriptions":[  ],
      "zip":"90025"
   },
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
   }
}
```

**URL:** `{{ address | update_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/edit`

**Template file:** `address_edit.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Address](#addresses)

**Available properties**

|Input| Type| Name attribute|
---|---|---
|First Name (*optional*)| text| first_name|
|Last name (*mandatory*)| text| last_name|
|Address 1 (*mandatory*)| text| address1|
|Address 2 (*optional*)| text| address2|
|Company (*optional*)| text| company|
|City (*optional*)| text| city|
|State/province (*optional*)| text | province|
|ZIP/postal code (*optional*)| text| zip|
|Country (*mandatory*)| text| country|
|Phone (*optional*)| text| phone|
|Cart note (*optional*)| text| cart_note|

## List addresses
List all addresses for the current customer.

> GET `{{ list_address_url }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ list_address_url }}',
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
        "cart_note":"",
        "city":"Los Angeles",
        "company":"ReCharge",
        "country":"United States",
        "discount_id":null,
        "first_name":"Recharge",
        "id":23246832,
        "last_name":"Test",
        "phone":"3103103101",
        "province":"California",
        "subscriptions":[ ],
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
        "subscriptions":[  ],
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
   }
}
```

**URL:** `{{ list_address_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses`

**Template file:** `addresses.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Addresses](#addresses)
* [Subscriptions](#subscriptions)

**JSON:** Appending `.json` to the end of this GET request will return JSON data of the objects available on that route.

## Apply discount
Form to apply discount to current address.

> POST `{{ address | apply_discount_to_address_url }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ address | apply_discount_to_address_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    discount_code: '20% off all products'
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
         "discount_id":3408918,
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
   }
}
```

**URL:** `{{ address | apply_discount_to_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/apply_discount`

**Template file:** `subscriptions.html`

**Available properties**

|Input| Type| Name attribute|
---|---|---
|Discount Code (*mandatory*)| text| discount_code|

## Remove discount
Form to remove discount applied to current address.

> POST `{{ address | remove_discount_from_address_url }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ address | remove_discount_from_address_url }}',
  type: 'post',
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
   }
}
```

**URL:** `{{ address | remove_discount_from_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/remove_discount`

**Template file:** `subscriptions.html`

## Loop through the addresses

> EXAMPLE REQUEST

```liquid
{% for address in addresses %}
  {{ address.address1 }}
{% endfor %}
```

> EXAMPLE RESPONSE

```html
123 Miracle Ave
2020 H Huges Way
1 Maple Ave
```

Loop through the Addresses dictionary to access individual [Address](#addresses) object.