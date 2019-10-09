const express = require('express')
const path = require('path')

const cors      = require('cors')
const bodyparser= require('body-parser')
const moment    = require('moment')
const bearerToken  = require('express-bearer-token')

const port = process.env.PORT || 5000

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .use(cors())
//   .use(bearerToken())
//   .use(bodyparser.json())
//   .use(bodyparser.urlencoded({extended: false}))
//   .use(express.static('public'))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.send(`<h1>selamat datang</h1>`))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))
const app = express()
app.use(cors())
app.use(bearerToken())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: false}))
app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.status(200).send(`
    <h1>Selamat datang di <b>Qlas rest-api</b></h1>
    `)
})


  const { 
    usersRouter, 
    rolesRouter, 
    kelasRouter, 
    cartRouter, 
    paketRouter, 
    transactionRouter,
    konfirmasiRouter,
    langgananRouter,
    modulRouter,
    belajarRouter,
    kelaskuRouter,
    midtrans
} = require('./routers')

app.use('/user', usersRouter)
app.use('/role', rolesRouter)
app.use('/kelas', kelasRouter)
app.use('/cart', cartRouter)
app.use('/paket', paketRouter)
app.use('/transaction', transactionRouter)
app.use('/konfirmasi', konfirmasiRouter)
app.use('/langganan', langgananRouter)
app.use('/modul', modulRouter)
app.use('/belajar', belajarRouter)
app.use('/kelasku', kelaskuRouter)
app.use('/midtrans', midtrans)

app.listen(port, ()=> console.log(`Api aktif diport ${port}`))
var now = moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
var test = moment().add(30, 'day').format("YYYY-MM-DD h:mm:ss")
console.log(test)
console.log(now) 