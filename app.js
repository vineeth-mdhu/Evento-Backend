const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const createPost = require('./routes/create-post')
const createUser = require('./routes/create-user')
const createOrg = require('./routes/create-org')
const follow = require('./routes/follow')
const unfollow = require('./routes/unfollow')
const like = require('./routes/like')
const unlike = require('./routes/unlike')
const comment = require('./routes/comment')
const fetch = require('./routes/fetch')
const register = require('./routes/register')
const createEvent = require('./routes/create-event')
const explore = require('./routes/recommendation')
const calender=require('./routes/calender')
const myCalender=require('./routes/my-calender')
const app = express()
const port = 5000
dotenv.config()

app.use(bodyParser.json());

app.use('/create-post', createPost)

app.use('/create-user', createUser)

app.use('/create-org', createOrg)

app.use('/follow', follow)

app.use('/unfollow', unfollow)

app.use('/like', like)

app.use('/unlike', unlike)

app.use('/comment', comment)

app.use('/fetch',fetch)

app.use('/register',register)

app.use('/create-event',createEvent)

app.use('/explore',explore)

app.use('/calender',calender)

app.use('/my-calender',myCalender)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})