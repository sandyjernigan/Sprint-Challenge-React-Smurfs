# Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step and be sure to use your design/style skills to make this application look professional.

### Stage 1

Construct your Components to build a Single Page Application. Keep your components separate and design them as if they are pages before adding in your Router.

- [x] Construct an AXIOS request to retrieve an array all the Smurfs in the Smurf DB simply write a `GET` to the endpoint `/smurfs`.
- [x] Display those smurfs in a list on the screen.
- [x] Construct an AXIOS request to `POST` to add a Smurf to the Smurf DB you'll need all three fields.
- [x] Create a form that will allow users to add Smurfs to the Smurf DB.
- [ ] If a Smurf is created correctly, you should see a response that is an array of Smurfs with unique id's assigned to each Smurf.

- Example:

```js
{
  name: 'Sleepy',
  age: 323,
  height: '5cm'
}
```

### Stage 2

Add a Router to this application by using React Router.

- [ ] You'll start by wrapping your `root` component in the `Router` component.
- [ ] Declare your routes with `Route`.
- [ ] Then make it so you can navigate to your routes using `Link`.
- [ ] Create two `routes` in your `App` component, one at `'/'` for your `Smurfs` component,and one at `/smurf-form` for your form.
- [ ] Then in your `App` component, create a nav bar that will use `NavLink` to route to your different pages.

## STRETCH PROBLEMS

**HTTP/Axios Stretch Problems**

- [ ] The following two endpoints are here for you if you'd like to push yourselves a little further.

- [ ] **HINT** if you are going to be working on Stretch Problem, you'll need to use that unique `id`.

**DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove**

- [ ] For this endpoint to work, all you need is an id sent up as part of the request url.

- [ ] If your delete worked, you'll get a list of the smurfs back.
- [ ] Example:

```js
// output: `A list of all the smurfs in the Smurf DB will be returned`
[
  {
    name: 'Brainy',
    age: 211,
    height: '5cm',
    id: 0
  },
  {
    name: 'Smurfette',
    age: 122,
    height: '12cm',
    id: 1
  }
];
```

**PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify**

- [ ] For this endpoint to work, you'll need an `id` added to the URL, and at least one field to update on the Smurf object. `name` `age` `height`.
- [ ] Example:

```js
// input:
{
  id: 1,
  name: Sleepy
}
// output: `A list of all the smurfs in the Smurf DB will be returned`
[{
  name: 'Sleepy',
  age: 30,
  height: '3cm,
  id: 1
}]
```

**Router Stretch Problem**

- [ ] If a user clicks on a smurf, they should be routed to `/smurf/:id` and a single smurf should be displayed on the page.
- [ ] I know this seems like a small task, but you'll have to get crafty with your data and your logic here.
