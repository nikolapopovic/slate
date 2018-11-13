# Addresses

> Example input

```liquid
{{ address.first_name }} {{ address.last_name }}<br>
{{ address.company }}<br>
{{ address.address1 }} {{ address.address2 }}<br>
{{ address.zip }} {{ address.city }} {{ address.province }}<br>
{{ address.country }}<br>
{{ address.phone }}
```

> Example output

```html
Mike Flynn
ReCharge
3030 Nebraska Avenue #301
90404 Los Angeles California
United States
3103843698
```

<aside class="notice">
 Addresses represents one of the many shipping locations a customer may have. Subscriptions are tied to a given address. Each customer can have multiple address objects (many-to-one) in the relationship. Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available. Not to be confused with a billing address, this is tied to individual subscription items. Most commonly used as a shipping address.
</aside>

![](images/address.png)

Property | Definition
--------- | -------
<b>first_name</b> <br> string| `"first_name": "Mike"`<br>  The customer’s first name associated with the address.
<b>last_name</b> <br> string| `"last_name": "Flynn"`<br>  The customer’s last name associated with the address.
<b>company</b> <br> string| `"company": "ReCharge"`<br>  The company associated with the address.
<b>address1</b> <br> string|  `"address1": "3030 Nebraska Avenue"` <br> The street associated with the address.
<b>address2</b>  <br> string |  `"address2": "#301"` <br> Any additional information associated with the address.
<b>city</b> <br> string| `"city": "Los Angeles"`<br>  The city associated with the address.
<b>province</b> <br> string| `"province": "California"`<br>  The state or province associated with the address.
<b>zip</b> <br> string| `"zip": "90404"`<br>  The zip or postal code associated with the address.
<b>country</b> <br> string| `"country": "United States"`<br> The country associated with the address.
<b>phone</b> <br> string| `"phone": "3103843698"`<br>  The phone number associated with the address.
<b>id</b> <br> string| `"id": "3411137"`<br> Unique numeric identifier for the address.
<b>discount_id</b> <br> string| `"discount_id": "12312312"`<br>   Id of discount that is applied on the address.
<b>discount_amount</b> <br> string| `"discount_amount": "20"`<br> The discounted amount to be applied.
<b>discount</b> <br> string| `"discount": " "`<br>   Returns [Discount object](Theme-objects%3A-Discount).
<b>has_active_subscriptions</b> <br> boolean| `"has_active_subscriptions": "true"` <br> Returns boolean checking if address has active subscriptions.
<b>has_active_one_time_products (BETA)</b> <br> boolean| `"has_active_one_time_products": "true"` <br> Returns boolean checking if address has active one time products.
<b>has_active_items_include_cancelled_and_expired</b> <br> boolean| `"has_active_items_include_cancelled_and_expired": "true"` <br> Returns boolean checking if address has active items including cancelled and expired.

## Create address
Page with form to create a new address for current customer.

> POST `{{ create_address_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ create_address_url }}',
  type: 'post',
  dataType: 'json',
  data: {
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
   "address":{  
      "address1":"1933 Manning",
      "address2":"204",
      "cart_note":"",
      "city":"los angeles",
      "company":"bootstrap",
      "country":"United States",
      "discount_id":null,
      "first_name":"Recharge",
      "id":20519802,
      "last_name":"Test",
      "phone":"3103103101",
      "province":"California",
      "subscriptions":[ ],
      "zip":"90025"
   },
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
   }
}
```

**URL:** `{{ create_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/new`

**Template file:** `address_new.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Addresses)
* [Subscriptions](Theme-objects%3A-Subscriptions)

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

## Retrieve address
Show details for the current address.

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
   "address":{  
      "address1":"1933 Manning",
      "address2":"204",
      "cart_note":"",
      "city":"los angeles",
      "company":"bootstrap",
      "country":"United States",
      "discount_id":null,
      "first_name":"Recharge",
      "id":20519802,
      "last_name":"Test",
      "phone":"3103103101",
      "province":"California",
      "subscriptions":[  

      ],
      "zip":"90025"
   },
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
   }
}
```

**URL:** `{{ address | show_address_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>`

**Template file:** `address.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)

## Update address
Form to edit and update the current address.

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

**URL:** `{{ address | update_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/edit`

**Template file:** `address_edit.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Address](Theme-objects%3A-Address)

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

## List addresses
List all addresses for the current customer.

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

**URL:** `{{ list_address_url }}`

**Methods accepted:** `GET`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses`

**Template file:** `addresses.html`

**Available objects**

* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Addresses](Theme-objects%3A-Addresses)
* [Subscriptions](Theme-objects%3A-Subscriptions)

If you perform a GET request with the data type of `json` on just about any URL, or append the `.json` extension to the URL, you'll receive a JSON object of the data available.

## Apply discount
Form to apply discount to current address.

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

**URL:** `{{ address | apply_discount_to_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/apply_discount`

**Template file:** `subscriptions.html`

**Available properties**

|Input| Type| Name attribute|
---|---|---
|Discount Code (*mandatory*)| text| discount_code|

## Remove discount
Form to remove discount applied to current address.

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

**URL:** `{{ address | remove_discount_from_address_url }}`

**Methods accepted:** `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/addresses/<int:address_id>/remove_discount`

**Template file:** `subscriptions.html`

## Loop through the addresses

> Example input

```liquid
{% for address in addresses %}
  {{ address.address1 }}
{% endfor %}
```

> Example output

```html
123 Miracle Ave
2020 H Huges Way
1 Maple Ave
```

Loop through the Addresses dictionary to access individual [Address](Theme-Objects%3A-Address) object.