const express = require('express')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/views'))

app.get('/', (req, res) => {
	
		res.render('index')
})
app.get('/form', (req, res) => {
	res.render('form')
})

app.listen(port, () => {
	console.log('Server is running at port ' +port)
})
