# Rules

Property | Definition
--------- | -------
<b>{{ rule.handle }}</b> <br> string| `"handle": " "`<br> 
<b>{{ rule.id }}</b> <br> string| `"id": " "`<br> 
<b>{{ rule.interval_options }}</b> <br> string| `"interval_options": " "`<br> The interval options to use when creating a new subscription.
<b>{{ rule.modifiable_properties }}</b> <br> string| `"modifiable_properties": " "`<br> 
<b>{{ rule.shopify_product }}</b> <br> string|  `"shopify_product": " "` <br> 
<b>{{ rule.shopify_product_id }}</b>  <br> integer|  `"shopify_product_id": ` <br> 
<b>{{ rule.title }}</b> <br> integer| `"title": " "`<br> 
<b>{{ rule.purchase_options }}</b> <br> string| `"purchase_options": " "`<br> 

## Loop through the rules
Loop through the Rules dictionary to access individual [Rule](Theme-Objects%3A-Rule) object.

> Example input

```liquid
{% for rule in rules %}
	{{ rule.id }}
{% endfor %}
```

> Example output

```
1001
1002
1003
```