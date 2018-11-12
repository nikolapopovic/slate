# Retention strategies

Property | Definition
--------- | -------
<b>{{ retention_strategy.reason }}</b> <br> string| `"reason": " "`<br> 
<b>{{ retention_strategy.prevention_text }}</b> <br> string| `"prevention_text": " "`<br> 
<b>{{ retention_strategy.incentive_type }}</b> <br> string| `"incentive_type": " "`<br> 
<b>{{ retention_strategy.discount_code }}</b> <br> string| `"discount_code": " "`<br> 

## Retention strategy
Cancel the current subscription providing retention strategy.

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
         "address1":"3030 Nebraska Avenue",
         "address2":"",
         "cart_note":"",
         "city":"Santa Monica",
         "company":"ReCharge",
         "country":"United States",
         "discount_id":null,
         "first_name":"Test",
         "id":18586680,
         "last_name":"Tiege",
         "phone":"",
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
      "price":7000,
      "product_title":"Bare Box - 3 Month Plan  Auto renew",
      "product_variant_title":"Bare Box - 3 Month Plan  Auto renew - x-small",
      "properties":[ ],
      "quantity":1,
      "shopify_product_id":506020921408,
      "shopify_variant_id":5424189177920,
      "status":"CANCELLED",
      "variant_title":"x-small"
   }
}
```

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

## Loop through the retention strategies
Loop through the Retention Strategies dictionary to access individual [Retention strategy](Theme-Objects%3A-Retention-strategy) object.

> Example input

```liquid
{% for strategy in retention_strategies %}
	{{ strategy.type }}
{% endfor %}
```

