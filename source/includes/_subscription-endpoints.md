# Subscription endpoints

<aside class="notice">
  Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

#### Directory
* [subscriptions](#subscriptions)
* [subscription](#subscription)
* [subscription_activate](#subscription_activate)
* [subscription_cancel](#subscription_cancel)
* [subscription_edit](#subscription_edit)
* [subscription_new](#subscription_new)
* [subscription_skip](#subscription_skip)
* [subscription_swap](#subscription_swap)
* [subscription_charge_date](#subscription_charge_date)

## subscriptions
List all subscriptions for the current customer.

**URL:** `{{ list_subscriptions_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions`

**Template file:** `subscriptions.html`

#### Available objects
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
  dataType: 'json',
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

## subscription
Show details for the current subscription.

**URL:** `{{ subscription | show_subscription_url }}` or `{{ subscription.id | show_subscription_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>`

**Template file:** `subscription.html`

#### Available objects
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
  dataType: 'json',
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

## subscription_activate
Activate or re-activate the current subscription

**URL:** `{{ subscription | activate_subscription_url }}` or `{{ subscription.id | activate_subscription_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/activate`

**Template file:** `subscription_activate.html`

#### Available objects
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
  dataType: 'json',
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

## subscription_cancel
Cancel the current subscription.

**URL:** `{{ subscription | cancel_subscription_url }}` or `{{ subscription.id | cancel_subscription_url }}`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/cancel`

**Template file:** `subscription_cancel.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Subscription](Theme-objects%3A-Subscription)
* [Retention strategies](Theme-objects%3A-Retention-strategies)
* [Variants](Theme-objects%3A-Variants)

## subscription_edit
Edit the properties of the current subscription.

**URL:** `{{ subscription | update_subscription_url }}` or `{{ subscription.id | update_subscription_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/edit`

**Template file:** `subscription_edit.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Subscription](Theme-objects%3A-Subscription)
* [Variants](Theme-objects%3A-Variants)

> POST `{{ subscription | update_subscription_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ subscription | update_subscription_url }}',
  type: 'post',
  data: {
        quantity: 100,
        order_interval_frequency: 3,
        order_interval_unit: 'week',
  }
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

#### Available properties

|Input| Type| Name attribute|
|---|---|---
|Quantity (*mandatory*)| integer | quantity|
|Order interval frequency (*mandatory*)| text| order_interval_frequency|
|Order interval unit (*mandatory*)| text| order_interval_unit|

**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

## subscription_new
A form to create a new subscription for the current customer.

**URL:** `{{ create_subscription_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/new`

**Template file:** `subscription_new.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)
* [Subscription](Theme-objects%3A-Subscription)
* [Rule](Theme-objects%3A-Rule)

> POST `{{ create_subscription_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ create_subscription_url }}',
  type: 'post',
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

|Input| Type| Name attribute|
|---|---|---
|Shopify variant ID (*mandatory*)| text| shopify_variant_id|
|Quantity (*mandatory*)| text| quantity|
|Order interval frequency(*mandatory*)| text| order_interval_frequency|
|Order interval unit (*mandatory*)| text| order_interval_unit|
|Next charge date (*mandatory*)| text| next_charge_date|
|Address ID(*mandatory*)| text| address_id|

**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

## subscription_skip

**URL:** `{{ subscription | skip_subscription_url }}`

**Methods accepted:** `GET, POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/skip`

**Template file:** `subscription_skip.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)
* [Subscription](Theme-objects%3A-Subscription)
* [Variants](Theme-objects%3A-Variants)

**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

**POST** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`


## subscription_swap

**URL:** `{{ subscription | search_for_swap_url }} or {{ subscription.id | search_for_swap_url }}`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/swap?previous_item_id=xxxx`

**Methods accepted:** `GET, POST`

**Template file:** `subscription_swap.html`

**Accepted Params**
- shopify_variant_id (required)
- quantity 


**GET** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`

**POST** via AJAX is not supported on this endpoint. Please refer to `subscription/<id>`


## subscription_charge_date
Set the date of the subscription's next charge.

**URL:** `{{ subscription | subscription_charge_date_url }}` or `{{ subscription.id | subscription_charge_date_url }}`

**Methods accepted:** `GET, POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/subscriptions/<int:subscription_id>/change_charge_date`

**Template file:** `subscription_charge_date.html`

#### Available objects
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
