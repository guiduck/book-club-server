# book-club-server

Node RESTful API for the [book-club-client](https://github.com/guiduck/book-club), built with **express**, **mongoose** and **typescript**.

Provides a server to organize your reading list.

## Usage

Install dependencies:
```sh
yarn (or npm i)
```
Start the services:
```sh
yarn dev (or yarn build)
```

just make sure to have your package.json as it follows:
```sh
"scripts": {
    "dev": "nodemon src/server.ts",
    "build": "sucrase ./src -d ./dist --transforms typescript,imports"
  }
```
aswell as your nodemon file with:
```sh
"watch": ["src"],
    "ext": "ts",
    "execMap": {
        "ts": "sucrase-node src/server.ts"
    }
```

## Project Structure

* `src/controllers` follows the resource.controller name convention
* `src/schemas` follows the resource.schemas name convention
* `src/routes.ts` basic routing
* `src/server.ts` listening to port (3333)

## Commands

```sh
yarn build # Build production ready dist folder
yarn dev # Start server in dev mode
yarn lint # Lint project (eslint)
```
## Endpoints
   - BookController
      - GET /books
      - POST /books
         - Payload
         ```json
            {
               title: String,
               description: String,
               date: String,
               genre: String,
            }
      - DELETE /books/:id
      
