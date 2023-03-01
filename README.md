# Welcome to PeopleTalk
PeopleTalk is a fully featured, open-source social networking platform made with Node.js and MongoDB. It also includes a basic Electron application as a desktop GUI.

## Tech
- Node
- Express
- ReactJS + Redux
- MongoDB + Mongoose
- Electron
- JavaScript and TypeScript

## Features
- Chat with your friends in realtime.
- Search for your other users.
- Sign in using local auth, Instagram or Google.
- All feeds divided into 3 categories
  - events \(location can be specified\)
  - moments \(personal post\)
  - thoughts \(tweets\)
- Like and comment on a feed.
- A full API for developers
- Change your profile pic, bio, etc.
- Electron application
- Follow a particular user and get notified for his/her activities.
- View other profiles.

And a lot more to be added soon...

## Setup
Just clone the repo, then install all the requirements.

```bash
$ git clone https://github.com/talonsmart/peopletalk.git
$ cd peopletalk
$ npm i
```

## Local Development
Before running, we need to add the Instgram and Google API Credentials to the project. Under the `config` directory of the repo, you will find `instagram.js` and `google.js`. We need to add the `<CLIENT_ID>`, `<CLIENT_SECRET>` and `<host>:<port>` with our own API credentials

```javascript
/** REPLACE YOUR API CREDENTIALS HERE **/
var in_client_id = 'XXXXXXXXXXXXXXXXXX', // <CLIENT_ID>
    in_client_secret = 'XXXXXXXXXXXXXXXXXXXX', // <CLIENT_SECRET>
```

Now Replace the `<host>` & `<port>` with the redirect uri specified in the [Instagram API Dashboard](https://www.instagram.com/developer) and [Google API Dashboard](https://developers.google.com). Default is `http://localhost:80/account/oauth`.

```javascript
var in_redirect_uri = "http://localhost:80/account/oauth/:service";
```

Finally start the MongoDB server in a seperate bash/pm2

```bash
$ mongodb
$ npm start
```

# NOTICE
PeopleTalk uses [mongoose](https://npmjs.org/package/mongoose) as an ORM for performing CRUD operations on MongoDB and [express.js](https://npmjs.com/package/express) for server-side HTTP routing.

<hr />
Created by [Talon Smart](https://github.com/talonsmart)
Licensed under MIT
