import React from 'react';
import './About.scss';
import Img from '../../assets/aboutimg.jpg';
import location from '../../assets/location.png';
export default function About() {
  return (
		<div className="About">
			<div className="content">
				<div className="img">
					<img src={Img} alt="oops,Something went wrong!" />
				</div>
				<div className="about-me">
					<span>ABOUT ME</span>
					<div style={{display:'flex'}}>
						<h2>
							A dedicated Front-end Developer based in
							Rishikesh,Uttarakhand
						</h2>
						<img src={location} alt="" />
					</div>

					<p>
						As a junior Front-End Developer, I possess an impressive
						arsenal of skills in HTML, CSS, JavaScript, React and
						SCSS. I excel in designing and maintianing responsive
						website that offer a smooth user experience. My
						experties lies in crafting dynamic, engaging interfaces
						through writing clean and optimized code and utilizing
						cutting-edge development tools and techniques. I am also
						a team player who thrives in collabriting with crosss
						functional teams to produce outstanding web
						applications.
					</p>
				</div>
			</div>
		</div>
  );
}
