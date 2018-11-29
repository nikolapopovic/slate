# Subscriptions

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
<b>next_charge_scheduled_at</b> <br> datetime| `"next_charge_scheduled_at": "2018-12-23T00:00:00"`<br> This will set the first charge date of a new subscription.
<b>number_of_charges</b> <br> integer| `"number_of_charges": 1`<br> Number of non error and non queued charges.
<b>number_of_charges_until_expiration</b> <br> string| `"number_of_charges_until_expiration": 5`<br> How many charges remain.
<b>allow_date_selection</b> <br> boolean| `"allow_date_selection": true`<br>  Should the customer be allowed to choose a specific date to be charged on.
<b>allow_schedule_edit</b> <br> boolean| `"allow_schedule_edit": true`<br> Should the customer be allowed to edit the delivery dates.
<b>shopify_product</b> <br> string| `"shopify_product": " "`<br> The product from Shopify. <https://help.shopify.com/api/reference/product>
<b>shopify_product_id</b> <br> integer| `"shopify_product_id": 1255183683`<br> The id of the Shopify product.
<b>shopify_variant_id</b> <br> integer| `"shopify_variant_id": 3844924611`<br> The id of the Shopify product variant.

## Create subscription
A form to create a new subscription for the current customer.

> POST `{{ create_subscription_url }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ create_subscription_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    shopify_variant_id: 5421822509120,
    quantity: 1,
    order_interval_frequency: 1,
    order_interval_unit: 'month',
    next_charge_date: '2018-12-26',
    address_id: 7976732
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
   "subscription":{  
      "address":{  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":null,
         "city":"los angeles",
         "company":"bootstrap",
         "country":"United States",
         "discount_id":10986334,
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
      "charges_made_on_item":0,
      "id":28609606,
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
      "next_charge_scheduled_at":"2018-12-26T00:00:00",
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
      "status":"ACTIVE",
      "variant_title":""
   }
}
```

**URL:** `{{ create_subscription_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/new`

**Template file:** `subscription_new.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Address](#addresses)
* [Subscription](#subscriptions)
* [Rule](#rules)
* [Variants](#variants)

|Input| Type| Name attribute|
|-|-|-|
|Shopify variant ID (*mandatory*)| text| shopify_variant_id|
|Quantity (*mandatory*)| text| quantity|
|Order interval frequency(*mandatory*)| text| order_interval_frequency|
|Order interval unit (*mandatory*)| text| order_interval_unit|
|Next charge date (*mandatory*)| text| next_charge_date|
|Address ID(*mandatory*)| text| address_id|

## Retrieve subscription
Show details for the current subscription.

> GET `{{ subscription | show_subscription_url }}`
<br>
> EXAMPLE REQUEST

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

> EXAMPLE RESPONSE

```javascript
{  
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
   "subscription":{  
      "address":{  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":null,
         "city":"los angeles",
         "company":"bootstrap",
         "country":"United States",
         "discount_id":10986334,
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
      "charges_made_on_item":0,
      "id":28609606,
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
      "modifiable_properties":[  ],
      "next_charge_scheduled_at":"2018-12-26T00:00:00",
      "number_of_charges":0,
      "number_of_charges_until_expiration":null,
      "order_interval_frequency":"1",
      "order_interval_unit":"month",
      "price":1039,
      "product_title":"Bare Memory  20.00% Off Auto renew",
      "product_variant_title":"Bare Memory  20.00% Off Auto renew",
      "properties":[  ],
      "quantity":1,
      "shopify_product_id":505638748224,
      "shopify_variant_id":5421822509120,
      "status":"ACTIVE",
      "variant_title":""
   }
}
```

**URL:** `{{ subscription | show_subscription_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>`

**Template file:** `subscription.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Subscription](#subscriptions)
* [Variants](#variants)

## Update subscription
Edit the properties of the current subscription.

> POST `{{ subscription | show_subscription_url }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ subscription | show_subscription_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    order_interval_frequency: 20,
    order_interval_unit: 'day',
    quantity: 1
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
   "subscription":{  
      "address":{  
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
         "zip":"90025"
      },
      "address_id":18586680,
      "allow_date_selection":true,
      "allow_schedule_edit":true,
      "charge_interval_frequency":"20",
      "charge_interval_unit":"day",
      "charges_made_on_item":0,
      "id":25769358,
      "interval_options":{  
         "day":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90]
      },
      "is_active":true,
      "is_cancelled":false,
      "is_expired":false,
      "is_one_time_product":false,
      "is_skippable":true,
      "is_skipped":false,
      "is_swappable":true,
      "modifiable_properties":[ ],
      "next_charge_scheduled_at":"2018-12-26T00:00:00",
      "number_of_charges":0,
      "number_of_charges_until_expiration":null,
      "order_interval_frequency":"20",
      "order_interval_unit":"day",
      "price":7000,
      "product_title":"Bare Box - 3 Month Plan  Auto renew",
      "product_variant_title":"Bare Box - 3 Month Plan  Auto renew - x-small",
      "properties":[ ],
      "quantity":1,
      "shopify_product_id":506020921408,
      "shopify_variant_id":5424189177920,
      "status":"ACTIVE",
      "variant_title":"x-small"
   }
}
```

**URL:** `{{ subscription | show_subscription_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>`

**Template file:** `subscription.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Subscription](#subscriptions)
* [Variants](#variants)

## Change next charge date
Set the date of the subscription's next charge.

> POST `{{ subscription | subscription_charge_date_url }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ subscription | subscription_charge_date_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    next_charge_date: "2018-12-23"
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
   "subscription":{  
      "address":{  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":null,
         "city":"los angeles",
         "company":"bootstrap",
         "country":"United States",
         "discount_id":10986334,
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
      "charge_interval_frequency":"2",
      "charge_interval_unit":"week",
      "charges_made_on_item":0,
      "id":28609606,
      "interval_options":{  
         "week":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
      },
      "is_active":true,
      "is_cancelled":false,
      "is_expired":false,
      "is_one_time_product":false,
      "is_skippable":true,
      "is_skipped":false,
      "is_swappable":true,
      "modifiable_properties":[ ],
      "next_charge_scheduled_at":"2018-12-23T00:00:00",
      "number_of_charges":0,
      "number_of_charges_until_expiration":null,
      "order_interval_frequency":"2",
      "order_interval_unit":"week",
      "price":1039,
      "product_title":"Bare Memory  20.00% Off Auto renew",
      "product_variant_title":"Bare Memory  20.00% Off Auto renew",
      "properties":[ ],
      "quantity":2,
      "shopify_product_id":505638748224,
      "shopify_variant_id":5421822509120,
      "status":"ACTIVE",
      "variant_title":""
   }
}
```

**URL:** `{{ subscription | subscription_charge_date_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/change_charge_date`

**Template file:** `subscription_charge_date.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Subscription](#subscriptions)
* [Variants](#variants)

## Cancel subscription
Cancel the current subscription.

> GET `{{ subscription | cancel_subscription_url }}`
<br>
> EXAMPLE REQUEST

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

> EXAMPLE RESPONSE

```javascript
{  
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
   "retention_strategies":[  
      {  
         "discount_code":null,
         "id":764562,
         "incentive_type":"",
         "prevention_text":"Please help us process your request by telling us why you're cancelling.",
         "reason":"This is too expensive"
      },
      {  
         "discount_code":null,
         "id":764568,
         "incentive_type":"",
         "prevention_text":"Would you care to provide any additional details?",
         "reason":"This was created by accident"
      },
      {  
         "discount_code":null,
         "id":764574,
         "incentive_type":"skip_charge",
         "prevention_text":"If you have more than you need, we can skip your upcoming order.",
         "reason":"I already have more than I need"
      },
      {  
         "discount_code":null,
         "id":764580,
         "incentive_type":"",
         "prevention_text":"Please help us process your request by telling us why you're cancelling.",
         "reason":"I need it sooner"
      },
      {  
         "discount_code":null,
         "id":764586,
         "incentive_type":"",
         "prevention_text":"Please help us process your request by telling us why you're cancelling.",
         "reason":"I no longer use this product"
      },
      {  
         "discount_code":null,
         "id":764592,
         "incentive_type":"swap_product",
         "prevention_text":"Would you like to swap the product out for another item?",
         "reason":"I want a different product or variety"
      },
      {  
         "discount_code":null,
         "id":764598,
         "incentive_type":"",
         "prevention_text":"Please help us process your request by telling us why you're cancelling.",
         "reason":"Other reason"
      }
   ],
   "subscription":{  
      "address":{  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":null,
         "city":"los angeles",
         "company":"bootstrap",
         "country":"United States",
         "discount_id":10986334,
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
      "charge_interval_frequency":"2",
      "charge_interval_unit":"week",
      "charges_made_on_item":0,
      "id":28609606,
      "interval_options":{  
         "week":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
      },
      "is_active":true,
      "is_cancelled":false,
      "is_expired":false,
      "is_one_time_product":false,
      "is_skippable":true,
      "is_skipped":false,
      "is_swappable":true,
      "modifiable_properties":[ ],
      "next_charge_scheduled_at":"2018-12-23T00:00:00",
      "number_of_charges":0,
      "number_of_charges_until_expiration":null,
      "order_interval_frequency":"2",
      "order_interval_unit":"week",
      "price":1039,
      "product_title":"Bare Memory  20.00% Off Auto renew",
      "product_variant_title":"Bare Memory  20.00% Off Auto renew",
      "properties":[ ],
      "quantity":2,
      "shopify_product_id":505638748224,
      "shopify_variant_id":5421822509120,
      "status":"ACTIVE",
      "variant_title":""
   }
}
```

**URL:** `{{ subscription | cancel_subscription_url }}`

**Methods accepted:** `GET, POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/cancel`

**Template file:** `subscription_cancel.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Subscription](#subscriptions)
* [Retention strategies](#retention-strategies)
* [Variants](#variants)

## Activate subscription
Activate or re-activate the current subscription

> POST `{{ subscription | activate_subscription_url }}`
<br>
> EXAMPLE REQUEST

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

> EXAMPLE RESPONSE

```javascript
{  
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
   "subscription":{  
      "address":{  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":null,
         "city":"los angeles",
         "company":"bootstrap",
         "country":"United States",
         "discount_id":10986334,
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
      "charge_interval_frequency":"2",
      "charge_interval_unit":"week",
      "charges_made_on_item":0,
      "id":28609606,
      "interval_options":{  
         "week":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
      },
      "is_active":true,
      "is_cancelled":false,
      "is_expired":false,
      "is_one_time_product":false,
      "is_skippable":true,
      "is_skipped":false,
      "is_swappable":true,
      "modifiable_properties":[ ],
      "next_charge_scheduled_at":"2018-12-23T00:00:00",
      "number_of_charges":0,
      "number_of_charges_until_expiration":null,
      "order_interval_frequency":"2",
      "order_interval_unit":"week",
      "price":1039,
      "product_title":"Bare Memory  20.00% Off Auto renew",
      "product_variant_title":"Bare Memory  20.00% Off Auto renew",
      "properties":[ ],
      "quantity":2,
      "shopify_product_id":505638748224,
      "shopify_variant_id":5421822509120,
      "status":"ACTIVE",
      "variant_title":""
   }
}
```

**URL:** `{{ subscription | activate_subscription_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/activate`

**Template file:** `subscription_activate.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Subscription](#subscriptions)
* [Variants](#variants)

## List subscriptions
List all subscriptions for the current customer.

> GET `{{ list_subscriptions_url }}`
<br>
> EXAMPLE REQUEST

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

> EXAMPLE RESPONSE

```javascript
{  
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
            "zip":"90025"
         },
         "address_id":18586680,
         "allow_date_selection":true,
         "allow_schedule_edit":true,
         "charge_interval_frequency":"1",
         "charge_interval_unit":"month",
         "charges_made_on_item":0,
         "id":25769358,
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
         "next_charge_scheduled_at":"2018-12-26T00:00:00",
         "number_of_charges":0,
         "number_of_charges_until_expiration":null,
         "order_interval_frequency":"1",
         "order_interval_unit":"month",
         "price":7000,
         "product_title":"Bare Box - 3 Month Plan  Auto renew",
         "product_variant_title":"Bare Box - 3 Month Plan  Auto renew - x-small",
         "properties":[ ],
         "quantity":1,
         "shopify_product_id":506020921408,
         "shopify_variant_id":5424189177920,
         "status":"ACTIVE",
         "variant_title":"x-small"
      },
      {  
         "address":{  
            "address1":"1933 Manning",
            "address2":"204",
            "cart_note":null,
            "city":"los angeles",
            "company":"bootstrap",
            "country":"United States",
            "discount_id":10986334,
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
         "charge_interval_frequency":"2",
         "charge_interval_unit":"week",
         "charges_made_on_item":0,
         "id":28609606,
         "interval_options":{  
            "week":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]
         },
         "is_active":true,
         "is_cancelled":false,
         "is_expired":false,
         "is_one_time_product":false,
         "is_skippable":true,
         "is_skipped":false,
         "is_swappable":true,
         "modifiable_properties":[ ],
         "next_charge_scheduled_at":"2018-12-23T00:00:00",
         "number_of_charges":0,
         "number_of_charges_until_expiration":null,
         "order_interval_frequency":"2",
         "order_interval_unit":"week",
         "price":1039,
         "product_title":"Bare Memory  20.00% Off Auto renew",
         "product_variant_title":"Bare Memory  20.00% Off Auto renew",
         "properties":[ ],
         "quantity":2,
         "shopify_product_id":505638748224,
         "shopify_variant_id":5421822509120,
         "status":"ACTIVE",
         "variant_title":""
      }
   ]
}
```

**URL:** `{{ list_subscriptions_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions`

**Template file:** `subscriptions.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Addresses](#addresses)
* [Subscription](#subscriptions)

## Skip subscription

**URL:** `{{ subscription | skip_subscription_url }}`

**Methods accepted:** `GET, POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/skip`

**Template file:** `subscription_skip.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Addresses](#addresses)
* [Subscription](#subscriptions)
* [Variants](#variants)

##  Swap subscription

**URL:** `{{ subscription | search_for_swap_url }}`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/swap?previous_item_id=xxxx`

**Methods accepted:** `GET, POST`

**Template file:** `subscription_swap.html`

**Accepted Params**

|Input| Type| Name attribute|
|-|-|-|
|Shopify variant ID (*mandatory*)| text| shopify_variant_id|
|Quantity (*mandatory*)| text| quantity|

## Delete one time product (BETA)

> POST `{{ subscription | delete_one_time_product_url }}`
<br>
> EXAMPLE REQUEST

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

> EXAMPLE RESPONSE

```javascript
{  
   "address":{  
      "address1":"1933 Manning",
      "address2":"204",
      "cart_note":null,
      "city":"los angeles",
      "company":"bootstrap",
      "country":"United States",
      "discount_id":10986334,
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
            "interval_options":{  },
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
         },
         {  
            "address_id":7976732,
            "allow_date_selection":true,
            "allow_schedule_edit":true,
            "charge_interval_frequency":"20",
            "charge_interval_unit":"day",
            "charges_made_on_item":1,
            "id":11959568,
            "interval_options":{  
               "day":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
            },
            "is_active":true,
            "is_cancelled":false,
            "is_expired":false,
            "is_one_time_product":false,
            "is_skippable":true,
            "is_skipped":false,
            "is_swappable":true,
            "modifiable_properties":[  ],
            "next_charge_scheduled_at":"2018-12-13T00:00:00",
            "number_of_charges":1,
            "number_of_charges_until_expiration":5,
            "order_interval_frequency":"20",
            "order_interval_unit":"day",
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
      ],
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

One time products can not be cancelled however they can be deleted. Subscription items can be cancelled but not deleted. Find out more about cancelling subscriptions [here](#cancel-subscription). 

**URL:** `{{ subscription | delete_one_time_product_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/delete`

**Template file:** `subscription_one_time_product_delete.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Addresses](#addresses)
* [Subscription](#subscriptions)

## Loop through the subscriptions

Loop through the Subscriptions dictionary to access individual [Subscription](#subscriptions) object.

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