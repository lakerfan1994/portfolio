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
				<h1>Kedu  👋</h1>
				<div className = 'mainframe'>
					<div className='white'>
						<p>Kedu means 'Hello' in Igbo. Thank you for visiting my website!! My name is 
						Chukwuka Okonkwo Aguolu, but you can call me 'Chuck'. Read more to find out more
						about me!!</p>
					</div>
					<div className ='black'>
						<div className='description flex-1'>
								<strong>Childhood 🧒 </strong>
						</div>
						<div className='body flex-2'>
							<p>ljkldsajk ljl sa j l k s ajlkasj  sasask  ddasas Kedu means 'Hello' in Igbo. Thank you for visiting my website!! My name is 
						Chukwuka Okonkwo Aguolu, but you can call me 'Chuck'. Read more to find out more
						about me!! </p>
						</div>
					</div>
					<div className ='white'>
						<div className='body flex-2'>
							<p>ljkldsajk ljl sa j l k s ajlkasj  sasask  ddasas Kedu means 'Hello' in Igbo. Thank you for visiting my website!! My name is 
								Chukwuka Okonkwo Aguolu, but you can call me 'Chuck'. Read more to find out more
								about me!! </p>
						</div>
						<div className='description flex-1'>
								<strong>Web Developer 👨🏿‍💻</strong>
						</div>
					</div>
					<div className ='black'>
						<div className='description flex-1'>
								<strong>Interests 🏀🎲 </strong>
						</div>
						<div className='body flex-2'>
							<p>ljkldsajk ljl sa j l k s ajlkasj  sasask  ddasas Kedu means 'Hello' in Igbo. Thank you for visiting my website!! My name is 
						Chukwuka Okonkwo Aguolu, but you can call me 'Chuck'. Read more to find out more
						about me!! </p>
						</div>
					</div>


				</div>
			</div>

		);
	}
}

export default About;