Weather Report
===============

## Skills
TODO

## Description

Build a Ruby application to pull data from the [Weather Underground API](http://www.wunderground.com/weather/api/d/docs?MR=1) and present a weather report to the user.

Your application will query multiple API endpoints from Weather Underground and will present a weather summary to the user. In the UI, the user will input a zip code and then will be shown a weather report for that location. Your application doesn't need to persist any data.

You could use Ruby's standard library [Net::HTTP](https://ruby-doc.org/stdlib-2.5.0/libdoc/net/http/rdoc/Net/HTTP.html) to build http requests. However, you might find it more convenient to use the [HTTParty](https://github.com/jnunemaker/httparty) gem.

Your summary should include at least the following information:

* Current conditions at that location.
* 10 day forecast for that location.
* Sunrise and sunset times.
* Any current weather alerts.
* A list of all active hurricanes (anywhere).

The summary display does not need to win any design awards, but it should be readable and basically usable for your users.

## Extra Challenge

- Rather than just receiving a zip code from the user, allow them to type in a city and state instead (for instance: `Durham, NC` or `Durham, North Carolina`).
