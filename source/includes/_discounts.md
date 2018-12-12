# Discounts

> EXAMPLE REQUEST

```liquid
Discount ID is {{ discount.id }}. Discount {{ discount.code }} is applied.
```

> EXAMPLE RESPONSE

```html
Discount ID is 1231. Discount 20% off all products is applied.
```

<aside class="notice">
Discount represents a discount object on a shop.
</aside>

Property | Definition
--------- | -------
<b>id</b> <br> string| `"id": 1231`<br>  Unique numeric identifier for the discount.
<b>code</b> <br> string| `"code": "20% off all products"`<br> The name of the discount code.