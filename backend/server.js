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
		from: 'tech@emotorad.com',
		to: reciver,
		subject: 'Thank you for visiting our booth',
		html:`<b>Dear ${name}</b> <p>EMotorad extends a warm welcome to you. Thank you for visiting our booth and sharing interest in our vision. It would be great if we could connect and take this conversation further. </p> <p>EMotorad is an electric vehicle (EV) company that strives to help top brands from across the globe bring futuristic e-bikes to adventure seekers, daily commuters, or casual riders all over the world. We believe that ‘electric’ is the new future of mobility. We bring EV to consumers and deliver the product tailored to their requirements at a price they can afford; we like to call affordable luxury.
		</p> <p>Let's keep taking strides for a more affordable and greener future.
		</p> <p>Thank You, 
		</p><p>Warm Regards,</p><p>EM Team 
		</p>`,
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
