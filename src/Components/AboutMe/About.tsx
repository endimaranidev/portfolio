import "./About.css";
import profile from "../../assets/foto.jpg";

const About = () => {
	return (
		<section className="about">
			<h2>Sobre Mim</h2>
			<img src="" alt="" />
			<div className="about-sections">
				<div className="about-left">
					<img src={profile} alt="" />
				</div>
				<div className="about-right">
					<div className="about-p">
						<p>
							Estou me dedicando a me tornar um Desenvolvedor Front-End,
							mergulhando de cabeça em ferramentas como React, TypeScript e
							Next.js para trazer ideias à vida e transformar linhas de código
							em experiências incríveis.
						</p>

						<p>
							Estou sempre aberto a novas ideias e colaborações, e acredito no
							poder da tecnologia para transformar o mundo!
						</p>

						<p>
							Sinta-se à vontade para explorar meus projetos e, quem sabe, a
							gente não cria algo incrível juntos?
						</p>
					</div>
					<div className="about-skills">
						<div className="about-skill">
							<p>HTML & CSS</p>		
              <span style={{width: "60%"}}>60%</span>
						</div>
						<div className="about-skill">
							<p>JavaScript</p>
							<span style={{ width: "40%" }}>40%</span>
						</div>
						<div className="about-skill">
							<p>TypeScript</p>
							<span style={{ width: "30%" }}> 30%</span>
						</div>
						<div className="about-skill">
							<p>React JS</p>
							<span style={{ width: "30%" }}>30%</span>
						</div>
						<div className="about-skill">
							<p>Next JS</p>
							<span style={{ width: "10%" }}>10%</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
