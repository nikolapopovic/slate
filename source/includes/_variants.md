# Variants
The variant from [Shopify](https://help.shopify.com/api/reference/product_variant) with this additional property:

Property | Definition
--------- | -------
<b>{{ variant.subscription_price }}</b> <br> string| `"subscription_price": " "`<br> 

## Loop through the Variants

> Example input

```liquid
{% for variant in variants %}
	{{ variant.price | money }}
{% endfor %}
```

> Example output

```
$3.00
$8.00
$15.00
```

Loop through the Variants dictionary to access individual [Variant](Theme-Objects%3A-Variant) object.