import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import asyncHandler from 'express-async-handler'
import Register from './model/registerModel.js'

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
			mobileNumber,
			companyName,
		})
		if (registerUser) {
			res.status(201)
		} else {
			res.status(400)
			throw new Error('invalid User Data')
		}
	})
)

app.listen(
	process.env.PORT,
	console.log(`Server Running On PORT ${process.env.PORT}`)
)
