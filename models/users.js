module.exports = {
  users_profiles: {
    schema: {
      id_user_profile: { type: "int", ai: true },
      user_profile: { type: "string", length: 30 },
      created: { type: "timestamp", default: "CURRENT_TIMESTAMP" },
      updated: {
        type: "timestamp",
        default: "CURRENT_TIMESTAMP",
        dbControl: true,
        onUpdate: true,
        out: false,
      },
    },
    indexes: { keys: "id_user_profile" },
    globalWhere: "",
    globalOrder: "",
    relations: {},
    seeding: [
      [1, "admin"],
      [2, "user"],
    ],
  },

  users: {
    schema: {
      id_user: { type: "int", ai: true },
      id_user_profile: { type: "int" },
      email: { type: "string", length: 30 },
      password: { type: "string", length: 45, out: false, onInput: "md5" },
      name: { type: "string", length: 30 },
      active: { type: "boolean", default: true },
      created: {
        type: "timestamp",
        default: "CURRENT_TIMESTAMP",
        dbControl: true,
        out: false,
      },
      updated: {
        type: "timestamp",
        default: "CURRENT_TIMESTAMP",
        dbControl: true,
        onUpdate: true,
        out: false,
      },
    },
    indexes: { keys: "id_user", unique: "email" },
    globalWhere: "",
    globalOrder: "",
    relations: { id_user_profile: "users_profiles.id_user_profile CASCATE" },
    seeding: [
      [1, 1, "admin@beejs.org", "pass123", "Administrator"],
      [2, 2, "user@beejs.org", "pass123", "User"],
    ],
  },
};
