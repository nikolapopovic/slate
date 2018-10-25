# Customers

<aside class="notice">
Provides essential customer information, as well as associated billing information. Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

> Example input

```liquid
Welcome {{customer.name}}

{{ customer.first_name }} {{ customer.last_name }}
{{ customer.email}}

{{ customer.billing_address1 }}
{{ customer.billing_address2 }}
{{ customer.billing_city }}, {{ customer.billing_province }}
{{ customer.billing_zip }}
{{ customer.billing_country }}
```

> Example output

```html
Welcome Mike Flynn

Mike Flynn
mike@gmail.com

3030 Nebraska Avenue
#301
Los Angeles, California
90404
United States
```

Property | Definition
--------- | -------
<b>first_name</b> <br> string| `"first_name": "Mike"`<br>  The customer's first name.
<b>last_name</b> <br> string| `"last_name": "Flynn"`<br>  The customer's last name.
<b>name</b> <br> string| `"name": "Mike Flynn"`<br>  The customer's name.
<b>email</b> <br> string|  `"email": "mike@gmail.com"` <br> The email address of the customer.
<b>hash</b>  <br> string |  `"hash": "143806234a9ff87a8d9e"` <br> The unique string identifier used in a customers portal link.
<b>billing_first_name</b> <br> string| `"billing_first_name": "Mike"`<br>  The customer's billing first name.
<b>billing_last_name</b> <br> string| `"billing_last_name": "Flynn"`<br>  The customer's billing last name.
<b>billing_company</b> <br> string| `"billing_company": "ReCharge"`<br>  The customer's billing company.
<b>billing_address1</b> <br> string| `"billing_address1": "3030 Nebraska Avenue"`<br> The customer's billing address.
<b>billing_address2</b> <br> string| `"billing_address2": "#301"`<br>  An additional field for the customer's billing address.
<b>billing_city</b> <br> string| `"billing_city": "Los Angeles"`<br> The customer's billing city.
<b>billing_province</b> <br> string| `"billing_province": "California"`<br>   The customer's billing province or state name.
<b>billing_zip</b> <br> string| `"billing_zip": "90404"`<br> The customer's billing zip or postal code.
<b>billing_country</b> <br> string| `"billing_country": "United States"`<br>   The customer's billing country.
<b>has_credit_card_purchase</b> <br> boolean| `"has_credit_card_purchase": "true"` <br> Returns boolean for customer's card.
<b>shopify_customer_id</b> <br> string| `"shopify_customer_id": "207119551"` <br> Shopify's unique identifier for the customer.
<b>customer_payment_type</b> <br> string| `"customer_payment_type": "Credit Card"` <br> Type of customer card.
<b>customer_card</b> <br> string| `"customer_card": "3301"` <br> Number of customer card.

## Retrieve customer
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

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Address)
* [Subscriptions](Theme-objects%3A-Subscriptions)

## Update customer
Show current customer's information.

**URL:** `{{ update_customer_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/edit`

**Template file:** `customer_edit.html`

**Available objects**

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

## Update customer card
Show current customer's information.

**URL:** `{{ update_card_url }}`

**Route:** `/tools/recurring/customer_portal/<customer_hash>/card`

**Template file:** `customer_card.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Address)
* [Subscriptions](Theme-objects%3A-Subscriptions)