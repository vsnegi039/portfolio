import "./Home.scss";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import html from "../../assets/html.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import sass from "../../assets/sass.png";
import location from "../../assets/location.png";
import React from "react";
export default function Home() {
	const text = [
		"R",
		"E",
		"A",
		"C",
		"T",
		"J",
		"S",
		" ",
		" ",
		"F",
		"R",
		"O",
		"N",
		"T",
		"-",
		"E",
		"N",
		"D",
		" ",
		" ",
		"D",
		"E",
		"V",
		"E",
		"L",
		"O",
		"P",
		"E",
		"R",
	];
	return (
		<div className="Home">
			<div className="content">
				<div className="info">
					<div className="left">
						<h1>Front-End React Developer</h1>
						<p>
							Hi, I'm Vipin Negi. A passionate Front-end React
							Developer based in Rishikesh, Uttarakhand.
							<img src={location} alt="" />
						</p>

						<div className="icons">
							<a
								href="https://github.com/vsnegi039"
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillGithub />
							</a>
							<a
								href="https://www.linkedin.com/in/vipin-negi-a160a4281/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<AiFillLinkedin />
							</a>
						</div>
					</div>
					<div className="container">
						<div className="right">
							<div className="profile"></div>
							<div className="text">
								<p>
									{text.map((char, i) => (
										<span
											style={{
												transform: `rotate(${
													i * 11.5
												}deg)`,
											}}
											key={i}
										>
											{char}
										</span>
									))}
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="stack">
					<div className="left">
						<span>Tech Stack</span>
						<div className="bar"></div>
					</div>
					<div className="right">
						<ul>
							<li className="html">
								<img src={html} alt="" />
							</li>
							<li className="css">
								<img src={css} alt="" />
							</li>
							<li className="js">
								<img src={js} alt="" />
							</li>
							<li className="react">
								<img src={react} alt="" />
							</li>
							<li className="sass">
								<img src={sass} alt="" />
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
