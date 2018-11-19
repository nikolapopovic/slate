# Changelog

## Date: 2018-09-28

**General:**

- List of subscriptions no longer returns deleted subscriptions
- Added support for one time product (current in beta) to the theme engine 

**Changed objects:**

[Address object](#addresses) 

- address.has_active_subscriptions
- address.has_active_one_time_products (BETA)
- address.has_active_items_include_cancelled_and_expired

[Subscription object](#subscriptions) 

- subscription.is_active
- subscription.is_cancelled
- subscription.is_expired
- subscription.is_skippable
- subscription.is_swappable
- subscription.is_one_time_product (BETA)

[Rule object](#rules)

- rule.purchase_options

[Store object](#shop) 

- store.allow_customers_to_purchase_one_time_products

**New endpoints:**

- [Delete OTP](#delete-one-time-product-beta) (Beta)

**Base theme:**

The following change has been made to `subscriptions.html`, `subscription.html` and `delivery_schedule`:

- Now using new attributes throughout such as `address.has_active_items_include_cancelled_and_expired` and 
`subscription.is_cancelled`
- Added support for one time product display

The following change has been made to `subscription_new.html`:

- Added support for one time product purchasing
- Added support for display toggle between one time product price and subscription price 

## Date: 2018-09-26

**Changed objects:**

[Variant object](#variants)

- variant.subscription_price

**Updated endpoint:**

- [subscription_new](#create-subscription) now returns Variants object

**Base theme:**

The following change has been made to `subscription_new.html`:

- Now using Variant object rather than `subscription.shopify_product.variants` to display subscription price 

## Date: 2018-09-17

**General:**

- When swapping a product, `order_interval_frequency` and `order_interval_unit` form data is now respected. If  `order_interval_frequency` and `order_interval_unit` are not submitted, it will maintain the current frequency. 

**Base theme:**

The following change has been made to `_script.js`:

- After a form has successfully submitted via AJAX, we now check to see if the form has an input `name="redirect_url"`. If so we will redirect to the URL provided within that input. 

The following change has been made to `subscription_new.html` and `subscription_swap.html`:

- Added `<input type="hidden" name="redirect_url" value="{{ list_subscriptions_url }}">` to the forms

## Date: 2018-09-13

**Base theme:**

The following change has been made to `_script.js`:
- `ReCharge.jQuery` was not being correctly set if the Shopify store included it's own version of jQuery. 

## Date: 2018-09-10

**New endpoint:**

- [Shop](#retrieve-shop)

## Date: 2018-08-22

**Changed objects:**

[Address object](#addresses) now has access to `discount_id` when returned via json

## Date: 2018-08-17

**Changed objects:**

[Orders object](#orders) now returns all completed orders rather than orders with shipping dates in the past on [Orders endpoint](#retrieve-order)

## Date: 2018-07-05 

**New endpoints:**
- [Apply discount to address](#apply-discount)
- [Remove discount from address](#remove-discount)

**Changed objects:**

[Address object](#addresses) now has access to discount information, such as discounted amount and the discount code. 

**Base theme:**

The following changes have been made to `subscriptions.html`:
- Ability to apply discount to entire address (add discounts to all items within that address)
- Ability to remove discount that is applied to an address
- Ability to see what discount code is applied and how much is discounted