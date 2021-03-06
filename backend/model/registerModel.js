import mongoose from 'mongoose'

const registerSchema = mongoose.Schema(
	{
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		mobileNumber: {
			type: Number,
		},
		companyName: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
)

const Register = mongoose.model('Register', registerSchema)

export default Register
