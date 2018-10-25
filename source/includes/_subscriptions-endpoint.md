# Subscriptions

<aside class="notice">
Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

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

### Subscription properties

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

## Create subscription
A form to create a new subscription for the current customer.

**URL:** `{{ create_subscription_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/new`

**Template file:** `subscription_new.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)
* [Subscription](Theme-objects%3A-Subscription)
* [Rule](Theme-objects%3A-Rule)
* [Variants](Theme-objects%3A-Variants)

|Input| Type| Name attribute|
|-|-|-|
|Shopify variant ID (*mandatory*)| text| shopify_variant_id|
|Quantity (*mandatory*)| text| quantity|
|Order interval frequency(*mandatory*)| text| order_interval_frequency|
|Order interval unit (*mandatory*)| text| order_interval_unit|
|Next charge date (*mandatory*)| text| next_charge_date|
|Address ID(*mandatory*)| text| address_id|

**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

> POST `{{ create_subscription_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ create_subscription_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    shopify_variant_id: 16347635201,
    quantity: 1,
    order_interval_frequency: '1',
    order_interval_unit: 'month',
    next_charge_date: '2018-09-26',
    address_id: 325524
  }
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

## Retrieve subscription
Show details for the current subscription.

**URL:** `{{ subscription | show_subscription_url }}` or `{{ subscription.id | show_subscription_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>`

**Template file:** `subscription.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Subscription](Theme-objects%3A-Subscription)
* [Variants](Theme-objects%3A-Variants)

> GET `{{ subscription | show_subscription_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ subscription | show_subscription_url }}',
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

> Example output

```javascript
{  
   "customer":{  
      "billing_address1":"3030 nebraska street",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"Recharge",
      "billing_country":"United States",
      "billing_first_name":"Test",
      "billing_last_name":"Recharge",
      "billing_phone":"3103103101",
      "billing_province":"California",
      "billing_zip":"90025",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"lmlorem@yahoo.com",
      "first_name":"Test",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"288243b8e422869a44d9fe",
      "last_name":"Recharge",
      "name":"Test Recharge",
      "shopify_customer_id":"2586884299"
   },
   "subscription":{  
      "address":{  
         "address1":"Cr 35 No 29",
         "address2":"",
         "cart_note":null,
         "city":"Bogota",
         "company":"",
         "country":"Colombia",
         "first_name":"Lorena the third",
         "id":325524,
         "last_name":"Maldonado",
         "phone":"0868758888",
         "province":"",
         "zip":""
      },
      "address_id":325524,
      "allow_date_selection":false,
      "allow_schedule_edit":true,
      "charge_interval_frequency":"9",
      "charge_interval_unit":"month",
      "charges_made_on_item":1,
      "id":412339,
      "interval_options":{  
         "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
      },
      "is_skippable":true,
      "is_skipped":false,
      "modifiable_properties":[  

      ],
      "next_charge_scheduled_at":null,
      "number_of_charges":1,
      "number_of_charges_until_expiration":null,
      "order_interval_frequency":"1",
      "order_interval_unit":"month",
      "price":340000,
      "product_title":"lorenaupdate",
      "product_variant_title":"lorenaupdate - 2 / 3",
      "properties":[  
         {  
            "name":"subscription_id",
            "value":"13189"
         },
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
      "shopify_product_id":2147483647,
      "shopify_variant_id":16347635201,
      "status":"CANCELLED",
      "variant_title":"2 / 3"
   }
}
```

## Update subscription
Edit the properties of the current subscription.

**URL:** `{{ subscription | update_subscription_url }}` or `{{ subscription.id | update_subscription_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/edit`

**Template file:** `subscription_edit.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Subscription](Theme-objects%3A-Subscription)
* [Variants](Theme-objects%3A-Variants)

**Available properties**

|Input| Type| Name attribute|
|-|-|-|
|Interval (*mandatory*)| integer | order_interval_frequency|
|Interval type (*mandatory*)| text| order_interval_unit|
|Variant (*mandatory*)| text| shopify_variant_id|
|Quantity (*mandatory*)| text| quantity|
|Date (*mandatory*)| text| next_charge_date|

**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

> POST `{{ subscription | update_subscription_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ subscription | update_subscription_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    order_interval_frequency: 30,
    order_interval_unit: 'day',
    shopify_variant_id: 14618440138809,
    quantity: 1,
    next_charge_date: '2019-10-10T00:00:00'
  }
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

## Change next charge date
Set the date of the subscription's next charge.

**URL:** `{{ subscription | subscription_charge_date_url }}` or `{{ subscription.id | subscription_charge_date_url }}`

**Methods accepted:** `GET, POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/change_charge_date`

**Template file:** `subscription_charge_date.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Subscription](Theme-objects%3A-Subscription)
* [Variants](Theme-objects%3A-Variants)


**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

> POST `{{ subscription | subscription_charge_date_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ subscription | subscription_charge_date_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    next_charge_date: "2018-11-24",
  }
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

## Cancel subscription
Cancel the current subscription.

**URL:** `{{ subscription | cancel_subscription_url }}` or `{{ subscription.id | cancel_subscription_url }}`

**Methods accepted:** `GET, POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/cancel`

**Template file:** `subscription_cancel.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Subscription](Theme-objects%3A-Subscription)
* [Retention strategies](Theme-objects%3A-Retention-strategies)
* [Variants](Theme-objects%3A-Variants)

> GET `{{ subscription | cancel_subscription_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ subscription | cancel_subscription_url }}',
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

> Example output

```javascript
{  
   "customer":{  
      "billing_address1":"3030 nebraska street",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"Recharge",
      "billing_country":"United States",
      "billing_first_name":"Test",
      "billing_last_name":"Recharge",
      "billing_phone":"3103103101",
      "billing_province":"California",
      "billing_zip":"90025",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"lmlorem@yahoo.com",
      "first_name":"Test",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"288243b8e422869a44d9fe",
      "last_name":"Recharge",
      "name":"Test Recharge",
      "shopify_customer_id":"2586884299"
   },
   "retention_strategies":[  
      {  
         "discount_code":null,
         "id":444616,
         "incentive_type":null,
         "prevention_text":"Please help us process your request by telling us why you're cancelling",
         "reason":"This is too expensive"
      },
      {  
         "discount_code":null,
         "id":444619,
         "incentive_type":null,
         "prevention_text":"Please help us process your request by telling us why you're cancelling",
         "reason":"This was created by accident"
      },
      {  
         "discount_code":"",
         "id":444622,
         "incentive_type":"delay_subscription",
         "prevention_text":"Please help us process your request by telling us why you're cancelling",
         "reason":"I already have more than I need"
      },
      {  
         "discount_code":"",
         "id":444625,
         "incentive_type":"delay_subscription",
         "prevention_text":"Please help us process your request by telling us why you're cancelling",
         "reason":"I need it sooner"
      },
      {  
         "discount_code":null,
         "id":444628,
         "incentive_type":null,
         "prevention_text":"Please help us process your request by telling us why you're cancelling",
         "reason":"I no longer use this product"
      },
      {  
         "discount_code":null,
         "id":444631,
         "incentive_type":null,
         "prevention_text":"Please help us process your request by telling us why you're cancelling",
         "reason":"I want a different product"
      },
      {  
         "discount_code":null,
         "id":444634,
         "incentive_type":null,
         "prevention_text":"Please help us process your request by telling us why you're cancelling",
         "reason":"I want a different flavor/scent/count"
      },
      {  
         "discount_code":null,
         "id":444637,
         "incentive_type":null,
         "prevention_text":"Please help us process your request by telling us why you're cancelling",
         "reason":"Other Reason"
      },
      {  
         "discount_code":"diskauntzaretension",
         "id":545692,
         "incentive_type":"discount",
         "prevention_text":"",
         "reason":"discount_for_product3"
      },
      {  
         "discount_code":"diskauntzasub",
         "id":545737,
         "incentive_type":"discount",
         "prevention_text":"",
         "reason":"discount_for_all_products"
      },
      {  
         "discount_code":"DISKAUNTZARETENSION2",
         "id":546853,
         "incentive_type":"discount",
         "prevention_text":"",
         "reason":"discount_for_product3 v2"
      },
      {  
         "discount_code":"DISKAUNTZARETENSION3",
         "id":546940,
         "incentive_type":"discount",
         "prevention_text":"",
         "reason":"discount_for_product3 v3"
      }
   ],
   "subscription":{  
      "address":{  
         "address1":"Cr 35 No 29",
         "address2":"",
         "cart_note":null,
         "city":"Bogota",
         "company":"",
         "country":"Colombia",
         "first_name":"Lorena the third",
         "id":325524,
         "last_name":"Maldonado",
         "phone":"0868758888",
         "province":"",
         "zip":""
      },
      "address_id":325524,
      "allow_date_selection":false,
      "allow_schedule_edit":true,
      "charge_interval_frequency":"9",
      "charge_interval_unit":"month",
      "charges_made_on_item":1,
      "id":412339,
      "interval_options":{  
         "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
      },
      "is_skippable":true,
      "is_skipped":false,
      "modifiable_properties":[  

      ],
      "next_charge_scheduled_at":null,
      "number_of_charges":1,
      "number_of_charges_until_expiration":null,
      "order_interval_frequency":"1",
      "order_interval_unit":"month",
      "price":340000,
      "product_title":"lorenaupdate",
      "product_variant_title":"lorenaupdate - 2 / 3",
      "properties":[  
         {  
            "name":"subscription_id",
            "value":"13189"
         },
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
      "shopify_product_id":2147483647,
      "shopify_variant_id":16347635201,
      "status":"CANCELLED",
      "variant_title":"2 / 3"
   }
}
```

## Retention strategy
Cancel the current subscription providing retention strategy.

**URL:** `{{ subscription | retention_strategy_url(retention_strategy) }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/cancel/<int:retention_strategy_id>`

**Template file:** `subscription_retention_strategy.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)
* [Subscription](Theme-objects%3A-Subscription)
* [Variants](Theme-objects%3A-Variants)
* [Retention strategies](Theme-objects%3A-Retention-strategies)

> POST `{{ subscription | retention_strategy_url(retention_strategy) }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ subscription | retention_strategy_url(retention_strategy) }}',
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

> Example output

```javascript
{  
   "customer":{  
      "billing_address1":"3030 nebraska street",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"Recharge",
      "billing_country":"United States",
      "billing_first_name":"Test",
      "billing_last_name":"Recharge",
      "billing_phone":"3103103101",
      "billing_province":"California",
      "billing_zip":"90025",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"lmlorem@yahoo.com",
      "first_name":"Test",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"288243b8e422869a44d9fe",
      "last_name":"Recharge",
      "name":"Test Recharge",
      "shopify_customer_id":"2586884299"
   },
   "subscription":{  
      "address":{  
         "address1":"Cr 35 No 29",
         "address2":"",
         "cart_note":null,
         "city":"Bogota",
         "company":"",
         "country":"Colombia",
         "first_name":"Lorena the third",
         "id":325524,
         "last_name":"Maldonado",
         "phone":"0868758888",
         "province":"",
         "zip":""
      },
      "address_id":325524,
      "allow_date_selection":false,
      "allow_schedule_edit":true,
      "charge_interval_frequency":"9",
      "charge_interval_unit":"month",
      "charges_made_on_item":1,
      "id":412339,
      "interval_options":{  
         "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
      },
      "is_skippable":true,
      "is_skipped":false,
      "modifiable_properties":[  

      ],
      "next_charge_scheduled_at":null,
      "number_of_charges":1,
      "number_of_charges_until_expiration":null,
      "order_interval_frequency":"1",
      "order_interval_unit":"month",
      "price":340000,
      "product_title":"lorenaupdate",
      "product_variant_title":"lorenaupdate - 2 / 3",
      "properties":[  
         {  
            "name":"subscription_id",
            "value":"13189"
         },
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
      "shopify_product_id":2147483647,
      "shopify_variant_id":16347635201,
      "status":"CANCELLED",
      "variant_title":"2 / 3"
   }
}
```

## Activate subscription
Activate or re-activate the current subscription

**URL:** `{{ subscription | activate_subscription_url }}` or `{{ subscription.id | activate_subscription_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/activate`

**Template file:** `subscription_activate.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Subscription](Theme-objects%3A-Subscription)
* [Variants](Theme-objects%3A-Variants)

**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

> POST `{{ subscription | activate_subscription_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ subscription | activate_subscription_url }}',
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

## List subscriptions
List all subscriptions for the current customer.

**URL:** `{{ list_subscriptions_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions`

**Template file:** `subscriptions.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Addresses)
* [Subscriptions](Theme-objects%3A-Subscriptions)

> GET `{{ list_subscriptions_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ list_subscriptions_url }}',
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

> Example output

```javascript
{  
   "customer":{  
      "billing_address1":"3030 nebraska street",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"Recharge",
      "billing_country":"United States",
      "billing_first_name":"Test",
      "billing_last_name":"Recharge",
      "billing_phone":"3103103101",
      "billing_province":"California",
      "billing_zip":"90025",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"lmlorem@yahoo.com",
      "first_name":"Test",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"288243b8e422869a44d9fe",
      "last_name":"Recharge",
      "name":"Test Recharge",
      "shopify_customer_id":"2586884299"
   },
   "subscriptions":[  
      {  
         "address":{  
            "address1":"cll 25 no 39",
            "address2":"",
            "cart_note":null,
            "city":"Bogota",
            "company":"testy",
            "country":"Colombia",
            "first_name":"Lorena the second",
            "id":306399,
            "last_name":"Maldonado Perez",
            "phone":"0868758888",
            "province":"",
            "zip":""
         },
         "address_id":306399,
         "allow_date_selection":false,
         "allow_schedule_edit":true,
         "charge_interval_frequency":"12",
         "charge_interval_unit":"week",
         "charges_made_on_item":1,
         "id":385159,
         "interval_options":{  
            "week":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
         },
         "is_skippable":true,
         "is_skipped":false,
         "modifiable_properties":[  

         ],
         "next_charge_scheduled_at":null,
         "number_of_charges":1,
         "number_of_charges_until_expiration":null,
         "order_interval_frequency":"2",
         "order_interval_unit":"week",
         "price":300000,
         "product_title":"lorenaupdate",
         "product_variant_title":"lorenaupdate",
         "properties":[  
            {  
               "name":"subscription_id",
               "value":"13189"
            },
            {  
               "name":"shipping_interval_frequency",
               "value":"2"
            },
            {  
               "name":"shipping_interval_unit_type",
               "value":"Months"
            }
         ],
         "quantity":1,
         "shopify_product_id":2147483647,
         "shopify_variant_id":16347635201,
         "status":"CANCELLED",
         "variant_title":""
      },
      {  
         "address":{  
            "address1":"Cr 35 No 29",
            "address2":"",
            "cart_note":null,
            "city":"Bogota",
            "company":"",
            "country":"Colombia",
            "first_name":"Lorena the third",
            "id":325524,
            "last_name":"Maldonado",
            "phone":"0868758888",
            "province":"",
            "zip":""
         },
         "address_id":325524,
         "allow_date_selection":false,
         "allow_schedule_edit":true,
         "charge_interval_frequency":"9",
         "charge_interval_unit":"month",
         "charges_made_on_item":1,
         "id":412339,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "is_skippable":true,
         "is_skipped":false,
         "modifiable_properties":[  

         ],
         "next_charge_scheduled_at":null,
         "number_of_charges":1,
         "number_of_charges_until_expiration":null,
         "order_interval_frequency":"1",
         "order_interval_unit":"month",
         "price":340000,
         "product_title":"lorenaupdate",
         "product_variant_title":"lorenaupdate - 2 / 3",
         "properties":[  
            {  
               "name":"subscription_id",
               "value":"13189"
            },
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
         "shopify_product_id":2147483647,
         "shopify_variant_id":16347635201,
         "status":"CANCELLED",
         "variant_title":"2 / 3"
      }
   ]
}
```

## Skip subscription

**URL:** `{{ subscription | skip_subscription_url }}`

**Methods accepted:** `GET, POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/skip`

**Template file:** `subscription_skip.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)
* [Subscription](Theme-objects%3A-Subscription)
* [Variants](Theme-objects%3A-Variants)

**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

**POST** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

##  Swap subscription

**URL:** `{{ subscription | search_for_swap_url }} or {{ subscription.id | search_for_swap_url }}`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/swap?previous_item_id=xxxx`

**Methods accepted:** `GET, POST`

**Template file:** `subscription_swap.html`

**Accepted Params**

|Input| Type| Name attribute|
|-|-|-|
|Shopify variant ID (*mandatory*)| text| shopify_variant_id|
|Quantity (*mandatory*)| text| quantity|

**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

**POST** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

## Delete one time product (BETA)

One time products can not be cancelled however they can be deleted. Subscription items can be cancelled but not deleted. Find out more about cancelling subscriptions [here](#subscription_cancel). 

**URL:** `{{ subscription | delete_one_time_product_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/delete`

**Template file:** `subscription_one_time_product_delete.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)
* [Subscription](Theme-objects%3A-Subscription)

**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

> POST `{{ subscription | delete_one_time_product_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ subscription | delete_one_time_product_url }}',
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

## Loop through the subscriptions

Loop through the Subscriptions dictionary to access individual [Subscription](Theme-Objects%3A-Subscription) object.

##### Input
```liquid
{% for subscription in subscriptions %}
   {{ subscription.status }}
{% endfor %}
```

##### Output
```
SUCCESS
SUCCESS
SUCCESS
ERROR
CANCELLED
```