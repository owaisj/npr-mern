# KUT Web Scraper
A full-stack application that scrapes articles from the KUT.org homepage and allows users to write notes about each article.
## Basic Functionality
On the back-end, there are routes that allow the user to scrape articles and add them to a database made with MongoDb. The data was modeled with Mongoose, an ODM, which allows for validation and for all the data mapping to be done through Node. The routes were made with Express in place of the Node.js HTTP library.  

The front-end was made using ReactJS and bootstrapped with `create-react-app`. All of the components are class-based and use lifecycle methods to handle the data. 
- The Main component is the homepage of the site. When it is mounted (this occurs when the user goes to the site page). This component grabs article IDs and passes them as props to the Article components which render the title, blurb, and links for the article. These are generated with the higher-order function, `Array.map()`.
- The notes page is unique to each Article. Each ID produces a unique instance of the Article component using URL params and React Router. 
## Deployment
This application is deployed on Heroku. The database is hosted with mLab.  
If you'd like to run it on your local machine, ensure that you have MongoDb installed and the service running. You can run `mongod` to start it.  
Just clone the repository and run `npm install`. This will install the front and back-end dependencies. Then run `npm start`.  
## Issues
NPM Scripts for deployment
- The deployment scripts referred to this project's view folder as client and heroku was not able to run the build scripts. In order to remedy this, the scripts in the root package.json were edited to reflect the project's directory structure.

`componentDidUpdate()` lifecycle method and infinite loop
- This lifecycle method takes three parameters, previousProps, previousState, and snapshot. When called, it triggers a re-render of the component. Within this method, it called a function that updated state and then called componentDidUpdate over and over again. Using the previousState parameter, the component only re-renders when the state changes.  
## Technologies Used
Front-End: ReactJS
- Additional Libraries
    - CSS in JS and FlexBox
    - Google Fonts  

Back-End: MongoDb, ExpressJS, and NodeJS 
- Additional Libraries  
    - Axios for HTTP requests on the back-end. The fetch API is used on the front-end.
    - Cheerio to parse through web pages
    - Mongoose, an ODM for MongoDB (NoSQL)
## Future Work
Use a robust CSS library for better styling.  
Refactor React Application with Hooks.  
Allow for User Profiles and Authentication.