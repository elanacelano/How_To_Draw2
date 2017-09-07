import React from "react";

export default class Header extends React.Component {
	render() {
		return (
			<header>

			<div className="App">
				How To Draw
			</div>

				<nav>
					<ul>
						<li className="first">
							<a href="#">Home</a>
						</li>
						<li>
							<a href="#">DrawingVideos</a>
						</li>
						<li>
							<a href="#"></a>
						</li>
					</ul>
				</nav>		

			</header>	
		);
	}
}

export default Header;