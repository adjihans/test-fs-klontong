# TEST FS Klontong

# Client Section

## Client Pre-requisite

In order to run the client you need to have:

- Node.js 18.17

## Pre Run Setup

Below are the steps need to be done (orderly) to setup the client

installing the libs using -->
`npm install`

## Run The Client

run the client (make sure to run inside the foler "client" when initiating the command) using -->
`npm start`

# Server Section

## Server Pre-requisite

In order to run the server you need to have:

- Node.js 18.17
- Postgresql 16

## Pre Run Setup

Below are the steps need to be done (orderly) to setup the server

installing the libs using -->
`npm install`

create db in local postgresql server using -->
`npx sequelize-cli db:create`

migrate db in local postgresql server using -->
`npx sequelize-cli db:migrate`

seeding db data using -->
`npx sequelize-cli db:seed:all`

## Run the server

run the server (make sure to run inside the foler "server" when initiating the command) using -->
`npm run start`
