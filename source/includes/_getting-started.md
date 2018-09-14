# The Theme Engine

Currently in `BETA`, the theme engine is a powerful new feature with lots of moving parts. This documentation is provided to help provide you, the designer, to utilize as many features as possible to get the exact results you're looking for.

## What is this?

The customer portal is powered by a theme engine which allows you to customize the views to your needs. It is composed of a set of endpoints that provide specific functionality. Each endpoint is associated with a required asset that you can customize to your liking. The endpoint also has a set of objects that can be used to customize the user experience.

## Checklist

To get started with the Theme Editor in the Beta phase, please review the following requirements:

* **Contacted by ReCharge** - Currently, the Theme editor feature is on an invite-only basis, but we plan to release it to the public in time.
* **Theme Editor enabled on store** - The theme editor must be manually enabled on your store. You must have an active Shopify store to use it.
* **Invite to Slack channel** - During the Beta phase, we have a public Slack channel you can be invited to where limited support can be provided for the theme engine, as well as discussions with others using the chanel

**Important:** We do not provide design, customization, or development assistance for custom theme code.

## ReCharge object hierarchy

<img src="images/shop.png">

## Directory

### The theme engine

* [Getting started (here)](Theme-engine%3A-Getting-Started)
* [The editor](Theme-engine%3A-Editor)
* [Enabling](Theme-engine%3A-Switching)

### Endpoints
Endpoint are controlled by a route (or URL) and each one is designed to serve a specific purpose. Each one is also tied to a template file, and each template file has access to specific data objects.

* [Addresses endpoint](Theme-endpoints%3A-Address)
* [Customer endpoint](Theme-endpoints%3A-Customer)
* [Orders endpoints](Theme-endpoints%3A-Order)
* [Search endpoint](Theme-endpoints%3A-Search)
* [Subscriptions endpoint](Theme-endpoints%3A-Subscription)
* [Delivery schedule endpoint](Theme-endpoints%3A-Delivery-schedule)

### Objects
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

### Object lists
* [Addresses](Theme-objects%3A-Addresses)
* [Orders](Theme-objects%3A-Orders)
* [Retention strategies](Theme-objects%3A-Retention-strategies)
* [Subscriptions](Theme-objects%3A-Subscriptions)
* [Variants](Theme-objects%3A-Variants)

### Filters
Filters are useful micro functions used to manipulate data variables on a template. Filters can format text, perform calculations, sort data and more. Not all filters work with every data "type". Some are meant for numbers, while others are used for lists.

* [Math filters](Theme-filters%3A-Math)
* [Money filters](Theme-filters%3A-Money)
* [String filters](Theme-filters%3A-String)
* [URL filters](Theme-filters%3A-URL)
* [Date filters](Theme-filters%3A-Date)