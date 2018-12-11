# Delivery schedule

> EXAMPLE REQUEST

```liquid
{% for delivery in shipment.delivery %}
   {% if loop.index == 1 %}
      Deliver to
      {{ delivery.subscription.address.address1 }}
      {{ delivery.subscription.address.address2 }}
   {% endif %}
{% endfor %}
```

> EXAMPLE RESPONSE

```html
Deliver to 1993 Manning
```

<aside class="notice">
 Delivery schedule is under development and object properties are subject to change. Delivery schedule dates are when your order will be placed. Future deliveries will be added to your schedule as the date approaches.
</aside>

Property | Definition
--------- | -------
<b>date</b> <br> datetime| `"date": "2018-07-17T00:00:00"`<br> 
<b>delivery</b> <br> string| `"id": ""`<br> 
<b>delivery.shipment_type</b> <br> string| `"shipment_type": "PROJECTED_CHARGE"`<br> 
<b>delivery.is_skippable</b> <br> boolean| `"is_skippable": true`<br> 
<b>delivery.is_skipped</b> <br> boolean| `"is_skipped": false`<br> 
<b>delivery.title</b> <br> string| `"title": "20.00% Off Auto renew"` <br> 
<b>delivery.price</b>  <br> integer|  `"price": 4.5` <br>
<b>delivery.shipment_id</b> <br> integer| `"shipment_id": "none"`<br> 
<b>delivery.charge_id</b> <br> integer| `"charge_id": 95591664`<br> 
<b>delivery.charge_type</b> <br> string| `"charge_type": "QUEUED_CHARGE"`<br> 
<b>delivery.subscription</b> <br> object| `"subscription": `<br> See Subscriptions object.
<b>delivery.subscription.address</b> <br> object| `"subscription.address": `<br> See [Address object](#addresses).

## Delivery schedule

> GET `{{ delivery_schedule }}`
<br>
> EXAMPLE REQUEST

```javascript
$.ajax({
  url: '{{ delivery_schedule }}',
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
   "delivery_schedule":[  
      {  
         "date":"2018-11-29T00:00:00",
         "delivery":[  
            {  
               "charge_id":95010549,
               "charge_type":"QUEUED_CHARGE",
               "is_skippable":true,
               "is_skipped":false,
               "price":10.39,
               "shipment_id":"none",
               "shipment_type":"PROJECTED_SHIPMENT",
               "subscription":{  
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
               },
               "title":"Bare Box - 3 Month Plan  Auto renew"
            }
         ]
      }
   ]
}
```

**URL:** `{{ delivery_schedule }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/delivery_schedule`

**Template file:** `delivery_schedule.html`

**Available objects**

* [Store](#shop)
* [Customer](#customers)
* [Delivery schedule](#delivery-schedule)

**JSON:** Appending `.json` to the end of this GET request will return JSON data of the objects available on that route.