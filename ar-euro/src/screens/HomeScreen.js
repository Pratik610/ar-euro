import React from 'react'
import video from '../videos/2.m4v'
const HomeScreen = () => {
	return (
		<div
			className='p-0 main-home position-relative'
			style={{ width: '100%', height: '100vh' }}>
			<video
				className='img-fluid  p-0 m-0'
				src={video}
				loop
				autoPlay
				muted></video>
			<div className='heading-box'>
				<div className='w-75 '>
					<h3 className='text-center text-light'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</h3>
					<a
						href='/info'
						className='d-block w-25 mt-4 text-center  mx-auto get-started'>
						Get Started
					</a>
				</div>
			</div>
		</div>
	)
}

export default HomeScreen
