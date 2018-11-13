# Search endpoint

## Product search
Returns a list of all products available to be subscribed to.

> GET `{{ product_search_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ product_search_url }}',
  type: 'get',
  dataType: 'json',
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

> Example output

```javascript
{  
   "customer":{  
      "billing_address1":"607 Midvale Ave",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"ReCharge",
      "billing_country":"United States",
      "billing_first_name":"Corey",
      "billing_last_name":"Capetillo",
      "billing_phone":"5623095450",
      "billing_province":"California",
      "billing_zip":"90024",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"corey@rechargeapps.com",
      "first_name":"Corey",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"818762670d14f56b6f39fd7",
      "last_name":"Capetillo",
      "name":"Corey Capetillo",
      "shopify_customer_id":"391100760128"
   },
   "rules":[  
      {  
         "discount_rate":null,
         "handle":"bare-box-3-month-plan",
         "id":659929,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[  

         ],
         "purchase_options":[  
            "subscription"
         ],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/506020921408",
            "body_html":"<meta charset=\"utf-8\"><span>Looking to mix things up? Every month we'll send you a surprise box filled with all kinds of natural and organic goodies. Each box will contain speciality supplements, beauty supplies,\u00a0clothes and accessories, and many more products\u00a0to help you live your best life. All products are ethically and humanely sourced.</span>",
            "created_at":"2018-02-16T11:01:02-05:00",
            "handle":"bare-box-3-month-plan",
            "id":506020921408,
            "image":{  
               "admin_graphql_api_id":"gid://shopify/ProductImage/1555302776896",
               "alt":null,
               "created_at":"2018-02-16T11:01:05-05:00",
               "height":1060,
               "id":1555302776896,
               "position":1,
               "product_id":506020921408,
               "src":"https://cdn.shopify.com/s/files/1/3104/4618/products/surprise-box_7facd505-3d76-4ce9-8f33-99146e2fd4db.jpg?v=1518796865",
               "updated_at":"2018-02-16T11:01:05-05:00",
               "variant_ids":[  

               ],
               "width":1060
            },
            "images":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductImage/1555302776896",
                  "alt":null,
                  "created_at":"2018-02-16T11:01:05-05:00",
                  "height":1060,
                  "id":1555302776896,
                  "position":1,
                  "product_id":506020921408,
                  "src":"https://cdn.shopify.com/s/files/1/3104/4618/products/surprise-box_7facd505-3d76-4ce9-8f33-99146e2fd4db.jpg?v=1518796865",
                  "updated_at":"2018-02-16T11:01:05-05:00",
                  "variant_ids":[  

                  ],
                  "width":1060
               }
            ],
            "options":[  
               {  
                  "id":651242111040,
                  "name":"T-Shirt Size",
                  "position":1,
                  "product_id":506020921408,
                  "values":[  
                     "x-small",
                     "small",
                     "medium",
                     "large",
                     "x-large"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-02-16T10:59:15-05:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"Bare Box - 3 Month Plan",
            "updated_at":"2018-02-16T15:15:11-05:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/5424189177920",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-02-16T11:01:03-05:00",
                  "fulfillment_service":"manual",
                  "grams":1814,
                  "id":5424189177920,
                  "image_id":null,
                  "inventory_item_id":5426924552256,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":0,
                  "old_inventory_quantity":0,
                  "option1":"x-small",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"70.00",
                  "product_id":506020921408,
                  "requires_shipping":true,
                  "sku":"",
                  "taxable":true,
                  "title":"x-small",
                  "updated_at":"2018-10-29T09:20:45-04:00",
                  "weight":4.0,
                  "weight_unit":"lb"
               }
            ],
            "vendor":"bare-supplements"
         },
         "shopify_product_id":506020921408,
         "title":"Bare Box - 3 Month Plan"
      }
   ]
}
```

> POST `{{ product_search_url }}`
<br>
> Example input

To refine the search results by `product.title`, use the parameter `q` or pass `q` as part of the data parameter on the AJAX post.

```javascript
$.ajax({
  url: '{{ product_search_url }}',
  type: 'post',
  dataType: 'json',
  data: {
    q: "Glow"
  }
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

> Example output

```javascript
{  
   "customer":{  
      "billing_address1":"607 Midvale Ave",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"ReCharge",
      "billing_country":"United States",
      "billing_first_name":"Corey",
      "billing_last_name":"Capetillo",
      "billing_phone":"5623095450",
      "billing_province":"California",
      "billing_zip":"90024",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"corey@rechargeapps.com",
      "first_name":"Corey",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"818762670d14f56b6f39fd7",
      "last_name":"Capetillo",
      "name":"Corey Capetillo",
      "shopify_customer_id":"391100760128"
   },
   "rules":[  
      {  
         "discount_rate":null,
         "handle":"bare-glow",
         "id":659848,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[  

         ],
         "purchase_options":[  
            "one_time_product",
            "subscription"
         ],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/505640779840",
            "body_html":"<p>Radiate beauty with Bare Glow, gummy supplements\u00a0made from organic sunflower seeds and black current seed oil. Your skin will feel vibrant and luxurious for days on end.</p>\n<p>Ingredients</p>\n<ul>\n<li>Sunflower seeds</li>\n<li>Black current seed oil</li>\n<li>Sunflower petals</li>\n</ul>",
            "created_at":"2018-02-15T18:04:59-05:00",
            "handle":"bare-glow",
            "id":505640779840,
            "image":{  
               "admin_graphql_api_id":"gid://shopify/ProductImage/1553536057408",
               "alt":null,
               "created_at":"2018-02-15T18:05:01-05:00",
               "height":1060,
               "id":1553536057408,
               "position":1,
               "product_id":505640779840,
               "src":"https://cdn.shopify.com/s/files/1/3104/4618/products/glow.jpg?v=1518735901",
               "updated_at":"2018-02-15T18:05:01-05:00",
               "variant_ids":[  

               ],
               "width":1060
            },
            "images":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductImage/1553536057408",
                  "alt":null,
                  "created_at":"2018-02-15T18:05:01-05:00",
                  "height":1060,
                  "id":1553536057408,
                  "position":1,
                  "product_id":505640779840,
                  "src":"https://cdn.shopify.com/s/files/1/3104/4618/products/glow.jpg?v=1518735901",
                  "updated_at":"2018-02-15T18:05:01-05:00",
                  "variant_ids":[  

                  ],
                  "width":1060
               }
            ],
            "options":[  
               {  
                  "id":650668933184,
                  "name":"Title",
                  "position":1,
                  "product_id":505640779840,
                  "values":[  
                     "Default Title"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-02-15T18:04:32-05:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"Bare Glow",
            "updated_at":"2018-02-16T10:35:59-05:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/5421828603968",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-02-15T18:04:59-05:00",
                  "fulfillment_service":"manual",
                  "grams":907,
                  "id":5421828603968,
                  "image_id":null,
                  "inventory_item_id":5424520134720,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":1,
                  "old_inventory_quantity":1,
                  "option1":"Default Title",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"12.99",
                  "product_id":505640779840,
                  "requires_shipping":true,
                  "sku":"123459",
                  "taxable":true,
                  "title":"Default Title",
                  "updated_at":"2018-09-11T20:29:49-04:00",
                  "weight":32.0,
                  "weight_unit":"oz"
               }
            ],
            "vendor":"bare-supplements"
         },
         "shopify_product_id":505640779840,
         "title":"Bare Glow"
      }
   ]
}
```

**URL:** `{{ product_search_url }}`

**Methods accepted:** `GET`, `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/products/search`

**Template file:** `products_search.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Rules](Theme-objects%3A-Rules)

## Search for swap
Presents a list for the intention of swapping the current subscription with a new product. Routes to [subscription_new](Theme-endpoints%3A-Subscription#subscription_new) will have a new variable available to them, `swap_subscription_id`.

> GET `{{ subscription | search_for_swap_url }}`
<br>
> Example input

Unlike `products_search`, `search_for_swap` has reference to the product you are swapping.

```javascript
$.ajax({
  url: '{{ subscription | search_for_swap_url }}',
  type: 'get',
  dataType: 'json',
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

> Example output

```javascript
{  
   "customer":{  
      "billing_address1":"607 Midvale Ave",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"ReCharge",
      "billing_country":"United States",
      "billing_first_name":"Corey",
      "billing_last_name":"Capetillo",
      "billing_phone":"5623095450",
      "billing_province":"California",
      "billing_zip":"90024",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"corey@rechargeapps.com",
      "first_name":"Corey",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"818762670d14f56b6f39fd7",
      "last_name":"Capetillo",
      "name":"Corey Capetillo",
      "shopify_customer_id":"391100760128"
   },
   "rules":[  
      {  
         "discount_rate":null,
         "handle":"bare-glow",
         "id":659848,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[  

         ],
         "purchase_options":[  
            "one_time_product",
            "subscription"
         ],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/505640779840",
            "body_html":"<p>Radiate beauty with Bare Glow, gummy supplements\u00a0made from organic sunflower seeds and black current seed oil. Your skin will feel vibrant and luxurious for days on end.</p>\n<p>Ingredients</p>\n<ul>\n<li>Sunflower seeds</li>\n<li>Black current seed oil</li>\n<li>Sunflower petals</li>\n</ul>",
            "created_at":"2018-02-15T18:04:59-05:00",
            "handle":"bare-glow",
            "id":505640779840,
            "image":{  
               "admin_graphql_api_id":"gid://shopify/ProductImage/1553536057408",
               "alt":null,
               "created_at":"2018-02-15T18:05:01-05:00",
               "height":1060,
               "id":1553536057408,
               "position":1,
               "product_id":505640779840,
               "src":"https://cdn.shopify.com/s/files/1/3104/4618/products/glow.jpg?v=1518735901",
               "updated_at":"2018-02-15T18:05:01-05:00",
               "variant_ids":[  

               ],
               "width":1060
            },
            "images":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductImage/1553536057408",
                  "alt":null,
                  "created_at":"2018-02-15T18:05:01-05:00",
                  "height":1060,
                  "id":1553536057408,
                  "position":1,
                  "product_id":505640779840,
                  "src":"https://cdn.shopify.com/s/files/1/3104/4618/products/glow.jpg?v=1518735901",
                  "updated_at":"2018-02-15T18:05:01-05:00",
                  "variant_ids":[  

                  ],
                  "width":1060
               }
            ],
            "options":[  
               {  
                  "id":650668933184,
                  "name":"Title",
                  "position":1,
                  "product_id":505640779840,
                  "values":[  
                     "Default Title"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-02-15T18:04:32-05:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"Bare Glow",
            "updated_at":"2018-02-16T10:35:59-05:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/5421828603968",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-02-15T18:04:59-05:00",
                  "fulfillment_service":"manual",
                  "grams":907,
                  "id":5421828603968,
                  "image_id":null,
                  "inventory_item_id":5424520134720,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":1,
                  "old_inventory_quantity":1,
                  "option1":"Default Title",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"12.99",
                  "product_id":505640779840,
                  "requires_shipping":true,
                  "sku":"123459",
                  "taxable":true,
                  "title":"Default Title",
                  "updated_at":"2018-09-11T20:29:49-04:00",
                  "weight":32.0,
                  "weight_unit":"oz"
               }
            ],
            "vendor":"bare-supplements"
         },
         "shopify_product_id":505640779840,
         "title":"Bare Glow"
      }
   ]
}
```

> POST `{{ subscription | search_for_swap_url }}`
<br>
> Example input

```javascript
$.ajax({
  url: '{{ subscription | search_for_swap_url }}',
  type: 'post',
  dataType: 'json',
}).done(function(response) {
  // Successful request made
  console.log(response.responseJSON);
}).fail(function(response) {
  // Request failed
  console.log(response.responseJSON.errors);
});
```

> Example output

```javascript
{  
   "customer":{  
      "billing_address1":"607 Midvale Ave",
      "billing_address2":"",
      "billing_city":"Los Angeles",
      "billing_company":"ReCharge",
      "billing_country":"United States",
      "billing_first_name":"Corey",
      "billing_last_name":"Capetillo",
      "billing_phone":"5623095450",
      "billing_province":"California",
      "billing_zip":"90024",
      "customer_card":null,
      "customer_payment_type":"credit",
      "email":"corey@rechargeapps.com",
      "first_name":"Corey",
      "has_credit_card_purchase":true,
      "has_error_charge":false,
      "hash":"818762670d14f56b6f39fd7",
      "last_name":"Capetillo",
      "name":"Corey Capetillo",
      "shopify_customer_id":"391100760128"
   },
   "subscription":{  
      "address":{  
         "address1":"1933 Manning",
         "address2":"204",
         "cart_note":"",
         "city":"los angeles",
         "company":"bootstrap",
         "country":"United States",
         "discount_id":null,
         "first_name":"Recharge",
         "id":18586680,
         "last_name":"Test",
         "phone":"3103103101",
         "province":"California",
         "zip":"90025"
      },
      "address_id":18586680,
      "allow_date_selection":true,
      "allow_schedule_edit":true,
      "charge_interval_frequency":"1",
      "charge_interval_unit":"month",
      "charges_made_on_item":0,
      "id":25769634,
      "interval_options":{  
         "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
      },
      "is_active":true,
      "is_cancelled":false,
      "is_expired":false,
      "is_one_time_product":false,
      "is_skippable":true,
      "is_skipped":false,
      "is_swappable":true,
      "modifiable_properties":[  

      ],
      "next_charge_scheduled_at":"2018-12-26T00:00:00",
      "number_of_charges":0,
      "number_of_charges_until_expiration":null,
      "order_interval_frequency":"1",
      "order_interval_unit":"month",
      "price":3000,
      "product_title":"Bare Box - Month-to-Month Plan  Auto renew",
      "product_variant_title":"Bare Box - Month-to-Month Plan  Auto renew - x-small",
      "properties":[  

      ],
      "quantity":1,
      "shopify_product_id":505993330752,
      "shopify_variant_id":5424049422400,
      "status":"ACTIVE",
      "variant_title":"x-small"
   }
}
```

**URL:** `{{ subscription | search_for_swap_url }}`

**Methods accepted:** `GET`, `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/products/search?swap_subscription_id=<int:swap_subscription_id>`

**Template file:** `products_search.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Rules](Theme-objects%3A-Rules)