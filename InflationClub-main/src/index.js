import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header, Dapps, Poster, Team } from "./containers/index.js";
import Dashboard from "./containers/dashboard/dashboard.jsx";
import Verify from "./pages/verify/verify.jsx"
// ReactDOM.render(
//     <App />,
//   document.getElementById('root')
// );

ReactDOM.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/dapps" element={<Dapps />} />
			<Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/verify" element={<Verify />} />
			{/* <Route path="/dashboard" element={<Team />} /> */}
			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
