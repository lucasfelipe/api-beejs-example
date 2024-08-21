const bee = require("@bee.js/node");

const routes = bee.load("./routes");
const models = bee.load("./models");
const middlewares = bee.load("./middlewares");
const controllers = bee.load("./controllers");

module.exports = {
  name: "Bee.js API - DEMO",
  version: 1.0,
  ports: process.env.PORT || 1987.443,
  models,
  middlewares,
  controllers,
  routes,
  databases: {
    default: {
      type: "mysql",
      name: "luvas",
      user: "luvas",
      pass: "euDigoLuvas",
      host: "cloud.ahcom.com.br",
    },
    db1: {
      type: "mongodb",
      name: "beejs-demo",
      user: "user-demo",
      pass: "pass123",
      host: "cluster0.fhrqq.mongodb.net",
    },
    db2: {
      type: "mongodb",
      name: "beejs-demo",
      user: "user-demo",
      pass: "pass123",
      host: "cluster0.fhrqq.mongodb.net",
    },
  },
  jwt: {
    secret: "my-secret",
  },
};
