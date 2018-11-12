# Widget

## The widget

The theme widget is many customer's first interaction with ReCharge. While merely requiring only a single snippet included within the product form, we've built the widget to support an infinite number of stores, with an infinite number of themes and plugin configurations.

We've provided this documentation as a way to navigate those options and how to override each one.

### What is the widget?

The **ReCharge Widget** is an interactive form element embedded by ReCharge Payments on all stores at installation. It's broken down into 3 main components: **Purchase options**, **Delivery intervals**, and **Help**.

![Subscription Widget](images/subscription-widget.png)

**Purchase options** let the customer choose between purchasing the item once, or signing up for a subscription service for recurring item delivery.

**Delivery intervals** are based on delivery type: either days, weeks or months. The store owner determines the available options, which are then made available for customers so they may adjust the subscription service to their needs.

**Help** is provided via the tooltip that appears beneath the widget, allowing curious customers to find out more about how subscription services work and how to obtain more information when they've got a problem.

### Features

- **No jQuery** We are using only vanilla JavaScript
- **Cross-browser support** Microsoft IE 9+, Chrome 53+, Safari 9+, Firefox 49+, Opera 40+
- **Disable page caching** If page is loaded from cache (browser back/forward button), force a page reload.

### Assets

### CSS include
Basic structural styles are required to establish the basic elements of the widget. This is included as part of the `subscription-product.liquid` snippet. Additional embedded CSS is found within this snippet used to customize colors.

`<link href="//rechargeassets-bootstrapheroes-rechargeapps.netdna-ssl.com/static/css/widget.css" rel="stylesheet" type="text/css">`

### JavaScript include
All functionality is built within the widget.js script, which we include as part of the `subscription-product.liquid` snippet. This snippet itself is included within the product form.

`<script src="//rechargeassets-bootstrapheroes-rechargeapps.netdna-ssl.com/static/js/widget.js"></script>`

### JSON object
All product properties are stored within a JSON object that we later use with a JavaScript method. These can be overwritten/hardcoded to customize the widget to your specific needs.

```javascript
var myProduct = {
	id: {{ product.id }},
	active: {{ subscription_active }},
	subscription_id: {{ subscription_id }},
	shop_currency: "{{ shop.currency }}",
	currency_prefix: "{{ currency_prefix }}",
	currency_suffix: "{{ currency_suffix }}",
	money_format: "{{ shop.money_format }}",
	subscription_only: {{ subscription_only }},
	select_subscription_first: {{ select_subscription_first }},
	shipping_interval_unit_type: "{{ shipping_interval_unit_type }}",
	shipping_interval_frequency: [{% for interval in shipping_interval_frequency %}{{ interval }}, {% endfor %}],
	discount_percentage: {{ discount_percentage }},
	variant_to_duplicate: { {% for variant in product.variants %}{{ variant.id }}:'{{ variant.metafields.subscriptions.discount_variant_id }}', {% endfor %} },
	variant_to_price: { {% for variant in product.variants %}{{ variant.id }}:'{{ variant.price }}', {% endfor %} },
	duplicate_to_price: { {% for variant in product.variants %}{{ variant.metafields.subscriptions.discount_variant_id }}: '{{ variant.metafields.subscriptions.discount_variant_price | replace: ".", "" }}', {% endfor %} },
};
```

### JavaScript call
```javascript
if (document.readyState === "complete" || document.readyState === "loaded") {
	if (!window.ReCharge) { window.ReCharge = new rcWidget; }
	ReCharge.addProduct(myProduct);
} else {
	document.addEventListener("DOMContentLoaded", function() {
		if (!window.ReCharge) { window.ReCharge = new rcWidget; }
		ReCharge.addProduct(myProduct);
	});
}
```

### Properties

Out of date. Please refer to **[All options](#all-options)** 

Here lists all properties used to build the widget with a description of their purpose and expected variable type.

| Option | Type | Default | Description |
|:--|:--|:--|:--|
| `id` | Integer | `{{ product.id }}` | We use Shopify liquid to provide the id for the active product. |
| `active` | | | |
| `subscription_id` | Integer | `{{ subscription_id }}` | The subscription ID is stored via a product meta tag and retried using Shopify liquid. |
| `shop_currency` | | | |
| `currency_prefix` | | | |
| `currency_suffix` | | | |
| `money_format` | String | `{{ shop.money_format }}` | The template used to render the price in the desired format. By default, uses the format set by the Shopify store. |
| `subscription_only` | Boolean | `false` | If set to `true`, the "One-time purchase" option will be hidden, discounts will be disabled, and the widget will only be visible if 2 or more delivery options are available. |
| `select_subscription_first` | Boolean | `false` | If set to `true`, the subscription option will be pre-selected. |
| `shipping_interval_unit_type` | | | |
| `shipping_interval_frequency` | Array, Integer | 30 | Pairs with `shipping_interval_unit_type` to build the delivery option selector |
| `currency_prefix` | String | `"$"` | The default symbol is dependant on the currency settings on the Shopify store when ReCharge is installed. |
| `currency_suffix` | String | `""` | Can be used to customize the price further, such as adding " USD". |
| `discount_percentage` | Integer | `0` | If greater than 0, labels will show the pricing adjustments and price updaters will be used |
| `variant_to_duplicate` | | | |
| `variant_to_price` | | | |
| `duplicate_to_price` | | | |

### All options:

```javascript
const defaults = {
    active: false, // {{ subscription_active }}
    ready: true,
    debug: false,
    price_limiter: 3, // defining the max number of price elements
    dom_step_limiter: 3, // defining the top limit of the bottom up search approach
    delay_listener: 1,
    // Options: widget settings
    select_subscription_first: false, // {{ select_subscription_first }}
    // Options: price settings
    money_format: '${{amount}}', // Default format template
    currency_prefix: '$', // {{ currency_prefix }}
    currency_suffix: '', // {{ currency_suffix }}
    shop_currency: null, // {{ shop.currency }}
    active_price_search: false, // Re-build priceElements array before each price update,
    // Options: features
    update_pricing: true,
    disable_ajax: false,
    currency_conversion: true, // Limited support - disable if conversion fails
    disable_duplicates: false,
    // Product
    id: null, // {{ product.id }}
    // Product: Subscription settings
    subscription_id: null, // {{ subscription_id }}
    subscription_only: false, // {{ subscription_only }}
    discount_percentage: 0, // {{ discount_percentage }},
    // Product: Data mapping
    variant_to_duplicate: {}, // { {% for variant in product.variants %}{{ variant.id }}:'{{ variant.metafields.subscriptions.discount_variant_id }}',{% endfor %} }
    variant_to_price: {}, // { {% for variant in product.variants %}{{ variant.id }}:'{{ variant.price | money_without_currency }}',{% endfor %} }
    duplicate_to_price: {}, // { {% for variant in product.variants %}{{ variant.metafields.subscriptions.discount_variant_id }}: '{{ variant.metafields.subscriptions.discount_variant_price }}',{% endfor %} },
    // Product: Selector overriding
    form_selector: null,
    price_selector: null,
    options_selector: null,
};
```

## Widget compatibility

Supporting the multitude of stores, themes, and configurations is hard work, but we've outlined a few basic principles and guidelines we follow.

### Browser support

| Browser | Versions |
|:--|:--|
|Chrome|55+|
|Edge|14+|
|IE|9+|
|Firefox|48+|
|Safari|5.1+|
|Opera|Not tested|

### Themes

We developed our widget to support all themes on Shopify, whether they're Paid, Free or Custom. However, the following is a list of themes we actively test on as we develop new features.

* Alchemy
* Blockshop
* Boundless
* Brooklyn
* California
* Classic
* Debut
* District
* Fashionopolism
* Focal
* Grid
* Icon
* Jumpstart
* Kickstand
* Launchpad
* Lookbook
* Minimal
* Mobilia
* New Standard
* Parallax
* Pipeline
* Pop
* Providence
* Radiance
* React
* Responsive
* Retina
* Showtime
* Simple
* Solo
* Startup
* Supply
* Symmetry
* Testament
* Venture
* Wonderskin

**Note:** The addition of add-ons and plugins can cause unexpected issues and behavior. The list above is not a guarantee.

### Requirements

For a successful, straight-forward integration, we require a few things:

* **Product form** - The `subscription-product.liquid` snippet must be included within a product form
* **shopify_variant_id** - This is a form element used by Shopify to determine the correct product option. Sometimes it's an `<input>` tag if there's no product options (or only 1). Other times, it's a `<select>` field.
* **properties[]** - This usually comes up if your theme is using advanced JavaScript to submit the product to the cart. We attach several properties to the product form that must be submitted along with the `id` and `quantity`.

## Widget mods: Gift subscription

If you wish to provide a way for allowing your customers to gift a subscription to someone, you can follow this guide to add an interface to your existing ReCharge widget.

**WARNING:** This is an advanced tutorial and not supported by ReCharge. Advanced knowledge of web design, including experience in HTML, CSS, JavaScript and Liquid is recommended. If you need help, you're encouraged to hire a [ReCharge Expert](https://rechargepayments.com/experts).

![](images/gift-subscription__preview.png)

### Create and include the gift subscription snippet

**NOTE:** This guide is written with the assumption that you have a standard ReCharge widget installation, without customizations or AJAX.

1. From your Shopify admin, go to **Online Store > Themes**.
2. Find the theme you want to edit, and then click **Actions > Edit code**.
3. Click on the **Snippets** folder to expand and view its content.
4. Under the Snippets folder, click on **Add a new snippet**.
5. Name your new snippet `subscription-gift`, and click **Create snippet**. Your gift subscription snippet will open in the online code editor.

![](images/gift-subscription__create-snippet.png)

6. In a new browser tab, open the following [file](https://github.com/SocalProofit/ReCharge-Docs/blob/master/snippets/widget/subscription-gift.liquid).
7. Copy all of the code you see there and return to your [Themes page](https://www.shopify.com/admin/themes).
8. In the online code editor, paste the code you copied into your `subscription-gift.liquid` snippet.
9. **Save** your changes.
10. In the **Snippets** folder, locate the `subscription-product.liquid` file to open it in the online editor.
11. In the online code editor, scroll down until you see the opening `<div class="rc_popup">` element.
12. Right before the opening `<div class="rc_popup">` tag, paste the following code:

**{% include 'subscription-gift' %}**

This will include the `subscription-product.liquid` snippet just after the selection widget and above the subscription information tooltip.

13. Click **Save** to save your changes.

To see the Gift Subscription in action, take a look at this [demo store](https://repario-99.myshopify.com/products/bricks).

### Cart properties

This additional widget will add 3 new properties to the cart:

* **subscription_gift_delivery_date** - example: `12-31-2018`
* **subscription_gift_recipient_email** - example: `email@addresss.com`
* **subscription_gift_message** - example: `So long, and thanks for all the fish!`