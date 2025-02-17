import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="navbar">
			<ul className="nav-menu">
				<li>Início</li>
				<li>Sobre Mim</li>
				<li>Serviços</li>
				<li>Portfolio</li>
				<li>Contato</li>
			</ul>
			<div className="nav-button">Entre em Contato</div>
		</nav>
	);
};

export default Navbar;
