# Infinite Pagination

There's this legacy API that contains info gathered across decades of existence. Your team needs to use one of the endpoints of that API to build a new web app.

This specific endpoint returns millions of items, paginated at 100 per page.

You job is to build a web app with a single page that lists all the items available in this legacy API in an infinite scrolling page. Whenever the user clicks in one of the items, the item becomes greyed out. This should persist even after refreshing the page.

Here's what you need to know:

- The legacy API is at http://sf-legacy-api.now.sh
- A simple `GET /items` will return the first 100 items.
- To go to a specific page you use `GET /items?page=20` for instance.
- The response will contain info about the total number of items, and the link to the next page.

## Guidelines

Here's the important stuff that we take into account when reviewing this exercise:

- It should be simple to start your solution
- It should contain some setup instructions
- It should work correctly (this also means no performance issues)
- It should look good
- It should have an automated way to prove it's working correctly
- It should use React.
