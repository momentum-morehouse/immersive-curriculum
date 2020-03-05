# Django, JSON, and Ajax

## Objectives

Students should be able to:

- Send JSON to templates using the `json_script` filter
- Create endpoints in Django that emit JSON
- Create endpoints in Django that accept JSON
- Create endpoints in Django that handle PUT and DELETE requests
- Use fetch requests to connect to Django endpoints

## Lecture notes

### json_script

[`json_script`](https://docs.djangoproject.com/en/3.0/ref/templates/builtins/#json-script) can be used to take data in the template context and turn it into a `script` tag with JSON so that you can use it from JavaScript.

To read the data, use `JSON.parse`.

```js
let data = JSON.parse(document.getElementById('js-data').textContent)
```

### JSONResponse

[`JSONResponse`](https://docs.djangoproject.com/en/3.0/ref/request-response/#jsonresponse-objects) is an subclass of `HTTPResponse` that encodes the data passed to it as JSON and returns a response with `Content-Type: application/json` and that data as the body. 

Not all data can be easily encoded as JSON; remember to use:

* dictionaries
* lists
* strings
* dates
* datetimes
* UUIDs

### Parsing JSON

Unlike with forms, Django won't automatically put JSON data sent with a request in `request.POST`. You have to parse it yourself.

```py
import json

if request.method == 'POST' and request.content_type == 'application/json':
  data = json.loads(request.body.decode("utf-8"))
```

### Handling PUT, PATCH, and DELETE

PUT, PATCH, and DELETE are HTTP methods that you don't see from non-Ajax browser activity. 

They _should_ mean the following, although you can define them however you want. Often, you define PUT and PATCH to do the same thing.

* `PUT /items/<pk>/` - replace the item with this pk
* `PATCH /items/<pk>/` - update the item with this pk (does not have to send all data, can send a subset of fields)
* `DELETE /items/<pk>/` - delete the item with this pk

## Demo ideas

* Demo `json_script` by sending data to use with chart.js
* Create an application for time tracking
  * Start timer via Ajax
  * Show current timer with JavaScript
  * Finish timer with Ajax
  * Edit previous activities
  * Delete previous activities
  * How to handle starting a timer if you have one already running?
  * Use `json_script` and chart.js for showing overviews.

## Resources

## Schedule
