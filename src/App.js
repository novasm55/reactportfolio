import React, {useState} from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Portfolio from "./components/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";
import { Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "./App.css";

library.add(fab);

function App() {
	const [currentTab, setCurrentTab] = useState("about");

	const renderTab = () => {
		switch (currentTab) {
			case "about":
				return <About />;
			case "portfolio":
				return <Portfolio />;
			case "contact":
				return <Contact />;
			case "resume":
				return <Resume />;
			default:
				return null;
		}
	};

	return (
		<div>
			<Container fluid className="p-0">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab} className="p-0 m-0"></Header>
			</Container>
			<Container fluid>
				<main>{renderTab()}</main>
			</Container>
			<Container fluid>
				<Footer />
			</Container>
		</div>
	);
}

export default App;