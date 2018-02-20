# Classifieds

## Skills

TODO

## Directions

For this assignment, you will use [json-server](https://github.com/typicode/json-server) with the included `items.json` file to make an API for a classifieds site.

Then, build a dynamic web page using HTML, CSS, and JavaScript. This page should have three "views": that is, three different appearances depending on the state.

1. An index of all listings with their title and image.
1. A form to add a new listing.
1. A view of an individual listing with its title, image, and summary.

The form to add a new listing should work -- it should send a POST request to json-server to add the new listing.

### Bonus steps

The way this is set up, it breaks the browser's history. You can't go back in your history to see each view. You could fix this in one of two ways:

* Make each view its own web page. If you go this route, you'll need to parse URL parameters on the individual listing.
* Use [client-side routing](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f). This watches the browser for changes in the URL and updates the page on change. If you go this route, either by [using a router that already exists](https://github.com/krasimir/navigo) or [rolling your own](http://joakim.beng.se/blog/posts/a-javascript-router-in-20-lines.html), I recommend using hash-based routing, as you do not have full control of the server.
