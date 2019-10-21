// Update with your config settings.
require("dotenv").config();
const DBCONNECT =
  process.env.DBCONNECT || "postgres://postgres@localhost:5432/postgres";

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./data/dev.sqlite3"
    },
    migrations: {
      directory: "./data/migrations/dev"
    },
    seeds: {
      directory: "./data/seeds/dev"
    }
  },
  staging: {
    client: "pg",
    connection: DBCONNECT,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations/staging"
    },
    seeds: {
      directory: "./data/seeds/staging"
    }
  },

  production: {
    client: "pg",
    connection: DBCONNECT,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations/production"
    },
    seeds: {
      directory: "./data/seeds/production"
    },
    //debug:true,
  }
};
