# Minimum Viable Product

The MVP of this project will be broken up between 2 stages. Follow each step and be sure to use your design/style skills to make this application look professional.

### Stage 1

Construct your Components to build a Single Page Application. Keep your components separate and design them as if they are pages before adding in your Router.

- [x] Construct an AXIOS request to retrieve an array all the Smurfs in the Smurf DB simply write a `GET` to the endpoint `/smurfs`.
- [x] Display those smurfs in a list on the screen.
- [x] Construct an AXIOS request to `POST` to add a Smurf to the Smurf DB you'll need all three fields.
- [x] Create a form that will allow users to add Smurfs to the Smurf DB.
- [x] If a Smurf is created correctly, you should see a response that is an array of Smurfs with unique id's assigned to each Smurf.

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

- [x] You'll start by wrapping your `root` component in the `Router` component.
- [x] Declare your routes with `Route`.
- [x] Then make it so you can navigate to your routes using `Link`.
- [x] Create two `routes` in your `App` component, one at `'/'` for your `Smurfs` component,and one at `/smurf-form` for your form.
- [x] Then in your `App` component, create a nav bar that will use `NavLink` to route to your different pages.

## STRETCH PROBLEMS 

**HTTP/Axios Stretch Problems**

[x] DELETE '/smurfs/123', where 123 is the Id of the smurf you want to remove**

[x] PUT '/smurfs/123', where 123 is the Id of the smurf you want to modify**

**Router Stretch Problem**

- [ ] If a user clicks on a smurf, they should be routed to `/smurf/:id` and a single smurf should be displayed on the page.
- [ ] I know this seems like a small task, but you'll have to get crafty with your data and your logic here.
