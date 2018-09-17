# Enabling the Theme Engine

We designed the theme editor with the intent of the merchant choosing their rollout procedure.

## Accessing the Customer Portal settings

Sign in to your ReCharge account as you normally do.

**To do this:**

* Log in to your Shopify admin page.
* From Shopify admin, go to **Apps**.
* Click on the **ReCharge Recurring Billing & Subscriptions** link to launch ReCharge.

![](images/10-apps-v2.png)

* From your ReCharge admin, go to **Settings** > **Customer portal**

![](images/enable_0.png)

## Customer Portal settings

The Customer Portal settings page will allow you to fine tune the Customer Portal beyond the Theme Engine. You can enable or disable various [Customer settings](Theme-objects%3A-Store#storeallow_customers_to_add_products), add CSS to the credit card billing form, or decide which version of the Customer Portal you'd like your customers to experience.

![](images/enable_1.png)

By default, the **Storefront** option is selected (unless you had already changed it to **Standalone**).

To use your custom theme, you need to start by choosing **Storefront - Theme Editor**.

![](images/enable_2.png)

Upon selecting the Theme Editor, the **Deployment strategy** interface appears, allowing you to determine how many of your customers will get to use the theme engine.

![](images/enable_3.png)

## Percentage rollout

We understand that there are some merchants who want to switch from the non customized portal to the customized one, but they also required a % based rollout so they can address issues in their theme before rolling it out to everyone.

![](images/enable_4.png)

Since the Customer Portal is still in development, we've allowed a way to seed the rollout by percentage. We have two inputs, one for **new** customers, and one for **existing** customers.

**Note** The feature has been available during the Alpha and Beta phases of development. There are no guarantees that it will continue to work after feature is released to the public.

## Enabling/Disabling for individual users

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