import React from "react";
import "./Contact.scss";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillMail } from "react-icons/ai";
import { BiSolidHandDown } from "react-icons/bi";
export default function Contact() {
	return (
		<div className="contact">
			<div className="contactinfo">
				<span>CONTACT</span>
				<h2>
					Don't be shy! Hit me up!
					<BiSolidHandDown className="indi" />
				</h2>
				<div className="methods">
					<div className="row">
						<FaMapLocationDot className="ll" />
						<div className="detail">
							<div className="bold">Location</div>
							<div style={{ marginTop: "5px" }}>
								Rishikesh, Uttarakhand
							</div>
						</div>
					</div>
					<div className="row">
						<AiFillMail className="ll" />
						<div className="detail">
							<div className="bold">Mail</div>
							<div style={{ marginTop: "5px" }}>
								vipinnegi039@gmail.com
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
