# News Aggregator

## To run the application

In the main project directory and in the Backend directory, you can run:

### `npm start`

Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

## Project structure

Nodejs and express for the backend,
SQLite for a simple database and
React for the frontend.

### Overview:

I'm using Nodejs to hit a dummy news site and adding the data to sqlite. I then have a very simple
frontend where I hit my Express endpoints from a React component and insert the results into redux toolkit.

### A few things I would like to have added are:
1) Login option
2) Profile page
3) Multiple news sources
4) pagination or an "endless scrolling" feature that loads a set amount of articles at a time.
5) Email notifications
6) Saving the most common and or recent searches for suggestions
