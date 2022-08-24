import React, { Component } from "react";
// import ceopic from '../../assets/ceo.png'
// import { Navbar} from '../../components';

import "./verify.css";

// import { Issuer } from 'openid-client';

// const googleIssuer = await Issuer.discover('https://accounts.google.com');
// console.log('Discovered issuer %s %O', googleIssuer.issuer, googleIssuer.metadata);

const underway_list = [
	{ id: 1, name: "Steam", link: "/dapps" },
	{ id: 2, name: "Twitter", link: "/verify" },
	{ id: 3, name: "Discord", link: "/dapps" },
	{ id: 3, name: "Telegram", link: "/dapps" },
];

const comming_soon_list = [
	{ id: 1, name: "House property" },
	{ id: 2, name: "Stock" },
	{ id: 3, name: "Car property" },
	{ id: 3, name: "WEB2.0" },
];

class verify extends Component {
	componentDidMount() {}

	render() {
		return (
			<div className="verify_main_div">
				{/* <Navbar /> */}
				{/* <div className="gradient-verify"></div> */}

				<div className="verify-wrap">
					<div className="underway">
						<h1 className="underway-t1">UNDERWAY</h1>
						<div className="underway-dash"></div>
						<ul>
							{underway_list.map((item) => (
								<li key={item.name} className="underway-icon">
									{item.name}{" "}
									<div className="connect">
										<a className="connect-item" href={item.link}>
											CONNECT
										</a>
									</div>{" "}
								</li>
							))}
						</ul>
					</div>

					<div className="comming_soon">
						<h1 className="comming_soon-t1">COMMING SOON</h1>
						<div className="comming_soon-dash"></div>
						<div className="verify_id">
							<span>You can verify your ID here</span>
						</div>
						<ul>
							{comming_soon_list.map((item) => (
								<li key={item.name} className="comming_soon-icon">
									{item.name}{" "}
									<div className="connect">
										{" "}
										<span>CONNECT</span>{" "}
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default verify;
