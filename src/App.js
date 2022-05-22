import GlobalStyle from './globalStyles';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from "./pages/HomePage/Home";
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  	return (
		<Router>
			<GlobalStyle />
			<Routes>
				<Route path='/' element={<Home />} />
			</Routes>
		</Router>
  	);
}

export default App;