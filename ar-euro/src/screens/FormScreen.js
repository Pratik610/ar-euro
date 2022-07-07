import React, { useState } from 'react'
import bg from '../images/bg.png'
import '../form.css'
import image from '../images/6.jpg'
import logo from '../images/GREEN PNG.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormScreen = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [mobileNumber, setPhoneNumber] = useState('')
	const [companyName, setCompanyName] = useState('')
	const [loading, setLoading] = useState(false)

	const history = useNavigate()

	const register = async (e) => {
		e.preventDefault()
		setLoading(true)

		const { data } = await axios.post('/api/register', {
			name,
			email,
			mobileNumber,
			companyName,
		})

		if (data) {
			setLoading(false)
			history('/bikes')
		}
	}
	return (
		<div
			className='height-100 ' style={{backgroundColor:'#10b068'}}
		>
			{loading && (
				<div
					style={{ zIndex: '99' }}
					className='h-100 w-100 bg-dark position-absolute d-flex align-items-center justify-content-center'>
					<div>
						<div className='cube'>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
							<div></div>
						</div>{' '}
						<p className='text-center mt-4 percentage text-light text-bold'>
							0%
						</p>
					</div>
				</div>
			)}
			<div className='d-lg-flex align-items-center d-none  h-100'>
				<div className=' mx-auto' style={{width:'60%'}}>
					<div
						className='row main'
						style={{ height: '80vh', borderRadius: '10px' }}>
						<div className='col-5 p-0 h-100 position-relative overflow-hidden'>
							<img
								src={image}
								alt=''
								className=' position-absolute w-100 h-100 '
								style={{ zIndex: '' }}
							/>

							<div
								className='position-absolute w-100 '
								style={{ bottom: '2%' }}>
								<img
									src={logo}
									alt=''
									className='position-relative   mx-auto d-block mt-4 pt-1'
									style={{ width: '150px', zIndex: '98' }}
								/>
								<p
									className='ms-3  text-light text-center  me-3 '
									style={{ fontSize: '0.8em', fontWeight: '500' }}>
									Blending the future of EV with Augmented Reality
									{/* Connecting people to the future of urban commute through the
									wonders of Augmented Reality (AR) */}
								</p>
							</div>
						</div>
						<div className='col-7 ps-4 pe-5 ' style={{paddingTop:'5em'}}>
							<form onSubmit={register}>
								<h3 className='form-heading mb-4'>Registration Form</h3>

								<div class="form-floating mb-3 mt-5">
 										 <input type="text" class="form-control" value={name}
										onChange={(e) => setName(e.target.value)} id="floatingInput" placeholder="name@example.com"/>
 										 <label for="floatingInput">Full Name</label>
								</div>
								<div class="form-floating mb-3">
 										 <input type="email"
										 value={email}
										 onChange={(e) => setEmail(e.target.value)}
										 class="form-control" id="floatingInput" placeholder="name@example.com"/>
 										 <label for="floatingInput">Email address</label>
								</div>	<div class="form-floating mb-3">
 										 <input type="number" class="form-control" id="floatingInput" placeholder="name@example.com"/>
 										 <label for="floatingInput">Phone Number</label>
								</div>	<div class="form-floating mb-3">
 										 <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com"/>
 										 <label for="floatingInput">Company Name</label>
								</div>

								{/* <div className='mb-4'>
									<label>Full Name:</label>
									<input
										type='text'
										value={name}
										onChange={(e) => setName(e.target.value)}
										className='d-block inp-form'
									/>
								</div>
								<div className='mb-4'>
									<label>Your Email:</label>
									<input
										type='email'
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className='d-block inp-form'
									/>
								</div>
								<div className='mb-4'>
									<label>Mobile Number:</label>
									<input
										type='number'
										value={mobileNumber}
										onChange={(e) => setPhoneNumber(e.target.value)}
										className='d-block inp-form'
									/>
								</div>
								<div className='mb-4'>
									<label>Company Name:</label>
									<input
										type='text'
										value={companyName}
										onChange={(e) => setCompanyName(e.target.value)}
										className='d-block inp-form'
									/>
								</div> */}
								

								<div className='mt-5'>
									<button type='submit' className='submit-btn'>
										Submit
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			<div className=' mobile-form bg-light  d-lg-none' style={{height:'100vh',paddingTop:'20%'}}>
				<img
					src={logo}
					className='img-fluid d-block mx-auto pt-4'
					width={180}
					alt=''
				/>
				<p className='text-center text-light text-dark ' style={{ fontSize: '0.8em' }}>
					Blending the future of EV with Augmented Reality
				</p>
				<form onSubmit={register} className='p-3'>
					<div class='form-floating mt-2 mb-4'>
						<input
							autoComplete='off'
							type='text'
							class='form-control'
							id='floatingInput'
							value={name}
							
							onChange={(e) => setName(e.target.value)}
							placeholder='name@example.com'
						/>
						<label for='floatingInput' className=''>
							Full Name
						</label>
					</div>
					<div class='form-floating mb-4'>
						<div></div>
						<input
							autoComplete='off'
							type='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							class='form-control'
							id='floatingInput'
							placeholder='name@example.com'
						/>
						<label for='floatingInput' className=''>
							Email address
						</label>
					</div>
					<div class='form-floating mb-4'>
						<input
							autoComplete='off'
							type='number'
							class='form-control'
							value={mobileNumber}
							onChange={(e) => setPhoneNumber(e.target.value)}
							id='floatingPassword'
							placeholder='Password'
						/>
						<label for='floatingPassword'>Mobile Number</label>
					</div>
					<div class='form-floating mb-4'>
						<input
							autoComplete='off'
							type='text'
							value={companyName}
							onChange={(e) => setCompanyName(e.target.value)}
							class='form-control'
							id='floatingPassword'
							placeholder='Password'
						/>
						<label for='floatingPassword'>Company Name</label>
					</div>
					<button className='btn btn-submit'>Submit</button>
				</form>
			</div>
		</div>
	)
}

export default FormScreen
