# Theme Engine

## Getting started

### The Theme Engine

Currently in `BETA`, the theme engine is a powerful new feature with lots of moving parts. This documentation is provided to help provide you, the designer, to utilize as many features as possible to get the exact results you're looking for.

### What is this?

The customer portal is powered by a theme engine which allows you to customize the views to your needs. It is composed of a set of endpoints that provide specific functionality. Each endpoint is associated with a required asset that you can customize to your liking. The endpoint also has a set of objects that can be used to customize the user experience.

### Checklist

To get started with the Theme Editor in the Beta phase, please review the following requirements:

* **Contacted by ReCharge** - Currently, the Theme editor feature is on an invite-only basis, but we plan to release it to the public in time.
* **Theme Editor enabled on store** - The theme editor must be manually enabled on your store. You must have an active Shopify store to use it.
* **Invite to Slack channel** - During the Beta phase, we have a public Slack channel you can be invited to where limited support can be provided for the theme engine, as well as discussions with others using the chanel

**Important:** We do not provide design, customization, or development assistance for custom theme code.

### ReCharge object hierarchy

<img src="images/ReCharge-object-hierarchy.png" alt=""Recharge object hierarchy>

### Directory

#### The theme engine

* [Getting started (here)](Theme-engine%3A-Getting-Started)
* [The editor](Theme-engine%3A-Editor)
* [Enabling](Theme-engine%3A-Switching)

#### Endpoints
Endpoint are controlled by a route (or URL) and each one is designed to serve a specific purpose. Each one is also tied to a template file, and each template file has access to specific data objects.

* [Addresses endpoint](Theme-endpoints%3A-Address)
* [Customer endpoint](Theme-endpoints%3A-Customer)
* [Orders endpoints](Theme-endpoints%3A-Order)
* [Search endpoint](Theme-endpoints%3A-Search)
* [Subscriptions endpoint](Theme-endpoints%3A-Subscription)
* [Delivery schedule endpoint](Theme-endpoints%3A-Delivery-schedule)

#### Objects
Data objects provide a way to obtain information, such as a customer's first name or a subscription ID. They're shared and limited by different endpoints/pages. While not every object is available on every page, each page has access to many of the same objects.

* [Address object](Theme-objects%3A-Address)
* [Customer object](Theme-objects%3A-Customer)
* [Delivery schedule object](Theme-objects%3A-Delivery-schedule)
* [Errors object](Theme-objects%3A-Errors)
* [Order object](Theme-objects%3A-Order)
* [Retention strategy object](Theme-objects%3A-Retention-strategy)
* [Rule object](Theme-objects%3A-Rule)
* [Store object](Theme-objects%3A-Store)
* [Subscription object](Theme-objects%3A-Subscription)
* [Variant object](Theme-objects%3A-Variant)

#### Object lists
* [Addresses](Theme-objects%3A-Addresses)
* [Orders](Theme-objects%3A-Orders)
* [Retention strategies](Theme-objects%3A-Retention-strategies)
* [Subscriptions](Theme-objects%3A-Subscriptions)
* [Variants](Theme-objects%3A-Variants)

#### Filters
Filters are useful micro functions used to manipulate data variables on a template. Filters can format text, perform calculations, sort data and more. Not all filters work with every data "type". Some are meant for numbers, while others are used for lists.

* [Math filters](Theme-filters%3A-Math)
* [Money filters](Theme-filters%3A-Money)
* [String filters](Theme-filters%3A-String)
* [URL filters](Theme-filters%3A-URL)
* [Date filters](Theme-filters%3A-Date)

## The theme editor
The ReCharge theme editor will allow you to customize the interface of your store's ReCharge Customer Portal. This portal is a series of pages and controls that allow your customers to view or modify their subscription, change their billing information, or review their order history. With the editor, you'll be able to tailor the look and feel of this portal to fit your store's style and branding.

### Accessing the feature
After having the Theme Editor is enabled on your store, you'll be able to access the theme section.

* Log in to your Shopify admin page.
* From Shopify admin, go to **Apps**.
* Click on the **ReCharge Recurring Billing & Subscriptions** link to launch ReCharge.

![](images/10-apps-v2.png)

* From your ReCharge admin, go to **Settings > [BETA] Theme engine**.

![](images/20-menu-v2.png)

### Themes
Themes are a collection of template files and assets that control the apperance of your customer portal. Using our Theme Editor, you'll be able to manage multiple themes, switch between them, build your own, or edit an existing one.

#### The theme list
By default, your store will be pre-installed with a pre-built theme. This theme will have a pretty standard presentation of what we feel covers most customer needs, including pages to review their subscribed products, manage them, add new or cancel existing subscriptions, as well as an order/delivery schedule, order history, and billing tools.

![](images/30-theme-list-v2.png)

### Managing themes


#### Create new theme

**1.** Click on the **Create new theme** button.
**2.** Enter the name of your new theme and confirm by clicking the **Create theme** button.

![](images/50-create-theme-modal.png)

**3.** Your new theme will be generated using a copy of the default, pre-installed theme you received when the Theme Editor feature was enabled on your store.

![](images/60-set-modern-theme.png)

#### Theme controls

Each theme in the **Theme list** will have a gear icon at the end of each table row. Clicking this icon will reveal a menu of options to preview, edit, rename your theme and more.

![](images/70-menu.png)

#### Preview theme

##### Theme preview requires that your store has a subscription customer.

The preview theme link will launch a new window with a URL parameter (`preview_theme=<theme.id>`) that will allow you to preview your theme without having to publish it.

**1.** From the theme list, find the theme you wish to preview.
**2.** Click on the gear icon for the associated theme.
**3.** Click the **Preview** link.

![](images/70-menu-preview.png)

Theme previews will continue to work while you traverse through links in the customer portal.

#### Publish theme

You will need to publish your theme before your customers can use it. The publish theme link will activate the selected theme, making it live for your customers.

**1.** From the theme list, find the theme you wish to publish.
**2.** Click on the gear icon for the associated theme.
**3.** Click the **Publish** link.

![](images/70-menu-publish.png)

**4.** Confirm you wish to publish the new theme by clicking the **Publish** button.

![](images/80-publish-theme-modal.png)

Now that your theme is published, the only way to un-publish the theme is by publishing another one.

#### Edit code

Customizing a theme is the primary feature of the Theme editor. It will allow you to tweak or completely rebuild the Customer Portal. Using Liquid code, HTML, CSS and JavaScript, you'll be able to control the look and feel of your customer's experience.

**1.** From the theme list, find the theme you wish to publish.
**2.** Click on the gear icon for the associated theme.
**3.** Click the **Edit code** link.

![](images/70-menu-edit.png)

This will take you to the code editor window for the theme, revealing the theme files, a code window, and additional controls depending on template file.

![](images/90-code-editor.png)

See the [Code editor](#code-editor) part of this documentation for details on how to use the code editor and its features.

#### Rename theme

You are allowed to rename an active theme with no effect to its published status.

**1.** From the theme list, find the theme you wish to publish.
**2.** Click on the gear icon for the associated theme.
**3.** Click the **Rename** link.

![](images/70-menu-rename.png)

**4.** Enter the new name of your theme and confirm your change by clicking the **Update theme name** button.

![](images/100-theme-rename-modal.png)

The page will reload with your your theme's new name. Changing a theme name has no effect on the published status of your theme.

#### Delete theme

Deleting a theme is permanent, so please proceed with caution. You cannot delete an active theme.

**1.** From the theme list, find the theme you wish to publish.
**2.** Click on the gear icon for the associated theme.
**3.** Click the **Delete** link.

![](images/70-menu-delete.png)

**4.** Confirm that you wish to delete the current theme by clicking the **Delete** button.

![](images/110-delete-theme-modal.png)

The page will reload, with your deleted theme no longer available.

### Code editor

The code editor window will allow you to edit the files that make up the Customer Portal theme. Using a combination of Liquid, HTML, CSS and JavaScript, you can customize the look and feel of your customer's subscription management pages.

Extensive documentation for the various data objects you have access to, as well as a complete reference of available routes (URLs) and data filters, visit our [Developer documentation]().

![](images/90-code-editor.png)

The following guides will give you an overview of the available tools for working with theme files.

#### Theme files

The theme files list will show you the templates that make up your Customer Portal theme, as well as give you the ability to create new files.

![](images/120-theme-files.png)

Clicking on a file name will load it into the code window, allowing you to review, edit, rename or delete your file.

#### Add new file

Adding a new file will allow you to create a file that will allow you to organize your theme's code into more manageable parts. Reference our [Developer documentation]() for information on how to include a file into another template.

**1.** Locate the bottom of the **Theme files** list
**2.** Click the **Add new file** link.

![](images/190-code-editor-new-file-modal.png)

**3.** Confirm that you wish to delete the current theme by clicking the **Add file** button.

![](images/190-code-editor-new-file-modal.png)

After confirming the name of your new file, the page will reload with the new file active in the code window.

#### Preview

The preview button will launch a new window with a URL parameter (`preview_theme=<theme.id>`) that will allow you to preview your theme without having to publish it.

You must save any existing changes if you wish to preview them.

If the page you're trying to preview is attached to a route (URL), such as `subscription.html` or `customer.html`, the preview window will automatically deliver you to that associated URL.

#### Code window

While the code window can't replace a full-featured IDE, it is an excellent replacement, especially for users who are familair with the Shopify code editor.

![](images/150-code-window.png)

The code editor allows for HTML and Liquid code. With acceptance of HTML, that means you can also use CSS and JavaScript, as long as they're wrapped in the required encapsulating tags: `<style>...</style>` and `<script>...</script>`.

##### The code window features:

* Syntax highlighting
* Code folding
* Tag and bracket matching
* Active-line highlighting
* Searching (CTRL+F / CMD+F)
* CTRL+S / CMD+S to save
* Liquid validation on save

#### Save

Saving a file will dedicate your changes. If you are editing a published theme, the changes will be immediately reflected on the customer portal and available to your users.

**1.** Locate the asset controls in the corner of the code window.
**2.** Click the **Save** link.

![](images/130-save-button.png)

Once you save a file, you'll see a notification alerting you that the asset has been saved.

![](images/140-save-notification.png)

**Tip:** You can also use CTRL+S on Windows (or CMD+S on a Mac) to quickly save your file.


#### File controls

Non-essential files in the **Theme list** will have a gear icon at the corner of the code window, which will give you the ability to rename or delete the file.

![](images/200-code-editor-settings-menu.png)

This will be located in the corner of the code window.

#### Rename

Renaming a file is only allowed for non-essential files tied to a route (URL). You cannot templates such as `subscriptions.html` or `delivery_schedule.html`.

**1.** Locate the asset controls in the corner of the code window.
**2.** Click the gear icon to expand the menu.
**3.** Click the **Rename** link.

![](images/220-rename-menu-link.png)

**4.** Confirm that you wish to rename the current asset by clicking the **Rename** button.

![](images/170-code-editor-rename-modal.png)

The editor window will reload, reflecting the changes of the asset file.

#### Delete

Deleting a file is only allowed for non-essential files tied to a route (URL). You cannot delete templates such as `orders.html` or `customer.html`.

**1.** Locate the asset controls in the corner of the code window.
**2.** Click the gear icon to expand the menu.
**3.** Click the **Delete** link.

![](images/210-delete-menu-link.png)

**4.** Confirm that you wish to delete the current asset by clicking the **Delete** button.

![](images/180-code-editor-delete-modal.png)

The editor window will reload, defaulting to an existing asset in your template file list.

### Rollout and Reversion

Once you're satisfied with the changes you've made to the Customer Portal, you can begin displaying the customized pages to a percentage of your new customers. Navigate to the Customer Portal controls from the settings dropdown menu. From here, you'll be able to choose between the "Standalone page on ReCharge" portal (ReCharge branded), the "Storefront" portal (ReCharge layout with your store's CSS), and the new "Storefront - Theme Editor" portal (your customized portal).

#### Rollout

When you check "Storefront - Theme Editor", a field will appear that allows you to set the percentage of new customers who will see the Theme editor customized portal. We suggest starting with a low percentage and increasing it over time.

#### Reversion

If you notice an issue with your new portal, you can easily revert back by selecting "Storefront" or "Standalone page on ReCharge". This will revert all customers back—even those that saw the new portal.

#### Reviewing Customers on the New Portal

We'll be introducing ways to better filter your customer list and easily access the customers with the new portal design. You'll be able to easily check how their portals display and reach out to them for feedback.

## Switching to the Theme Engine

We designed the theme editor with the intent of the merchant choosing their rollout procedure.

### Accessing the Customer Portal settings

Sign in to your ReCharge account as you normally do.

**To do this:**

* Log in to your Shopify admin page.
* From Shopify admin, go to **Apps**.
* Click on the **ReCharge Recurring Billing & Subscriptions** link to launch ReCharge.

![](images/10-apps-v2.png)

* From your ReCharge admin, go to **Settings** > **Customer portal**

![](images/enable_0.png)

### Customer Portal settings

The Customer Portal settings page will allow you to fine tune the Customer Portal beyond the Theme Engine. You can enable or disable various [Customer settings](Theme-objects%3A-Store#storeallow_customers_to_add_products), add CSS to the credit card billing form, or decide which version of the Customer Portal you'd like your customers to experience.

![](images/enable_1.png)

By default, the **Storefront** option is selected (unless you had already changed it to **Standalone**).

To use your custom theme, you need to start by choosing **Storefront - Theme Editor**.

![](images/enable_2.png)

Upon selecting the Theme Editor, the **Deployment strategy** interface appears, allowing you to determine how many of your customers will get to use the theme engine.

![](images/enable_3.png)

### Percentage rollout

We understand that there are some merchants who want to switch from the non customized portal to the customized one, but they also required a % based rollout so they can address issues in their theme before rolling it out to everyone.

![](images/enable_4.png)

Since the Customer Portal is still in development, we've allowed a way to seed the rollout by percentage. We have two inputs, one for **new** customers, and one for **existing** customers.

**Note** The feature has been available during the Alpha and Beta phases of development. There are no guarantees that it will continue to work after feature is released to the public.

### Enabling/Disabling for individual users

We also allow you to enable or disable the customer portal for specific customers, in case you have a development customer you'd like to test the theme engine on.

**To do this:**

* Go to your **Customers** tab of the ReCharge application.
* Once here, you'll be able to click on the name of the customer you wish to enable this on.
* In the left-hand menu of the **Subscriptions** page, you'll see an icon besides the customer's name

![](images/enable_5.png)

Hovering over this icon will reveal a tooltip which will have details relevant to the **Customer Portal**.

This includes two links, one to the original portal, a link to the new portal, and a button to **Enable** or **Disable** the theme engine for this specific customer.

![](images/enable_6.png)

If it says `Enable for customer`, then they are currently on the old portal and you can upgrade them to the Theme Engine. This is the recommended approach when developing your theme and you have existing customers.

## Changelog

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
***

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