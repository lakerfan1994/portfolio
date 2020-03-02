import React from 'react';
import './About.css';






class About extends React.Component {
	constructor(){
		super();
		this.state = {

		}
	}


	render(){
		return(
			<div className='about-container'>
				<div className = 'mainframe'>
					<div className='white'>
						<div className='body flex-2 second'>
							<p>Kedu means 'Hello' in Igbo. Thank you for visiting my website!! My name is 
							Chukwuka Okonkwo Aguolu, but you can call me 'Chuck'. Read more to find out more
							about me!!</p>
						</div>
						<div className='description flex-1 first'>
							<strong>Kedu  👋</strong>
						</div>
					</div>
					<div className ='black'>
						<div className='description flex-1'>
								<strong>Childhood 🧒 </strong>
						</div>
						<div className='body flex-2'>
							<p>As a child I have always been interested in learning how things work. I grew up during the time where computers were evolving from the 
							clunky cathode desktops to what we have now, and naturally, my interests veered into technology and its inner workings. I built my own 
							personal computer when I was in middle school and I have always been interested in subjects such as math and physics </p>
						</div>
					</div>
					<div className ='white'>
						<div className='body flex-2 second'>
							<p>I first really became passionate about Web development while I was at college. I was an accounting major and was friends with a 
							few people who were computer science majors. I watched as they learned how to create amazing apps, join innovative startups, and become 
							outstanding developers, and realized that programming was my calling. </p>
							<p>I then decided to teach myself how to code, and since that time with the help of pursuit.org and a few mentors, I have learned a lot of interesting
							stuff related to front-end and back-end development. I learned about NodeJS, ExpressJS, MongoDB, jQuery, React, Redux, Mocha, Chai, Enzyme, Jest, HTML, CSS,  responsive design, progressive enhancement, graceful degradation, a11y, mobile-first design, continuous integration, code transpiling, module bundling, RESTful architecture, API's and more.</p>
						</div>
						<div className='description flex-1 first'>
								<strong>Web Developer 👨🏿‍💻</strong>
						</div>
					</div>
					<div className ='black'>
						<div className='description flex-1'>
								<strong>Interests 🏀🎲 </strong>
						</div>
						<div className='body flex-2'>
							<p>In my personal life, I am a huge (huge!) fan of nba basketball, specifically the Los Angeles Lakers. I also enjoy video games and board games, and a fun fact about me would be that I play a card game called Hearthstone at a competitive level.</p>
						</div>
					</div>


				</div>
			</div>

		);
	}
}

export default About;