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
<b>line_items</b> <br> string|  `"price": 4.5`<br> `"product_title": "Bricks 10.00% Off Auto renew"`<br> `"quantity": 1`<br> `"quantity": 1`<br> `"shopify_product_id": 505472712768`<br> `"shopify_variant_id": 5420805816384`<br> `"subscription_id": 11770822`<br> `"title": "Bricks 10.00% Off Auto renew (Ships every 30 days)"`<br> `"variant_title": "1"`<br> `"properties": { "name":"shipping_interval_frequency", "value":"30"}`<br>

## orders
List history of orders placed by the current customer.

**URL:** `{{ list_orders_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/orders`

**Template file:** `orders.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Orders](Theme-objects%3A-Orders)

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
  orders: [
    {
      address_id: 11082645,
      address_is_active: false,
      billing_address: null,
      charge_id: 57646872,
      charge_status: "SUCCESS",
      customer_id: 10937991,
      email: null,
      first_name: "Recharge",
      id: 41927595,
      is_prepaid: 0,
      last_name: "Test",
      line_items: [
        {
          price: 0,
          product_title: "test product  Auto renew",
          properties: [
            {
              name: "shipping_interval_frequency",
              value: "30"
            },
            {
              name: ""shipping_interval_unit_type"",
              value: "Days"
            }
          ]
        quantity: 1,
        shopify_product_id: "751915925561",
        shopify_variant_id: "7988821229625",
        subscription_id: 16098771,
        title: "test product  Auto renew (Ships every 30 days)",
        variant_title: ""
    	}
      ]
      payment_processor: "stripe",
      processed_at: "2018-05-17T10:34:07",
      scheduled_at: "2018-05-17T00:00:00",
      shipping_address: null,
      shopify_order_id: 418732769337,
      shopify_order_number: 1003,
      status: "SUCCESS",
      total_price: 0,
      type: "CHECKOUT"
    },
    {
      address_id: 84514759,
      address_is_active: false,
      billing_address: null,
      charge_id: 56932156,
      charge_status: "SUCCESS",
      customer_id: 10937991,
      email: null,
      first_name: "Bootstrap",
      id: 25413578,
      is_prepaid: 0,
      last_name: "Testing",
      line_items: [
        {
          price: 20,
          product_title: "Product Sample",
          properties: [
            {
              name: "shipping_interval_frequency",
              value: "30"
            },
            {
              name: ""shipping_interval_unit_type"",
              value: "Days"
            }
          ]
        quantity: 1,
        shopify_product_id: "125489651246",
        shopify_variant_id: "564781452324",
        subscription_id: 5412459,
        title: "Product sample (Ships every 30 days)",
        variant_title: ""
    	}
      ]
      payment_processor: "stripe",
      processed_at: "2018-05-17T10:34:07",
      scheduled_at: "2018-05-17T00:00:00",
      shipping_address: null,
      shopify_order_id: 418732769337,
      shopify_order_number: 1003,
      status: "SUCCESS",
      total_price: 0,
      type: "CHECKOUT"
    }
  ]
}
```

## order
Show details for the current order.

**URL:** `{{ order | show_order_url }}` or `{{ order.id | show_order_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/orders/<int:order_id>`

**Template file:** `order.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Order](Theme-objects%3A-Order)

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
  orders: [
    {
      address_id: 11082645,
      address_is_active: false,
      billing_address: null,
      charge_id: 57646872,
      charge_status: "SUCCESS",
      customer_id: 10937991,
      email: null,
      first_name: "Recharge",
      id: 41927595,
      is_prepaid: 0,
      last_name: "Test",
      line_items: [
        {
          price: 0,
          product_title: "test product  Auto renew",
          properties: [
            {
              name: "shipping_interval_frequency",
              value: "30"
            },
            {
              name: ""shipping_interval_unit_type"",
              value: "Days"
            }
          ]
        quantity: 1,
        shopify_product_id: "751915925561",
        shopify_variant_id: "7988821229625",
        subscription_id: 16098771,
        title: "test product  Auto renew (Ships every 30 days)",
        variant_title: ""
    	}
      ]
      payment_processor: "stripe",
      processed_at: "2018-05-17T10:34:07",
      scheduled_at: "2018-05-17T00:00:00",
      shipping_address: null,
      shopify_order_id: 418732769337,
      shopify_order_number: 1003,
      status: "SUCCESS",
      total_price: 0,
      type: "CHECKOUT"
    }
  ]
}
```