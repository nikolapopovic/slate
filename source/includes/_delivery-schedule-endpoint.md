# Delivery schedule endpoint

<aside class="notice">
  Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

**Directory**

* [delivery_schedule](#delivery_schedule)

## delivery_schedule
Show current customer's information.

**URL:** `{{ delivery_schedule }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/delivery_schedule`

**Template file:** `delivery_schedule.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Delivery schedule](Theme-objects%3A-Delivery-schedule)

> GET `{{ delivery_schedule }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ delivery_schedule }}',
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
   "delivery_schedule":[  
      {  
         "date":"2018-09-26T00:00:00",
         "delivery":[  
            {  
               "charge_id":73322052,
               "charge_type":"QUEUED_CHARGE",
               "is_skippable":true,
               "is_skipped":false,
               "price":8.0,
               "shipment_id":"none",
               "shipment_type":"PROJECTED_SHIPMENT",
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
                  "modifiable_properties":[ ],
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
          ]
        }
      ]
    }
```