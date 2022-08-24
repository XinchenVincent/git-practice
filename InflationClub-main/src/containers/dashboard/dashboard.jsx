import React, { Component } from "react";
import {  Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "../../components/navbar/Navbar.jsx";
// import route
import Profile from "../../pages/profile/profile";
import Verify from "../../pages/verify/verify";
import Dapps from "../../pages/dapps/dapps";
import Campaign from "../../pages/campaign/campaign";
import Swap from "../../pages/swap/swap";
// css
import "./dashboard.css";

export default class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				<div className="header">
					<NavBar />
				</div>
				<div className="left-nav">
					<ul className="nav">
						<li className="route-li">
							{" "}
							<Link className="left-route" to="dashboard/profile">
								Profile
							</Link>
						</li>
						<li className="route-li">
							<Link className="left-route" to="dashboard/verify">
								Verify
							</Link>
						</li>
						<li className="route-li">
							<Link className="left-route" to="dashboard/dapps">
								Dapps
							</Link>
						</li>
						<li className="route-li">
							<Link className="left-route" to="dashboard/campaign">
								Campaign
							</Link>
						</li>
						<li className="route-li">
							<Link className="left-route" to="dashboard/swap">
								Swap
							</Link>
						</li>
					</ul>
				</div>
				<div className="right-content">
					<Routes>
						<Route path="/dashboard/profile" element={<Profile />} />
						<Route path="/dashboard/verify" element={<Verify />} />
						<Route path="/dashboard/dapps" element={<Dapps />} />
						<Route path="/dashboard/campaign" element={<Campaign />} />
						<Route path="/dashboard/swap" element={<Swap />} />
					</Routes>
          {/* <Outlet></Outlet> */}
				</div>
			</div>
		);
	}
}
