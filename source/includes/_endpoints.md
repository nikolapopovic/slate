# Endpoints

## Shop endpoints


Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.

### Directory
* [shop](#shop)

### Endpoints

#### shop
Show current customer's information.

**URL:** `{{ show_store_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/shop`

**Template file:** `shop.html`

#### Available objects
* [Store](Theme-objects%3A-Store)

>Example Request
<br>
> GET {{show_store_url}}

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
>Example Response

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

## Customer endpoints

Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.

### Directory
* [customer](#customer)
* [customer_edit](#customer_edit)

### Endpoints

#### customer
Show current customer's information.

**URL:** `{{ show_customer_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>`

**Template file:** `customer.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Address)
* [Subscriptions](Theme-objects%3A-Subscriptions)

>Example Request
<br>
>GET `{{ show_customer_url }}`

```javascript
$.ajax({
  url: '{{ show_customer_url }}',
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
>Example Response

```javascript
{
  addresses: [
    {
      id: 1635,
      first_name: 'Jacques',
      last_name: 'Mayol',
      address1: '105 Bigblue street',
      address2: '',
      company: '',
      city: 'Venice',
      province: 'California',
      zip: 90291,
      country: 'United States',
      phone: 310334444,
      cart_note: ''
    }
  ],
  customer: {
    name: "Jacques Mayol",
    first_name: "Jacques",
    last_name: "Mayol",
    email: "jacques.mayol@rechargeapps.com",
    hash: "1376da46186943db587b",
    shopify_customer_id: "343646087",
    billing_address1: "105 Bigblue street",
    billing_address2: "Apt. 100",
    billing_city: "Venice",
    billing_company: "Dolphin Inc",
    billing_country: "United States",
    billing_first_name: "Jacques",
    billing_last_name: "Mayol",
    billing_phone: "3103334444",
    billing_province: "California",
    billing_zip: "90291",
    has_credit_card_purchase: true,
    has_error_charge: true,
    customer_card: null,
    customer_payment_type: "credit"
  }
}
```

#### customer_edit
Show current customer's information.

**URL:** `{{ update_customer_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/edit`

**Template file:** `customer_edit.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Address)
* [Subscriptions](Theme-objects%3A-Subscriptions)

#### Available properties

**Customer Information**

|Input| Type| Name attribute|
|:-------|:-------|:-------|
|First Name (*optional*)| text| first_name|
|Last name (*mandatory*)| text| last_name|
|Email (*optional*)| text| email|

**Billing address**

|Input| Type| Name attribute|
|:-------|:-------|:-------|
|First Name (*optional*)| text| first_name|
|Last name (*mandatory*)| text| last_name|
|Company (*optional*)| text| company|
|Address line (*mandatory*)| text| address1|
|Address 2 (*optional*)| text| address2|
|City (*optional*)| text | city|
|ZIP Code (*mandatory*)| text| zip|
|Country (*optional*)| text| country|
|Province State (*optional*)| text| province|
|Phone (*optional*)| text| phone|

>Example Request
<br>
>POST {{ update_customer_url }}

```javascript
$.ajax({
  url: '{{ update_customer_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    email: 'jacques.mayol@rechargeapps.com',
    id: 11596544,
    first_name: 'Jacques',
    last_name: 'Mayol',
    address1: '105 Bigblue street',
    address2: '',
    company: '',
    city: 'Venice',
    province: 'California',
    zip: 90291,
    country: 'United States',
    phone: 310334444,
    cart_note: ''
  }
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

>Example Response

```javascript
{
  addresses: [
    {
      id: 11596544,
      first_name: 'Jacques',
      last_name: 'Mayol',
      address1: '105 Bigblue street',
      address2: '',
      company: '',
      city: 'Venice',
      province: 'California',
      zip: 90291,
      country: 'United States',
      phone: 310334444,
      cart_note: ''
    }
  ],
  customer: {
    name: "Jacques Mayol",
    first_name: "Jacques",
    last_name: "Mayol",
    email: "jacques.mayol@rechargeapps.com",
    hash: "1376da46186943db587b",
    shopify_customer_id: "343646087",
    billing_address1: "105 Bigblue street",
    billing_address2: "Apt. 100",
    billing_city: "Venice",
    billing_company: "Dolphin Inc",
    billing_country: "United States",
    billing_first_name: "Jacques",
    billing_last_name: "Mayol",
    billing_phone: "3103334444",
    billing_province: "California",
    billing_zip: "90291",
    has_credit_card_purchase: true,
    has_error_charge: true,
    customer_card: null,
    customer_payment_type: "credit"
  }
}
```