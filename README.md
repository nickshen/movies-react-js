# Submission for Frontend Objective Task - Nick Shen

### Setup Instructions:
In the root directory (frontend), run:
~~~~
npm install
npm start
~~~~
Then hit http://localhost:8080/.

**How did you decide which technologies to use as part of your solution?**

I chose to use **React** for this objective task, as its a framework that I'm familiar with, and enables a lot of component reuse, which I took advantage of for **MovieItem, FilteredTVContent, and NavigationBar** components.
I chose to use a lightweight boilerplate for the sake of efficiency (given the alloted time), and to avoid installing a bunch of bloatware packages.
I chose to use **Aphrodite** (https://github.com/Khan/aphrodite) for dynamic styling, as it drastically improves dynamic styling quality-of-life, although not much of that was needed for this task. I used https://www.npmjs.com/package/parse-json for JSON parsing.

**Are there any improvements you could make to your submission?**

Responsive sizes could be better for sure. I tried using media queries, but they didn't work well with React. Given more time I would responsively increase the size of the MovieItems to 3 per row for small screens.
I would also make the Routing more robust, as right now it is only client side and janky.

**What would you do differently if you were allocated more time?**

I would have definitely used a more robust state system such as **Redux** (https://redux.js.org/) if the task were more complex/required more state management and corresponding events.
I would also definitely do a better job with routing and BrowserHistory.

**Screens**
![Home Screenshot](https://github.com/nickshen/frontend/blob/master/docs/home.png)
![Series Screenshot](https://github.com/nickshen/frontend/blob/master/docs/series.png)
![Movies Screenshot](https://github.com/nickshen/frontend/blob/master/docs/movies.png)
