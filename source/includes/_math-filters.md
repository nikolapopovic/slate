# Math filters

**Directory**

* [abs](#abs)
* [ceil](#ceil)
* [divided_by](#divided_by)
* [floor](#floor)
* [minus](#minus)
* [modulo](#modulo)
* [plus](#plus)
* [round](#round)
* [times](#times)

## abs

> Example input

```liquid
{{ -17 | abs }}
```

> Example output

```html
17
```

## ceil

> Example input

```liquid
{{ 4.6 | ceil }}
```

> Example output

```html
5
```

## divided_by

> Example input

```liquid
{{ 200 | divided_by(10) }}
```

> Example output

```html
20
```

## floor

> Example input

```liquid
{{ 4.6 | floor }}
```

> Example output

```html
4
```

## minus

> Example input

```liquid
{{ 200 | minus(15) }}
```

> Example output

```html
185
```

## modulo

> Example input

```liquid
{{ 12 | modulo(5) }}
```

> Example output

```html
2
```

## plus

> Example input

```liquid
{{ 200 | plus(15) }}
```

> Example output

```html
215
```

## round

> Example input

```liquid
{{ 4.6 | round }}
```

> Example output

```html
5
```

## times

> Example input

```liquid
{{ 200 | times(1.15) }}
```

> Example output

```html
230
```