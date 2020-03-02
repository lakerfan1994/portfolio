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
						<Link to='/'>Ⓒ</Link>
					</div>
					<div className=' flex-1 link-holder'>
						<Link to='/about'>About</Link>
					</div>
					<div className=' flex-1 link-holder'>
						<Link to='/portfolio'>Portfolio</Link>
					</div>
				</nav>
				<div className='typewriter'>	
					<h1 className='white-text'>Chukwuka Okonkwo-Aguolu</h1>
				</div>
				<Switch>
					<Route path='/about' component={About} />
					<Route path='/portfolio' component={Portfolio} /> 
				</Switch>
				<div className='contact'>
					<h2 className='white-text'>Get in touch with me!</h2>
					<div className='contact-methods'>
						<a href='https://www.linkedin.com/in/chukwuka-okonkwo-aguolu-a75a2a92/'><i class="fab fa-linkedin fa-3x"></i></a>
						<a href='https://github.com/lakerfan1994'><i class="fab fa-github fa-3x"></i></a>
						<a href='mailto:chukwukaaguolu@gmail.com?subject=Business proposal'><i class="fas fa-envelope-open-text fa-3x"></i></a>
					</div>
				</div>
		
			</div>)
	}
}

//<img src={Logo} alt='branding picture' className='logo' />

export default MainPage;