import Reast, from "react";
import helpers from "./src/utils/helpers";
import "bootstrap/dist/css/bootstrap.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class Homepage extends Component {
	render() {
		return (
			<div className="container-fluid">

				<h1>
					Home
				</h1>	
		<div>	
		<form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" 
        	class="sr-only">Email address
		       	</label>
		        <input type="email" 
		        	id="inputEmail" 
		        		class="form-control" 
		        			placeholder="Email address" 
		        				required="" 
		        					autofocus="">
		        
		        <label for="inputPassword" 
		        	class="sr-only">Password
		        </label>
		        <input type="password" 
		        	id="inputPassword" 
		        		class="form-control" 
		        			placeholder="Password" 
		        				required="">
		       
		        <div class="checkbox">
		          <label>
		            <input type="checkbox" 
		            	value="remember-me"> Remember me
		          </label>
		        </div>
		        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
		      </form>
		      </div>
			</div>		
		);
	}
}

export default Homepage;