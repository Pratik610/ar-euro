import express from 'express'
import dotenv from 'dotenv'
import path from 'path'
import connectDB from './config/db.js'
import asyncHandler from 'express-async-handler'
import Register from './model/registerModel.js'
import nodemailer from 'nodemailer'

dotenv.config()
connectDB()

const app = express()

app.use(express.json())

app.post(
	'/api/register',
	asyncHandler(async (req, res) => {
		const { name, email, mobileNumber, companyName } = req.body
		const registerUser = await Register.create({
			name,
			email,
			mobileNumber: Number(mobileNumber),
			companyName,
		})
		if (registerUser) {
			res.status(201).json({ message: 'Created' })
			sendMail(email,name)
		} else {
			res.status(400)
			throw new Error('invalid User Data')
		}
	})
)

const sendMail = (reciver,name) => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		sendMail: true,
		port: 587,
		auth: {
			user: 'contactus@emotorad.com',
			pass: process.env.PASS,
		},
	})

	var mailOptions = {
		from: 'contactus@emotorad.com',
		to: reciver,
		cc:['rajib@emotorad.com','kunal@emotorad.com','lily@gdsebike.com','karan@emotorad.com','aditya.sujan@emotorad.com'],

		subject: 'Thank you for visiting our booth',
		html:`<b>Dear ${name}</b> <p>EMotorad extends a warm welcome to you. Thank you for visiting our booth (Hall 9, E18) and sharing your interest in our vision.</p>
		<p>EMotorad is an e-bike manufacturer from India, an EV company that strives to help top brands from across the globe bring futuristic e-bikes to adventure seekers, daily commuters, or casual riders all over the world.</p>
		<p>We believe in providing end-to-end solutions and hence provide complete assistance in terms of product support along with Shipping and supply chain solutions to legal antidumping solutions. We come with a professional experience of over a decade in Marketing, designing, branding, operations, and after-sales support.</p>
		<p>It would be great if we could connect and take this conversation further.</p>
		<p>Attached is our e-bike catalog for your reference</p>
		<div>Warm Regards!</div>
		<div>EM Team</div>
		`,
		attachments: [
		{
            filename:'EM_Highend_E-Bikes',
            path: 'EM_Highend_E-Bikes(Digital).pdf'
        },
		{
            filename:'EM_Midend_E-Bikes' ,
            path: 'EM_Midend_E-Bikes(Digital).pdf'
        }
	]
		
	}

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error)
		} else {
			console.log('Email sent: ' + info.response)
		}
	})
}

const __dirname = path.resolve()
app.use('/posters', express.static(path.join(__dirname, '/posters')))
if (process.env.ENVIRONMENT === 'production') {
	app.use(express.static(path.join(__dirname, '/ar-euro/build')))

	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'ar-euro', 'build', 'index.html'))
	)
}


app.listen(
	process.env.PORT,
	console.log(`Server Running On PORT ${process.env.PORT}`)
)
