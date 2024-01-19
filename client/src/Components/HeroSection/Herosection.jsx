import React from "react";
import img from "../../assets/Nature.png";
import '../HeroSection/HeroSection.scss'
function Herosection() {
	return (
		<>
			<div className="container">
				<div className="hero-section">
					<img src={img} alt="Logo" />
					<span className="text-on-img">
						A LEGACY OF 
					</span>
					<span className="text-on-img2">EXCELLENCE AND IMPACT</span>
				</div>
                <div className="text">
				<span>10K COMMUNITY OF STUDENT</span>
				<span>7+ CITIES</span>
				</div>
		          
			</div>
		</>
	);
}

export default Herosection;
