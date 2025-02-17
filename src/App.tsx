import "./App.css";
import About from "./Components/AboutMe/About";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profile/Profile";

function App() {
	return (
		<>
			<header>
				<Navbar />
			</header>

			<main>
					<Profile />
					<About />
			</main>
		</>
	);
}

export default App;
