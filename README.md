# server-dash

A customizable dashboard to monitor your Linux server.

Base application / template taken from https://github.com/green-arrow/ember-sails

## Getting Started

Clone the application

```
git clone git@github.com:green-arrow/server-dash.git
```

Install dependencies

```
cd server-dash
npm install
bower install
```

Run the application (by default this will be located at ``http://localhost:1337/``)

NOTE: It is important to use the following command. ``app.js`` has been modified to
run a setup script that auto-generates necessary database records.

```
node app.js
```