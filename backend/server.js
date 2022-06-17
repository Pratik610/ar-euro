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
			sendMail(email)
		} else {
			res.status(400)
			throw new Error('invalid User Data')
		}
	})
)

const sendMail = (reciver) => {
	var transporter = nodemailer.createTransport({
		service: 'gmail',
		host: 'smtp.gmail.com',
		sendMail: true,
		port: 587,
		auth: {
			user: 'tech@emotorad.com',
			pass: process.env.PASS,
		},
	})

	var mailOptions = {
		from: 'tech@emotorad.com',
		to: reciver,
		subject: 'Sending Email using Node.js',
		text: 'That was easy!',
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
