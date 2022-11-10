# My Panorama Repository
My Panorama is a personal Photography review website where the real customers will leave the reviews for a personal photography service.

## Live Link

Hosted in Firebase -> [My Panorama](https://mypanorama.web.app/)

## The features I use in this project
- This personal photography review website has 8 pages including login, sign up, services and my reviews, and the routing path is handled by the React router dom createBrowserRouter().
- In this project, I implement CRUD operations such as creating the data like service and review using the POST method, reading the data from the server using the GET method, updating the data using the PATCH method, and deleting the data using the DELETE method.
- We are using Context API to organize the code and code repetition for firebase Authentication .
- The authentication handled by Firebase authentication.
- There are three authentication method implement in this application such as Google, GithHub and EmailPassword authentication.
- We are using NoSQL MangoDB to store our data like services and reviews.
- We have installed CORS package to avoid the cross-origin blocked issue at a different path.
- I have implement the JWT (Json Web Token) for email/password-based authentication and applied it to my reviews page to verify the user.

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