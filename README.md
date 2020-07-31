# Bud-Get

Full stack web app made with Node, Express, MongoDB, Mongoose, React, Material UI, ChartJs that aims to track budget and give analytical insights to better manage your expenses.

## Setting up backend

Install backend dependencies

```
  npm i
```

You will need to create a `defualt.json` file in `config` folder and insert

```json
  {
    "mongoURI": <your mongoDB uri>,
    "jwtSecret": "secret"
  }
```

To only run backend server

```
  npm run server
```

## Setting up frontend

Install frontend dependencies

```
  npm run clientinstall
```

## Run frontend & backend at the time

```
  npm run dev
```
