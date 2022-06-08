import React from 'react'
import bg from '../images/bg.png'
import image from '../images/6.jpg'
import logo from '../images/whitepng.png'

const FormScreen = () => {
	return (
		<div
			className='height-100 '
			style={{ backgroundImage: `url('${bg}')`, backgroundSize: 'cover' }}>
			<div className='d-flex align-items-center h-100'>
				<div className='w-50 mx-auto'>
					<div
						className='row main'
						style={{ height: '80vh', borderRadius: '10px' }}>
						<div
							// style={{
							// 	backgroundImage: `url('${image}')`,
							// 	backgroundSize: 'contain',
							// }}
							className='col-6 p-0 h-100 position-relative overflow-hidden'>
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
									style={{ width: '150px', zIndex: '99' }}
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
						<div className='col-6 p-4'>
							<h3 className='form-heading mb-4'>Registration Form</h3>
							<div className='mb-4'>
								<label>Full Name:</label>
								<input type='text' className='d-block inp-form' />
							</div>
							<div className='mb-4'>
								<label>Your Email:</label>
								<input type='text' className='d-block inp-form' />
							</div>
							<div className='mb-4'>
								<label>Mobile Number:</label>
								<input type='text' className='d-block inp-form' />
							</div>
							<div className='mb-4'>
								<label>Company Name:</label>
								<input type='text' className='d-block inp-form' />
							</div>
							<div className='mb-4 d-flex'>
								<input type='checkbox' className='mt-2' />
								<label className='d-inline mt-0 ms-2'>
									By signing up, you agree to the Terms and Conditions
								</label>
							</div>

							<div>
								<button type='submits' className='submit-btn'>
									Submit
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FormScreen
