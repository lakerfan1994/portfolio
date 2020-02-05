import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';
import './MainPage.css';
import Logo from './LogoMakr_2ezPuQ.png';
import About from './About';
import Portfolio from './Portfolio';
import Github from './getInTouch/GitHub_Logo_White.png';
import LinkedIn from './getInTouch/LI-Logo.png';


class MainPage extends React.Component {
	constructor() {
		super();
		this.state = {

		};
	}


	render() {
		return(
			<div className='main-page'>
				<nav>
					<div className='flex-2 img-holder'>
						<img src={Logo} alt='branding picture' className='logo' />
					</div>
					<div className=' flex-1 link-holder'>
						<Link to='/about'>About</Link>
						<Link to='/portfolio'>Portfolio</Link>
					</div>
				</nav>
				<div className='typewriter'>	
					<h1 className='white-text'>Chukwuka Okonkwo Aguolu</h1>
				</div>
				<Switch>
					<Route path='/about' component={About} />
					<Route path='/portfolio' component={Portfolio} /> 
				</Switch>
				<div>
					<h2 className='white-text'>Get in touch with me!</h2>
					<div>
						<img src={Github} />
					</div>
				</div>
		
			</div>)
	}
}

export default MainPage;