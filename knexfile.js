// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefaul: true,
    connection: {
      filename: './data/projects.db3'
    },
    migrations: {
      directory: './data/migrations.js'
    },
    seed: {
      directory: './data/seeds'
    },
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done);
      }
    }
  },

};
