import React, from "react";

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
							<a href="#">DrawingVideos</a>
						</li>
						<li>
							<a href="#">Tutorials</a>
						</li>
						<li>
							<a href="#">Pictures</a>
						</li>
					</ul>
				</nav>		

			</header>	
		);
	}
}

export default Header;