const PORT = process.env.PORT || 4000
const app = require('./App.js/index.js')

app.listen(PORT, () => {
  console.log('server running at port 4000');

})
