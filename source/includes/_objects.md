# Objects

## Customer object

Provides essential customer information, as well as associated billing information.

#### Customer information

* [customer.first_name](#customerfirst_name)
* [customer.last_name](#customerlast_name)
* [customer.name](#customername)
* [customer.email](#customeremail)
* [customer.hash](#customerhash)

#### Payment details

* [customer.has\_credit\_card\_purchase](#customerhas_credit_card_purchase)
* [customer.shopify\_customer\_id](#customershopify_customer_id)
* [customer.customer\_payment\_type](#customercustomer_payment_type)
* [customer.customer_card](#customercustomer_card)

#### Billing address

* [customer.billing\_first\_name](#customerbilling_first_name)
* [customer.billing\_last\_name](#customerbilling_last_name)
* [customer.billing_company](#customerbilling_company)
* [customer.billing_address1](#customerbilling_address1)
* [customer.billing_address2](#customerbilling_address2)
* [customer.billing_city](#customerbilling_city)
* [customer.billing_province](#customerbilling_province)
* [customer.billing_zip](#customerbilling_zip)
* [customer.billing_country](#customerbilling_country)


#### Customer information

### customer.first_name

>Example input

```liquid
{{ customer.first_name }}
```

>Example output

```html
Jimmy
```


### customer.last_name

>Example input

```liquid
{{ customer.last_name }}
```

>Example output

```html
Charge
```


### customer.name

>Example input

```liquid
{{ customer.name }}
```

>Example output

```html
Jimmy Charge
```


### customer.email

>Example input

```liquid
{{ customer.email }}
```

>Example output

```html
jimmy@address.com
```


### customer.hash

>Example input

```liquid
{{ customer.hash }}
```

>Example output

```html
49345ebbb7967f16cc174
```


#### Payment details

### customer.has_credit_card_purchase

>Example input

```liquid
{{ customer.has_credit_card_purchase }}
```

>Example output

```html
true
```


### customer.shopify_customer_id

>Example input

```liquid
{{ customer.shopify_customer_id }}
```

>Example output

```html
100399283
```


### customer.customer_payment_type

>Example input

```liquid
{{ customer.customer_payment_type }}
```

>Example output

```html
Credit Card
```


### customer.customer_card

>Example input

```liquid
{{ customer.customer_card }}
```

>Example output

```html
3301
```


#### Billing address

### customer.billing_first_name

>Example input

```liquid
{{ customer.billing_first_name }}
```

>Example output

```html
Jimmy
```


### customer.billing_last_name

>Example input

```liquid
{{ customer.billing_last_name }}
```

>Example output

```html
Charge
```


### customer.billing_address1

>Example input

```liquid
{{ customer.billing_address1 }}
```

>Example output

```html
123 Miracle Mile Ave
```


### customer.billing_address2

>Example input

```liquid
{{ customer.billing_address2 }}
```

>Example output

```html
Suite 301
```


### customer.billing_company

>Example input

```liquid
{{ customer.billing_company }}
```

>Example output

```html
ReCharge Payments
```


### customer.billing_city

>Example input

```liquid
{{ customer.billing_city }}
```

>Example output

```html
Santa Monica
```


### customer.billing_province

>Example input

```liquid
{{ customer.billing_province }}
```

>Example output

```html
CA
```


### customer.billing_zip

>Example input

```liquid
{{ customer.billing_zip }}
```

>Example output

```html
90304
```


### customer.billing_country

>Example input

```liquid
{{ customer.billing_country }}
```

>Example output

```html
United States
```