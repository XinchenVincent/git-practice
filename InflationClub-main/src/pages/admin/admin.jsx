import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/navBar/navBar";
import "./admin.css";
import Profile from "../../pages/profile/profile";
import Verify from "../../pages/verify/verify";
import Dapps from "../../pages/dapps/dapps";
import Campaign from "../../pages/campaign/campaign";
import Swap from "../../pages/swap/swap";

export default class Admin extends Component {
	render() {
		return (
			<div>
				<div className="header">
					<NavBar />
				</div>
				<div className="left-nav">
					<Link className="left-route" to="/admin/profile">
						Profile
					</Link>
					<Link className="left-route" to="/admin/verify">
						Verify
					</Link>
					<Link className="left-route" to="/admin/dapps">
						Dapps
					</Link>
					<Link className="left-route" to="/admin/campaign">
						Campaign
					</Link>
					<Link className="left-route" to="/admin/swap">
						Swap
					</Link>
				</div>
				<div className="right-content">
					<Routes>
						<Route path="/profile" element={<Profile />} />
						<Route path="/verify" element={<Verify />} />
						<Route path="/dapps" element={<Dapps />} />
						<Route path="/campaign" element={<Campaign />} />
						<Route path="/swap" element={<Swap />} />
					</Routes>
				</div>
			</div>
		);
	}
}
