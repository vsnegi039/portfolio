import React from "react";
import "./SingleProject.scss";
import { AiOutlineGithub } from "react-icons/ai";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function SingleProject({ image1, name, des, tech, link, live }) {
	return (
		<div className="singleProduct">
			<div className="content rev">
				<div className="left">
					<img src={image1} alt="" />
				</div>
				<div className="right">
					<span>{name}</span>
					<p>{des}</p>
					<div className="technologies">
						<ul>
							{tech.map((technology, index) => (
								<li key={index}>{technology}</li>
							))}
						</ul>
					</div>
					<div className="links">
						<div className="hover">
							<a
								href={link}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span>Code</span>
								<span className="ss">
									<AiOutlineGithub />
								</span>
							</a>
						</div>
						<div className="hover">
							<a
								href={live}
								target="_blank"
								rel="noopener noreferrer"
							>
								<span>Live Demo</span>
								<span className="ss">
									<BsBoxArrowUpRight
										style={{
											fontSize: "15pt",
											position: "absolute",
											marginTop: "7px",
											marginLeft: "3px",
										}}
									/>
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
