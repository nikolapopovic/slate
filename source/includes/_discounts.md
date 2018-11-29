# Discounts

> EXAMPLE REQUEST

```liquid
Discount ID is {{ discount.id }}. Discount {{ discount.code }} is applied.
```

> EXAMPLE RESPONSE

```html
Discount ID is 1231. Discount 2off is applied.
```

Property | Definition
--------- | -------
<b>id</b> <br> string| `"id": 1231`<br>  Unique numeric identifier for the discount.
<b>code</b> <br> string| `"code": "2off"`<br> The name of the discount code.