import React from "react";
import "./Works.css";
import projects_data from "../../assets/projects_data";

const Works = () => {
	return (
		<div className="my-projects">
			<div className="my-projects__title">
				<h1>Meus Projetos</h1>
			</div>
			<div className="my-projects__container">
				{projects_data.map((project, index) => (
					<div key={index} className="my-projects__item">
						<img src={project.proj_img} alt={project.alt} />
						<div className="my-projects__item__overlay">
							<p>{project.info}</p>
							<div className="my-projects__item__overlay__links">
								<a href={project.link_repo} target="_blank">
									Ver Repositório
								</a>
								<a href={project.link_demo} 
								   className={project.link_demo == "Indisponível" ? "link-disabled" : ""} 
								   target="_blank"> 
								   	{project.link_demo == "Indisponível"
										? "Indisponível"
										: "Ver Demonstração"}
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Works;
