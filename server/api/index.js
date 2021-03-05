const express = require('express')
const router = express.Router()
require('./routes/standup')(router)
module.exports = router