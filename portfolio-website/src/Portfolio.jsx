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
				
				<div className = 'card'>
					<img src = {ForTheHuntPic} className = 'cardImg' />	
					<div className='cardText'>
						<h2>For the Hunt!</h2>
						<p className='cardText'>A simple application designed to help the user track their job search by keeping track of their interviews and meetups. 
						This application was my first dive into backend programming utilizing databases. It uses MongoDB and Express for both the storage of 
						all data as well as user authentication</p>
						<div className='button-container'>
							<a href='https://afternoon-dusk-20040.herokuapp.com/'><button>Check it out!</button></a>
							<a href='https://github.com/lakerfan1994/For-the-Hunt-'><button>See the code</button></a>
						</div>
					</div>
				</div>
				<div className='card'>
					<img src={BasketballPic} className='cardImg' />
					<div className='cardText'>
						<h2>The Basketball Concordance</h2>
						<p className='cardText'>A Wikipedia clone that aims to allow users who sign up to create and edit pages related to different basketball topics. This application was the first application I made that utilized React as its frontend. It contains both frontend and backend
						authentication as well as a backend that also utilizes MongoDB for the database and Express for backend handling. </p>
						<div className='button-container'>
							<a href='https://infinite-taiga-42293.herokuapp.com/'><button>Check it out!</button></a>
							<a href='https://github.com/lakerfan1994/basketball-concordance'><button>See the code</button></a>
						</div>
					</div>
				</div>
				<div className='card'>
					<img src={InnerCircle} className='cardImg' />
					<div className = 'cardText'>
						<h2>Inner Circle</h2>
						<p className='cardText'>A social media application that allows users to form select groups with other users based on shared interests. Currently the only functionality is that users can share pictures with others and make posts but plans are in place to expand this. I worked on this website with
						a group of 3 and was mostly responsible for structuring the entire backend. I did this utilzing SQL for database needs and Express and Node.js for my backend handling.
						</p>
						<div className='button-container'>
							<a href='https://cryptic-beyond-79410.herokuapp.com/'><button>Check it out!</button></a>
							<a href='https://github.com/hupaulcamacho/inner-circle-app/tree/herokubranch'><button>See the code</button></a>
						</div>
					</div>
				</div>
			</div>



		);
	}
}

export default Portfolio;