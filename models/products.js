module.exports = {
  products: {
    database: () => "db1", // dynamic database based on IP and Country
    schema: {
      id_product: { type: "int", ai: true },
      product_name: { type: "string", length: 30 },
      created: { type: "timestamp", default: "CURRENT_TIMESTAMP" },
      updated: {
        type: "timestamp",
        default: "CURRENT_TIMESTAMP",
        dbControl: true,
        onUpdate: true,
        out: false,
      },
    },
    indexes: { keys: "id_product" },
  },
};
