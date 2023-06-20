# authenticationSkillTest
This is a simple web application That Allows you to Perform the Following Tasks
* Create a new account (Sign Up) 
* Login to your account (Sign In)
* Update your account Details
* Google Authentication (Sign Up to Google account)

#  Used Tools

> Programming Language And Framework
* Nodejs
* Bootstrap
* EJS (Template Engine)
* Express



> Dependencies
* passport
* passport-google-oauth20
* passport-local
* mongoose
* express-session
* dotenv
* crypto
* cookie-parser
* connect-mongo


`Passpost => middleware is used for implementing Google and Local authentication strategies`

`mongoose => database is used for storing user data`

`express-session => is a middleware for managing session data in Express.js`

`dotenv => package is used for keeping our sensitive information in a separate file not accessed by anyone`

`crypto => is used for generating random password`

# File And Folder Structure
`config--------------------->(mongoose.js, LocalStrategy.js, GoogleStrategy.js)`

`Controller----------------->(homePageController.js, loginPageController.js, signUpPageController.js)`

`Module--------------------->(User.js)`

`Route---------------------->(index.js)`

`Views---------------------->(homePage.ejs, loginPage.ejs, signUpPage.ejs, update.ejs)`

`Index.js(Root File)`

# DataBase Schema
> User Schema 
```js

const UserSchema = db.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
},{
    timestamps: true,
}
);
```

`The user DataBase Only Store Name Email and Password`
