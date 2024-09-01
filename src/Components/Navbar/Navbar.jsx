import React from 'react';
import './Navbar.scss';
import { useState, useEffect } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Nav = () =>{
	const [showMenu, setShowMenu] = useState(true);
	const [showClose, setShowClose] = useState(false);

	const showNavbar = () => {
		setShowMenu(prevShowMenu => !prevShowMenu);
		setShowClose(prevshowClose => !prevshowClose);
	};
	
	useEffect(() => {
		const updateShowMenu = () => {
			setShowMenu(window.innerWidth >= 1024);
		};

		updateShowMenu();
		window.addEventListener("resize", updateShowMenu);
		return () => {
			window.removeEventListener("resize", updateShowMenu);
		};
	}, []);


	const toHome = () => {
		window.scrollTo(0, 0);
		if (window.innerWidth <= 1024) {
			showNavbar();
		}
	};
	const toabout = () => {
		if (window.innerWidth <= 1024) {
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 800 - window.pageYOffset,
				behavior: "smooth",
			});
			showNavbar();
		} else {
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 520 - window.pageYOffset,
				behavior: "smooth",
			});
		}
	};
	const toproject = () => {
		if (window.innerWidth <= 1024) {
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 1600 - window.pageYOffset,
				behavior: "smooth",
			});
			showNavbar();
		} else {
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 1200 - window.pageYOffset,
				behavior: "smooth",
			});
		}
	};

	const tocontact = () => {
		if (window.innerWidth <= 1024) {
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 3140 - window.pageYOffset,
				behavior: "smooth",
			});
			showNavbar();
		} else {
			window.scrollTo(0, 0);
			window.scrollTo({
				top: 2500 - window.pageYOffset,
				behavior: "smooth",
			});
		}
	};
  
  return (
		<div className="nav">
			<div className="Navbar">
				<div className="left">
					<h1>Vipin Negi</h1>
				</div>
				<div className="right">
					{showMenu && (
						<ul>
							<li onClick={toHome}>Home</li>
							<li onClick={toabout}>About</li>
							<li onClick={toproject}>Project</li>
						  <li onClick={tocontact}>Contact</li>
						  {showClose && (
							  <li onClick={showNavbar}>Close</li>
						  )}
						</ul>
					)}
					{!showMenu && (
						<div className="icon">
							<GiHamburgerMenu  className='burger' onClick={showNavbar} />
						</div>
					)}
				</div>
			</div>
		</div>
  );
}
export default Nav;