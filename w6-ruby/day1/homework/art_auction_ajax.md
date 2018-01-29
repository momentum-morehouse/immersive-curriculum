# Art Auction with AJAX

## SKILLS
TODO

## Description

Given an existing application, add AJAX for submitting information without reloading the page.

This application is an auction site, and although it doesn't do much now, more features can be added so that it becomes more useful and sophisticated. As it is, you can view a list of all items for sale, can make new items, and can make bids on items.

For this project, you need to modify the bidding page for a smoother user experience. Currently, if a user wants to see if anyone else has bid, they have to refresh the page. If the user places a bid, the page reloads to display the changes.

You can use AJAX to allow both of those behaviors without page reload.

* The place bid form should be remote, and should:
  - update the highest bid
  - update the next bid field to be $10 higher than the highest bid
* Every 15 seconds, the highest bid and the next bid should update if someone else places a new bid.

The application should be styled using Bootstrap. Some minimal styling has been applied, but it definitely needs more work. ** You can change any and all styles that are already in place.**


## Notes
* starter files are in `auction_ajax.zip`
* In order to test the case of "someone else" placing a bid, you could have the app open in two different tabs.  You can make a bid in one and then check that the other one updates automatically.
* [Bootstrap 4 Documentation](http://getbootstrap.com/docs/4.0/getting-started/introduction/)