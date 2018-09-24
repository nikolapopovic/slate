# Customer endpoints

<aside class="notice">
  Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

#### Directory
* [customer](#customer)
* [customer_edit](#customer_edit)

## customer
Show current customer's information.

> GET `{{ show_customer_url }}`
<br>
> Example input

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

> Example output

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

**URL:** `{{ show_customer_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>`

**Template file:** `customer.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Address)
* [Subscriptions](Theme-objects%3A-Subscriptions)

## customer_edit
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

> POST `{{ update_customer_url }}`
<br>
> Example input

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

> Example output

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

**Customer Information**

|Input| Type| Name attribute|
---|---|---
|First Name (*optional*)| text| first_name|
|Last name (*mandatory*)| text| last_name|
|Email (*optional*)| text| email|

**Billing address**

|Input| Type| Name attribute|
---|---|---
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

