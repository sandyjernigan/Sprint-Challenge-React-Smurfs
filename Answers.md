# Self-Study/Essay Questions

### Explain the differences between `client-side routing` and `server-side routing`.

* `clienside routing` is when the route is handled by the client's browser. This happens when the client requests all of the information up-front and then handles routing internally so that it does not need to pull another request from the server. Althouh browsing from one page to the next may be faster using this method, the initial load of the page will take more time as it will have to download all of the information.
* `server-side routing` has been the standard routing option for a while. This method uses the server to generate each view of the page, therefore the server will change (refresh) the page with each request. Every request will require a new fresh page to load, therefore it can take longer between pages to load.

### What does HTTP stand for?

* HyperText Transfer Protocol (HTTP) is the protocol that browsers and the world wide web use to generate how a page is displayed and transmitted. 

### What does CRUD stand for?

* (C)reate 
* (R)etrieve
* (U)date
* (D)elete

Web Developers that are familiar with REST term, can think of CRUD as the original that REST (Representational State Transfer) was derived from. It is a type of order of operations to help understand the functions that almost any database type application should have. (Meaning any application that pulls and retrieves lists of data to be displayed.) 

### Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

* POST = Create
* GET = Read
* PUT = Update (Also, PATCH is another way to Update.)
* DELETE = Delete

### Mention three tools we can use to make AJAX requests.

* Fetch API
* Axios
* jQuery $.ajax

Also: 
* Superagent
* Request