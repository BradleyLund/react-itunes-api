# react-itunes-api

## How to use the Application

The app is very simple to use.

On the home page there is an input box and a drop down box. Type what you would
like to search for in the input box. Once you are finished with that, you must
select the type of media you are searching for in the drop down box.

You can then click on the search button.The results of your search will populate
just below this.

Once you see the search results you can then click on the add to favourites
button on the item you would like to add.

Your favourites list will populate below the results. Use the navbar to jump
between everything.

If you would like to remove an item from your favourites list, simply click on
the remove from favourites button on the item you would like to remove.

## Installing and Testing the Application

Open up a terminal in a folder you want the project to be stored in.

Run this code to download the project:

`git clone https://github.com/BradleyLund/react-itunes-api.git`

Change into the right directory

`cd iTunesFaves`

Then run the following:

`npm install`

`npm start`

Open a new terminal window and change to the frontend directory:

`cd frontend`

Then run the following:

`npm install`

`npm start`

The server and the frontend should now be running. Open up the browser and
navigate to:
<a href="http://localhost:3000/#headerDiv">http://localhost:3000/#headerDiv</a>

To test the backend, run npm test in the iTunesFaves directory.

To test the frontend, run npm test in the frontend directory.

The snapshot test for React is in the App.test.js file

## Security of the app

As you do not need an API key to use the iTunes API, there was no need to have
an environment file where the api keys would have been stored.

I have used <a href="https://helmetjs.github.io/">Helmet</a> to secure the
application

## Link to the application deployed on heroku
