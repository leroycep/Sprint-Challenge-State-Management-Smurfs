1. What problem does the context API help solve?

   - Context API (and Redux) solve the problem of "prop drilling". "Prop
     drilling" is when you have to pass a props down through many layers of
     components, and in larger apps it can get very messy.
   - Context API (and Redux) solve this problem by turning local state into
     global state.

1. In your own words, describe `actions`, `reducers` and the `store` and their
   role in Redux. What does each piece do? Why is the store known as a 'single
   source of truth' in a redux application?

   - `actions` turn mutations of the global state into discrete units, making it
     easier to find what actions lead to what state.
   - `reducers` take `actions` and perform the mutation that it describes.
   - The `store` is a single global varible that stores all of the applications
     state. When using Redux, best practice is to store everything here and pull
     out the data you need in each component.

1. What is the difference between Application state and Component state? When
   would be a good time to use one over the other?

   - Application is something that is important for your whole app to know; like
     who the logged in user is.
   - Component state is state that is only for one component, like a form. One
     good example of component state is when you have picture carousel; the
     application at large doesn't need to know what picture is currently
     displayed.
   - I think a good rule of thumb for when to put something into Application
     state is asking yourself: "Is this a piece of data that should persist even
     when the application is closed?" If so, then it's a good candidate for
     putting into application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our
   `action-creators`?

   - `redux-thunk` allows use to create asynchronous functions. It means that we
     can create function actions that do work (like fetching data) and create a
     new action when they are done.

1. What is your favorite state management system you've learned and this sprint?
   Please explain why!

   - I liked Context API because it has a smaller API than Redux. It's also
     conceptually simpler than Redux; where Redux introduces `Providers`,
     `actions`, `reducers`, `store`, `mapStateToProps`, etc., Context API makes
     do with `createContext`, `useContext`, and `Context.Provider`.
   - Redux defines your entire applications flow, and Context API doesn't.
   - I like to think of Context API as simply providing a portal to send state
     deep into the component tree.
