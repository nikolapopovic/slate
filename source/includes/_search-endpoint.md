# Search endpoint

<aside class="notice">
  Data objects available are limited by endpoint. Double-check your URL if a certain set of data isn't available.
</aside>

#### Directory
* [products_search](#products_search)
* [search_for_swap](#search_for_swap)

## products_search
Returns a list of all products available to be subscribed to.

**URL:** `{{ product_search_url }}`

**Methods accepted:** `GET`, `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/products/search`

**Template file:** `products_search.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Rules](Theme-objects%3A-Rules)

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
   "rules":[  
      {  
         "handle":"test-prodcut-2",
         "id":795150,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/1304284594233",
            "body_html":"",
            "created_at":"2018-07-05T11:28:44-04:00",
            "handle":"test-prodcut-2",
            "id":1304284594233,
            "image":null,
            "images":[],
            "options":[  
               {  
                  "id":1844760412217,
                  "name":"Title",
                  "position":1,
                  "product_id":1304284594233,
                  "values":[  
                     "Default Title"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-07-05T11:28:01-04:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"test prodcut 2",
            "updated_at":"2018-07-09T08:13:39-04:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/12218625949753",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-07-05T11:28:44-04:00",
                  "fulfillment_service":"manual",
                  "grams":0,
                  "id":12218625949753,
                  "image_id":null,
                  "inventory_item_id":13031237648441,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":0,
                  "old_inventory_quantity":0,
                  "option1":"Default Title",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"10.00",
                  "product_id":1304284594233,
                  "requires_shipping":true,
                  "sku":"",
                  "taxable":true,
                  "title":"Default Title",
                  "updated_at":"2018-07-09T08:14:51-04:00",
                  "weight":0.0,
                  "weight_unit":"lb"
               }
            ],
            "vendor":"blackestnight"
         },
         "shopify_product_id":1304284594233,
         "title":"test prodcut 2"
      },
      {  
         "handle":"test-product",
         "id":736695,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/751915925561",
            "body_html":"",
            "created_at":"2018-05-10T14:09:19-04:00",
            "handle":"test-product",
            "id":751915925561,
            "image":null,
            "images":[],
            "options":[  
               {  
                  "id":1081677217849,
                  "name":"Title",
                  "position":1,
                  "product_id":751915925561,
                  "values":[  
                     "Default Title"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-05-10T14:09:07-04:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"test product",
            "updated_at":"2018-07-19T11:24:16-04:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/7988821229625",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-05-10T14:09:19-04:00",
                  "fulfillment_service":"manual",
                  "grams":0,
                  "id":7988821229625,
                  "image_id":null,
                  "inventory_item_id":8216722735161,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":-8,
                  "old_inventory_quantity":-8,
                  "option1":"Default Title",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"0.00",
                  "product_id":751915925561,
                  "requires_shipping":true,
                  "sku":"",
                  "taxable":true,
                  "title":"Default Title",
                  "updated_at":"2018-07-19T11:24:16-04:00",
                  "weight":0.0,
                  "weight_unit":"lb"
               }
            ],
            "vendor":"blackestnight"
         },
         "shopify_product_id":751915925561,
         "title":"test product"
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
    q: "2"
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
   "rules":[  
      {  
         "handle":"test-prodcut-2",
         "id":795150,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/1304284594233",
            "body_html":"",
            "created_at":"2018-07-05T11:28:44-04:00",
            "handle":"test-prodcut-2",
            "id":1304284594233,
            "image":null,
            "images":[],
            "options":[  
               {  
                  "id":1844760412217,
                  "name":"Title",
                  "position":1,
                  "product_id":1304284594233,
                  "values":[  
                     "Default Title"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-07-05T11:28:01-04:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"test prodcut 2",
            "updated_at":"2018-07-09T08:13:39-04:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/12218625949753",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-07-05T11:28:44-04:00",
                  "fulfillment_service":"manual",
                  "grams":0,
                  "id":12218625949753,
                  "image_id":null,
                  "inventory_item_id":13031237648441,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":0,
                  "old_inventory_quantity":0,
                  "option1":"Default Title",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"10.00",
                  "product_id":1304284594233,
                  "requires_shipping":true,
                  "sku":"",
                  "taxable":true,
                  "title":"Default Title",
                  "updated_at":"2018-07-09T08:14:51-04:00",
                  "weight":0.0,
                  "weight_unit":"lb"
               }
            ],
            "vendor":"blackestnight"
         },
         "shopify_product_id":1304284594233,
         "title":"test prodcut 2"
      }
   ]
}
```

## search_for_swap
Presents a list for the intention of swapping the current subscription with a new product. Routes to [subscription_new](Theme-endpoints%3A-Subscription#subscription_new) will have a new variable available to them, `swap_subscription_id`.

**URL:** `{{ subscription | search_for_swap_url }}` or `{{ subscription.id | search_for_swap_url }}`

**Methods accepted:** `GET`, `POST`

**Route:** `/tools/recurring/customer_portal/<string:customer_hash>/products/search?swap_subscription_id=<int:swap_subscription_id>`

**Template file:** `products_search.html`

#### Available objects
* [Store](Theme-objects%3A-Store)
* [Customer](Theme-objects%3A-Customer)
* [Rules](Theme-objects%3A-Rules)

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
   "rules":[  
      {  
         "handle":"test-prodcut-2",
         "id":795150,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/1304284594233",
            "body_html":"",
            "created_at":"2018-07-05T11:28:44-04:00",
            "handle":"test-prodcut-2",
            "id":1304284594233,
            "image":null,
            "images":[],
            "options":[  
               {  
                  "id":1844760412217,
                  "name":"Title",
                  "position":1,
                  "product_id":1304284594233,
                  "values":[  
                     "Default Title"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-07-05T11:28:01-04:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"test prodcut 2",
            "updated_at":"2018-07-09T08:13:39-04:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/12218625949753",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-07-05T11:28:44-04:00",
                  "fulfillment_service":"manual",
                  "grams":0,
                  "id":12218625949753,
                  "image_id":null,
                  "inventory_item_id":13031237648441,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":0,
                  "old_inventory_quantity":0,
                  "option1":"Default Title",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"10.00",
                  "product_id":1304284594233,
                  "requires_shipping":true,
                  "sku":"",
                  "taxable":true,
                  "title":"Default Title",
                  "updated_at":"2018-07-09T08:14:51-04:00",
                  "weight":0.0,
                  "weight_unit":"lb"
               }
            ],
            "vendor":"blackestnight"
         },
         "shopify_product_id":1304284594233,
         "title":"test prodcut 2"
      },
      {  
         "handle":"test-product",
         "id":736695,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/751915925561",
            "body_html":"",
            "created_at":"2018-05-10T14:09:19-04:00",
            "handle":"test-product",
            "id":751915925561,
            "image":null,
            "images":[],
            "options":[  
               {  
                  "id":1081677217849,
                  "name":"Title",
                  "position":1,
                  "product_id":751915925561,
                  "values":[  
                     "Default Title"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-05-10T14:09:07-04:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"test product",
            "updated_at":"2018-07-19T11:24:16-04:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/7988821229625",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-05-10T14:09:19-04:00",
                  "fulfillment_service":"manual",
                  "grams":0,
                  "id":7988821229625,
                  "image_id":null,
                  "inventory_item_id":8216722735161,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":-8,
                  "old_inventory_quantity":-8,
                  "option1":"Default Title",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"0.00",
                  "product_id":751915925561,
                  "requires_shipping":true,
                  "sku":"",
                  "taxable":true,
                  "title":"Default Title",
                  "updated_at":"2018-07-19T11:24:16-04:00",
                  "weight":0.0,
                  "weight_unit":"lb"
               }
            ],
            "vendor":"blackestnight"
         },
         "shopify_product_id":751915925561,
         "title":"test product"
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
   "rules":[  
      {  
         "handle":"test-prodcut-2",
         "id":795150,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/1304284594233",
            "body_html":"",
            "created_at":"2018-07-05T11:28:44-04:00",
            "handle":"test-prodcut-2",
            "id":1304284594233,
            "image":null,
            "images":[],
            "options":[  
               {  
                  "id":1844760412217,
                  "name":"Title",
                  "position":1,
                  "product_id":1304284594233,
                  "values":[  
                     "Default Title"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-07-05T11:28:01-04:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"test prodcut 2",
            "updated_at":"2018-07-09T08:13:39-04:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/12218625949753",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-07-05T11:28:44-04:00",
                  "fulfillment_service":"manual",
                  "grams":0,
                  "id":12218625949753,
                  "image_id":null,
                  "inventory_item_id":13031237648441,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":0,
                  "old_inventory_quantity":0,
                  "option1":"Default Title",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"10.00",
                  "product_id":1304284594233,
                  "requires_shipping":true,
                  "sku":"",
                  "taxable":true,
                  "title":"Default Title",
                  "updated_at":"2018-07-09T08:14:51-04:00",
                  "weight":0.0,
                  "weight_unit":"lb"
               }
            ],
            "vendor":"blackestnight"
         },
         "shopify_product_id":1304284594233,
         "title":"test prodcut 2"
      },
      {  
         "handle":"test-product",
         "id":736695,
         "interval_options":{  
            "month":[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
         },
         "modifiable_properties":[],
         "shopify_product":{  
            "admin_graphql_api_id":"gid://shopify/Product/751915925561",
            "body_html":"",
            "created_at":"2018-05-10T14:09:19-04:00",
            "handle":"test-product",
            "id":751915925561,
            "image":null,
            "images":[],
            "options":[  
               {  
                  "id":1081677217849,
                  "name":"Title",
                  "position":1,
                  "product_id":751915925561,
                  "values":[  
                     "Default Title"
                  ]
               }
            ],
            "product_type":"",
            "published_at":"2018-05-10T14:09:07-04:00",
            "published_scope":"web",
            "tags":"",
            "template_suffix":null,
            "title":"test product",
            "updated_at":"2018-07-19T11:24:16-04:00",
            "variants":[  
               {  
                  "admin_graphql_api_id":"gid://shopify/ProductVariant/7988821229625",
                  "barcode":"",
                  "compare_at_price":null,
                  "created_at":"2018-05-10T14:09:19-04:00",
                  "fulfillment_service":"manual",
                  "grams":0,
                  "id":7988821229625,
                  "image_id":null,
                  "inventory_item_id":8216722735161,
                  "inventory_management":null,
                  "inventory_policy":"deny",
                  "inventory_quantity":-8,
                  "old_inventory_quantity":-8,
                  "option1":"Default Title",
                  "option2":null,
                  "option3":null,
                  "position":1,
                  "price":"0.00",
                  "product_id":751915925561,
                  "requires_shipping":true,
                  "sku":"",
                  "taxable":true,
                  "title":"Default Title",
                  "updated_at":"2018-07-19T11:24:16-04:00",
                  "weight":0.0,
                  "weight_unit":"lb"
               }
            ],
            "vendor":"blackestnight"
         },
         "shopify_product_id":751915925561,
         "title":"test product"
      }
   ]
}
```