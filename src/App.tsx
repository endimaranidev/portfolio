import "./App.css";
import About from "./Components/AboutMe/About";
import Contact from "./Components/Contact/Contact";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";
import Works from "./Components/Works/Works";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<main>
					<Profile />
					<About />
					<Works />
					<Contact />
			</main>
		</>
	);
}

export default App;
