import Website from "./Website/Website";
import Footer from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import Work from "./Pages/Work/Work";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
function App() {
	return (
		<div>
			<Navbar />
			<Website />
			{/* <Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work" element={<Work />} />
				<Route path="/contact" element={<Contact />} />
				<Route path="/about" element={<About />} />
			</Routes> */}
			<Footer />
		</div>
	);
}

export default App;
