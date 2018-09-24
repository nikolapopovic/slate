# Shop endpoints

<aside class="notice">
  Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

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

### Shop

Show current customer's information.

**URL:** `{{ show_store_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/shop`

**Template file:** `shop.html`

#### Available objects
* [Store](Theme-objects%3A-Store)

