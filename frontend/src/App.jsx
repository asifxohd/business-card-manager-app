import RegistrationForm from "./Pages/Register/register"
import LoginForm from "./Pages/Login/login"
import Dashboard from "./Pages/Dashboard/dashboard"
import BusinessInformation from "./Pages/BusinessInformation/businessInfo"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LoginForm/>} />
					<Route path="sign-up/" element={<RegistrationForm/>} />
					<Route path="dashboard/" element={<Dashboard/>} />
					<Route path="manage-cards/" element={<BusinessInformation />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App
