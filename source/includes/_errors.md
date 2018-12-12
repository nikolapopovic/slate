# Errors
Error is under development and object properties are subject to change.

Property | Definition
--------- | -------
<b>error.input</b> <br> string| `"input": "email"`<br> 
<b>error.message</b> <br> string| `"message": "["must be at least 3 characters", "cannot contain a space"]"` <br>  `{'quantity': [u'Not a valid integer value', u'Number must be at least 1.']} `<br> 

## Loop through the Errors

> EXAMPLE REQUEST

```liquid
{{ errors }}
```

> EXAMPLE RESPONSE

```javascript
{
	'address_id': [
		'This field is required.',
		'Cannot add this product, already belongs to this address'
	],
	'shopify_variant_id': [
		'This field is required.'
	],
	'order_interval_frequency': [
		'This field is required.'
	], 
	'next_charge_date': [
		'This field is required.'
	],
	'order_interval_unit': [
		'This field is required.'
	],
	'quantity': [
		'Number must be at least 1.'
	],
	'field_name': [
		'must be at least 3 characters',
		'cannot contain a space'
	]
}
```

Loop through the Errors dictionary to access individual Error object.

Errors is under development and object properties are subject to change.