# joker

*Joker was built to keep people entertained ... just kidding (Joker)!!!*

I built this to learn the following tools
* GraghQL
* Apollo Server and Apollo Client
* React, Node

### Setting up and Running Joker on your local
 These are the steps that you need to follow in order to have joker running on local environment. Feel free to check out the deployed app [here](https://bon-joker.herokuapp.com/). What is a react application without Node ?!!! I assume you already have node.js ( and ... I almost said Docker as well ) installed on your machine. If not go ahead and find the installation [here](https://nodejs.org/en/download/). Type ``` node --version ``` on your terminal to make sure you are all setup.
 
 * Clone this repo into your local machine
 * Run ``` npm install ``` to install the dependencies. *For those that prefare yarn ( Like me ) then command is ``` yarn install ```*
 * Create a .env file and copy the content that is in .env.example and put data of your choice. I use PORT=9000 NODE_ENV=develop, but feel free to use whatever values that work for you, it should not be an issue, as long as the client and the server port numbers dont conflict or the PORT number does not conflict with another application on the same network.



#### Running the app
The commands that you may need to use for this applications are ``` yarn dev ``` to run BOTH the client and then server on your local
##### Client
``` yarn client``` to run ONLY the client

You can then access the client from 
```javascript
http://localhost:3000
```

##### Server
``` yarn server``` to run ONLY the server

You can then access the client from 
```javascript
http://localhost:9000/graghql
```
use the folowing query to get

*List of categories*
```javascript
query {
  categories
  }
```
*Random Joke*
```javascript
query {
  joke {
    value,
    url
  }
}
```

*Joke by Category*
```javascript
query {
  joke( category: "animals" {
    value,
    url
  }
}
```
