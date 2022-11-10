# My Panorama Repository
My Panorama is a personal Photography review website where the real customers will leave the review for a personal photography service.

## Live Link

Hosted in Firebase -> [My Panorama](https://mypanorama.web.app/)

## The features I use in this project
- This learning application has 8 pages including login, signup, services and my reviews, and the routing path is handled by the React router dom createBrowserRouter().
- I implement CRUD operation in this project to create the service and review using POST method, read the data from server via GET Method and update the data using PATCH method and delete the data using DELETE Method.
- We are using Context API to organize the code and code repetition for firebase Authentication .
- The authentication handled by Firebase authentication.
- There are three authentication method implement in this application such as Google, GithHub and EmailPassword authentication.
- We are using NoSQL MangoDB to store our data like services and reviews.
- We have installed CORS package to avoid the cross-origin blocked issue at a different path.
- There is an Print icon on course details page, where anyone will click an pdf will generate and start download automatically.
- There is a private route when we click get Premium access, it will protected if the user is not logged in.

## Resources & Credits
- [ReactJS Library](https://reactjs.org/)
- [Google Firebase](https://firebase.google.com/)
- [React Router Dom](https://reactrouter.com/en/main)
- [Context API](https://reactjs.org/docs/context.html#api)
- [TailwindCSS Framework](https://tailwindCSS.com/)
- [React Toastify](https://github.com/fkhadra/react-toastify)
- [react-photo-view component](https://react-photo-view.vercel.app/en-US)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Vercel Server](https://vercel.com/)
- [DotEnv Package](https://www.npmjs.com/package/dotenv)