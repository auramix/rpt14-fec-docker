const app = require('./index.js');
var port = process.env.PORT || 8081

app.listen(port, () => {
  console.log(`Now listening on ${port}`)
});