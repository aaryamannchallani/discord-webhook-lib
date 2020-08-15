require('dotenv').config()
const { sendMessage } = require('./utils/sendMessage')

const ds = new sendMessage('WEBHOOK_URL')

ds.setName()
ds.setAvatar()
ds.sendMessage()