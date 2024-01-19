import React from "react";
import Whyerulogo from "../WhyeruLogo/Whyerulogo";
import "../WhyERU/Whyeru.scss";
import img1 from "../../assets/brokerage.png";
import img2 from "../../assets/healthcare.png";
import img3 from "../../assets/psychology.png";
import img4 from "../../assets/conversation.png";
import img5 from "../../assets/balanced-diet.png";
import img6 from "../../assets/guard.png";
import img7 from "../../assets/first-aid-kit.png";
import img8 from "../../assets/standard-of-quality.png";

function Whyeru() {
	return (
		<>
			<div className="why-container">
				<div className="heading">WHY CHOOSE ERU IN KOTA</div>

				<div className="container-logo-text">
					<Whyerulogo logo={img1} name="No Brokerage" />
					<Whyerulogo logo={img3} name="Mental Support" />
					<Whyerulogo logo={img2} name="Health Care" />
					<Whyerulogo logo={img8} name="Standard Living" />
					<Whyerulogo logo={img5} name="Hygenic Food" />
					<Whyerulogo logo={img7} name="Medical Facilities" />
					<Whyerulogo logo={img4} name="Mentorship" />
					<Whyerulogo logo={img6} name="Security" />
				</div>
			</div>
		</>
	);
}

export default Whyeru;
