# ![logo](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: Reacathon

## [Quotetionary](https://ga-quotetionary.netlify.app/)

### Summary

The assignment was to create a React app rendered in a web browser, with data consumed from a public API, in a team of 2. Because the deadline was 48 hours and it was only 2 people we decided to pair program.

For the MVP version, we choose to make a quote bank app, with the following features supported:

- Users can pull a single random quote.
- Filter quotes by:
- Tag
- Author

Stretch goals/additional features to be built upon the MVP:

- Search by keyword
- Like/Dislike button
- Where 'Like' adds more quotes from the same author, displayed at the top of all the quotes.
- Where 'Dislike' removes the quote to be displayed.
- Pick a random quote from the selected tag.
- Consolidate current API data with an additional API to augment UX.

Once the scope of our tasks was defined, we proceeded to build wireframes. This was so we could get an idea of how we wanted the application to look like in the end, it was also here where we decided where to put what functionality.

### Brief

- Consume a public API
- Have several components - at least one classical and one functional
- Stick with KISS (Keep It Simple Stupid) and DRY (Don't Repeat Yourself) principles
- Project deployed online and accessible to the public
- Have semantically clean HTML


### Table of contents

- [Quotetionary](#quotetionary)
  - [Summary](#summary)
  - [Brief](#brief)
  - [Landing Page](#landing-page)
  - [Quotes Pages](#quotes-pages)
  - [Random Quote Page](#random-quote-page)
  - [Technologies Used](#technologies-used)
  - [Libraries](#libraries)
  - [API Documentation](#api-documentation)
  - [Approach](#approach)
    - [Filter](#filter)
    - [Get/Display Random Quote](#getdisplay-random-quote)
  - [In-app Screenshots](#in-app-screenshots)
  - [Bugs](#bugs)
  - [Future Features](#future-features)
  - [Wins](#wins)
  - [Challenges](#challenges)
  - [Lessons Learnt](#lessons-learnt)
  - [Credits](#credits)

### Technologies Used

- HTML
- SCSS
- JavaScript/JSX
- React
- Postman
- Git & GitHub

### Libraries

- Bulma Framework
- Axios

### API Documentation

[GoQuotes API](https://goquotes.docs.apiary.io/#)

### Approach

We started implementing all the features we listed down in our notes one by one while also following the wireframes to position stuff appropriately. We collaborated by programming together while in a Zoom breakout room so communication was instantaneous. To keep track of progress we had all the features we wanted noted down in notes and we were crossing stuff out as we went along. For the API we used GoQuotes, this was a public API that gave us a lot of options when getting quotes, we didn't use all of the endpoints but having them there allows for more options in the future.

#### Filter

We added a filter section inside the quotes page, the user can filter by author & tag. To achieve this we had a filteredArray that was a copy of the allQuotes array but with filtered items, then we rendered the filtered array inside React. This is so users could filter by any of the available options and narrow down the amount of quotes to the ones they want.

```javascript
 const handleChange = e => {
   setSearchForm({ ...searchForm, [e.target.name]: e.target.value })
 }
 function filterQuotes(originalQuotes) {
   const filteredTag = originalQuotes.filter(quote => {
     return (
     quote.tag === searchForm.tag
     || searchForm.tag === 'All')
   )
   }
   const filteredAuthor = filteredTag.filter(quote => {
    return (
       quote.author.toLowerCase().includes(searchForm.searchField.toLowerCase())
       || searchForm.searchField === '')
    )
   }
   setFilter Quotes(filteredAuthor)
   return filteredAuthor
 }
```

As you can see in the code above, we check for if the tag or author matched and if they did we would return the quote, also we would return if the tag was 'All' or the author search term was empty.

#### Get/Display Random Quote

For the random quote we picked a number between 0 and the quotesArray length as the index and choose the item with the same index from the quotesArray as the chosen randomQuote.

```javascript
 const [randomQuote, setRandomQuote] = React.useState(
   !!quotesArray &&
   quotesArray[Math.floor(Math.random() * quotesArray.length)])
 const handleClick = () => {
   setRandomQuote(quotesArray[Math.floor(Math.random() * quotesArray.length)])
 }
```

### Screenshots

Landing Page wireframe
![Landing Page](./screenshots/LandingPage.png "Home Page")

Quotes Pages wireframe
![Quotes Pages](./screenshots/AllQuotes.png "Quotes Page")

Random Quote Page wireframe
![Random Quote Page](./screenshots/RandomQuote.png "Random Quote Page")

Random Quote Page:
![random quote page](./screenshots/randomPageScreenshot.png "random quote page")

Quotes Page:
![Quotes page](./screenshots/quotesPageScreenshot.png "Quote page")


### Bugs

One bug is that in the filter section of the quotes page we could not center the dropdown, this was mainly because we used bulma for styling so something was conflicting and we could not figure it out.
Pages will sometimes go blank if going straight to anything but the home page.

### Future Features

A better design for the app as the quotes page can be improved quite a bit.
Use other API’s to add more quotes to the website.
Add a like functionality and recommend based on that.

### Wins

One of the biggest wins of this project was making the quotes in the quote page load gradually as the user scrolls, it solved a very big problem as rendering all the quotes took a good 5-8s which made the website unresponsive during that time.

### Challenges

- One of the biggest challenges in this project was pair programming, as it was our first time doing it was hard and I especially did make a lot of mistakes but also learnt a lot.
- Another thing that I found very difficult was making requests to the public GetQuotes API as we had a CORS problem.

### Lessons Learnt

We could have done a better job at planning tasks for each person during this project.
Collaboration tools are very important and affect the workflow of the team.
Console log a lot. It's the best way to debug your application.
Making multiple API calls was a bit confusing, we had a few problems with that but we got it working in the end.
We wanted to make as few API calls as we could so we loaded the data in APP.js and saved it to local storage.

### Credits

[API](https://goquotes.docs.apiary.io/) used is called GO Quotes, it's an open source API that provides quotes.
[Axios](https://bulma.io/documentation/overview/) Bulma is a free, open source framework that provides ready-to-use frontend components that you can combine to build responsive web interfaces.
