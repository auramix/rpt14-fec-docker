const app = require('./index.js');


app.listen({
  host: 'localhost',
  port: 80
}, () => {
  console.log(`Now listening on ${process.env.PORT}`)
});