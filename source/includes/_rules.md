# Rules

Property | Definition
--------- | -------
<b>{{ rule.handle }}</b> <br> string| `"handle":"bare-box-3-month-plan"`<br> The handle of the product.
<b>{{ rule.id }}</b> <br> integer| `"id":659929`<br> Unique numeric identifier for the rule.
<b>{{ rule.interval_options }}</b> <br> string| `"month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]`<br> The interval options to use when creating a new subscription.
<b>{{ rule.modifiable_properties }}</b> <br> string|  `"modifiable_properties": " "` <br> Custom line item properties can be added on rulesets tab, which than can be modified.
<b>{{ rule.shopify_product }}</b> <br> string| `"admin_graphql_api_id":"gid://shopify/Product/506020921408"` <br> `"body_html":"<meta charset=\"utf-8\"><span>Looking to mix things up? Every month we'll send you a surprise box filled with all kinds of natural and organic goodies. Each box will contain speciality supplements, beauty supplies,\u00a0clothes and accessories, and many more products\u00a0to help you live your best life. All products are ethically and humanely sourced.</span>"` <br> `"created_at":"2018-02-16T11:01:02-05:00"` <br> `"handle":"bare-box-3-month-plan"` <br> `"id":506020921408` <br> `"image": {` <br> `"admin_graphql_api_id":"gid://shopify/ProductImage/1555302776896"` <br> `"alt":null` <br> `"created_at":"2018-02-16T11:01:05-05:00"` <br> `"height":1060` <br> `"id":1555302776896` <br> `"position":1` <br> `"product_id":506020921408` <br> `"src":"https://cdn.shopify.com/s/files/1/3104/4618/products/surprise-box_7facd505-3d76-4ce9-8f33-99146e2fd4db.jpg?v=1518796865"` <br> `"updated_at":"2018-02-16T11:01:05-05:00"` <br> `"variant_ids":[ ]` <br> `"width":1060` <br> `}` <br> Returns properties that belong to specific product on Shopify.
<b>{{ rule.shopify_product_id }}</b>  <br> integer|  `"shopify_product_id": 506020921408` <br> The unique numeric identifier for the Shopify product in the fulfillment.
<b>{{ rule.title }}</b> <br> integer| `"title": "Bare Box - 3 Month Plan"`<br> The title of the product.
<b>{{ rule.purchase_options }}</b> <br> string| `"purchase_options": "subscription"`<br> Determines is the product one time or subscription. The valid values are "subscription" and "one_time_product".

## Loop through the rules
Loop through the Rules dictionary to access individual [Rule](#rules) object.

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