module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/beermo'
  },
  test: {
    client: 'pg',
    connection: 'postgresql://localhost:5432/db_name'
  },
  production: {
    client: 'pg',
    connection: "postgres://wcueuscvkkrotd:4fff2468d15911ee8f090291b967b0240b052bb162e5c5dd42ff8569dc20bb1d@ec2-107-20-237-78.compute-1.amazonaws.com:5432/d6vra9hmilc44o"

  },
}
