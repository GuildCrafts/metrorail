const NODE_ENV = process.env.NODE_ENV  || 'test'
console.log( 'NODE_ENV', NODE_ENV )
const pgp = require( 'pg-promise' )()
const connectionString = `postgres://${process.env.USER}@localhost:5432/metrorail-${NODE_ENV}`
const db = pgp( connectionString )

process.on('unhandledRejection', ( err, p ) => {
  throw err
})

module.exports = { db }
