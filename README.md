# Reddit client
This React web application uses the Reddit API to allow users to view and search posts and comments provided by the API.\
This project was built to practice working with **React**, **React router** and **Redux**.
## Usage
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
This project was deployed using Netlify [here](https://client-reddit.netlify.app/).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.
## Features
The starting page shows the popular posts of Reddit. There are also the search bar at the top and the menu with popular subreddits on the right.

![The starting page of the project](public/reddit-screenshot.png)

When the users click on the link of the subreddit in the post or in the menu they can see the list of subreddit's posts.\
When the users click on the post in the list they are navigated to the separate route for an individual post. On this page they can see the post and the comments which are displayed with nested replies.

![The page with the post](public/post-screenshot.png)

When the users click on the icon with the number of comments in the list of the posts they are navigated to the section with the comments to the corresponding post.

![Comments to the post](public/comments-screenshot.png)
## Technologies
During the development of this project these technologies were used:
* React 18.0.0
* Redux 4.1.2\
Though using Redux is unnecessary in the projects like this, some slices of the state were managed with the help of this library for practice.

* React-redux 8.0.2
* Redux toolkit 1.8.2
* Marked-React 1.1.0\
The library was used for converting some of the comments in Markdown into html.

* Moment 2.29.3\
The library was used for displaying the relative time of the post's and the comment's creation.

* React Router 6.3.0
* Testing libraries:

  * Jest-Dom 5.16.4
  * React testing library 13.1.1
  * User-Event testing library 14.2.1