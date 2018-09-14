# Changelog

### Date: 2018-09-13

**Base theme:**

The following change has been made to `_script.js`:
- `ReCharge.jQuery` was not being correctly set if the Shopify store included it's own version of jQuery. 

### Date: 2018-09-10

**New endpoint:**

- [Shop](https://github.com/SocalProofit/ReCharge-Docs/wiki/Theme-endpoints:-Shop)

### Date: 2018-08-22

**Changed objects:**

[Address object](Theme-objects%3A-Address) now has access to `discount_id` when returned via json

### Date: 2018-08-17

**Changed objects:**

[Orders object](Theme-objects%3A-Orders) now returns all completed orders rather than orders with shipping dates in the past on [Orders endpoint](Theme-endpoints%3A-Order#orders)

### Date: 2018-07-05 

**New endpoints:**
- [Apply discount to address](Theme-endpoints%3A-Address#address_apply_discount)
- [Remove discount from address](Theme-endpoints%3A-Address#address_remove_discount)

**Changed objects:**

[Address object](Theme-objects%3A-Address) now has access to discount information, such as discounted amount and the discount code. 

**Base theme:**

The following changes have been made to `subscriptions.html`:
- Ability to apply discount to entire address (add discounts to all items within that address)
- Ability to remove discount that is applied to an address
- Ability to see what discount code is applied and how much is discounted