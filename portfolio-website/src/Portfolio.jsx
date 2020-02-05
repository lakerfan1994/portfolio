import React from 'react';
import './Portfolio.css';
import ForTheHuntPic from './homescreen-screenshot.png';
import BasketballPic from './basketball-concordance.png';
import InnerCircle from './innerCircle.png';






class Portfolio extends React.Component {
	constructor(){
		super();
		this.state = {

		}
	}


	render(){
		return(
			<div className = 'portfolioPage'>
				<a href='https://afternoon-dusk-20040.herokuapp.com/'>
				<div className = 'card'>
					<img src = {ForTheHuntPic} className = 'cardImg' />	
					<div className='cardText'>
						<h2>For the Hunt!</h2>
						<p>A simple application designed to help the user track their job search by keeping track of their interviews and meetups. 
						This application was my first dive into backend programming utilizing databases. It uses MongoDB and Express for both the storage of 
						all data as well as user authentication</p>
					</div>
				</div>
				</a>	
				<a href='https://infinite-taiga-42293.herokuapp.com/'>
				<div className='card'>
					<img src={BasketballPic} className='cardImg' />
					<div className='cardText'>
						<h2>The Basketball Concordance</h2>
						<p>A Wikipedia clone that aims to allow users who sign up to create and edit pages related to different basketball topics. This application was the first application I made that utilized React as its frontend. It contains both frontend and backend
						authentication as well as a backend that also utilizes MongoDB for the database and Express for backend handling. </p>
					</div>
				</div>
				</a>
				<a href='https://cryptic-beyond-79410.herokuapp.com/'>
				<div className='card'>
					<img src={InnerCircle} className='cardImg' />
					<div className = 'cardText'>
						<h2>Inner Circle</h2>
						<p>A Wikipedia clone that aims to allow users who sign up to create and edit pages related to different basketball topics. This application was the first application I made that utilized React as its frontend. It contains both frontend and backend
						authentication as well as a backend that also utilizes MongoDB for the database and Express for backend handling. </p>
					</div>
				</div>
				</a>
			</div>



		);
	}
}

export default Portfolio;