# Shop

<aside class="notice">
  Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

### Shop properties

Property | Definition
--------- | -------
<b>name</b> <br> string| `"name": "baresupplements"`<br>  The name of shop.
<b>email</b> <br> string| `"email": "baresupplements.myshopify.com"`<br> The email of shop.
<b>currency</b> <br> string| `"currency": "USD"`<br> The currency of shop.
<b>domain</b> <br> string| `"domain": "baresupplements.com"`<br> The domain of shop.
<b>permanent_domain</b> <br> string|  `"permanent_domain": "baresupplements.myshopify.com"` <br> The permanent domain of shop.
<b>cancellation_email_contact</b>  <br> string|  `"cancellation_email_contact": ` <br> The customer cancellation email.
<b>customer_can_cancel_after_x_charges</b> <br> integer| `"customer_can_cancel_after_x_charges": 0`<br>  The number of charges after which the customer can cancel the subscription.
<b>customer_adjust_frequency_rule</b> <br> string| `"customer_adjust_frequency_rule": "any"`<br> The valid values are “any”, “limited”, “prohibited”.
<b>allow_customers_to_add_products</b> <br> boolean| `"allow_customers_to_add_products": true`<br> Returns boolean checking if store allows customers to add products.
<b>allow_customers_to_cancel</b> <br> boolean| `"allow_customers_to_cancel": true`<br> Returns boolean checking if store allows customers to cancel subscription.
<b>allow_customers_to_change_quantity</b> <br> boolean| `"allow_customers_to_change_quantity": true`<br> Returns boolean checking if store allows customers to change quantity.
<b>allow_customers_to_change_variants</b> <br> boolean| `"allow_customers_to_change_variants": true`<br> Returns boolean checking if store allows customers to change variants.
<b>allow_customers_to_edit_address</b> <br> boolean|  `"allow_customers_to_edit_address": true` <br> Returns boolean checking if store allows customers to edit address.
<b>allow_customers_to_edit_upcoming_date</b>  <br> boolean|  `"allow_customers_to_edit_upcoming_date": 12` <br> Returns boolean checking if store allows customers to edit upcoming date.
<b>allow_customers_to_reactivate</b> <br> boolean| `"allow_customers_to_reactivate": true`<br> Returns boolean checking if store allows customers to reactivate subscription.
<b>allow_customers_to_skip_delivery</b> <br> boolean| `"allow_customers_to_skip_delivery": true`<br> Returns boolean checking if store allows customers to skip delivery.
<b>allow_customers_to_swap_products</b> <br> boolean| `"allow_customers_to_swap_products": true`<br> Returns boolean checking if store allows customers to swap products.
<b>allow_customers_to_view_delivery_schedule</b> <br> boolean| `"allow_customers_to_view_delivery_schedule": true`<br> Returns boolean checking if store allows customers to view delivery schedule.
<b>allow_customers_to_add_discounts</b> <br> boolean| `"allow_customers_to_add_discounts": true`<br> Returns boolean checking if store allows customers to add discount.
<b>allow_customers_to_purchase_one_time_products</b> <br> boolean| `"allow_customers_to_purchase_one_time_products": true`<br> Returns boolean checking if store allows customers to purchase one time products.

## Shop

> GET `{{ show_store_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ show_store_url }}',
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
   "store":{  
      "allow_customers_to_add_discounts":true,
      "allow_customers_to_add_products":true,
      "allow_customers_to_cancel":true,
      "allow_customers_to_change_quantity":true,
      "allow_customers_to_change_variants":true,
      "allow_customers_to_edit_address":true,
      "allow_customers_to_edit_upcoming_date":true,
      "allow_customers_to_reactivate":true,
      "allow_customers_to_skip_delivery":true,
      "allow_customers_to_swap_products":true,
      "allow_customers_to_view_delivery_schedule":true,
      "cancellation_email_contact":"",
      "countries":[  

      ],
      "currency":"USD",
      "customer_adjust_frequency_rule":"Any",
      "customer_can_cancel_after_x_charges":0,
      "domain":"test_store.myshopify.com",
      "email":"test@rechargeapps.com",
      "force_customer_portal_accounts":true,
      "legacy_css_footer":"",
      "legacy_css_header":"",
      "name":"blackestnight",
      "permanent_domain":"test_store.myshopify.com",
      "show_discount_input":1
   }
}
```

Show current customer's information.

**URL:** `{{ show_store_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/shop`

**Template file:** `shop.html`

**Available objects**

* [Store](Theme-objects%3A-Store)