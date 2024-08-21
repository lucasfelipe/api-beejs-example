module.exports = [
  //users
  { route: "/users", method: "get", controller: "users.get", free: true },
  { route: "/users/:id", method: "get", controller: "users.find" },
  { route: "/users", method: "post", controller: "users.post", free: true },
  { route: "/users", method: "put", controller: "users.put" },
  { route: "/users/:id", method: "delete", controller: "users.delete" },
  { route: "/users/logout", method: "post", controller: "users.logout" },
  {
    route: "/users/login",
    method: "post",
    controller: "users.login",
    free: true,
  },
];
