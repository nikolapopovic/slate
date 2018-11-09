# Orders

<aside class="notice">
Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

### Order properties

Property | Definition
--------- | -------
<b>customer_id</b> <br> integer| `"customer_id": 8059036`<br> The unique numeric identifier of the customer.
<b>first_name</b> <br> string| `"first_name": "Recharge"`<br> The first name of the customer.
<b>last_name</b> <br> string| `"last_name": "Test"`<br> The last name of the customer.
<b>email</b> <br> string|  `"email": "baresupplements.myshopify.com"` <br> The street associated with the address.
<b>processed_at</b>  <br> datetime|  `"processed_at": "2018-02-15T11:57:19"` <br> The date when the order was submitted.
<b>scheduled_at</b>  <br> datetime|  `"scheduled_at": "2018-02-15T00:00:00"` <br> The date when the order will ship.
<b>status</b>  <br> string|  `"status": "SUCCESS"` <br> The status of creating the order within Shopify. The valid values are “SUCCESS”, “QUEUED”, “ERROR”, “REFUNDED”, “SKIPPED”.
<b>type</b>  <br> string|  `"type": "CHECKOUT"` <br> Shows if order was made from checkout or a recurring charge. The valid values are “CHECKOUT” or “RECURRING”.
<b>total_price</b>  <br> string|  `"total_price": "11,59 US$"` <br> The sum of all of the prices of the items in the order with taxes and discounts included (must be positive).
<b>shopify_order_id</b>  <br> integer|  `"shopify_order_id": 359467483200` <br> The unique numeric identifier within Shopify for the order.
<b>shopify_order_number</b>  <br> integer|  `"shopify_order_number": 1001` <br> The unique order number within Shopify.
<b>id</b>  <br> integer|  `"id": 30999220` <br> The unique numeric identifier for the order.
<b>charge_id</b>  <br> integer|  `"charge_id": 41955283` <br> The unique numeric identifier of the charge.
<b>charge_status</b>  <br> string|  `"charge_status": "SUCCESS"` <br> The valid values are “SUCCESS”, “REFUNDED”, “PARTIALLY_REFUNDED”.
<b>is_prepaid</b>  <br> integer|  `"is_prepaid": 0` <br> The order that has been paid for a pre-determined number of months. 0=No, 1=Yes.
<b>payment_processor</b>  <br> string|  `"payment_processor": 30999220` <br> The valid values are “braintree”, “stripe”, “authorize”.
<b>line_items</b> <br> string|  `"price": 4.5`<br> `"product_title": "Bricks 10.00% Off Auto renew"`<br> `"quantity": 1`<br> `"shopify_product_id": 505472712768`<br> `"shopify_variant_id": 5420805816384`<br> `"subscription_id": 11770822`<br> `"title": "Bricks 10.00% Off Auto renew (Ships every 30 days)"`<br>`"variant_title": "1"`<br> `"properties": { "name":"shipping_interval_frequency", "value":"30"}`<br> A list of line item objects, each one containing information about an item in the order:<br><ul><li>[integer] price: The price of the product. </li> <li>[string] product_title: The title of the product. </li> <li>[integer] quantity:  The quantity of the product. </li> <li>[integer] shopify_product_id: The id of the Shopify product. </li> <li>[integer] shopify_variant_id: The id of the Shopify product variant. </li> <li>[integer] subscription_id: The unique numeric identifier for a subscription. </li> <li>[string] title: The title of the product. </li> <li>[integer] variant_title: The title of the product variant. </li> </ul>
<b>address_id</b>  <br> integer|  `"address_id": 7976732` <br> The id of the customer shipping address that this order is tied to.
<b>address_is_active</b>  <br> boolean|  `"address_is_active": True` <br> Returns boolean checking if address is active.
<b>billing_address</b>  <br> boolean|  `"billing_address": True` <br> Returns boolean checking if address is active.
<b>billing_address</b> | `"address1": "1933 Manning"`<br>`"address2": "204"`<br>`"city": "Los Angeles"`<br>`"company": "bootstrap"`<br>`"country": "United States"`<br>`"first_name": "Corey"`<br>`"last_name": "Capetillo"`<br>`"phone": 3103103101`<br>`"province": "California"`<br>`"zip": 90025`<br><br>This is all of the billing information related to the order:<ul><li>[string] address1: The street address of the billing address.</li><li>[string] address2: An optional additional field for the street address of the billing address.</li><li>[string] city: The city of the billing address.</li><li>[string] company: The company of the person associated with the billing address.</li><li>[string] country: The name of the country of the billing address.</li><li>[string] first_name: The first name of the person associated with the payment method.</li><li>[string] last_name: The last name of the person associated with the payment method.</li><li>[string] phone: The phone number associated with the billing address.</li><li>[string] province: The name of the state or province of the billing address.</li><li> [string] zip:The zip or postal code of the billing address.</li></ul>
<b>shipping_address</b> | `"address1": "1933 Manning"`<br>`"address2": "204"`<br>`"city": "Los Angeles"`<br>`"province": "California"`<br>`"first_name": "Corey"`<br>`"last_name": "Capetillo"`<br>`"zip": 90025`<br>`"company": "bootstrap"`<br>`"phone": 3103103101`<br>`"country": "United States"`<br><br>The mailing address where the order will be shipped to:<br><ul><li>[string] address1: The street address of the shipping address.</li><li>[string] address2: An optional additional field for the street address of the shipping address.</li><li>[string] city: The city of the shipping address.</li><li>[string] company: The company of the person associated with the shipping address.</li><li>[string] country: The name of the country of the shipping address.</li><li>[string] first_name: The first name of the person associated with the shipping address.</li><li>[string] last_name: The last name of the person associated with the shipping address.</li><li>[string] phone: The phone number associated with the shipping address.</li><li>[string] province: The name of the state or province of the shipping address.</li><li> [string] zip: The zip or postal code of the shipping address.</li></ul>

## Retrieve order
Show details for the current order.

> GET `{{ order | show_order_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ order | show_order_url }}',
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
      "billing_address1":"",
      "billing_address2":"",
      "billing_city":"",
      "billing_company":"",
      "billing_country":"",
      "billing_first_name":"",
      "billing_last_name":"",
      "billing_phone":"",
      "billing_province":"",
      "billing_zip":"",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"recharge@bootstrapheroes.com",
      "first_name":"",
      "has_credit_card_purchase":true,
      "has_error_charge":true,
      "hash":"109379913bfb5fc09304edbd",
      "last_name":"Peric",
      "name":" Peric",
      "shopify_customer_id":"489429368889"
   },
   "order":{  
      "address_id":11082645,
      "address_is_active":true,
      "billing_address":null,
      "charge_id":86508843,
      "charge_status":"SUCCESS",
      "customer_id":10937991,
      "email":null,
      "first_name":"",
      "id":63231891,
      "is_prepaid":0,
      "last_name":"Peric",
      "line_items":[  
         {  
            "price":"0.00",
            "product_title":"test product  Auto renew",
            "properties":[  

            ],
            "quantity":200,
            "shopify_product_id":"751915925561",
            "shopify_variant_id":"7988821229625",
            "subscription_id":19086025,
            "title":"test product  Auto renew",
            "variant_title":""
         }
      ],
      "payment_processor":"stripe",
      "processed_at":"2018-10-04T03:12:55",
      "scheduled_at":"2018-10-04T00:00:00",
      "shipping_address":null,
      "shopify_order_id":720488038457,
      "shopify_order_number":1021,
      "status":"SUCCESS",
      "total_price":0,
      "type":"RECURRING"
   }
}
```

**URL:** `{{ order | show_order_url }}` or `{{ order.id | show_order_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/orders/<int:order_id>`

**Template file:** `order.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Order](Theme-objects%3A-Order)

## List orders
List history of orders placed by the current customer.

> GET `{{ list_orders_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ list_orders_url }}',
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
      "billing_address1":"",
      "billing_address2":"",
      "billing_city":"",
      "billing_company":"",
      "billing_country":"",
      "billing_first_name":"",
      "billing_last_name":"",
      "billing_phone":"",
      "billing_province":"",
      "billing_zip":"",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"recharge@bootstrapheroes.com",
      "first_name":"",
      "has_credit_card_purchase":true,
      "has_error_charge":true,
      "hash":"109379913bfb5fc09304edbd",
      "last_name":"Peric",
      "name":" Peric",
      "shopify_customer_id":"489429368889"
   },
   "orders":[  
      {  
         "address_id":11082645,
         "address_is_active":true,
         "billing_address":null,
         "charge_id":57646872,
         "charge_status":"SUCCESS",
         "customer_id":10937991,
         "email":null,
         "first_name":"",
         "id":41927595,
         "is_prepaid":0,
         "last_name":"Peric",
         "line_items":[  
            {  
               "price":0.0,
               "product_title":"test product  Auto renew",
               "properties":[  
                  {  
                     "name":"shipping_interval_frequency",
                     "value":"30"
                  },
                  {  
                     "name":"shipping_interval_unit_type",
                     "value":"Days"
                  }
               ],
               "quantity":1,
               "shopify_product_id":"751915925561",
               "shopify_variant_id":"7988821229625",
               "subscription_id":16098771,
               "title":"test product  Auto renew (Ships every 30 days)",
               "variant_title":""
            }
         ],
         "payment_processor":"stripe",
         "processed_at":"2018-05-17T10:34:07",
         "scheduled_at":"2018-05-17T00:00:00",
         "shipping_address":null,
         "shopify_order_id":418732769337,
         "shopify_order_number":1003,
         "status":"SUCCESS",
         "total_price":0,
         "type":"CHECKOUT"
      },
      {  
         "address_id":11082645,
         "address_is_active":true,
         "billing_address":null,
         "charge_id":82148689,
         "charge_status":"SUCCESS",
         "customer_id":10937991,
         "email":null,
         "first_name":"",
         "id":59156695,
         "is_prepaid":0,
         "last_name":"Peric",
         "line_items":[  
            {  
               "price":"0.00",
               "product_title":"test product  Auto renew",
               "properties":[  

               ],
               "quantity":1,
               "shopify_product_id":"751915925561",
               "shopify_variant_id":"7988821229625",
               "subscription_id":19086025,
               "title":"test product  Auto renew",
               "variant_title":""
            }
         ],
         "payment_processor":"stripe",
         "processed_at":"2018-09-12T20:05:31",
         "scheduled_at":"2018-07-23T00:00:00",
         "shipping_address":null,
         "shopify_order_id":686150910009,
         "shopify_order_number":1017,
         "status":"SUCCESS",
         "total_price":0,
         "type":"RECURRING"
      }
   ]
}
```

**URL:** `{{ list_orders_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/orders`

**Template file:** `orders.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Orders](Theme-objects%3A-Orders)

## Loop through the orders

Loop through the Orders dictionary to access individual [Order](Theme-Objects%3A-Order) object.

##### Input
```liquid
{% for order in orders %}
  {{ order.id }}
{% endfor %}
```

##### Output
```
1001
1002
1003
```