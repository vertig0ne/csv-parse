# CSV Parse

Full stack application that will save and parse an uploaded CSV.

## Built Using

Backend: 
 - Node.js
 - Express.js
 - Multer
 - JSON

Frontend:
 - React
 - Axios

Testing:
 - None


## Design decisions

I skipped out on storing in a database as everyone does it, and for something thats only used once or twice is a lot of overhead. However, the forEach that will process them still exists and would take a minor refactor to use the Model. I would have likely used Sequelize.js and MySQL/MariaDB to store if was absolutely necessary


It is also still 2 applications seperated. As you would normally build the production to a minified static files and then have the backend just serve a static folder. This would be better uttilised where they are both seperate projects. Backend express port is 3005 by default, and the React application uses 3000.

## Installation & Running

```
cd back
npm i
npm start


cd front
npm i
npm start
```

## Bug

There is currently a bug with React tables, the Backend will accept the uploaded csv and attempt to build the results, but some underlying functionality in the components does not want to work. This is a blocking feature and will take longer than the 2-3 hours allocated to resolve.
