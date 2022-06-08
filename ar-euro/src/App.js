import '@google/model-viewer'
import HomeScreen from './screens/HomeScreen'
import FormScreen from './screens/FormScreen'
import BikeScreen from './screens/BikeScreen'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path='/' element={<HomeScreen />} />
					<Route path='/form' element={<FormScreen />} />
					<Route path='/bikes' element={<BikeScreen />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
