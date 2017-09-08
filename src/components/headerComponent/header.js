import React from "react";

class Header extends Component {
	render() {
		return (
			<header>

			<div className="logo">
				How To Draw
			</div>

				<nav>
					<ul>
						<li className="first">
							<a href="#">Home</a>
						</li>
						<li>
							<a href="./DrawingVideos.js">DrawingVideos</a>
						</li>
						<li>
							<a href="./Drawings.js">Drawings</a>
						</li>
						<li>
							<a href="./Inspiration.js">Inspiration</a>
						</li>
					</ul>
				</nav>		

			</header>	
		);
	}
}

export default Header;