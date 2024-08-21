const bee = require("@bee.js/node");
const model = "users";
const pk = "IDUser";

module.exports[model] = {
  find: async function (req, res) {
    let id = req.params.id;
    let rel = req.query.rel;

    res = await bee.hive(req, res, model).find(id);

    res.response();
  },

  get: async function (req, res) {
    let rel = req.query.rel;

    res = bee.hive(req, res);

    await bee
      .hive(req, res, "products")
      .where("id_product = ? AND   product_name = ?")
      .binds(1)
      .orderBy("created desc")
      .limit(0, 10)
      .get();

    await bee.hive(req, res, model).get();

    res.response();
  },

  post: async function (req, res) {
    let data = req.body;

    res = await bee.hive(req, res, model).insert(data);

    res.response();
  },

  put: async function (req, res) {
    let data = req.body;
    let id = req.params.id;

    res = await bee.hive(req, res, model).update(data, id);

    res.response();
  },

  search: async function (req, res) {
    let search = req.params.search;

    res = await bee.hive(req, res, model).search(search, "Name, Email").get();

    res.response();
  },

  delete: async function (req, res) {
    let id = req.params.id;

    res = await bee.hive(req, res, model).delete(id);

    res.response();
  },

  login: async function (req, res) {
    let email = req.body.Email;
    let password = bee.tools.md5(req.body.Password);

    res = await bee
      .hive(req, res, model)
      .where(`Email = ? AND Password = ?`)
      .binds(email, password)
      .find()
      .then((bee) => bee.token("jwt").createToken(bee.data));

    res.counters.users
      ? res.response()
      : bee.security.failLogin(req, res, email);
  },

  logout: async function (req, res) {
    res.response(null, "LOGOUT");
  },
};

/*
const msg = (`Email = ? AND Password <= ?`)

const mapper = {
    '=': '$eq',
    '<=': '$lte',
    '>=': '$gte'
}

console.log(msg.split(' AND ')
    .map(item => {
        const array = item.split(' ')
        return { key: array[0], operator: mapper[array[1]], value: array[2]  }
    }))
*/
