import React from 'react'
import video from '../videos/7.mp4'
const HomeScreen = () => {
	return (
		<div
			className='p-0 main-home d-none d-lg-block position-relative'
			style={{ width: '100%', height: '100vh' }}>
			<video
				className='img-fluid w-100  p-0 m-0'
				src={video}
				loop
				autoPlay
				muted></video>
			<div className='heading-box d-flex align-items-center justify-content-center h-100 '>
				<div className=''>
					<h3 className='text-center text-light'>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</h3>
					<a
						href='/form'
						style={{border:'1px solid #2f3631'}}
						className='d-block w-25 mt-4 text-center  mx-auto get-started'>
						Enter The World
					</a>
				</div>
					
				
			</div>
		</div>
	)
}

export default HomeScreen
