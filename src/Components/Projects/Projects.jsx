import React from "react";
import SingleProject from "./SingleProject/SingleProject";
import SingleProject2 from "./SingleProject/SingleProduct2";
import "./Projects.scss";
import image1 from "../../assets/project1.png";
import image2 from "../../assets/project2.png";
import image3 from "../../assets/project3.png";
import puzzle from '../../assets/puzzle.png';

const name1 = "CAR RENTAL";
const name2 = "Ecommerce";
const name3 = "Codepen clone";
const des1 =
	"A car rental website is a platform that allows users to rent cars. The website provides an interface for searching, comparing, and reserving cars.";
const des2 =
	"With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the product they need";
const des3 =
	"Codpen clone created using React and Materail UI with a clean design and focus and user experience where user can write and compile HTML, CSS and Javascript code very easily";
const codelink1 = "https://github.com/vsnegi039/car-rental";
const codelink3 = "https://github.com/vsnegi039/codepen-clone";
const live1 = "https://vsnegi039.github.io/car-rental/";
const live2 = "https://smart-store-app.netlify.app/";
const live3 = "https://vsnegi039.github.io/codepen-clone/";

export default function Projects() {
	const tech1 = ["React", "SCSS"]; 
	const tech2 = ["React", "SCSS", "STRIPE", "STARPI"]; 
	const tech3 = ["React", "Material UI"];
	return (
		<div className="Pro">
			<div className="con">
				<span className="neela">PORTFOLIO</span>
				<h3>Each project is a unique piece of development</h3>
				<img src={puzzle} className="lu" alt="" />
				<SingleProject
					image1={image1}
					name={name1}
					des={des1}
					tech={tech1}
					link={codelink1}
					live={live1}
				/>
				<SingleProject2
					image1={image2}
					name={name2}
					des={des2}
					tech={tech2}
					link={live2}
				/>
				<SingleProject
					image1={image3}
					name={name3}
					des={des3}
					tech={tech3}
					link={codelink3}
					live={live3}
				/>
			</div>
		</div>
	);
}
