# Addresses endpoint

<aside class="notice">
  Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

**Directory**

* [addresses](#addresses)
* [address](#address)
* [address_edit](#address_edit)
* [address_new](#address_new)
* [address_apply_discount](#address_apply_discount)
* [address_remove_discount](#address_remove_discount)

## addresses
List all addresses for the current customer.

**URL:** `{{ list_address_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses`

**Template file:** `addresses.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Addresses)
* [Subscriptions](Theme-objects%3A-Subscriptions)

> GET `{{ list_address_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ list_address_url }}',
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

Response will be multiple objects. The object(s) requested and the customer object.


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
    },
    {
      id: 1649,
      first_name: 'Jacques',
      last_name: 'Mayol',
      address1: '308 Bigblue street',
      address2: 'Apt 105',
      company: 'Mystique',
      city: 'Los Angeles',
      province: 'California',
      zip: 90204,
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

If you perform a GET request with the data type of `json` on just about any URL, or append the `.json` extension to the URL, you'll receive a JSON object of the data available.

## address
Show details for the current address.

**URL:** `{{ address | show_address_url }}` or `{{ address.id | show_address_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>`

**Template file:** `address.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)

> GET `{{ address | show_address_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ address | show_address_url }}',
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
  addresses: {
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
    },
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

## address_edit
Form to edit and update the current address.

**URL:** `{{ address | update_address_url }}` or `{{ address.id | update_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/edit`

**Template file:** `address_edit.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)

> POST `{{ address | update_address_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ address | update_address_url }}',
  type: 'post',
  dataType: 'json',
  data: {
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
  addresses: {
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
  },
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

**Available properties**

|Input| Type| Name attribute|
---|---|---
|First Name (*optional*)| text| first_name|
|Last name (*mandatory*)| text| last_name|
|Company (*optional*)| text| company|
|Address line (*mandatory*)| text| address1|
|Address 2 (*optional*)| text| address2|
|Company (*optional*)| text| address2|
|City (*optional*)| text | city|
|ZIP Code (*mandatory*)| text| zip|
|Country (*optional*)| text| country|
|Province State (*optional*)| text| province|
|Phone (*optional*)| text| phone|

**GET** via AJAX is not supported on this endpoint. Please refer to `address/<id>`

## address_new
Page with form to create a new address for current customer.

**URL:** `{{ create_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/new`

**Template file:** `address_new.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Addresses)
* [Subscriptions](Theme-objects%3A-Subscriptions)

> POST `{{ create_address_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ create_address_url }}',
  type: 'post',
  dataType: 'json',
  data: {
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

> Example output

```javascript
{
  addresses: {
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
  },
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

**Available properties**

|Input| Type| Name attribute|
---|---|---
|First name (*optional*)| text| first_name|
|Last name (*mandatory*)| text| last_name|
|Company (*optional*)| text| company|
|Address 1 (*mandatory*)| text| address1|
|Address 2 (*optional*)| text| address2|
|City (*optional*)| text | city|
|Country (*mandatory*)| text| country|
|Province (*optional*)| text| province|
|ZIP/Postal Code (*optional*)| text| zip|
|Phone Number (*optional*)| text| phone|

**GET** via AJAX is not supported on this endpoint. Please refer to `address/<id>`

## address_apply_discount
Form to apply discount to current address.

**URL:** `{{ address | apply_discount_to_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/apply_discount`

**Template file:** `subscriptions.html`

> POST `{{ address | apply_discount_to_address_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ address | apply_discount_to_address_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    discount_code: 'DISKAUNT',
  }
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

**Available properties**

|Input| Type| Name attribute|
---|---|---
|Discount Code (*mandatory*)| text| discount_code|

## address_remove_discount
Form to remove discount applied to current address.

**URL:** `{{ address | remove_discount_from_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/remove_discount`

**Template file:** `subscriptions.html`

> POST `{{ address | remove_discount_from_address_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ address | remove_discount_from_address_url }}',
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