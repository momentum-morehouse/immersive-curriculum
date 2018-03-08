import request from 'superagent';

let listings;
let container;
let nextId = 1;

const _id = document.getElementById.bind(document);
const _query = document.querySelector.bind(document);

document.addEventListener("DOMContentLoaded", function () {
    container = _id("container");
    container.innerHTML = headerHTML();

    request.get("http://localhost:3000/items")
        .then(response => response.body)
        .then(body => {
            listings = body;
            nextId = Math.max(...listings.map(l => parseInt(l.id, 10)));
            nextId++;
            showListings();
        })

    _query('body').addEventListener('click', function (event) {
        console.log('event.target: ', event.target);
        if (event.target.className == "home-link") {
            showListings();
            event.preventDefault();
        } else if (event.target.className == "listing__link") {
            showListing(event.target.dataset.listingId);
            event.preventDefault();
        } else if (event.target.className == "add-listing-link") {
            showAddListing()
            event.preventDefault();
        }
    })

    _query('body').addEventListener('submit', function (event) {
        event.preventDefault();

        const title = _id("title").value;
        const summary = _id("description").value;
        const image = _id("image-url").value;
        const newListing = {
            id: nextId.toString(),
            title: title,
            summary: summary,
            image: image
        };
        listings.push(newListing);

        request.post("http://localhost:3000/items")
            .send(newListing)
            .then(() => showListings())
        nextId++;
    })
});

function showListings() {
    container.innerHTML = headerHTML() + listingsHTML(listings);
}

function showListing(listingId) {
    const listing = listings.find(listing => listing.id == listingId);
    container.innerHTML = headerHTML(true) + listingHTML(listing);
}

function showAddListing() {
    container.innerHTML = headerHTML(true) + addListingHTML();
}

function addBr(text) {
    return text.replace("\n", "<br>");
}

function headerHTML(linkBack) {
    return `
    <div class="row header">
        <div class="col">
            ${linkBack
              ? "<a href='#'><h1 class='home-link'>Classifieds</h1></a>"
              : "<h1>Classifieds</h1>"}
        </div>
        <div class="col add-listing">
            <a class="add-listing-link" href="#">Add a listing</a>
        </div>
    </div>
    `;
}


function listingsHTML(listings) {
    return `
    <div class="row listings">
        ${listings.map(listing => `
            <div class="listing col-xl-3 col-lg-4 col-md-6">
                <div class="listing__wrapper">
                    <div class="listing__image">
                        <img src="${listing.image}">
                    </div>
                    <div class="listing__title">
                        <a href="#" class="listing__link" data-listing-id="${listing.id}">
                            ${listing.title}
                        </a>
                    </div>
                </div>
            </div>
        `).join("")}
    </div>
    `;
}

function listingHTML(listing) {
    return `
    <div class="row">
        <div class="col col-sm-12"><h2>${listing.title}</h2></div>
        <div class="col-lg-8 col-md-6">
            ${addBr(listing.summary)}
        </div>
        <div class="col-lg-4 col-md-6">
            <img src="${listing.image}">
        </div>
    </div>
    `;
}

function addListingHTML() {
    return `
    <div class="row">
        <div class="col-lg-6">
            <h2>Add a new listing</h2>
            <form class="add-listing-form">
                <div class="input-field">
                    <label for="title">Title</label>
                    <input type="text" name="title" id="title" required>
                </div>
                <div class="input-field">
                    <label for="description">Description</label>
                    <textarea name="description" id="description" required></textarea>
                </div>
                <div class="input-field">
                    <label for="image-url">URL to image</label>
                    <input type="text" name="image-url" id="image-url" required>
                </div>
                <input type="submit" class="button" value="Add listing">
            </form>
        </div>
    </div>
    `
}
