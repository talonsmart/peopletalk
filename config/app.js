var dbHost = process.env.dbHost || "localhost";
module.exports = {
  name: "peopletalk",
  title: "peopletalk",
  commands: {
    package:
      "electron-packager electron.js peopletalk --electronVersion=2.0.12 --overwrite --icon=/public/images/logo/logo.png --prune=true --out=release",
    build: ""
  },
  http: {
    host: "localhost",
    port: 8000
  },
  author: "Talon Smart",
  version: "2.0.0",
  db: {
    connectionUri: "mongodb://" + dbHost + ":27017/peopletalk",
    params: {},
    collections: ["moment", "user", "feeling", "ask"]
  }
};
