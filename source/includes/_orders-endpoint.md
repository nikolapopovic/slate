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
<b>processed_at</b>  <br> datetime |  `"processed_at": "2018-02-15T11:57:19"` <br> The date when the order was submitted.

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