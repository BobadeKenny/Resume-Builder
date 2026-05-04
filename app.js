const express = require('express')

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

app.get('/resume', (req, res) => {
	return res.redirect('/form')
})

app.post('/resume', (req, res) => {
	const data = {
		fullName: req.body.fullName?.trim() || '',
		jobTitle: req.body.jobTitle?.trim() || '',
		email: req.body.email?.trim() || '',
		phone: req.body.phone?.trim() || '',
		location: req.body.location?.trim() || '',
		summary: req.body.summary?.trim() || '',
		skills: req.body.skills?.trim() || '',
		experienceRole: req.body.experienceRole?.trim() || '',
		experienceCompany: req.body.experienceCompany?.trim() || '',
		experienceDuration: req.body.experienceDuration?.trim() || '',
		experienceDetails: req.body.experienceDetails?.trim() || '',
		educationSchool: req.body.educationSchool?.trim() || '',
		educationDegree: req.body.educationDegree?.trim() || '',
		educationYear: req.body.educationYear?.trim() || ''
	}

	if (!data.fullName || !data.email || !data.jobTitle) {
		return res.status(400).render('form', {
			error: 'Please fill in full name, professional title, and email.',
			data
		})
	}

	return res.render('resume', { data })
})

app.listen(port, () => {
	console.log('Server is running at port ' + port)
})
