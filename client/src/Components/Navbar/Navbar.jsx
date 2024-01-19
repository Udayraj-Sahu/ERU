import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.scss";
import logo from "../../assets/LOGO.png";
import eru from "../../assets/ERU.png";
import whatslogo from "../../assets/whatsapp-icon.png";
function Navbar() {
	return (
		<>
			<div className="navbar container">
				<div className="left-side">
					<div className="website-name">ERU</div>
				</div>
				<div className="centre">
					<div className="logo-container">
						<div className="logo">
							<img src={logo} alt="LOGO" />
						</div>
						<div className="eru">
							<img src={eru} alt="" />
						</div>
					</div>
				</div>
				<div className="right-side">
					<div className="meun">
						<ul>
							{/* <NavLink to="/">
								<li>Home</li>
							</NavLink>

							<NavLink to="/about">
								<li>About Us </li>
							</NavLink>
							<NavLink to="/contact">
								<li>Contact Us</li>
							</NavLink>
							<NavLink to="/work">
								<li>Work With Us</li>
							</NavLink> */}
							<li>Home</li>
							<li>About Us </li>
							<li>Contact Us</li>
							<li>Work With Us</li>
						</ul>
					</div>
				</div>
				<div className="whatsapp-logo">
					<a
						href="https://wa.me/917440594711"
						className="whatsapp-float"
						target="blank">
						<img src={whatslogo} alt="" />
					</a>
				</div>
			</div>
		</>
	);
}

export default Navbar;
