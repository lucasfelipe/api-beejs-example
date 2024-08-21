const bee     = require('@bee.js/node')
const configs = require('./configs')

const app = bee.create(configs)

app.use('/api', bee.routes())
app.get('/api', bee.status)

bee.start(app)